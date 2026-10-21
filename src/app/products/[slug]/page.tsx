import Link from "next/link";
import { notFound } from "next/navigation";
import AddToQuoteButton from "@/components/AddToQuoteButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { getProductBySlug, getProductFullName, getProductImage, getProductOgImage, getRelatedProducts, products, type Product } from "@/data/products";
import { quoteUrl } from "@/lib/agent";
import { absoluteUrl, company, organizationId, pageMeta } from "@/lib/site";

const categoryPaths: Record<Product["category"], string> = {
  tobacco: "/tobacco-sticks",
  herbal: "/herbal-sticks",
  device: "/devices",
  branding: "/custom-branding",
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export const dynamicParams = false;

function metaDescription(product: Product) {
  const fullName = getProductFullName(product);
  const base = (profile: string[]) =>
    `${fullName} by KOKEN, made in the UAE.${profile.length ? ` ${profile.join(", ")}.` : ""} Bulk, OEM and private-label supply for B2B buyers.`;
  // Keep descriptions within ~160 characters by dropping flavour notes if needed.
  const profile = [...(product.flavourProfile ?? [])];
  let description = base(profile);
  while (description.length > 160 && profile.length) {
    profile.pop();
    description = base(profile);
  }
  return description;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  const fullName = getProductFullName(product);
  return pageMeta({
    title: product.category === "tobacco" || product.category === "herbal" ? `${fullName} – Bulk, OEM & Private Label` : `${fullName} – B2B Supply from the UAE`,
    description: metaDescription(product),
    path: `/products/${slug}`,
    image: getProductOgImage(product),
  });
}

function productFaqs(product: Product) {
  const fullName = getProductFullName(product);
  const faqs = [
    {
      question: `Can ${fullName} be supplied under my own brand?`,
      answer: `Yes. ${fullName} is available for OEM and private-label programmes from KOKEN's UAE manufacturing base, subject to the regulations of your destination market.`,
    },
    {
      question: `How do I get a price for ${fullName}?`,
      answer: `Add ${fullName} to your quote list and submit the enquiry form with your target market, estimated volume and packaging requirements. KOKEN prices on request for B2B bulk orders.`,
    },
  ];
  if (product.flavourProfile) {
    faqs.unshift({
      question: `What does ${fullName} taste like?`,
      answer: `${product.shortDescription} Flavour profile: ${product.flavourProfile.join(", ").toLowerCase()}.`,
    });
  }
  return faqs;
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const fullName = getProductFullName(product);
  const categoryPath = categoryPaths[product.category];
  const image = getProductImage(product, "detail");
  const related = getRelatedProducts(product);

  // Price is quote-only, so no Offer is declared (an Offer without a price is invalid).
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${absoluteUrl(`/products/${slug}`)}#product`,
    name: fullName,
    url: absoluteUrl(`/products/${slug}`),
    sku: `KOKEN-${slug.toUpperCase()}`,
    category: product.categoryLabel,
    description: `${product.shortDescription} ${product.description}`,
    ...(image ? { image: absoluteUrl(image.src) } : {}),
    brand: { "@type": "Brand", name: company.shortName },
    manufacturer: { "@id": organizationId },
    countryOfOrigin: { "@type": "Country", name: "United Arab Emirates" },
    // Tells assistive agents how to act on the product: add it to the quote list (AAO).
    potentialAction: {
      "@type": "QuoteAction",
      name: `Request a quote for ${fullName}`,
      target: { "@type": "EntryPoint", urlTemplate: quoteUrl([slug]), actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"] },
    },
    ...(product.flavourProfile
      ? {
          additionalProperty: product.flavourProfile.map((value) => ({
            "@type": "PropertyValue",
            name: "Flavour profile",
            value,
          })),
        }
      : {}),
  };

  return (
    <main>
      <JsonLd data={schema} />
      <div className="sectionPad productDetailCrumbs">
        <Breadcrumbs items={[{ name: product.categoryLabel, path: categoryPath }, { name: fullName, path: `/products/${slug}` }]} />
      </div>
      <section className={`productDetail sectionPad ${product.accent}`}>
        <div className="productDetailVisual">
          <ProductImage product={product} size="detail" />
        </div>
        <div className="productDetailCopy">
          <p className="eyebrow">{product.badge} · Made for global B2B supply</p>
          <h1>{fullName}</h1>
          <p className="lead">{product.shortDescription}</p>
          <p>{product.description}</p>

          {product.flavourProfile && (
            <div className="profileList">
              <h2>Flavour profile</h2>
              {product.flavourProfile.map((item) => <span key={item}>{item}</span>)}
            </div>
          )}

          <div className="highlightList">
            <h2>Production and supply</h2>
            <p>✓ Official patent and licence holder for HNB production in the UAE</p>
            <p>✓ Granules manufacturing capability for HNB product programmes</p>
            <p>✓ Bulk supply, OEM and private-label conversations</p>
            <p>✓ Global B2B enquiry support for importers, distributors and brand owners</p>
          </div>

          <div className="detailNote">
            <strong>Request a market-specific proposal</strong>
            <span>Share your target market, expected volume and packaging requirements. KOKEN can advise on the appropriate product and manufacturing pathway for your enquiry.</span>
          </div>

          <div className="heroButtons">
            <AddToQuoteButton product={product} label="Add this product to quote" />
            <Link className="linkButton light" href="/quote">Go to quote list</Link>
          </div>
        </div>
      </section>
      <Faq items={productFaqs(product)} title={`${fullName} questions`} />
      {related.length > 0 && (
        <section className="sectionPad productBand">
          <div className="sectionHead">
            <p className="eyebrow">More from the range</p>
            <h2>Related {product.categoryLabel.toLowerCase()}</h2>
            <p>Compare other options or browse the full <Link href={categoryPath}>{product.categoryLabel.toLowerCase()} range</Link>.</p>
          </div>
          <div className="productGrid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
        </section>
      )}
    </main>
  );
}
