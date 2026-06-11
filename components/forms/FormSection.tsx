import { FadeIn } from "@/components/FadeIn";
import { InquiryForm } from "@/components/forms/InquiryForm";
import type { InquiryType } from "@/lib/inquiry";

type FormSectionProps = {
  title: string;
  description: string;
  defaultType: InquiryType;
  sourcePage: string;
  submitLabel?: string;
  /** @deprecated All form sections use dark styling */
  dark?: boolean;
  showEventFields?: boolean;
};

export function FormSection({
  title,
  description,
  defaultType,
  sourcePage,
  submitLabel,
  showEventFields = true,
}: FormSectionProps) {
  return (
    <section className="section-dark py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <h2 className="brand-caps text-center text-xl text-brand-cream md:text-2xl">
            {title}
          </h2>
          <div className="gold-rule-wide mt-6" />
          <p className="mx-auto mt-6 max-w-lg text-center font-body text-sm font-light text-brand-cream-muted">
            {description}
          </p>
          <div className="card-dark mt-10 p-8 md:p-10">
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
