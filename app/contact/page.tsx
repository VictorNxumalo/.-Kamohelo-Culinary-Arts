import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Icon, IconBox } from "@/components/icons/Icon";
import { Logo } from "@/components/Logo";
import { BRAND, CONTACT, CONTACT_TIPS, INQUIRY_TYPES } from "@/lib/constants";
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

              <div className="mt-10 flex flex-col items-stretch justify-center gap-6 border-y border-black/5 py-10 md:flex-row md:items-center md:gap-8">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex flex-1 items-center gap-4 transition-colors duration-300"
                >
                  <IconBox name="mail" className="mb-0" />
                  <div className="text-left">
                    <span className="sub-label text-brand-gold">Email</span>
                    <p className="mt-1 font-body text-sm text-brand-text-dark group-hover:text-brand-gold">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>
                <div className="hidden h-12 w-px bg-black/10 md:block" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="group flex flex-1 items-center gap-4"
                >
                  <IconBox name="phone" className="mb-0" />
                  <div className="text-left">
                    <span className="sub-label text-brand-gold">Phone</span>
                    <p className="mt-1 font-body text-sm text-brand-text-dark group-hover:text-brand-gold">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-12">
                <h3 className="brand-caps text-center text-xs text-brand-text-dark">
                  How Can We Help?
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {INQUIRY_TYPES.map((item) => (
                    <Link
                      key={item.type}
                      href={`/contact?type=${item.type}`}
                      className="card-light group flex items-start gap-4 border border-black/5 p-4 transition-colors hover:border-brand-gold/40"
                    >
                      <IconBox name={item.icon} className="mb-0 h-10 w-10" size={18} />
                      <div>
                        <h4 className="brand-caps text-xs text-brand-text-dark group-hover:text-brand-gold">
                          {item.title}
                        </h4>
                        <p className="mt-1 font-body text-xs font-light text-stone-600">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
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
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {CONTACT_TIPS.map((tip) => (
                    <li
                      key={tip.text}
                      className="flex items-center justify-center gap-2 text-center font-body text-sm font-light text-stone-600 sm:justify-start"
                    >
                      <Icon name={tip.icon} size={16} className="shrink-0 text-brand-gold" />
                      {tip.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
