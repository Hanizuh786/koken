import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, company, organizationId, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact KOKEN – HNB Manufacturer, Ras Al Khaimah",
  description:
    "Contact KOKEN International FZ-LLC at Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE. Email sales@koken-inc.cn or WhatsApp +971 56 505 3048.",
  path: "/contact",
});

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    name: `Contact ${company.name}`,
    mainEntity: { "@id": organizationId },
  };
  return (
    <main>
      <JsonLd data={schema} />
      <section className="pageHero sectionPad">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
        <p className="eyebrow">Contact and location</p>
        <h1>Contact KOKEN in the UAE.</h1>
        <div className="answerBox">
          <p>
            Email <a href={`mailto:${company.email}`}>{company.email}</a> or WhatsApp{" "}
            <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">{company.telephoneDisplay}</a>. KOKEN International
            FZ-LLC is located at {company.address.streetAddress}, {company.address.addressLocality}, {company.address.countryName}.
          </p>
        </div>
      </section>
      <section className="sectionPad">
        <div className="contentGrid">
          <article className="contentCard">
            <h2>Sales enquiries</h2>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <br />
              <a href={`mailto:${company.infoEmail}`}>{company.infoEmail}</a>
            </p>
            <p>For pricing, send a <Link href="/quote">request for quote</Link> with your market, volume and packaging needs.</p>
          </article>
          <article className="contentCard">
            <h2>Phone and WhatsApp</h2>
            <p>
              <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">{company.telephoneDisplay}</a>
            </p>
            <p>
              Follow <a href={company.linkedin} target="_blank" rel="noopener noreferrer">KOKEN on LinkedIn</a>.
            </p>
          </article>
          <article className="contentCard">
            <h2>Address</h2>
            <address>
              {company.name}
              <br />
              {company.address.streetAddress}
              <br />
              {company.address.addressLocality}, {company.address.countryName}
            </address>
          </article>
        </div>
      </section>
      <section className="sectionPad">
        <div className="sectionHead">
          <p className="eyebrow">Map</p>
          <h2>KOKEN location in Ras Al Khaimah</h2>
        </div>
        <iframe
          className="mapEmbed"
          src={mapSrc}
          title="Map showing KOKEN International FZ-LLC in Al Hamra Industrial Zone-FZ, Ras Al Khaimah"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
