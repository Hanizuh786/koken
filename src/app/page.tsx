import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

export default function Home() {
  const tobacco = getProductsByCategory("tobacco").slice(0, 4);
  const herbal = getProductsByCategory("herbal").slice(0, 4);

  return (
    <main>
      <section className="hero sectionPad">
        <div className="heroCopy"><p className="eyebrow">UAE HNB production · Ras Al Khaimah</p><h1>HNB production and granules manufacturing for global brands.</h1><p className="lead">KOKEN International FZ-LLC is the official patent and licence holder for HNB production in the UAE. We support global business buyers with granules manufacturing, tobacco and herbal stick programmes, OEM development and private-label supply.</p><div className="heroButtons"><Link className="linkButton primary" href="/quote">Start a manufacturing enquiry</Link><Link className="linkButton light" href="/tobacco-sticks">Explore the product range</Link></div></div>
        <div className="logoHero"><img src="/images/koken-logo.png" alt="KOKEN International FZ-LLC logo" /></div>
        <aside className="heroPanel"><div><strong>Official UAE patent and licence holder</strong><span>HNB production platform based in Ras Al Khaimah</span></div><div><strong>Granules manufacturing</strong><span>Manufacturing support for product programmes</span></div><div><strong>Global B2B supply</strong><span>OEM, private label and bulk enquiry support</span></div></aside>
      </section>
      <section className="sectionPad"><div className="sectionHead"><p className="eyebrow">Manufacturing programmes</p><h2>Build a supply programme around your market.</h2><p>Review the product categories, select the flavours that fit your brief, and send one structured enquiry to the KOKEN team in the UAE.</p></div><div className="categoryGrid"><Link className="categoryCard tobacco" href="/tobacco-sticks"><span className="tag">7 flavours</span><h3>Tobacco sticks</h3><p>Heating tobacco stick options for authorised B2B distribution and market-specific programmes.</p></Link><Link className="categoryCard herbal" href="/herbal-sticks"><span className="tag">6 flavours</span><h3>Herbal sticks</h3><p>Tobacco-free, nicotine-free flavour options for global product range development.</p></Link><Link className="categoryCard devices" href="/devices"><span className="tag">HNB programme</span><h3>Compatible devices</h3><p>Discuss device supply and compatibility as part of a complete HNB programme.</p></Link><Link className="categoryCard branding" href="/custom-branding"><span className="tag">OEM</span><h3>Private label</h3><p>Coordinate packaging, product presentation and manufacturing requirements.</p></Link></div></section>
      <section className="sectionPad productBand"><div className="sectionHead"><p className="eyebrow">Tobacco stick range</p><h2>Selected flavours for B2B product planning.</h2></div><div className="productGrid">{tobacco.map(p => <ProductCard key={p.slug} product={p} />)}</div></section>
      <section className="sectionPad productBand lightGreen"><div className="sectionHead"><p className="eyebrow">Tobacco-free herbal range</p><h2>Flavour-led herbal stick options.</h2></div><div className="productGrid">{herbal.map(p => <ProductCard key={p.slug} product={p} />)}</div></section>
      <section className="sectionPad"><div className="sectionHead"><p className="eyebrow">Why KOKEN</p><h2>A UAE manufacturing partner for international enquiries.</h2><p>KOKEN International FZ-LLC brings product selection, granules manufacturing and brand development into one B2B conversation. Submit your target market, estimated volume and packaging requirements for a focused response from the sales team.</p></div><div className="heroPanel"><div><strong>Based in Ras Al Khaimah, United Arab Emirates</strong><span>Supporting lawful business enquiries across international markets.</span></div><div><strong>From product direction to packaging</strong><span>Discuss flavours, formats, OEM requirements and private-label presentation.</span></div></div></section>
    </main>
  );
}
