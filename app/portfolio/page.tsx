import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BRAND } from "@/lib/constants";
import { GALLERY_ITEMS } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Culinary Portfolio",
  description: `A visual journey through signature dishes and plated creations by ${BRAND.chef}.`,
};

const FEATURED_ITEM = GALLERY_ITEMS.find((item) => item.featured) ?? GALLERY_ITEMS[0];

export default function PortfolioPage() {
  return (
    <>
      <section className="section-dark relative min-h-[50vh] overflow-hidden py-20 md:min-h-[55vh] md:py-28">
        <div className="absolute inset-0">
          <Image
            src={FEATURED_ITEM.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/75 to-brand-bg/40" />
        </div>
        <div className="relative mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-end px-6">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Portfolio" },
              ]}
            />
            <p className="sub-label text-brand-gold">Signature Creations</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Culinary Portfolio
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-brand-cream-muted md:text-lg">
              A visual journey through culinary creations — technique, artistry, and passion on every plate.
            </p>
            <p className="mt-4 sub-label text-brand-cream-muted">
              Featured: {FEATURED_ITEM.title}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <GalleryGrid />
        </div>
      </section>

      <section className="section-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-body text-base font-light text-brand-cream-muted">
              Ready to bring this level of craft to your table?
            </p>
            <Link href="/contact?type=private-chef" className="btn-primary-solid mt-8">
              Book a Culinary Experience
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
