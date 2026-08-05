import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = {
  title: "Custom branding",
  description: "OEM and private label custom branding enquiries.",
};
export default function Page() {
  const products = getProductsByCategory("branding");
  return (
    <main>
      <section className="pageHero sectionPad">
        <p className="eyebrow">KOKEN catalogue</p>
        <h1>Custom branding</h1>
        <p>
          Request information for private label packaging, custom branding,
          business proposals and bulk manufacturing support.
        </p>
      </section>
      <section className="sectionPad">
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
