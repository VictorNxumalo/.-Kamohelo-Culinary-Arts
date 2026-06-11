import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Logo } from "@/components/Logo";
import { BRAND, CONTACT } from "@/lib/constants";
import { normalizeInquiryType } from "@/lib/inquiry";

export const metadata: Metadata = {
  title: "Contact & Bookings",
  description: `Contact ${BRAND.chef} for private chef bookings, catering inquiries, and culinary consulting.`,
};

type ContactPageProps = {
  searchParams: Promise<{ type?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultType = normalizeInquiryType(params.type);

  return (
    <>
      <section className="section-dark py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
          <FadeIn>
            <Logo variant="mark-only" className="mx-auto mb-6 h-14 w-14" />
            <p className="sub-label text-brand-gold">Contact</p>
            <h1 className="brand-caps mt-4 text-3xl font-light text-brand-cream md:text-4xl">
              Contact & Bookings
            </h1>
            <div className="gold-rule-wide mt-6" />
            <p className="mx-auto mt-6 max-w-xl font-body text-base font-light text-brand-cream-muted">
              Ready to create an unforgettable dining experience? Reach out to discuss your event,
              menu preferences, and how we can bring your vision to the table.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-dark pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="card-light rounded-none p-8 md:p-12">
              <div className="text-center">
                <h2 className="brand-caps text-lg text-brand-text-dark">Get in Touch</h2>
                <p className="mx-auto mt-4 max-w-lg font-body text-sm font-light text-stone-600">
                  For inquiries about private dining, catering, consulting, or collaborations.
                  I typically respond within 24–48 hours.
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-8 border-y border-black/5 py-10 md:flex-row md:gap-16">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group text-center transition-colors duration-300"
                >
                  <span className="sub-label text-brand-gold">Email</span>
                  <p className="mt-2 font-body text-sm text-brand-text-dark group-hover:text-brand-gold">
                    {CONTACT.email}
                  </p>
                </a>
                <div className="hidden h-12 w-px bg-black/10 md:block" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="group text-center">
                  <span className="sub-label text-brand-gold">Phone</span>
                  <p className="mt-2 font-body text-sm text-brand-text-dark group-hover:text-brand-gold">
                    {CONTACT.phone}
                  </p>
                </a>
              </div>

              <div className="mt-12">
                <InquiryForm
                  defaultType={defaultType}
                  sourcePage="/contact"
                  submitLabel="Send Inquiry"
                />
              </div>

              <div className="mt-12 border-t border-black/5 pt-10">
                <h4 className="brand-caps text-center text-xs text-brand-text-dark">
                  What to Include
                </h4>
                <ul className="mt-6 grid gap-4 text-center font-body text-sm font-light text-stone-600 sm:grid-cols-2">
                  <li>Event date & type</li>
                  <li>Approximate guest count</li>
                  <li>Location & venue</li>
                  <li>Dietary preferences or themes</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
