import { FadeIn } from "@/components/FadeIn";
import { InquiryForm } from "@/components/forms/InquiryForm";
import type { InquiryType } from "@/lib/inquiry";

type FormSectionProps = {
  title: string;
  description: string;
  defaultType: InquiryType;
  sourcePage: string;
  submitLabel?: string;
  dark?: boolean;
  showEventFields?: boolean;
};

export function FormSection({
  title,
  description,
  defaultType,
  sourcePage,
  submitLabel,
  dark = false,
  showEventFields = true,
}: FormSectionProps) {
  return (
    <section className={dark ? "section-dark py-20 md:py-24" : "section-light py-20 md:py-24"}>
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <h2
            className={`brand-caps text-center text-xl md:text-2xl ${
              dark ? "text-brand-cream" : "text-brand-text-dark"
            }`}
          >
            {title}
          </h2>
          <div className="gold-rule-wide mt-6" />
          <p
            className={`mx-auto mt-6 max-w-lg text-center font-body text-sm font-light ${
              dark ? "text-brand-cream-muted" : "text-stone-600"
            }`}
          >
            {description}
          </p>
          <div className="card-light mt-10 p-8 md:p-10">
            <InquiryForm
              defaultType={defaultType}
              sourcePage={sourcePage}
              submitLabel={submitLabel}
              showEventFields={showEventFields}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
