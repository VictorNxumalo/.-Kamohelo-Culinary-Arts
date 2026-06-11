"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import type { GalleryItem } from "@/lib/gallery";
import { formatTagLabel } from "@/lib/gallery";

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — image viewer`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 font-body text-3xl text-brand-cream transition-colors hover:text-brand-gold"
        aria-label="Close lightbox"
      >
        ×
      </button>

      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4 md:px-8">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-cream backdrop-blur-sm transition-colors hover:bg-brand-gold/30 md:h-14 md:w-14"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-cream backdrop-blur-sm transition-colors hover:bg-brand-gold/30 md:h-14 md:w-14"
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div
        className="relative max-h-[85vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto aspect-[4/3] max-h-[70vh] w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
        <div className="mt-6 text-center">
          <h3 className="brand-caps text-lg text-brand-cream">{item.title}</h3>
          <p className="mt-2 font-body text-sm font-light text-brand-cream-muted">
            {item.description}
          </p>
          <p className="mt-3 font-body text-xs text-brand-text-muted">
            {item.tags.map(formatTagLabel).join(" · ")}
          </p>
          <p className="mt-2 font-body text-xs text-brand-text-muted">
            {index + 1} of {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}
