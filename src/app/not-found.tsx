import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main>
      <section className="pageHero sectionPad">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This page has moved or no longer exists.</h1>
        <p>Try one of these pages instead, or send the KOKEN team an enquiry and we&apos;ll point you in the right direction.</p>
        <div className="heroButtons">
          <Link className="linkButton primary" href="/">Back to the homepage</Link>
          <Link className="linkButton light" href="/quote">Request a quote</Link>
        </div>
      </section>
      <section className="sectionPad">
        <div className="contentGrid">
          <Link className="contentCard" href="/tobacco-sticks"><h2>Tobacco sticks</h2><p>7 heated tobacco stick flavours.</p></Link>
          <Link className="contentCard" href="/herbal-sticks"><h2>Herbal sticks</h2><p>6 tobacco-free, nicotine-free flavours.</p></Link>
          <Link className="contentCard" href="/custom-branding"><h2>OEM and private label</h2><p>Build your own HNB brand.</p></Link>
          <Link className="contentCard" href="/contact"><h2>Contact KOKEN</h2><p>Email, WhatsApp and location.</p></Link>
        </div>
      </section>
    </main>
  );
}
