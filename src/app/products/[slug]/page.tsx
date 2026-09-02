import { notFound } from "next/navigation";
import AddToQuoteButton from "@/components/AddToQuoteButton";
import ProductImage from "@/components/ProductImage";
import { getProductBySlug, getProductImagePath, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: `${product.name} | ${product.categoryLabel}`,
    description: `${product.name} ${product.categoryLabel} from KOKEN International FZ-LLC, UAE. Explore product specifications, flavour direction and global B2B manufacturing enquiry options.`,
    keywords: [product.name, product.categoryLabel, "HNB manufacturer UAE", "granules manufacturing", "OEM HNB production", "global B2B supply"],
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: product.categoryLabel,
    description: product.shortDescription,
    image: getProductImagePath(product, "detail"),
    brand: { "@type": "Brand", name: "KOKEN International FZ-LLC" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Price on request for B2B bulk quote enquiries",
      },
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={`productDetail sectionPad ${product.accent}`}>
        <div className="productDetailVisual">
          <ProductImage product={product} size="detail" />
        </div>
        <div className="productDetailCopy">
          <p className="eyebrow">{product.badge} · Made for global B2B supply</p>
          <h1>{product.name}</h1>
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
            <a className="linkButton light" href="/quote">Go to quote list</a>
          </div>
        </div>
      </section>
    </main>
  );
}
