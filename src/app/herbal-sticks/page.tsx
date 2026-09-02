import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
export const metadata = { title: "Tobacco-free herbal sticks from the UAE", description: "Explore KOKEN's tobacco-free, nicotine-free herbal stick flavours for global B2B, OEM and private-label enquiries." };
export default function Page() {
 const products = getProductsByCategory("herbal");
 return <main><section className="pageHero sectionPad"><p className="eyebrow">Tobacco-free · nicotine-free · 6 flavours</p><h1>Herbal sticks for global product programmes.</h1><p>KOKEN&apos;s herbal stick range includes bright citrus, sweet fruit, cool peppermint and roasted coffee directions. Each flavour is presented for lawful B2B product development, bulk supply, OEM and private-label enquiries from our UAE manufacturing platform.</p></section><section className="sectionPad"><div className="sectionHead"><p className="eyebrow">Flavour range</p><h2>Match the flavour profile to your brief.</h2><p>Open a flavour to review its sensory direction and send it to the request-for-quote list.</p></div><div className="productGrid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div></section></main>
}
