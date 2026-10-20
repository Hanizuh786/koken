import { generalFaqs } from "@/data/faqs";
import { getProductFullName, getProductsByCategory } from "@/data/products";
import { absoluteUrl, company } from "@/lib/site";

// llms.txt (https://llmstxt.org) gives AI assistants a concise, citable summary
// of the site. Generated from the same data as the pages so it never drifts.
export const dynamic = "force-static";

export function GET() {
  const list = (category: Parameters<typeof getProductsByCategory>[0]) =>
    getProductsByCategory(category)
      .map((product) => `- [${getProductFullName(product)}](${absoluteUrl(`/products/${product.slug}`)}): ${product.shortDescription}`)
      .join("\n");

  const body = `# ${company.name}

> ${company.description}

KOKEN sells business-to-business only (brand owners, importers, wholesalers, retail chain buyers and OEM clients) for lawful adult-market enquiries. Prices are provided on request via a request for quote.

## Key facts

- Legal name: ${company.name}
- Status: Official patent and licence holder for HNB (heat-not-burn) production in the UAE
- Address: ${company.address.streetAddress}, ${company.address.addressLocality}, ${company.address.countryName}
- Capabilities: HNB granules manufacturing, heated tobacco sticks, tobacco-free herbal sticks, OEM and private-label programmes, bulk supply
- Range: ${getProductsByCategory("tobacco").length} tobacco stick flavours, ${getProductsByCategory("herbal").length} herbal stick flavours (0 nicotine, no tobacco extract)
- Sales email: ${company.email}
- Phone / WhatsApp: ${company.telephoneDisplay}
- LinkedIn: ${company.linkedin}

## Main pages

- [Home](${absoluteUrl("/")}): Overview of KOKEN's UAE HNB production and B2B programmes
- [About KOKEN](${absoluteUrl("/about")}): Company profile and key facts
- [Tobacco sticks](${absoluteUrl("/tobacco-sticks")}): Heated tobacco stick range
- [Herbal sticks](${absoluteUrl("/herbal-sticks")}): Tobacco-free, nicotine-free herbal stick range
- [OEM and private label](${absoluteUrl("/custom-branding")}): Build a branded HNB programme
- [Devices](${absoluteUrl("/devices")}): Compatible HNB device programme support
- [Request a quote](${absoluteUrl("/quote")}): B2B enquiry form
- [Contact](${absoluteUrl("/contact")}): Email, phone and location

## Tobacco sticks

${list("tobacco")}

## Herbal sticks

${list("herbal")}

## FAQ

${generalFaqs.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n")}

## Optional

- [Full FAQ](${absoluteUrl("/faq")})
- [HNB glossary](${absoluteUrl("/glossary")})
- [Sitemap](${absoluteUrl("/sitemap.xml")})
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
