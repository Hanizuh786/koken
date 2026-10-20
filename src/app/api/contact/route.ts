import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Every quote enquiry is delivered to all three inboxes.
const RECIPIENTS = ["sales@koken-inc.cn", "info@koken-inc.cn", "hanya@koken-inc.cn"];
function clean(value: unknown) { return String(value || "").replace(/[<>]/g, "").trim(); }

// Reads SMTP settings; failures are logged to Vercel's runtime logs (never the password) so a
// misconfiguration can be diagnosed without exposing details to site visitors.
function smtpConfig() {
  const host = process.env.SMTP_HOST, user = process.env.SMTP_USER, pass = process.env.SMTP_PASS;
  const missing = [["SMTP_HOST", host], ["SMTP_USER", user], ["SMTP_PASS", pass]].filter(([, v]) => !v).map(([k]) => k);
  const port = Number(process.env.SMTP_PORT || 465);
  // Port 465 uses implicit TLS; 587/25 upgrade with STARTTLS. Infer from the port when SMTP_SECURE is unset.
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  // Many providers reject mail whose From differs from the signed-in account, so default to SMTP_USER.
  const from = process.env.SMTP_FROM || user;
  return { missing, host, port, secure, user, pass, from };
}

export async function POST(req: Request) {
 try {
  const body = await req.json();
  if (body.website) return NextResponse.json({ success: true, message: "Received." });
  const fullName=clean(body.fullName), companyName=clean(body.companyName), country=clean(body.country), email=clean(body.email), whatsapp=clean(body.whatsapp), businessType=clean(body.businessType), estimatedVolume=clean(body.estimatedVolume), targetMarket=clean(body.targetMarket), message=clean(body.message), consent=clean(body.consent);
  const lineItems = Array.isArray(body.lineItems) ? body.lineItems : [];
  if (!fullName || !companyName || !country || !email || !message || consent !== "accepted") return NextResponse.json({ success:false, message:"Please complete all required fields." }, { status:400 });
  const smtp = smtpConfig();
  if (smtp.missing.length) {
    console.error(`[contact] SMTP not configured; missing: ${smtp.missing.join(", ")}`);
    return NextResponse.json({ success:false, message:"Unable to send quote request. Please email sales@koken-inc.cn directly." }, { status:500 });
  }
  const transporter = nodemailer.createTransport({ host: smtp.host, port: smtp.port, secure: smtp.secure, auth: { user: smtp.user, pass: smtp.pass }, connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000 });
  const itemHtml = lineItems.length ? lineItems.map((item:any)=>`<li>${clean(item.name)} - ${clean(item.categoryLabel)} - Qty/ref: ${clean(item.quantity)}</li>`).join("") : "<li>No selected catalogue items. General enquiry.</li>";
  await transporter.sendMail({ from:`"KOKEN Website RFQ" <${smtp.from}>`, to: RECIPIENTS, replyTo: email, subject:`New KOKEN RFQ from ${companyName}`, html:`<div style="font-family:Arial,sans-serif;color:#0c2147;line-height:1.6"><h2>New KOKEN request-to-quote enquiry</h2><p><strong>Name:</strong> ${fullName}</p><p><strong>Company:</strong> ${companyName}</p><p><strong>Country:</strong> ${country}</p><p><strong>Email:</strong> ${email}</p><p><strong>WhatsApp:</strong> ${whatsapp || "Not provided"}</p><p><strong>Business type:</strong> ${businessType || "Not provided"}</p><p><strong>Estimated bulk volume:</strong> ${estimatedVolume || "Not provided"}</p><p><strong>Target market:</strong> ${targetMarket || "Not provided"}</p><h3>Selected products</h3><ul>${itemHtml}</ul><h3>Message</h3><p>${message.replace(/\n/g,"<br/>")}</p></div>` });
  return NextResponse.json({ success:true, message:"Quote request sent successfully." });
 } catch (error) {
  const e = error as { code?: string; responseCode?: number; command?: string; response?: string; message?: string };
  const smtp = smtpConfig();
  console.error(`[contact] Failed to send quote email ${JSON.stringify({ code: e.code, responseCode: e.responseCode, command: e.command, response: e.response, message: e.message, host: smtp.host, port: smtp.port, secure: smtp.secure, user: smtp.user, from: smtp.from })}`);
  return NextResponse.json({ success:false, message:"Unable to send quote request. Please email sales@koken-inc.cn directly." }, { status:500 });
 }
}
