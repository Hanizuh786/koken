// Fires a GA4 event when gtag is loaded (see components/Analytics); no-op otherwise.
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", name, params);
}
