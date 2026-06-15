import Link from "next/link";
import { Icon, IconBox } from "@/components/icons/Icon";
import type { IconName } from "@/lib/icons";

type ComingSoonCardProps = {
  icon?: IconName;
  title?: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function ComingSoonCard({
  icon = "spark",
  title = "Coming Soon",
  description,
  primaryCta,
  secondaryCta,
}: ComingSoonCardProps) {
  return (
    <div className="card-light mx-auto max-w-xl p-10 text-center">
      <IconBox name={icon} className="mx-auto mb-6" size={22} />
      <p className="sub-label text-brand-gold">{title}</p>
      <p className="mt-4 font-body text-base font-light leading-relaxed text-brand-cream-muted">
        {description}
      </p>
      {(primaryCta || secondaryCta) && (
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {primaryCta && (
            <Link href={primaryCta.href} className="btn-primary-solid inline-flex items-center justify-center gap-2">
              <Icon name="mail" size={16} />
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary inline-flex items-center justify-center gap-2">
              <Icon name="spark" size={16} />
              {secondaryCta.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
