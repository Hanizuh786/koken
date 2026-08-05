import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
function clean(value: unknown) { return String(value || "").replace(/[<>]/g, "").trim(); }
export async function POST(req: Request) {
 try {
  const body = await req.json();
  if (body.website) return NextResponse.json({ success: true, message: "Received." });
  const fullName=clean(body.fullName), companyName=clean(body.companyName), country=clean(body.country), email=clean(body.email), whatsapp=clean(body.whatsapp), businessType=clean(body.businessType), estimatedVolume=clean(body.estimatedVolume), targetMarket=clean(body.targetMarket), message=clean(body.message), consent=clean(body.consent);
  const lineItems = Array.isArray(body.lineItems) ? body.lineItems : [];
  if (!fullName || !companyName || !country || !email || !message || consent !== "accepted") return NextResponse.json({ success:false, message:"Please complete all required fields." }, { status:400 });
  const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 465), secure: process.env.SMTP_SECURE === "true", auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
  const itemHtml = lineItems.length ? lineItems.map((item:any)=>`<li>${clean(item.name)} - ${clean(item.categoryLabel)} - Qty/ref: ${clean(item.quantity)}</li>`).join("") : "<li>No selected catalogue items. General enquiry.</li>";
  await transporter.sendMail({ from:`"KOKEN Website RFQ" <${process.env.SMTP_FROM || "sales@koken-inc.cn"}>`, to: process.env.CONTACT_TO || "sales@koken-inc.cn", replyTo: email, subject:`New KOKEN RFQ from ${companyName}`, html:`<div style="font-family:Arial,sans-serif;color:#0c2147;line-height:1.6"><h2>New KOKEN request-to-quote enquiry</h2><p><strong>Name:</strong> ${fullName}</p><p><strong>Company:</strong> ${companyName}</p><p><strong>Country:</strong> ${country}</p><p><strong>Email:</strong> ${email}</p><p><strong>WhatsApp:</strong> ${whatsapp || "Not provided"}</p><p><strong>Business type:</strong> ${businessType || "Not provided"}</p><p><strong>Estimated bulk volume:</strong> ${estimatedVolume || "Not provided"}</p><p><strong>Target market:</strong> ${targetMarket || "Not provided"}</p><h3>Selected products</h3><ul>${itemHtml}</ul><h3>Message</h3><p>${message.replace(/\n/g,"<br/>")}</p></div>` });
  return NextResponse.json({ success:true, message:"Quote request sent successfully." });
 } catch { return NextResponse.json({ success:false, message:"Unable to send quote request. Please email sales@koken-inc.cn directly." }, { status:500 }); }
}
