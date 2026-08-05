import Link from "next/link";
import type { Product } from "@/data/products";
import AddToQuoteButton from "./AddToQuoteButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`productCard ${product.accent}`}>
      <div className="productVisual">
        <span>{product.categoryLabel}</span>
      </div>
      <span className="tag">{product.badge}</span>
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <div className="cardActions">
        <Link className="linkButton light" href={`/products/${product.slug}`}>View details</Link>
        <AddToQuoteButton product={product} />
      </div>
    </article>
  );
}
