import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { pageMeta } from "@/lib/site";
export const metadata = pageMeta({
  title: "Request an HNB Manufacturing Quote (B2B)",
  description:
    "Send KOKEN a B2B request for quote for HNB production, granules manufacturing, OEM, private-label or bulk tobacco and herbal stick supply from the UAE.",
  path: "/quote",
});
export default function QuotePage() { return <main><section className="pageHero sectionPad"><Breadcrumbs items={[{ name: "Request a quote", path: "/quote" }]} /><p className="eyebrow">Global B2B enquiry · UAE production</p><h1>Request a focused manufacturing proposal.</h1><p>Select products, add them to your quote list and share your company, market, volume and packaging requirements. KOKEN International FZ-LLC will route the enquiry to the sales and information teams.</p></section><section className="sectionPad"><QuoteForm/></section></main> }
