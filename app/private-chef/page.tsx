import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { FormSection } from "@/components/forms/FormSection";
import { IconBox } from "@/components/icons/Icon";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { BRAND } from "@/lib/constants";
import {
  BOOKING_STEPS,
  PRIVATE_CHEF_SERVICES,
  SAMPLE_MENUS,
} from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Private Chef Services",
  description: `Luxury in-home private dining by ${BRAND.chef}. Custom menus, intimate gatherings, and special occasions.`,
};

export default function PrivateChefPage() {
  return (
    <>
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="sub-label text-brand-gold">Services</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Private Chef
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              Luxury dining experiences in your home — bespoke menus, refined service, and
              unforgettable occasions crafted with precision.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Offer"
              title="Private Dining Services"
              description="From romantic dinners to corporate gatherings — every experience is tailored to you."
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRIVATE_CHEF_SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 60}>
                <FeatureCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  className="border-l-2 border-brand-gold/40"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title="How It Works"
              description="A seamless journey from first conversation to the final course."
              dark
            />
          </FadeIn>
          <div className="space-y-8">
            {BOOKING_STEPS.map((step, i) => (
              <FadeIn key={step.title} delay={i * 80}>
                <article className="card-dark flex gap-6 p-6 md:p-8">
                  <IconBox name={step.icon} variant="dark" className="mb-0 h-12 w-12" />
                  <div>
                    <span className="sub-label text-brand-text-muted">{step.step}</span>
                    <h3 className="brand-caps text-sm text-brand-cream">{step.title}</h3>
                    <p className="mt-2 font-body text-sm font-light text-brand-cream-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Menus"
              title="Sample Dining Packages"
              description="Examples of private dining formats — every menu is customised to your preferences."
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {SAMPLE_MENUS.map((menu, i) => (
              <FadeIn key={menu.name} delay={i * 80}>
                <article className="card-light group h-full p-6">
                  <IconBox name={menu.icon} className="mb-4" size={20} />
                  <h3 className="brand-caps text-sm text-brand-gold">{menu.name}</h3>
                  <p className="mt-2 font-body text-xs text-stone-500">{menu.courses}</p>
                  <ul className="mt-4 space-y-2 border-t border-black/5 pt-4">
                    {menu.highlights.map((item) => (
                      <li key={item} className="font-body text-sm font-light text-stone-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FormSection
        title="Book a Private Chef Experience"
        description="Share your event details and we will craft a bespoke dining proposal for you."
        defaultType="private-chef"
        sourcePage="/private-chef"
        submitLabel="Request Private Chef Booking"
      />
    </>
  );
}
