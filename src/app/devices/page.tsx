import Link from "next/link";
import CategoryHero from "@/components/CategoryHero";
import Faq from "@/components/Faq";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { deviceFaqs } from "@/data/faqs";
import { pageMeta } from "@/lib/site";
export const metadata = pageMeta({
  title: "Compatible HNB Device Supply for B2B Programmes",
  description:
    "Plan compatible heat-not-burn device supply alongside KOKEN tobacco and herbal sticks, granules and packaging as part of one UAE-based B2B programme.",
  path: "/devices",
});
export default function Page() {
 const products = getProductsByCategory("device");
 return <main><CategoryHero crumb={{ name: "Devices", path: "/devices" }} eyebrow="HNB programme support" title="Devices for a complete HNB programme." answer="KOKEN discusses compatible HNB device supply together with sticks, granules manufacturing and packaging, so business buyers can plan a complete heat-not-burn programme with one UAE partner." products={products}><p>Discuss compatible device options alongside HNB sticks, granules manufacturing, packaging and market requirements. KOKEN works with business buyers who need a coordinated product and supply conversation from the UAE.</p></CategoryHero><section className="sectionPad"><div className="sectionHead"><p className="eyebrow">Business enquiry</p><h2>Plan compatibility, supply and packaging together.</h2><p>Share your target market, expected volume and intended product range. The KOKEN team can route your request to the appropriate manufacturing and product discussion. Pair devices with the <Link href="/tobacco-sticks">tobacco stick</Link> or <Link href="/herbal-sticks">herbal stick</Link> ranges.</p></div><div className="productGrid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div></section><Faq items={deviceFaqs} title="Device programme questions" /></main>
}
