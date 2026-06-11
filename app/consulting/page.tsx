import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { FormSection } from "@/components/forms/FormSection";
import { SectionHeading } from "@/components/SectionHeading";
import { BRAND } from "@/lib/constants";
import { CONSULTING_SERVICES } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Restaurant Consulting",
  description: `Menu development, kitchen planning, and culinary strategy by ${BRAND.chef}.`,
};

export default function ConsultingPage() {
  return (
    <>
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="sub-label text-brand-gold">Services</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl lg:text-5xl">
              Culinary Consulting
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-brand-cream-muted">
              Strategic culinary support for restaurants, hospitality brands, and food businesses —
              from menu design to kitchen operations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Expertise"
              title="Consulting Services"
              description="Practical, creative guidance grounded in professional kitchen experience and entrepreneurial vision."
            />
          </FadeIn>
          <div className="space-y-4">
            {CONSULTING_SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 60}>
                <article className="card-light gold-border-accent p-6">
                  <h3 className="brand-caps text-sm text-brand-text-dark">{service.title}</h3>
                  <p className="mt-2 font-body text-sm font-light text-stone-600">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12 text-center">
            <p className="font-body text-sm font-light text-stone-600">
              Also exploring ghost kitchen and restaurant concepts under{" "}
              {BRAND.legal} —{" "}
              <Link href="/contact?type=general" className="text-brand-gold hover:underline">
                get in touch
              </Link>{" "}
              to discuss partnerships.
            </p>
          </FadeIn>
        </div>
      </section>

      <FormSection
        title="Start a Consulting Conversation"
        description="Share your project scope and goals — we will follow up to discuss how we can help."
        defaultType="consulting"
        sourcePage="/consulting"
        submitLabel="Request Consulting Inquiry"
        showEventFields={false}
      />
    </>
  );
}
