import Link from "next/link";
import CategoryHero from "@/components/CategoryHero";
import Faq from "@/components/Faq";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { brandingFaqs } from "@/data/faqs";
import { pageMeta } from "@/lib/site";
export const metadata = pageMeta({
  title: "OEM & Private-Label HNB Manufacturing in the UAE",
  description:
    "Launch your own heat-not-burn brand with KOKEN: OEM and private-label HNB sticks, granules manufacturing and packaging support from the UAE.",
  path: "/custom-branding",
});
export default function Page() {
  const products = getProductsByCategory("branding");
  return (
    <main>
      <CategoryHero
        crumb={{ name: "Custom branding", path: "/custom-branding" }}
        eyebrow="OEM · private label · UAE manufacturing"
        title="Build your own HNB product programme."
        answer="KOKEN offers OEM and private-label HNB manufacturing from the UAE: choose tobacco or herbal flavours, and KOKEN produces the granules and sticks in your branded packaging for bulk supply."
        products={products}
      >
        <p>
          KOKEN International FZ-LLC supports brand owners, importers and
          distributors who need a clear route from product selection to branded
          packaging. Discuss HNB production, granules manufacturing, flavour
          selection and bulk supply from our UAE base.
        </p>
      </CategoryHero>
      <section className="sectionPad"><div className="sectionHead"><p className="eyebrow">What to include in your brief</p><h2>Bring the market requirements; we’ll structure the enquiry.</h2><p>Tell us your destination market, product category, projected volume, packaging direction and launch timetable. We’ll use that information to prepare a more relevant business response. Start by shortlisting flavours from the <Link href="/tobacco-sticks">tobacco stick</Link> and <Link href="/herbal-sticks">herbal stick</Link> ranges.</p></div>
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <Faq items={brandingFaqs} title="OEM and private-label questions" />
    </main>
  );
}
