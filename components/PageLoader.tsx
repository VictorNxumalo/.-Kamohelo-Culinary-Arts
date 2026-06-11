"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

export function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 900);
    const doneTimer = setTimeout(() => setPhase("done"), 1600);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-grain transition-all duration-700 ease-premium ${
        phase === "exit" ? "pointer-events-none scale-105 opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="hero-glow-orb hero-glow-orb--gold !top-1/4 !right-1/4 opacity-60" />
      <div className="relative mb-8 animate-float">
        <Logo variant="mark-only" className="h-16 w-16 shadow-gold" />
      </div>
      <p className="brand-caps text-sm text-brand-gold md:text-base">Kamohelo</p>
      <p className="sub-label mt-2 text-brand-cream-muted">Culinary Arts</p>
      <div className="mt-10 h-px w-24 overflow-hidden bg-white/10">
        <div className="h-full w-1/2 animate-[shimmer_1.2s_ease-in-out_infinite] bg-brand-gold" />
      </div>
    </div>
  );
}
