"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
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
  const touchStartX = useRef<number | null>(null);

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

  const recipeSlug = item?.recipeSlug;

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = touchEndX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  }

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-4 motion-reduce:animate-none"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — image viewer`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/50 bg-brand-bg/60 font-body text-2xl text-brand-cream backdrop-blur-sm transition-colors hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:right-6 md:top-6"
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
          className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-cream backdrop-blur-sm transition-colors hover:border-brand-gold hover:bg-brand-gold/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:h-14 md:w-14"
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
          className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-cream backdrop-blur-sm transition-colors hover:border-brand-gold hover:bg-brand-gold/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:h-14 md:w-14"
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div
        className="lightbox-enter relative max-h-[85vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="border border-brand-gold/40 bg-brand-gold/10 px-2.5 py-1 font-body text-[10px] uppercase tracking-wide text-brand-gold"
              >
                {formatTagLabel(tag)}
              </span>
            ))}
          </div>
          {recipeSlug && (
            <Link
              href={`/recipes/${recipeSlug}`}
              className="btn-primary mt-5 inline-flex items-center gap-2 text-xs"
            >
              View Recipe
            </Link>
          )}
          <p className="mt-4 font-body text-xs text-brand-text-muted">
            {index + 1} of {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}
