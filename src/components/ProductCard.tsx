import Link from "next/link";
import { getProductFullName, type Product } from "@/data/products";
import AddToQuoteButton from "./AddToQuoteButton";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`productCard ${product.category} ${product.accent}`}>
      <ProductImage product={product} />
      <span className="tag">{product.badge}</span>
      <h3>{getProductFullName(product)}</h3>
      <p>{product.shortDescription}</p>
      <div className="cardActions">
        <Link className="linkButton light" href={`/products/${product.slug}`}>View details<span className="srOnly"> for {getProductFullName(product)}</span></Link>
        <AddToQuoteButton product={product} />
      </div>
    </article>
  );
}
