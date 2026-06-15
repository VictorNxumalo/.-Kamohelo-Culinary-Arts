import { Icon } from "@/components/icons/Icon";
import { SERVICE_AREA, TRUST_STRIP } from "@/lib/constants";

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <p className="mb-4 text-center font-body text-sm font-light text-brand-cream-muted md:mb-0 md:hidden">
          {SERVICE_AREA}
        </p>
        <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-center md:gap-0">
          {TRUST_STRIP.map((item, i) => (
            <div key={item.text} className="contents md:flex md:items-center">
              {i > 0 && <div className="trust-strip-divider" aria-hidden="true" />}
              <div className="trust-strip-item">
                <Icon name={item.icon} size={18} className="shrink-0 text-brand-gold" />
                <span className="sub-label text-[10px] text-brand-cream md:text-xs">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 hidden text-center font-body text-sm font-light text-brand-cream-muted md:block">
          {SERVICE_AREA}
        </p>
      </div>
    </div>
  );
}
