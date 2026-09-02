"use client";

import { useState } from "react";
import { getProductImagePath, type Product } from "@/data/products";

export default function ProductImage({ product, size = "card" }: { product: Product; size?: "card" | "detail" }) {
  const [failed, setFailed] = useState(false);
  const imagePath = getProductImagePath(product, size);

  if (failed) {
    return (
      <div className={`productVisual fallbackVisual ${product.accent} ${size === "detail" ? "detailFallback" : "thumbnailFallback"}`}>
        <span>{product.categoryLabel}</span>
        <strong>{product.name}</strong>
      </div>
    );
  }

  return (
    <div className={`productImageWrap ${size === "detail" ? "detailImageWrap" : "thumbnailImageWrap"}`}>
      <img src={imagePath} alt={`${product.name} ${product.categoryLabel} product image`} onError={() => setFailed(true)} />
    </div>
  );
}
