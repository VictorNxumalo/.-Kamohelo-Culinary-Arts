import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Logo } from "@/components/Logo";
import { BRAND, CONTACT } from "@/lib/constants";

const FOOTER_EXPLORE = [
  { href: "/portfolio", label: "Portfolio", icon: "images" as const },
  { href: "/craft", label: "Craft", icon: "knife" as const },
  { href: "/recipes", label: "Recipes", icon: "recipe" as const },
  { href: "/techniques", label: "Techniques", icon: "technique" as const },
  { href: "/blog", label: "Journal", icon: "newspaper" as const },
  { href: "/ai", label: "Ask Chef", icon: "spark" as const },
  { href: "/businesses", label: "Ventures", icon: "building" as const },
  { href: "/concepts", label: "Concepts", icon: "flame" as const },
];

const FOOTER_SERVICES = [
  { href: "/private-chef", label: "Private Chef", icon: "chef-hat" as const },
  { href: "/catering", label: "Catering", icon: "events" as const },
  { href: "/consulting", label: "Consulting", icon: "consult" as const },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo variant="full" className="h-9 md:h-10" />
            <p className="sub-label mt-3 text-brand-cream-muted">Culinary Arts</p>
            <p className="mt-4 max-w-sm font-body text-sm font-light leading-relaxed text-brand-text-muted">
              {BRAND.chef} — premium culinary experiences and hospitality ventures.
            </p>
            <p className="mt-6 font-body text-xs text-brand-text-muted">
              © {year} {BRAND.legal}. All rights reserved.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="sub-label mb-4 text-brand-gold">Explore</p>
              <nav className="flex flex-col gap-2.5" aria-label="Explore">
                {FOOTER_EXPLORE.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link inline-flex items-center gap-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
                  >
                    <Icon name={link.icon} size={12} className="text-brand-gold/80" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="sub-label mb-4 text-brand-gold">Services</p>
              <nav className="flex flex-col gap-2.5" aria-label="Services">
                {FOOTER_SERVICES.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link inline-flex items-center gap-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
                  >
                    <Icon name={link.icon} size={12} className="text-brand-gold/80" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="sub-label mb-4 text-brand-gold">Connect</p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="nav-link inline-flex items-center gap-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
                >
                  <Icon name="mail" size={12} className="text-brand-gold/80" />
                  Contact
                </Link>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 font-body text-xs text-brand-cream-muted transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
                >
                  <Icon name="mail" size={14} />
                  {CONTACT.email}
                </a>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 font-body text-xs text-brand-cream-muted transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
                >
                  <Icon name="phone" size={14} />
                  {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs text-brand-cream-muted transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
                  aria-label="Instagram"
                >
                  <Icon name="instagram" size={14} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="gold-rule-wide mt-12" />
      </div>
    </footer>
  );
}
