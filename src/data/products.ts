export type ProductCategory = "tobacco" | "herbal" | "device" | "branding";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  flavourProfile?: string[];
  highlights: string[];
  badge: string;
  accent: string;
};

export const products: Product[] = [
  {
    slug: "bronzy-tobacco-sticks",
    name: "Bronzy",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "bronze",
    shortDescription: "A rich tobacco stick profile with warm aroma and refined character for bulk B2B enquiries.",
    description: "Bronzy is positioned as a premium heat-not-burn tobacco stick option for adult-market business enquiries. The product is suitable for brand catalogues, importer discussions and private label programmes where a warm, classic tobacco direction is required.",
    flavourProfile: ["High aroma", "Medium bodied", "Hint of cocoa"],
    highlights: ["Bulk manufacturing enquiry", "OEM and private label suitable", "Adult-market B2B information", "Packaging customisation available"]
  },
  {
    slug: "blue-tobacco-sticks",
    name: "Blue",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "blue",
    shortDescription: "A fresh tobacco stick direction with a cool menthol-style profile for authorised business channels.",
    description: "Blue is designed for business partners seeking a fresh tobacco stick option within a manufacturer-led HNB product range. It is presented for bulk enquiry, catalogue review and private label discussion.",
    flavourProfile: ["Fresh aroma", "Medium bodied", "Menthol experience"],
    highlights: ["Suitable for bulk quote", "Custom branding option", "Category page ready", "B2B product information"]
  },
  {
    slug: "silver-tobacco-sticks",
    name: "Silver",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "silver",
    shortDescription: "A balanced tobacco stick profile with smooth aroma and refined presentation.",
    description: "Silver is positioned as a balanced heat-not-burn tobacco stick option for business buyers requiring a clean and premium product direction. Suitable for OEM discussions and market-specific catalogue development.",
    flavourProfile: ["Balanced aroma", "Medium bodied", "Hints of spice and vanilla"],
    highlights: ["Premium catalogue positioning", "Bulk manufacturing quote", "Private label compatible", "Responsible B2B content"]
  },
  {
    slug: "menthol-tobacco-sticks",
    name: "Menthol",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "teal",
    shortDescription: "A cooling tobacco stick profile for adult-market business catalogues.",
    description: "Menthol is intended for buyers seeking a cool tobacco direction within an HNB stick range. The page supports quote requests rather than retail checkout.",
    flavourProfile: ["Balanced aroma", "Medium bodied", "Cool mint leaves"],
    highlights: ["Quote request enabled", "Bulk enquiry only", "OEM packaging discussion", "Manufacturer positioning"]
  },
  {
    slug: "tobacco-classic-sticks",
    name: "Tobacco",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "darkbrown",
    shortDescription: "A rounded classic tobacco profile for B2B product range development.",
    description: "Tobacco is the classic option in the range, suitable for business partners who require a familiar tobacco-led flavour direction for adult-market distribution subject to local regulations.",
    flavourProfile: ["Rounded aroma", "Medium bodied", "Deep tobacco"],
    highlights: ["Classic product positioning", "Bulk quote flow", "Private label ready", "Adult-only content"]
  },
  {
    slug: "blueberry-tobacco-sticks",
    name: "Blueberry",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "purple",
    shortDescription: "A berry-led tobacco stick profile for business range differentiation.",
    description: "Blueberry is a flavoured tobacco stick option for authorised adult-market B2B enquiries. The product page supports selected product quote requests and market-specific follow-up.",
    flavourProfile: ["High aroma", "Full bodied", "Blueberry aroma"],
    highlights: ["Flavoured category option", "Bulk quote enabled", "Importer enquiry support", "Custom packaging possible"]
  },
  {
    slug: "green-tobacco-sticks",
    name: "Green",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "green",
    shortDescription: "A green-profile tobacco stick option for differentiated manufacturing enquiries.",
    description: "Green provides an additional flavour direction for business buyers reviewing a complete HNB tobacco stick portfolio for bulk or private label opportunities.",
    flavourProfile: ["Green character", "Smooth body", "Fresh finish"],
    highlights: ["Range extension option", "B2B enquiry flow", "Bulk manufacturing", "Private label packaging support"]
  },
  {
    slug: "vanilla-tobacco-sticks",
    name: "Vanilla",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "gold",
    shortDescription: "A smooth vanilla-inspired tobacco stick profile for catalogue consideration.",
    description: "Vanilla is included as a smooth flavour direction for authorised business partners seeking a broader product portfolio under OEM or branded packaging discussions.",
    flavourProfile: ["Smooth aroma", "Soft body", "Vanilla direction"],
    highlights: ["Bulk enquiry", "Flavour range support", "Custom branding", "Request-to-quote page"]
  },
  {
    slug: "haze-tobacco-sticks",
    name: "Haze",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "brown",
    shortDescription: "A deeper tobacco stick variation for market-specific product discussions.",
    description: "Haze is presented as a differentiated tobacco stick option for bulk product enquiries, distributor catalogue planning and private label development.",
    flavourProfile: ["Deep profile", "Rounded body", "Distinct finish"],
    highlights: ["Manufacturer-led enquiry", "Bulk volume discussion", "Product catalogue ready", "OEM support"]
  },
  {
    slug: "yellow-tobacco-sticks",
    name: "Yellow",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "yellow",
    shortDescription: "A bright tobacco stick option for product range variety.",
    description: "Yellow gives business buyers another portfolio option for adult-market HNB discussions and quote requests, subject to local market requirements.",
    flavourProfile: ["Bright profile", "Balanced body", "Smooth finish"],
    highlights: ["B2B quote option", "Bulk enquiry", "Catalogue product", "Private label discussion"]
  },
  {
    slug: "blueberry-herbal-sticks",
    name: "Blueberry Herbal",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "purple",
    shortDescription: "A nicotine-free herbal stick option with a blueberry flavour direction.",
    description: "Blueberry Herbal is a tobacco-free and nicotine-free herbal stick option for adult-market business enquiries. It supports product range diversification for authorised B2B partners.",
    flavourProfile: ["Herbal sticks", "Blueberry profile", "Smooth experience"],
    highlights: ["Nicotine-free product direction", "Bulk enquiry", "Private label option", "Herbal category page"]
  },
  {
    slug: "tomentose-pummelo-peel-herbal-sticks",
    name: "Tomentose Pummelo Peel",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "olive",
    shortDescription: "A nicotine-free herbal stick option with pummelo peel profile.",
    description: "Tomentose Pummelo Peel Herbal is positioned as a distinctive nicotine-free herbal stick option for business buyers seeking alternative flavour profiles.",
    flavourProfile: ["Nicotine-free", "Herbal sticks", "Pummelo peel profile"],
    highlights: ["Unique herbal profile", "Bulk quote request", "B2B product information", "Custom brand discussion"]
  },
  {
    slug: "strawberry-herbal-sticks",
    name: "Strawberry Herbal",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "red",
    shortDescription: "A nicotine-free herbal stick option with strawberry profile.",
    description: "Strawberry Herbal is designed for B2B product range enquiries where a fruit-led nicotine-free herbal option is required.",
    flavourProfile: ["Herbal sticks", "Strawberry profile", "Smooth experience"],
    highlights: ["Herbal portfolio option", "Bulk enquiry", "Private label compatible", "Quote option included"]
  },
  {
    slug: "mint-herbal-sticks",
    name: "Mint Herbal",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "teal",
    shortDescription: "A nicotine-free herbal stick option with mint direction.",
    description: "Mint Herbal is a cool-profile herbal stick option for adult-market business catalogues and OEM discussions.",
    flavourProfile: ["Nicotine-free", "Herbal sticks", "Mint profile"],
    highlights: ["Fresh herbal direction", "Bulk manufacturing enquiry", "Custom branding", "Quote page ready"]
  },
  {
    slug: "mango-herbal-sticks",
    name: "Mango Herbal",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "yellow",
    shortDescription: "A nicotine-free herbal stick option with mango flavour direction.",
    description: "Mango Herbal supports business buyers looking for a fruit-led nicotine-free herbal category option for market-specific product planning.",
    flavourProfile: ["Herbal sticks", "Mango profile", "Smooth experience"],
    highlights: ["Herbal flavour option", "B2B bulk enquiry", "Private label packaging", "Manufacturer quote"]
  },
  {
    slug: "coffee-herbal-sticks",
    name: "Coffee Herbal",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "coffee",
    shortDescription: "A nicotine-free herbal stick option with coffee profile.",
    description: "Coffee Herbal is a distinctive herbal stick direction for B2B buyers seeking a warm, alternative flavour presentation.",
    flavourProfile: ["Herbal sticks", "Coffee profile", "Smooth experience"],
    highlights: ["Distinctive herbal range", "Bulk quote", "Private label option", "Adult-market B2B information"]
  },
  {
    slug: "hnb-device-programme",
    name: "HNB Device Programme",
    category: "device",
    categoryLabel: "Devices",
    badge: "Device enquiry",
    accent: "blue",
    shortDescription: "Device category enquiry for business partners requiring compatible HNB product programmes.",
    description: "The HNB Device Programme page is designed for business clients who want to discuss compatible device options as part of a larger HNB product supply or brand programme.",
    highlights: ["Device category enquiry", "Bulk programme discussion", "Compatible product planning", "Quote request option"]
  },
  {
    slug: "private-label-packaging",
    name: "Private Label Packaging",
    category: "branding",
    categoryLabel: "Custom branding",
    badge: "OEM service",
    accent: "violet",
    shortDescription: "Custom packaging and private label support for HNB business partners.",
    description: "Private Label Packaging supports brand owners and business buyers seeking customised product presentation, business proposal support and packaging direction for adult-market HNB categories.",
    highlights: ["Custom packaging direction", "Brand owner enquiry", "OEM support", "Manufacturing quote option"]
  }
];

export const getProductsByCategory = (category: ProductCategory) => products.filter((product) => product.category === category);
export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
