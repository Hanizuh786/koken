"use client";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useRfq } from "./RfqProvider";
export default function AddToQuoteButton({ product, label = "Add to quote" }: { product: Product; label?: string }) {
  const { addItem } = useRfq();
  const [added, setAdded] = useState(false);
  function handleAdd() {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }
  return <button type="button" className="linkButton primary" onClick={handleAdd}>{added ? "Added ✓" : label}</button>;
}
