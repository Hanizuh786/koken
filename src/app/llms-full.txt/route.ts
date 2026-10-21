import { brandingFaqs, deviceFaqs, generalFaqs, herbalFaqs, tobaccoFaqs } from "@/data/faqs";
import { glossary } from "@/data/glossary";
import { getProductFullName, products } from "@/data/products";
import { agentPaths, quoteFields, quoteUrl } from "@/lib/agent";
import { absoluteUrl, company, contentUpdated } from "@/lib/site";
import { plainText } from "@/components/RichText";

// llms-full.txt: the complete product, FAQ and glossary content in one plain-text file so an
// assistant can answer buyer questions without crawling every page (AAO).
export const dynamic = "force-static";

export function GET() {
  const productText = products
    .map((product) => {
      const lines = [
        `### ${getProductFullName(product)}`,
        "",
        `- URL: ${absoluteUrl(`/products/${product.slug}`)}`,
        `- Slug: ${product.slug}`,
        `- Category: ${product.categoryLabel}`,
        `- Summary: ${product.shortDescription}`,
        ...(product.flavourProfile ? [`- Flavour profile: ${product.flavourProfile.join(", ")}`] : []),
        `- Highlights: ${product.highlights.join(", ")}`,
        `- Price: on request`,
        `- Add to quote: ${quoteUrl([product.slug])}`,
        "",
        product.description,
      ];
      return lines.join("\n");
    })
    .join("\n\n");

  const faqText = [...generalFaqs, ...tobaccoFaqs, ...herbalFaqs, ...brandingFaqs, ...deviceFaqs]
    .map((item) => `### ${item.question}\n\n${item.answer}`)
    .join("\n\n");

  const body = `# ${company.name} (full text)

> ${company.description}

Last updated: ${contentUpdated}. B2B only, lawful adult-market enquiries. Short version: ${absoluteUrl(agentPaths.llms)}

## How an agent can help a buyer

1. Read the catalogue: ${absoluteUrl(agentPaths.catalog)}
2. Build a quote link: ${absoluteUrl(agentPaths.quote)}?add=<slug>,<slug>&qty=<n>. Optional prefill parameters: ${quoteFields.map((field) => field.name).join(", ")}.
3. Or, with the buyer's confirmation, POST the request to ${absoluteUrl(agentPaths.contactApi)} (spec: ${absoluteUrl(agentPaths.openapi)}).
4. Contact: ${company.email}, ${company.telephoneDisplay} (phone / WhatsApp).

## Products

${productText}

## FAQ

${faqText}

## Glossary

${glossary.map((entry) => `- **${entry.term}:** ${plainText(entry.definition)}`).join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
