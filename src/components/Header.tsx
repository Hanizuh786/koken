"use client";
import Link from "next/link";
import { useRfq } from "./RfqProvider";
const whatsappUrl = "https://wa.me/971565053048?text=Hello%20KOKEN%20team%2C%20I%20would%20like%20to%20request%20a%20bulk%20manufacturing%20quote.";
export default function Header() {
  const { count } = useRfq();
  return <header className="navShell"><Link href="/" className="brand"><img src="/images/koken-logo.png" alt="KOKEN International FZ-LLC logo"/></Link><nav><Link href="/tobacco-sticks">Tobacco sticks</Link><Link href="/herbal-sticks">Herbal sticks</Link><Link href="/devices">Devices</Link><Link href="/custom-branding">Custom branding</Link><Link href="/quote">Quote list ({count})</Link></nav><div className="navActions"><a className="linkButton light" href={whatsappUrl}>WhatsApp</a><Link className="linkButton primary" href="/quote">Request quote</Link></div></header>
}
