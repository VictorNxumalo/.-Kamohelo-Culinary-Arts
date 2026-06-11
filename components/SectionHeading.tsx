type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** @deprecated All sections are dark — kept for API compatibility */
  dark?: boolean;
  align?: "left" | "center";
  animateRule?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  animateRule = true,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="sub-label mb-4 text-brand-gold">{eyebrow}</p>
      )}
      <h2 className="brand-caps text-2xl font-light text-brand-cream md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-6 ${align === "center" ? "mx-auto" : ""} ${
          animateRule ? "gold-rule-animate" : "gold-rule"
        }`}
      />
      {description && (
        <p className="mt-6 font-body text-base font-light leading-relaxed text-brand-cream-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
