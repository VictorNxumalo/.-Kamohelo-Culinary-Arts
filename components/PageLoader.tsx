"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-grain transition-opacity duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="mb-8 h-12 w-12 animate-spin rounded-full border-2 border-brand-gold/20 border-t-brand-gold" />
      <p className="brand-caps text-sm text-brand-gold md:text-base">Kamohelo</p>
      <p className="sub-label mt-2 text-brand-cream-muted">Culinary Arts</p>
    </div>
  );
}
