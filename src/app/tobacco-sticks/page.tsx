import Link from "next/link";
import CategoryHero from "@/components/CategoryHero";
import Faq from "@/components/Faq";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { tobaccoFaqs } from "@/data/faqs";
import { pageMeta } from "@/lib/site";
export const metadata = pageMeta({
  title: "Heated Tobacco Sticks Manufacturer in the UAE",
  description:
    "7 heated tobacco stick flavours made in the UAE by KOKEN, the official HNB patent and licence holder. Bulk, OEM and private-label supply for B2B buyers.",
  path: "/tobacco-sticks",
});
export default function Page() {
  const products = getProductsByCategory("tobacco");
  return (
    <main>
      <CategoryHero
        crumb={{ name: "Tobacco sticks", path: "/tobacco-sticks" }}
        eyebrow="UAE HNB production · 7 flavour options"
        title="Heated tobacco sticks for global B2B supply."
        answer="KOKEN manufactures 7 heated tobacco stick flavours in Ras Al Khaimah, UAE, for authorised importers, distributors and brand owners. Every flavour is available for bulk supply, OEM and private-label programmes."
        products={products}
      >
        <p>
          Review KOKEN&apos;s tobacco stick flavour range for authorised importers,
          distributors, brand owners and OEM partners. KOKEN International
          FZ-LLC is the official patent and licence holder for HNB production
          in the UAE, with granules manufacturing and bulk programme support.
        </p>
      </CategoryHero>
      <section className="sectionPad"><div className="sectionHead"><p className="eyebrow">Range overview</p><h2>Choose a tobacco stick flavour for your market brief.</h2><p>Open a product page for the flavour direction, manufacturing context and quote workflow. Product availability, packaging, labelling and import requirements should be reviewed for the destination market. Looking for a tobacco-free option? See the <Link href="/herbal-sticks">herbal stick range</Link>, or plan your own brand with <Link href="/custom-branding">OEM and private-label manufacturing</Link>.</p></div>
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <Faq items={tobaccoFaqs} title="Tobacco stick questions from B2B buyers" />
    </main>
  );
}
