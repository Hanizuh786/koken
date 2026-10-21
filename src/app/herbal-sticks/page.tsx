import Link from "next/link";
import CategoryHero from "@/components/CategoryHero";
import Faq from "@/components/Faq";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { herbalFaqs } from "@/data/faqs";
import { pageMeta } from "@/lib/site";
export const metadata = pageMeta({
  title: "Tobacco-Free Herbal HNB Sticks Manufacturer",
  description:
    // Peppermint hidden for now, so the range is 5 flavours (was 6).
    "5 tobacco-free, nicotine-free herbal HNB stick flavours made in the UAE by KOKEN. Bulk supply, OEM and private-label programmes for global B2B buyers.",
  path: "/herbal-sticks",
});
export default function Page() {
 const products = getProductsByCategory("herbal");
 // Peppermint hidden for now; previous copy listed "6 flavours: Grapeel, Blueberry, Peppermint, Mango, Coffee and Lemon" and "cool peppermint".
 return <main><CategoryHero crumb={{ name: "Herbal sticks", path: "/herbal-sticks" }} eyebrow={`Tobacco-free · nicotine-free · ${products.length} flavours`} title="Herbal sticks for global product programmes." answer="KOKEN herbal sticks are tobacco-free, nicotine-free HNB consumables made in the UAE in 5 flavours: Grapeel, Blueberry, Mango, Coffee and Lemon. They are supplied for bulk, OEM and private-label programmes." products={products}><p>KOKEN&apos;s herbal stick range includes bright citrus, sweet fruit, tropical and roasted coffee directions. Each flavour is presented for lawful B2B product development, bulk supply, OEM and private-label enquiries from our UAE manufacturing platform.</p></CategoryHero><section className="sectionPad"><div className="sectionHead"><p className="eyebrow">Flavour range</p><h2>Match the herbal flavour profile to your brief.</h2><p>Open a flavour to review its sensory direction and send it to the request-for-quote list. For tobacco-based options, compare the <Link href="/tobacco-sticks">heated tobacco stick range</Link>.</p></div><div className="productGrid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div></section><Faq items={herbalFaqs} title="Herbal stick questions from B2B buyers" /></main>
}
