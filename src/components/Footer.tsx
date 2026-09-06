import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footerPro">
      <div className="footerTop">
        <div>
          <img
            src="/images/koken-logo.png"
            alt="KOKEN International FZ-LLC logo"
          />
          <p>
            KOKEN International FZ-LLC is the official patent and licence holder
            for HNB production in the UAE, supporting granules manufacturing,
            bulk supply, OEM and private-label programmes for global B2B buyers.
          </p>
        </div>
        <div>
          <h3>Product categories</h3>
          <Link href="/tobacco-sticks">Tobacco sticks</Link>
          <Link href="/herbal-sticks">Herbal sticks</Link>
          <Link href="/devices">Devices</Link>
          <Link href="/custom-branding">Custom branding</Link>
        </div>
        <div>
          <h3>Business enquiries</h3>
          <Link href="/quote">Request manufacturing quote</Link>
          
          <a href="mailto:sales@koken-inc.cn">sales@koken-inc.cn</a>
          <a href="https://wa.me/971565053048">+971 56 505 3048</a>
          <a
            href="https://www.linkedin.com/company/kokenstick?originalSubdomain=ae"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <h3>Location</h3>
          <p>
            Al Hamra Industrial Zone-FZ
            <br />
            Ras Al Khaimah, United Arab Emirates
          </p>
          <p>
            KOKEN International FZ-LLC<br />
            UAE-based HNB production and granules manufacturing for lawful
            international B2B enquiries.
          </p>
        </div>
      </div>
      <div className="footerBottom">
        <span>© 2026 KOKEN International FZ-LLC. All rights reserved.</span>
        <span>
          Product availability, labelling, compliance and import requirements
          vary by jurisdiction.
        </span>
      </div>
    </footer>
  );
}
