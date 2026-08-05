import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = {
  title: "Tobacco sticks",
  description: "Premium tobacco stick catalogue for bulk B2B quote enquiries.",
};
export default function Page() {
  const products = getProductsByCategory("tobacco");
  return (
    <main>
      <section className="pageHero sectionPad">
        <p className="eyebrow">KOKEN catalogue</p>
        <h1>Tobacco sticks</h1>
        <p>
          Explore tobacco stick product pages. Each item includes description,
          flavour direction and a request-to-quote action for bulk manufacturing
          enquiries.
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
