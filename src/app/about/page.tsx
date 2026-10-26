import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { getProductsByCategory } from "@/data/products";
import { absoluteUrl, company, contentUpdated, organizationId, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "About KOKEN International FZ-LLC, UAE HNB Maker",
  description:
    "KOKEN International FZ-LLC is the official patent and licence holder for HNB production in the UAE, manufacturing granules and HNB sticks in Ras Al Khaimah.",
  path: "/about",
});

export default function AboutPage() {
  const tobaccoCount = getProductsByCategory("tobacco").length;
  const herbalCount = getProductsByCategory("herbal").length;
  const facts: [string, React.ReactNode][] = [
    ["Legal name", company.name],
    ["Status", "Official patent and licence holder for HNB (heat-not-burn) production in the UAE"],
    ["Headquarters", `${company.address.streetAddress}, ${company.address.addressLocality}, ${company.address.countryName}`],
    ["Core capabilities", "HNB granules manufacturing, heated tobacco sticks, tobacco-free herbal sticks, OEM and private-label programmes"],
    ["Product range", `${tobaccoCount} tobacco stick flavours and ${herbalCount} herbal stick flavours (0 nicotine, no tobacco extract)`],
    ["Customers", "Brand owners, importers, wholesalers, retail chain buyers and OEM clients (B2B only)"],
    ["Markets served", "Worldwide, subject to each destination market's regulations"],
    ["Sales contact", <a key="email" href={`mailto:${company.email}`}>{company.email}</a>],
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl("/about"),
    name: `About ${company.name}`,
    dateModified: contentUpdated,
    mainEntity: { "@id": organizationId },
  };
  return (
    <main>
      <JsonLd data={schema} />
      <section className="pageHero sectionPad">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
        <p className="eyebrow">Company profile</p>
        <h1>About KOKEN International FZ-LLC.</h1>
        <div className="answerBox">
          <p>
            KOKEN International FZ-LLC is the official patent and licence holder for HNB (heat-not-burn) production in the
            United Arab Emirates. From Al Hamra Industrial Zone-FZ in Ras Al Khaimah, KOKEN manufactures HNB granules and
            sticks and supplies bulk, OEM and private-label programmes to business buyers worldwide.
          </p>
        </div>
      </section>
      <section className="sectionPad">
        <div className="sectionHead">
          <p className="eyebrow">Key facts</p>
          <h2>KOKEN at a glance</h2>
        </div>
        <table className="factsTable">
          <tbody>
            {facts.map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="sectionPad">
        <div className="sectionHead">
          <p className="eyebrow">What we do</p>
          <h2>From granules to branded packs</h2>
          <p>KOKEN brings product selection, granules manufacturing and brand development into one B2B conversation.</p>
        </div>
        <div className="contentGrid">
          <article className="contentCard">
            <h3>Granules manufacturing</h3>
            <p>HNB granules are produced in the UAE as the base material for KOKEN&apos;s tobacco and herbal stick programmes.</p>
          </article>
          <article className="contentCard">
            <h3>Tobacco and herbal sticks</h3>
            <p>
              A range of <Link href="/tobacco-sticks">{tobaccoCount} heated tobacco stick flavours</Link> and{" "}
              <Link href="/herbal-sticks">{herbalCount} tobacco-free herbal stick flavours</Link> for authorised distribution.
            </p>
          </article>
          <article className="contentCard">
            <h3>OEM and private label</h3>
            <p>
              <Link href="/custom-branding">Private-label programmes</Link> covering flavour selection, packaging direction and bulk
              supply under your brand.
            </p>
          </article>
          <article className="contentCard">
            <h3>Responsible B2B supply</h3>
            <p>KOKEN works only with businesses making lawful adult-market enquiries; availability and labelling depend on local regulations.</p>
          </article>
        </div>
      </section>
      <section className="sectionPad">
        <div className="sectionHead">
          <p className="eyebrow">Next step</p>
          <h2>Talk to the KOKEN sales team</h2>
          <p>
            Read the <Link href="/faq">HNB manufacturing FAQ</Link>, find us on the <Link href="/contact">contact page</Link>, or send a
            structured enquiry.
          </p>
        </div>
        <div className="heroButtons">
          <Link className="linkButton primary" href="/quote">Request a manufacturing quote</Link>
          <a className="linkButton light" href={company.linkedin} target="_blank" rel="noopener noreferrer">KOKEN on LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
