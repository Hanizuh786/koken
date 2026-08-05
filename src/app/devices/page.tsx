import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = { title: "Devices", description: "HNB device programme enquiry page." };
export default function Page() {
 const products = getProductsByCategory("device");
 return <main><section className="pageHero sectionPad"><p className="eyebrow">KOKEN catalogue</p><h1>Devices</h1><p>Device enquiries are handled through the request-to-quote flow for business buyers seeking compatible HNB programmes.</p></section><section className="sectionPad"><div className="productGrid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div></section></main>
}
