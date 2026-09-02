import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = { title: "Herbal sticks", description: "Nicotine-free herbal stick catalogue for bulk B2B quote enquiries." };
export default function Page() {
 const products = getProductsByCategory("herbal");
 return <main><section className="pageHero sectionPad"><p className="eyebrow">KOKEN catalogue · six flavours</p><h1>Herbal sticks</h1><p>Explore our tobacco-free, nicotine-free herbal stick flavours, from bright citrus and sweet fruit to cool peppermint and rich roasted coffee. Each item includes its flavour profile and a request-to-quote action for business enquiries.</p></section><section className="sectionPad"><div className="productGrid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div></section></main>
}
