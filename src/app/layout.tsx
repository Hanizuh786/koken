import type { Metadata } from "next";
import "./globals.scss";
import AgeGate from "@/components/AgeGate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RfqProvider } from "@/components/RfqProvider";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://koken-fzllc.vercel.app";
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: "KOKEN International FZ-LLC | Request-to-quote HNB manufacturer", template: "%s | KOKEN International FZ-LLC" }, description: "KOKEN International FZ-LLC provides a B2B request-to-quote catalogue for bulk HNB manufacturing, tobacco sticks, herbal sticks, devices, OEM and private label enquiries from Ras Al Khaimah, UAE.", keywords: ["licensed HNB manufacturer","heat-not-burn manufacturer UAE","OEM HNB manufacturer","private label HNB products","bulk HNB quote","tobacco sticks manufacturer","herbal sticks manufacturer","Ras Al Khaimah HNB"], openGraph: { title: "KOKEN International FZ-LLC", description: "Request-to-quote catalogue for B2B HNB manufacturing, OEM and private label enquiries.", type: "website", locale: "en_AE", siteName: "KOKEN International FZ-LLC" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
 const schema = {"@context":"https://schema.org","@type":"Organization",name:"KOKEN International FZ-LLC",url:siteUrl,logo:`${siteUrl}/images/koken-logo.png`,email:"sales@koken-inc.cn",telephone:"+971565053048",address:{"@type":"PostalAddress",streetAddress:"Al Hamra Industrial Zone-FZ",addressLocality:"Ras Al Khaimah",addressCountry:"AE"},sameAs:["https://www.linkedin.com/company/kokenstick?originalSubdomain=ae"]};
 return <html lang="en-AE"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/><RfqProvider><AgeGate/><Header/>{children}<Footer/></RfqProvider></body></html>
}
