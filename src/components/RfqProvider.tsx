"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductBySlug, type Product } from "@/data/products";

type RfqItem = { slug: string; name: string; categoryLabel: string; quantity: number };
type RfqContext = { items: RfqItem[]; addItem: (product: Product) => void; removeItem: (slug: string) => void; updateQuantity: (slug: string, quantity: number) => void; clear: () => void; count: number };
const Context = createContext<RfqContext | null>(null);
const STORAGE_KEY = "koken_rfq_items";

function readSaved(raw: string | null): RfqItem[] {
  try {
    const saved = JSON.parse(raw || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

// Agent deep link (AAO): ?add=slug-a,slug-b&qty=10 adds catalogue products to the saved list.
function withDeepLinkItems(saved: RfqItem[]): RfqItem[] {
  const params = new URLSearchParams(window.location.search);
  const slugs = (params.get("add") || "").split(",").map(s => s.trim()).filter(Boolean);
  if (!slugs.length) return saved;
  const quantity = Math.max(1, Math.floor(Number(params.get("qty")) || 1));
  const items = [...saved];
  for (const slug of slugs) {
    const product = getProductBySlug(slug);
    if (!product || items.some(item => item.slug === slug)) continue;
    items.push({ slug, name: product.name, categoryLabel: product.categoryLabel, quantity });
  }
  // Drop the cart params so a refresh doesn't add the items again; form prefill params stay.
  params.delete("add");
  params.delete("qty");
  const query = params.toString();
  window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  return items;
}

export function RfqProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RfqItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    try {
      setItems(withDeepLinkItems(readSaved(localStorage.getItem(STORAGE_KEY))));
    } catch {
      setItems(withDeepLinkItems([]));
    } finally {
      setHydrated(true);
    }
    // Keep every open tab in sync: the browser fires "storage" in other tabs when the list changes.
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) setItems(readSaved(event.newValue));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage can be unavailable (private mode, blocked site data); the list still works in this tab.
    }
  }, [hydrated, items]);
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
