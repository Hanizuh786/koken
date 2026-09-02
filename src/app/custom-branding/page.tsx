import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = {
  title: "OEM and private-label HNB manufacturing",
  description: "Develop a branded HNB product programme with KOKEN's UAE manufacturing, granules and private-label support.",
};
export default function Page() {
  const products = getProductsByCategory("branding");
  return (
    <main>
      <section className="pageHero sectionPad">
        <p className="eyebrow">OEM · private label · UAE manufacturing</p>
        <h1>Build your own HNB product programme.</h1>
        <p>
          KOKEN International FZ-LLC supports brand owners, importers and
          distributors who need a clear route from product selection to branded
          packaging. Discuss HNB production, granules manufacturing, flavour
          selection and bulk supply from our UAE base.
        </p>
      </section>
      <section className="sectionPad"><div className="sectionHead"><p className="eyebrow">What to include in your brief</p><h2>Bring the market requirements; we’ll structure the enquiry.</h2><p>Tell us your destination market, product category, projected volume, packaging direction and launch timetable. We’ll use that information to prepare a more relevant business response.</p></div>
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
