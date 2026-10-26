import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import { brandingFaqs, generalFaqs, herbalFaqs, tobaccoFaqs } from "@/data/faqs";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "HNB Manufacturing FAQ: OEM, Sticks & Granules",
  description:
    "Answers to common B2B questions about KOKEN's UAE HNB production: tobacco and herbal sticks, granules, OEM and private label, pricing and quotes.",
  path: "/faq",
});

export default function FaqPage() {
  const items = [...generalFaqs, ...tobaccoFaqs, ...herbalFaqs, ...brandingFaqs];
  return (
    <main>
      <section className="pageHero sectionPad">
        <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
        <p className="eyebrow">Buyer questions</p>
        <h1>HNB manufacturing FAQ.</h1>
        <p>
          Straight answers to the questions importers, distributors and brand owners ask most often. New to the terminology? See
          the <Link href="/glossary">HNB glossary</Link>, or read the in-depth <Link href="/insights">HNB guides</Link>.
        </p>
      </section>
      <Faq items={items} eyebrow="All questions" title="Questions about KOKEN and HNB supply" />
    </main>
  );
}
