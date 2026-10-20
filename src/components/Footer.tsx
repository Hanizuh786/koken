import Link from "next/link";
import { company } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="footerPro">
      <div className="footerTop">
        <div>
          <img
            src="/images/koken-logo.webp"
            width={640}
            height={561}
            loading="lazy"
            decoding="async"
            alt="KOKEN International FZ-LLC logo"
          />
          <p>
            KOKEN International FZ-LLC is the official patent and licence holder
            for HNB production in the UAE, supporting granules manufacturing,
            bulk supply, OEM and private-label programmes for global B2B buyers.
          </p>
        </div>
        <div>
          <h2>Product categories</h2>
          <Link href="/tobacco-sticks">Tobacco sticks</Link>
          <Link href="/herbal-sticks">Herbal sticks</Link>
          <Link href="/devices">HNB devices</Link>
          <Link href="/custom-branding">OEM and private label</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about">About KOKEN</Link>
          <Link href="/blog">HNB blog and guides</Link>
          <Link href="/faq">HNB manufacturing FAQ</Link>
          <Link href="/glossary">HNB glossary</Link>
          <Link href="/contact">Contact and location</Link>
        </div>
        <div>
          <h2>Business enquiries</h2>
          <Link href="/quote">Request manufacturing quote</Link>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">{company.telephoneDisplay}</a>
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
            KOKEN on LinkedIn
          </a>
        </div>
        <div>
          <h2>Location</h2>
          <address>
            {company.name}
            <br />
            {company.address.streetAddress}
            <br />
            {company.address.addressLocality}, {company.address.countryName}
          </address>
        </div>
      </div>
      <div className="footerBottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>
          Product availability, labelling, compliance and import requirements
          vary by jurisdiction.
        </span>
      </div>
    </footer>
  );
}
