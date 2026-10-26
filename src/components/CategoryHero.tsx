import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import { absoluteUrl, type Crumb } from "@/lib/site";
import { getProductFullName, type Product } from "@/data/products";

export default function CategoryHero({
  crumb,
  eyebrow,
  title,
  answer,
  children,
  products = [],
}: {
  crumb: Crumb;
  eyebrow: string;
  title: string;
  answer: string;
  children?: React.ReactNode;
  products?: Product[];
}) {
  const itemList = products.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: crumb.name,
        url: absoluteUrl(crumb.path),
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: getProductFullName(product),
          url: absoluteUrl(`/products/${product.slug}`),
        })),
      }
    : null;
  return (
    <section className="pageHero sectionPad">
      {itemList && <JsonLd data={itemList} />}
      <Breadcrumbs items={[crumb]} />
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="answerBox">
        <p>{answer}</p>
      </div>
      {children}
    </section>
  );
}
