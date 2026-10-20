import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { glossary, glossaryId } from "@/data/glossary";
import { absoluteUrl, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "HNB Glossary: Heat-Not-Burn Terms Explained",
  description:
    "Plain-English definitions of heat-not-burn (HNB) industry terms: heated tobacco sticks, herbal sticks, HNB granules, OEM, private label, RFQ and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "HNB glossary",
    url: absoluteUrl("/glossary"),
    hasDefinedTerm: glossary.map((entry) => ({
      "@type": "DefinedTerm",
      name: entry.term,
      description: entry.definition,
      url: absoluteUrl(`/glossary#${glossaryId(entry.term)}`),
    })),
  };
  return (
    <main>
      <JsonLd data={schema} />
      <section className="pageHero sectionPad">
        <Breadcrumbs items={[{ name: "Glossary", path: "/glossary" }]} />
        <p className="eyebrow">Industry terms</p>
        <h1>HNB glossary.</h1>
        <p>
          Definitions of the heat-not-burn terms used across the KOKEN website and in B2B supply conversations. Have a specific
          question? Read the <Link href="/faq">FAQ</Link> or the <Link href="/blog">HNB blog</Link>.
        </p>
      </section>
      <section className="sectionPad">
        <nav aria-label="Glossary terms" className="sectionHead">
          <h2>Contents</h2>
          <ul className="tocList">
            {glossary.map((entry) => (
              <li key={entry.term}>
                <a href={`#${glossaryId(entry.term)}`}>{entry.term}</a>
              </li>
            ))}
          </ul>
        </nav>
        <dl className="glossaryList">
          {glossary.map((entry) => (
            <div key={entry.term} id={glossaryId(entry.term)}>
              <dt>{entry.term}</dt>
              <dd>
                {entry.definition}
                {entry.link && (
                  <>
                    {" "}
                    <Link href={entry.link.href}>{entry.link.label}</Link>.
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
