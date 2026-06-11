import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { FormSection } from "@/components/forms/FormSection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { BRAND } from "@/lib/constants";
import { GALLERY_ITEMS } from "@/lib/gallery";
import { CATERING_EVENT_TYPES, CATERING_FORMATS } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Catering Services",
  description: `Elevated catering for weddings, corporate events, and private functions by ${BRAND.chef}.`,
};

const CATERING_GALLERY = GALLERY_ITEMS.filter((item) =>
  item.tags.includes("catering-events")
);

export default function CateringPage() {
  return (
    <>
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="sub-label text-brand-gold">Services</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Catering
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              Memorable food and flawless service for weddings, corporate events, and private
              celebrations across South Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Events"
              title="Event Types"
              description="Tailored catering for occasions of every scale and style."
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {CATERING_EVENT_TYPES.map((event, i) => (
              <FadeIn key={event.title} delay={i * 60}>
                <FeatureCard
                  icon={event.icon}
                  title={event.title}
                  description={event.description}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light border-t border-black/5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Formats"
              title="Catering Styles"
              description="From passed canapés to full fine dining service — we match the format to your event."
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATERING_FORMATS.map((format, i) => (
              <FadeIn key={format.title} delay={i * 60}>
                <FeatureCard
                  icon={format.icon}
                  title={format.title}
                  description={format.description}
                  titleClassName="brand-caps text-xs text-brand-gold"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {CATERING_GALLERY.length > 0 && (
        <section className="section-dark py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <SectionHeading
                eyebrow="Gallery"
                title="Event & Catering Creations"
                description="A selection of platters and presentations suited to events and gatherings."
                dark
              />
            </FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CATERING_GALLERY.map((item, i) => (
                <FadeIn key={item.id} delay={i * 80}>
                  <figure className="group relative aspect-[4/3] overflow-hidden bg-brand-surface">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div>
                        <span className="brand-caps text-xs text-brand-cream">{item.title}</span>
                        <p className="mt-1 font-body text-xs text-brand-cream-muted">
                          {item.description}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <FormSection
        title="Request a Catering Quote"
        description="Tell us about your event and we will provide a tailored catering proposal."
        defaultType="catering"
        sourcePage="/catering"
        submitLabel="Request Catering Quote"
      />
    </>
  );
}
