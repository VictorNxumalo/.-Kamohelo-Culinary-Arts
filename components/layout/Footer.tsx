import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Logo } from "@/components/Logo";
import { BRAND, CONTACT, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <Logo variant="full" className="h-9 md:h-10" />
            <p className="sub-label mt-3 text-brand-cream-muted">Culinary Arts</p>
            <p className="mt-4 max-w-sm font-body text-sm font-light text-brand-text-muted">
              {BRAND.chef} — premium culinary experiences and hospitality ventures.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 font-body text-xs text-brand-cream-muted transition-colors hover:text-brand-gold"
              >
                <Icon name="mail" size={14} />
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 font-body text-xs text-brand-cream-muted transition-colors hover:text-brand-gold"
              >
                <Icon name="phone" size={14} />
                {CONTACT.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link inline-flex items-center gap-1.5 text-xs"
                >
                  <Icon name={link.icon} size={12} className="text-brand-gold/80" />
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-cream-muted transition-colors duration-300 hover:text-brand-gold"
              aria-label="Instagram"
            >
              <Icon name="instagram" size={18} />
              <span className="font-body text-xs">Follow on Instagram</span>
            </a>
          </div>
        </div>

        <div className="gold-rule-wide mt-12" />

        <p className="mt-8 text-center font-body text-xs text-brand-text-muted">
          © {year} {BRAND.legal}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
