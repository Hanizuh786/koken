"use client";
import type { Product } from "@/data/products";
import { useRfq } from "./RfqProvider";
export default function AddToQuoteButton({ product, label = "Add to quote" }: { product: Product; label?: string }) {
  const { addItem } = useRfq();
  return <button className="linkButton primary" onClick={() => addItem(product)}>{label}</button>;
}
