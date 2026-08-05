"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

type RfqItem = { slug: string; name: string; categoryLabel: string; quantity: number };
type RfqContext = { items: RfqItem[]; addItem: (product: Product) => void; removeItem: (slug: string) => void; updateQuantity: (slug: string, quantity: number) => void; clear: () => void; count: number };
const Context = createContext<RfqContext | null>(null);

export function RfqProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RfqItem[]>([]);
  useEffect(() => { setItems(JSON.parse(localStorage.getItem("koken_rfq_items") || "[]")); }, []);
  useEffect(() => { localStorage.setItem("koken_rfq_items", JSON.stringify(items)); }, [items]);
  const addItem = (product: Product) => setItems(prev => {
    const found = prev.find(item => item.slug === product.slug);
    if (found) return prev.map(item => item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item);
    return [...prev, { slug: product.slug, name: product.name, categoryLabel: product.categoryLabel, quantity: 1 }];
  });
  const removeItem = (slug: string) => setItems(prev => prev.filter(item => item.slug !== slug));
  const updateQuantity = (slug: string, quantity: number) => setItems(prev => prev.map(item => item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item));
  const clear = () => setItems([]);
  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  return <Context.Provider value={{ items, addItem, removeItem, updateQuantity, clear, count }}>{children}</Context.Provider>;
}
export function useRfq() { const ctx = useContext(Context); if (!ctx) throw new Error("useRfq must be used inside RfqProvider"); return ctx; }
