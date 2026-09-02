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

const tobaccoDetailArtwork: Record<string, string> = {
  "amber-tobacco-sticks": "amber-bronzy.png",
  "blue-tobacco-sticks": "blue-blue.png",
  "silver-tobacco-sticks": "silver-silver.png",
  "tobacco-classic-sticks": "tobacco-red.png",
  "blueberry-tobacco-sticks": "blueberry.png",
  "vanilla-tobacco-sticks": "vanilla-creamy.png",
  "menthol-tobacco-sticks": "menthol-green.png",
};

export const getProductImagePath = (product: Product, size: "card" | "detail") => {
  if (product.category === "herbal") {
    const flavourKey = product.slug.replace("-herbal-sticks", "");
    return size === "detail"
      ? `/images/products/herbal/${flavourKey}.png`
      : `/images/products/herbal/thumbnails/${flavourKey}.png`;
  }

  if (product.category === "tobacco") {
    return `/images/products/${tobaccoDetailArtwork[product.slug] ?? `${product.slug}.png`}`;
  }

  return `/images/products/${product.slug}.png`;
};

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
    slug: "grapeel-herbal-sticks",
    name: "Grapeel",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "grapeel",
    shortDescription: "Bright grapefruit peel with vibrant zest, natural bitterness and a clean, refreshing finish.",
    description: "Grapeel is a tobacco-free and nicotine-free herbal stick flavour inspired by fresh grapefruit peel. Its citrus-led profile balances lively zest with a touch of natural bitterness and a clean finish.",
    flavourProfile: ["Vibrant grapefruit zest", "Touch of natural bitterness", "Clean, refreshing finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "blueberry-herbal-sticks",
    name: "Blueberry",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "blueberry",
    shortDescription: "A sweet, fruity blueberry flavour with a smooth berry-led character.",
    description: "Blueberry is a tobacco-free and nicotine-free herbal stick flavour with a naturally sweet, fruity berry direction and a smooth finish.",
    flavourProfile: ["Sweet blueberry", "Fruity berry character", "Smooth finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "peppermint-herbal-sticks",
    name: "Peppermint",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "peppermint",
    shortDescription: "A smooth, moderate mint flavour that refreshes without becoming overly bitter.",
    description: "Peppermint is a tobacco-free and nicotine-free herbal stick flavour with a balanced mint character. It is refreshing and clean while staying smooth and moderate.",
    flavourProfile: ["Smooth peppermint", "Moderate mint intensity", "Refreshing, clean finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "mango-herbal-sticks",
    name: "Mango",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "mango",
    shortDescription: "A tropical, sweet mango flavour with a warm, juicy fruit character.",
    description: "Mango is a tobacco-free and nicotine-free herbal stick flavour inspired by ripe tropical fruit, with a sweet, juicy and inviting profile.",
    flavourProfile: ["Sweet tropical mango", "Juicy fruit character", "Warm, smooth finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "coffee-herbal-sticks",
    name: "Coffee",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "coffee",
    shortDescription: "A rich coffee flavour with a smooth roasted taste and warm aromatic depth.",
    description: "Coffee is a tobacco-free and nicotine-free herbal stick flavour with a rich roasted profile, smooth body and warm aromatic finish.",
    flavourProfile: ["Rich coffee aroma", "Smooth roasted taste", "Warm finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
  {
    slug: "lemon-herbal-sticks",
    name: "Lemon",
    category: "herbal",
    categoryLabel: "Herbal sticks",
    badge: "Herbal range",
    accent: "lemon",
    shortDescription: "A fresh, tangy lemon flavour with a bright citrus finish.",
    description: "Lemon is a tobacco-free and nicotine-free herbal stick flavour with a bright, fresh citrus profile and a lively tangy finish.",
    flavourProfile: ["Fresh lemon", "Bright citrus aroma", "Tangy finish"],
    highlights: ["0 nicotine", "No tobacco extract", "Tobacco-free herbal sticks", "Bulk and private label enquiries"]
  },
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
