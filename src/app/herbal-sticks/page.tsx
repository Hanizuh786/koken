import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = { title: "Herbal sticks", description: "Nicotine-free herbal stick catalogue for bulk B2B quote enquiries." };
export default function Page() {
 const products = getProductsByCategory("herbal");
 return <main><section className="pageHero sectionPad"><p className="eyebrow">KOKEN catalogue</p><h1>Herbal sticks</h1><p>Explore herbal stick product pages. Each item includes description, flavour direction and a request-to-quote action for business enquiries.</p></section><section className="sectionPad"><div className="productGrid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div></section></main>
}
