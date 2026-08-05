"use client";
import { useEffect, useState } from "react";
export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (localStorage.getItem("koken_age_verified") !== "true") setVisible(true); }, []);
  if (!visible) return null;
  return <div className="ageOverlay" role="dialog" aria-modal="true"><div className="ageCard"><img src="/images/koken-logo.png" alt="KOKEN International FZ-LLC logo"/><p className="eyebrow">Age verification</p><h2>Adult product information</h2><p>This website contains adult-market B2B product information. By entering, you confirm that you are 18 years of age or older and accessing this information for lawful business enquiry purposes.</p><div className="ageActions"><button onClick={()=>{localStorage.setItem("koken_age_verified","true");setVisible(false)}}>I am 18 or older</button><button className="ghost" onClick={()=>{location.href="https://www.google.com"}}>Exit website</button></div></div></div>
}
