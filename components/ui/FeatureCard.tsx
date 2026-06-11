import type { IconName } from "@/lib/icons";
import { IconBox } from "@/components/icons/Icon";

type FeatureCardProps = {
  icon: IconName;
  title: string;
  description: string;
  className?: string;
  variant?: "light" | "dark";
  titleClassName?: string;
  descriptionClassName?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
  variant = "light",
  titleClassName = "brand-caps text-sm text-brand-text-dark",
  descriptionClassName = "mt-3 font-body text-sm font-light leading-relaxed text-stone-600",
}: FeatureCardProps) {
  const cardClass = variant === "dark" ? "card-dark group p-6" : "card-light group p-6";

  return (
    <article className={`${cardClass} h-full ${className}`}>
      <IconBox name={icon} variant={variant} />
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </article>
  );
}
