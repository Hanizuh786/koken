import { notFound } from "next/navigation";
import AddToQuoteButton from "@/components/AddToQuoteButton";
import ProductImage from "@/components/ProductImage";
import { getProductBySlug, products } from "@/data/products";

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
    description: product.shortDescription,
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
    image: `/images/products/${product.slug}.png`,
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
          <p className="eyebrow">{product.badge}</p>
          <h1>{product.name}</h1>
          <p className="lead">{product.shortDescription}</p>
          <p>{product.description}</p>

          {product.flavourProfile && (
            <div className="profileList">
              <h2>Profile</h2>
              {product.flavourProfile.map((item) => <span key={item}>{item}</span>)}
            </div>
          )}

          <div className="highlightList">
            <h2>Business highlights</h2>
            {product.highlights.map((item) => <p key={item}>✓ {item}</p>)}
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
