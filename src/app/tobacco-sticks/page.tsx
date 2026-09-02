import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = {
  title: "Tobacco sticks manufactured in the UAE",
  description: "Explore KOKEN's tobacco stick range for global B2B supply, OEM and private-label enquiries from the UAE.",
};
export default function Page() {
  const products = getProductsByCategory("tobacco");
  return (
    <main>
      <section className="pageHero sectionPad">
        <p className="eyebrow">UAE HNB production · 7 flavour options</p>
        <h1>Tobacco sticks for global B2B supply.</h1>
        <p>
          Review KOKEN&apos;s tobacco stick flavour range for authorised importers,
          distributors, brand owners and OEM partners. KOKEN International
          FZ-LLC is the official patent and licence holder for HNB production
          in the UAE, with granules manufacturing and bulk programme support.
        </p>
      </section>
      <section className="sectionPad"><div className="sectionHead"><p className="eyebrow">Range overview</p><h2>Choose a flavour for your market brief.</h2><p>Open a product page for the flavour direction, manufacturing context and quote workflow. Product availability, packaging, labelling and import requirements should be reviewed for the destination market.</p></div>
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
