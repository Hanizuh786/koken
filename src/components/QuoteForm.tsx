"use client";
import { FormEvent, useState } from "react";
import { useRfq } from "./RfqProvider";
export default function QuoteForm() {
  const { items, removeItem, updateQuantity, clear } = useRfq();
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [notice, setNotice] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("loading"); setNotice("");
    const payload = { ...Object.fromEntries(new FormData(e.currentTarget).entries()), lineItems: items };
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      const data = await res.json(); if (!res.ok) throw new Error(data.message || 'Unable to send quote request.');
      setStatus('success'); setNotice('Your quote request has been sent to sales@koken-inc.cn.'); clear(); e.currentTarget.reset();
    } catch(err) { setStatus('error'); setNotice(err instanceof Error ? err.message : 'Unable to send quote request.'); }
  }
  return <div className="quoteGrid"><section className="quoteList"><h2>Selected quote items</h2>{items.length === 0 ? <p>No products selected yet. Add products from any product page.</p> : items.map(item => <div className="quoteItem" key={item.slug}><div><strong>{item.name}</strong><span>{item.categoryLabel}</span></div><input type="number" min="1" value={item.quantity} onChange={e=>updateQuantity(item.slug, Number(e.target.value))}/><button onClick={()=>removeItem(item.slug)}>Remove</button></div>)}</section><form className="contactForm" onSubmit={submit}><input name="website" className="hideField" tabIndex={-1}/><div className="formGrid"><label>Full name<input name="fullName" required/></label><label>Company name<input name="companyName" required/></label><label>Country / region<input name="country" required/></label><label>Email address<input type="email" name="email" required/></label><label>WhatsApp number<input name="whatsapp"/></label><label>Business type<select name="businessType" required defaultValue=""><option value="" disabled>Select type</option><option>Brand owner</option><option>Importer</option><option>Wholesaler</option><option>Retail chain buyer</option><option>OEM client</option><option>Other business enquiry</option></select></label><label>Estimated bulk volume<input name="estimatedVolume" placeholder="Monthly or annual volume"/></label><label>Target market<input name="targetMarket" placeholder="Country or region"/></label></div><label>Message<textarea name="message" rows={5} required placeholder="Tell us about your required products, quote volume, packaging or OEM requirement"/></label><label className="consent"><input type="checkbox" name="consent" value="accepted" required/>I confirm this is a lawful adult-market B2B enquiry.</label><button className="submitButton" disabled={status==='loading'}>{status==='loading'?'Sending quote request...':'Send quote request'}</button>{notice && <p className={`formStatus ${status}`}>{notice}</p>}</form></div>
}
