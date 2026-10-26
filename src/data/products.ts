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

export type ProductImageInfo = { src: string; width: number; height: number };

// Optimised WebP artwork with descriptive file names; device and branding
// entries have no artwork and render the styled fallback instead.
export const getProductImage = (product: Product, size: "card" | "detail"): ProductImageInfo | null => {
  if (product.category !== "tobacco" && product.category !== "herbal") return null;
  if (size === "detail") return { src: `/images/products/koken-${product.slug}.webp`, width: 1000, height: 1000 };
  return {
    src: `/images/products/thumbnails/koken-${product.slug}.webp`,
    width: 640,
    height: product.category === "herbal" ? 960 : 640,
  };
};

// 1200x630 JPEG share card (Open Graph/Twitter); WebP is not supported by every social platform.
export const getProductOgImage = (product: Product) =>
  product.category === "tobacco" || product.category === "herbal" ? `/images/products/og/koken-${product.slug}.jpg` : undefined;

// Unique, descriptive name used in titles, headings and alt text, e.g. "Blueberry Herbal Sticks".
export const getProductFullName = (product: Product) =>
  product.category === "tobacco" || product.category === "herbal"
    ? `${product.name === "Tobacco" ? "Classic" : product.name} ${product.categoryLabel.replace(/\bsticks\b/, "Sticks")}`
    : product.name;

