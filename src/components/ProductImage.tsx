"use client";

import { useState } from "react";
import { getProductFullName, getProductImage, type Product } from "@/data/products";

export default function ProductImage({ product, size = "card" }: { product: Product; size?: "card" | "detail" }) {
  const [failed, setFailed] = useState(false);
  const image = getProductImage(product, size);
  const isDetail = size === "detail";

  if (!image || failed) {
    return (
      <div className={`productVisual fallbackVisual ${product.accent} ${isDetail ? "detailFallback" : "thumbnailFallback"}`}>
        <span>{product.categoryLabel}</span>
        <strong>{product.name}</strong>
      </div>
    );
  }

  return (
    <div className={`productImageWrap ${isDetail ? "detailImageWrap" : "thumbnailImageWrap"}`}>
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={`KOKEN ${getProductFullName(product)} pack`}
        // The detail image is the LCP element; card images sit below the fold.
        loading={isDetail ? "eager" : "lazy"}
        fetchPriority={isDetail ? "high" : "auto"}
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
