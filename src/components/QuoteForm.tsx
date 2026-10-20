"use client";
import { FormEvent, useState } from "react";
import { useRfq } from "./RfqProvider";
import { trackEvent } from "@/lib/analytics";
import { company } from "@/lib/site";

const whatsappLink = (number: string, text: string) => `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

// Builds the WhatsApp message; *text* renders bold in WhatsApp.
function buildMessage(fields: Record<string, string>, items: { name: string; categoryLabel: string; quantity: number }[]) {
  const line = (label: string, value: string) => `${label}: ${value || "Not provided"}`;
  const products = items.length
    ? items.map((item) => `- ${item.name} (${item.categoryLabel}), Qty/ref: ${item.quantity}`).join("\n")
    : "- No catalogue items selected (general enquiry)";
  return [
    "*New KOKEN quote request*",
    "",
    line("Name", fields.fullName),
    line("Company", fields.companyName),
    line("Country", fields.country),
    line("Email", fields.email),
    line("WhatsApp", fields.whatsapp),
    line("Business type", fields.businessType),
    line("Estimated volume", fields.estimatedVolume),
    line("Target market", fields.targetMarket),
    "",
    "*Selected products*",
    products,
    "",
    "*Message*",
    fields.message,
  ].join("\n");
}

export default function QuoteForm() {
  const { items, removeItem, updateQuantity, clear } = useRfq();
  const [sentMessage, setSentMessage] = useState<string | null>(null);
  const [opened, setOpened] = useState<string[]>([]);

  function openWhatsApp(number: string, text: string) {
    window.open(whatsappLink(number, text), "_blank", "noopener,noreferrer");
    setOpened((prev) => (prev.includes(number) ? prev : [...prev, number]));
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Object.fromEntries(Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v).trim()]));
    if (fields.website) return; // honeypot: bots fill the hidden field
    const text = buildMessage(fields, items);
    // Must open synchronously inside the submit click, or browsers treat it as a blocked pop-up.
    setOpened([]);
    openWhatsApp(company.quoteWhatsApp[0].number, text);
    // Best-effort email copy in the background; the WhatsApp message is the primary channel.
    fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...fields, lineItems: items }), keepalive: true }).catch(() => {});
    trackEvent("generate_lead", { form: "quote", method: "whatsapp", items: items.length });
    setSentMessage(text);
    clear();
    form.reset();
  }

  return <div className="quoteGrid"><section className="quoteList"><h2>Selected quote items</h2>{items.length === 0 ? <p>No products selected yet. Add products from any product page.</p> : items.map(item => <div className="quoteItem" key={item.slug}><div><strong>{item.name}</strong><span>{item.categoryLabel}</span></div><input type="number" min="1" value={item.quantity} onChange={e=>updateQuantity(item.slug, Number(e.target.value))}/><button onClick={()=>removeItem(item.slug)}>Remove</button></div>)}</section>
    {sentMessage ? (
      <div className="contactForm whatsappSent" role="status">
        <h2>Almost done: send your request on WhatsApp</h2>
        <p>WhatsApp has opened with your quote request filled in. Press <strong>send</strong> in WhatsApp, then send it to our second sales number too.</p>
        <div className="whatsappSteps">
          {company.quoteWhatsApp.map((contact, index) => (
            <button key={contact.number} type="button" className={`linkButton ${index === 0 ? "light" : "primary"}`} onClick={() => openWhatsApp(contact.number, sentMessage)}>
              {opened.includes(contact.number) ? "✓ " : ""}{index === 0 ? "Open again" : "Send"} to {contact.display}
            </button>
          ))}
        </div>
        <p className="whatsappNote">No WhatsApp? Email the same details to <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        <button type="button" className="textButton" onClick={() => { setSentMessage(null); setOpened([]); }}>Start a new request</button>
      </div>
    ) : (
      <form className="contactForm" onSubmit={submit}><input name="website" className="hideField" tabIndex={-1} autoComplete="off"/><div className="formGrid"><label>Full name<input name="fullName" required/></label><label>Company name<input name="companyName" required/></label><label>Country / region<input name="country" required/></label><label>Email address<input type="email" name="email" required/></label><label>WhatsApp number<input name="whatsapp"/></label><label>Business type<select name="businessType" required defaultValue=""><option value="" disabled>Select type</option><option>Brand owner</option><option>Importer</option><option>Wholesaler</option><option>Retail chain buyer</option><option>OEM client</option><option>Other business enquiry</option></select></label><label>Estimated bulk volume<input name="estimatedVolume" placeholder="Monthly or annual volume"/></label><label>Target market<input name="targetMarket" placeholder="Country or region"/></label></div><label>Message<textarea name="message" rows={5} required placeholder="Tell us about your required products, quote volume, packaging or OEM requirement"/></label><label className="consent"><input type="checkbox" name="consent" value="accepted" required/>I confirm this is a lawful adult-market B2B enquiry.</label><button className="submitButton">Send quote request via WhatsApp</button><p className="whatsappNote">Your request opens in WhatsApp, ready to send to the KOKEN sales team.</p></form>
    )}
  </div>
}
