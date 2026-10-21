import { getProductFullName, getProductImage, products, type Product } from "@/data/products";
import { absoluteUrl, company, contentUpdated, siteUrl } from "@/lib/site";

// Assistive Agent Optimization (AAO): machine-readable entry points so AI assistants and
// browsing agents can read the catalogue and prepare a quote request on a buyer's behalf.
// The same definitions feed /catalog.json, /openapi.json, llms.txt and the quote deep link.

export const agentPaths = {
  catalog: "/catalog.json",
  openapi: "/openapi.json",
  llms: "/llms.txt",
  llmsFull: "/llms-full.txt",
  quote: "/quote",
  contactApi: "/api/contact",
};

// Fields the quote form and /api/contact accept. Each can also be passed as a /quote query
// parameter to prefill the form, so an agent can hand the buyer a ready-to-review request.
export const quoteFields = [
  { name: "fullName", label: "Full name", required: true },
  { name: "companyName", label: "Company name", required: true },
  { name: "country", label: "Country / region", required: true },
  { name: "email", label: "Email address", required: true },
  { name: "whatsapp", label: "WhatsApp number", required: false },
  { name: "businessType", label: "Business type", required: true },
  { name: "estimatedVolume", label: "Estimated bulk volume", required: false },
  { name: "targetMarket", label: "Target market", required: false },
  { name: "message", label: "Message", required: true },
] as const;

export const businessTypes = ["Brand owner", "Importer", "Wholesaler", "Retail chain buyer", "OEM client", "Other business enquiry"];

// Deep link that adds products to the buyer's quote list: /quote?add=slug-a,slug-b&qty=10
export const quoteUrl = (slugs: string[], quantity?: number) =>
  absoluteUrl(`${agentPaths.quote}?add=${slugs.join(",")}${quantity ? `&qty=${quantity}` : ""}`);

const catalogEntry = (product: Product) => {
  const image = getProductImage(product, "detail");
  return {
    slug: product.slug,
    sku: `KOKEN-${product.slug.toUpperCase()}`,
    name: getProductFullName(product),
    flavour: product.name,
    category: product.category,
    categoryLabel: product.categoryLabel,
    url: absoluteUrl(`/products/${product.slug}`),
    image: image ? absoluteUrl(image.src) : null,
    summary: product.shortDescription,
    description: product.description,
    flavourProfile: product.flavourProfile ?? [],
    highlights: product.highlights,
    ...(product.category === "herbal" ? { nicotine: "0 mg", tobacco: false } : {}),
    ...(product.category === "tobacco" ? { tobacco: true } : {}),
    price: "On request (B2B request for quote)",
    addToQuoteUrl: quoteUrl([product.slug]),
  };
};

export const buildCatalog = () => ({
  name: `${company.name} product catalogue`,
  description: company.description,
  url: siteUrl,
  updated: contentUpdated,
  audience: "Business-to-business buyers only (brand owners, importers, wholesalers, retail chains, OEM clients) for lawful adult-market enquiries.",
  pricing: "Prices are quote-only. Submit a request for quote with target market, volume and packaging requirements.",
  seller: {
    name: company.name,
    email: company.email,
    telephone: company.telephone,
    whatsapp: company.quoteWhatsApp.map((contact) => `https://wa.me/${contact.number}`),
    address: `${company.address.streetAddress}, ${company.address.addressLocality}, ${company.address.countryName}`,
  },
  howToRequestAQuote: {
    deepLink: `${absoluteUrl(agentPaths.quote)}?add={slug,slug}&qty={quantity}&fullName=...&companyName=...`,
    deepLinkNote: "Adds the products to the buyer's quote list and prefills the form; the buyer reviews and confirms the 18+ B2B declaration before sending.",
    api: `POST ${absoluteUrl(agentPaths.contactApi)}`,
    apiSpec: absoluteUrl(agentPaths.openapi),
    fields: quoteFields,
    businessTypes,
  },
  products: products.map(catalogEntry),
});