export const products: Product[] = [
  {
    slug: "amber-tobacco-sticks",
    name: "Amber",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "bronze",
    shortDescription: "Rich tobacco profile with warm aroma and a refined character.",
    description: "Amber is positioned as a premium heat-not-burn tobacco stick option for adult-market business enquiries. The product is suitable for brand catalogues, importer discussions and private label programmes where a warm, classic tobacco direction is required.",
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
    shortDescription: "Fresh tobacco profile with a cool, clean menthol-style finish.",
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
    shortDescription: "Balanced tobacco profile with smooth aroma and refined character.",
    description: "Silver is positioned as a balanced heat-not-burn tobacco stick option for business buyers requiring a clean and premium product direction. Suitable for OEM discussions and market-specific catalogue development.",
    flavourProfile: ["Balanced aroma", "Medium bodied", "Hints of spice and vanilla"],
    highlights: ["Premium catalogue positioning", "Bulk manufacturing quote", "Private label compatible", "Responsible B2B content"]
  },
  
  {
    slug: "tobacco-classic-sticks",
    name: "Tobacco",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "red",
    shortDescription: "Rounded classic tobacco profile with a familiar, full-bodied character.",
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
    shortDescription: "Berry-led tobacco profile with a distinctive blueberry aroma.",
    description: "Blueberry is a flavoured tobacco stick option for authorised adult-market B2B enquiries. The product page supports selected product quote requests and market-specific follow-up.",
    flavourProfile: ["High aroma", "Full bodied", "Blueberry aroma"],
    highlights: ["Flavoured category option", "Bulk quote enabled", "Importer enquiry support", "Custom packaging possible"]
  },
  
  {
    slug: "vanilla-tobacco-sticks",
    name: "Vanilla",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "cream",
    shortDescription: "Smooth tobacco profile with a soft, warm vanilla direction.",
    description: "Vanilla is included as a smooth flavour direction for authorised business partners seeking a broader product portfolio under OEM or branded packaging discussions.",
    flavourProfile: ["Smooth aroma", "Soft body", "Vanilla direction"],
    highlights: ["Bulk enquiry", "Flavour range support", "Custom branding", "Request-to-quote page"]
  },
  {
    slug: "menthol-tobacco-sticks",
    name: "Menthol",
    category: "tobacco",
    categoryLabel: "Tobacco sticks",
    badge: "Tobacco range",
    accent: "green",
    shortDescription: "Cool menthol tobacco flavour with a clean, refreshing finish.",
    description: "Menthol is a tobacco stick option with a clear, cooling flavour direction for authorised adult-market business enquiries and private label programmes.",
    flavourProfile: ["Cool menthol aroma", "Clean, balanced body", "Refreshing finish"],
    highlights: ["Bulk manufacturing enquiry", "OEM and private label suitable", "Adult-market B2B information", "Packaging customisation available"]
  },
  
  {
    slug: "black-tea-herbal-sticks",
    name: "Black Tea",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "black-tea",
    shortDescription: "Bold black tea flavour with a smooth, malty body and a gently brisk finish.",
    description: "Black Tea is a tobacco-free and nicotine-free herbal stick flavour with a full, malty tea character, smooth body and a gently brisk finish.",
    flavourProfile: ["Bold black tea", "Smooth, malty body", "Gently brisk finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "apple-herbal-sticks",
    name: "Apple",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "apple",
    shortDescription: "Crisp, juicy apple flavour with a fresh orchard character.",
    description: "Apple is a tobacco-free and nicotine-free herbal stick flavour with a crisp, juicy fruit profile, balanced sweetness and a fresh, clean finish.",
    flavourProfile: ["Crisp green apple", "Juicy, balanced sweetness", "Fresh, clean finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "strawberry-herbal-sticks",
    name: "Strawberry",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "strawberry",
    shortDescription: "Sweet, ripe strawberry flavour with a soft, fruity finish.",
    description: "Strawberry is a tobacco-free and nicotine-free herbal stick flavour with a ripe, sweet berry profile and a soft, rounded fruity finish.",
    flavourProfile: ["Ripe strawberry", "Sweet berry character", "Soft, fruity finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "mango-herbal-sticks",
    name: "Mango",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "mango",
    shortDescription: "Sweet tropical mango flavour with a warm, juicy character.",
    description: "Mango is a tobacco-free and nicotine-free herbal stick flavour inspired by ripe tropical fruit, with a sweet, juicy and inviting profile.",
    flavourProfile: ["Sweet tropical mango", "Juicy fruit character", "Warm, smooth finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "blueberry-herbal-sticks",
    name: "Blueberry",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "blueberry",
    shortDescription: "Sweet blueberry flavour with a smooth, fruity berry character.",
    description: "Blueberry is a tobacco-free and nicotine-free herbal stick flavour with a naturally sweet, fruity berry direction and a smooth finish.",
    flavourProfile: ["Sweet blueberry", "Fruity berry character", "Smooth finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "coffee-herbal-sticks",
    name: "Coffee",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "coffee",
    shortDescription: "Rich coffee flavour with a smooth roasted taste and warm finish.",
    description: "Coffee is a tobacco-free and nicotine-free herbal stick flavour with a rich roasted profile, smooth body and warm aromatic finish.",
    flavourProfile: ["Rich coffee aroma", "Smooth roasted taste", "Warm finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "lime-herbal-sticks",
    name: "Lime",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "lime",
    shortDescription: "Zesty, tangy lime flavour with a sharp, refreshing citrus finish.",
    description: "Lime is a tobacco-free and nicotine-free herbal stick flavour with a zesty, tangy citrus profile and a sharp, refreshing finish.",
    flavourProfile: ["Zesty lime", "Tangy citrus aroma", "Sharp, refreshing finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "grapeel-herbal-sticks",
    name: "Grapeel",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "grapeel",
    shortDescription: "Premium dried grapefruit peel offering a vibrant citrus aroma, refreshing zest, and a smooth, clean finish.",
    description: "Grapeel is a tobacco-free and nicotine-free herbal stick flavour inspired by fresh grapefruit peel. Its citrus-led profile balances lively zest with a touch of natural bitterness and a clean finish.",
    flavourProfile: ["Vibrant grapefruit zest", "Touch of natural bitterness", "Clean, refreshing finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  // Peppermint is hidden from the herbal range for now; uncomment to bring it back
  // (also restore the Peppermint lines commented out in faqs.ts, herbal-sticks/page.tsx and src/data/blog,
  // and remove the temporary redirect in next.config.mjs).
  // {
  //   slug: "peppermint-herbal-sticks",
  //   name: "Peppermint",
  //   category: "herbal",
  //   categoryLabel: "Herbal sticks",
  //   badge: "Herbal range",
  //   accent: "peppermint",
  //   shortDescription: "Smooth, moderate peppermint flavour with a clean finish.",
  //   description: "Peppermint is a tobacco-free and nicotine-free herbal stick flavour with a balanced mint character. It is refreshing and clean while staying smooth and moderate.",
  //   flavourProfile: ["Smooth peppermint", "Moderate mint intensity", "Refreshing, clean finish"],
  //   highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  // },
  {
    slug: "hnb-device-programme",
    name: "HNB Device Programme",
    category: "device",
    categoryLabel: "Devices",
    badge: "Device enquiry",
    accent: "blue",
    shortDescription: "Compatible device options for complete HNB product programmes.",
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
    shortDescription: "Custom packaging and private-label support for HNB brands.",
    description: "Private Label Packaging supports brand owners and business buyers seeking customised product presentation, business proposal support and packaging direction for adult-market HNB categories.",
    highlights: ["Custom packaging direction", "Brand owner enquiry", "OEM support", "Manufacturing quote option"]
  }
];

export const getProductsByCategory = (category: ProductCategory) => products.filter((product) => product.category === category);
export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const getRelatedProducts = (product: Product, limit = 3) =>
  products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, limit);
