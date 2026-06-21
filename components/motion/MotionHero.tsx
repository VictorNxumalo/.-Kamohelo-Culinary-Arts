import type { ReactNode } from "react";
import { AmbientMedia } from "@/components/motion/AmbientMedia";
import type { MotionHeroConfig, MotionOverlay } from "@/lib/motion";

type MotionHeroProps = {
  config: MotionHeroConfig;
  children: ReactNode;
  align?: "center" | "end";
  size?: "default" | "tall" | "cinematic";
  className?: string;
};

const SIZE_CLASSES = {
  default: "min-h-[44vh]",
  tall: "min-h-[52vh] md:min-h-[58vh]",
  cinematic: "min-h-[58vh] md:min-h-[64vh]",
} as const;

const OVERLAY_CLASSES: Record<MotionOverlay, string> = {
  cinematic: "bg-gradient-to-t from-brand-bg via-brand-bg/80 to-brand-bg/35",
  bottom: "bg-gradient-to-t from-brand-bg via-brand-bg/88 to-brand-bg/55",
  balanced: "bg-gradient-to-br from-brand-bg/95 via-brand-bg/78 to-brand-bg/50",
};

export function MotionHero({
  config,
  children,
  align = "end",
  size = "default",
  className = "",
}: MotionHeroProps) {
  const overlay = config.overlay ?? "balanced";
  const heightClass = SIZE_CLASSES[size];

  return (
    <section className={`section-dark relative overflow-hidden ${heightClass} ${className}`}>
      <div className="absolute inset-0">
        <AmbientMedia {...config} className="h-full w-full" priority />
        <div className={`absolute inset-0 ${OVERLAY_CLASSES[overlay]}`} />
      </div>

      <div
        className={`relative z-10 flex ${heightClass} flex-col px-6 pb-14 pt-20 md:pb-20 md:pt-24 ${
          align === "end" ? "justify-end" : "justify-center"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </div>
    </section>
  );
}
