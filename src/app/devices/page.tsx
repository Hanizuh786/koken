import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = { title: "HNB device programme support", description: "Discuss compatible HNB device supply as part of a UAE-based manufacturing, OEM or private-label programme with KOKEN." };
export default function Page() {
 const products = getProductsByCategory("device");
 return <main><section className="pageHero sectionPad"><p className="eyebrow">HNB programme support</p><h1>Devices for a complete HNB programme.</h1><p>Discuss compatible device options alongside HNB sticks, granules manufacturing, packaging and market requirements. KOKEN works with business buyers who need a coordinated product and supply conversation from the UAE.</p></section><section className="sectionPad"><div className="sectionHead"><p className="eyebrow">Business enquiry</p><h2>Plan compatibility, supply and packaging together.</h2><p>Share your target market, expected volume and intended product range. The KOKEN team can route your request to the appropriate manufacturing and product discussion.</p></div><div className="productGrid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div></section></main>
}
