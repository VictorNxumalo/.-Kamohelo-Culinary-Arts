"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { useNav } from "@/components/layout/NavContext";
import { Logo } from "@/components/Logo";
import { NAV_LINKS, SERVICE_LINKS } from "@/lib/constants";

function isServicePath(pathname: string) {
  return SERVICE_LINKS.some((link) => pathname === link.href);
}

function isVenturesPath(pathname: string) {
  return pathname === "/businesses" || pathname === "/concepts";
}

function isJournalPath(pathname: string) {
  return pathname === "/blog" || pathname.startsWith("/blog/");
}

function isRecipesPath(pathname: string) {
  return pathname === "/recipes" || pathname.startsWith("/recipes/");
}

export function Header() {
  const pathname = usePathname();
  const { mobileOpen, setMobileOpen } = useNav();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname, setMobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-brand-bg/90 backdrop-blur-md transition-all duration-500 ease-premium ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-all duration-500 ease-premium ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Logo variant="full" priority />

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link tap-scale ${pathname === link.href ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`nav-link tap-scale flex items-center gap-1 ${
                isServicePath(pathname) ? "nav-link-active" : ""
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <span
                className={`text-[10px] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            <div
              className={`absolute left-0 top-full z-50 min-w-[220px] origin-top border border-white/10 bg-brand-surface/95 py-2 shadow-card-lift backdrop-blur-xl transition-all duration-300 ease-premium ${
                servicesOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
            >
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-5 py-2.5 font-display text-xs font-light uppercase tracking-wide text-brand-cream transition-colors duration-300 hover:bg-brand-gold/10 hover:text-brand-gold"
                >
                  <Icon name={link.icon} size={14} className="text-brand-gold" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {NAV_LINKS.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link tap-scale ${
                pathname === link.href ||
                (link.href === "/portfolio" && pathname === "/portfolio") ||
                (link.href === "/businesses" && isVenturesPath(pathname)) ||
                (link.href === "/blog" && isJournalPath(pathname)) ||
                (link.href === "/recipes" && isRecipesPath(pathname))
                  ? "nav-link-active"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact?type=private-chef"
            className="btn-primary-solid shrink-0 px-5 py-2.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
          >
            Book Now
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact?type=private-chef"
            className="btn-primary-solid px-4 py-2 text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            Book
          </Link>
          <button
            type="button"
            className="tap-scale flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav-panel ${mobileOpen ? "mobile-nav-panel--open" : "mobile-nav-panel--closed"}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="flex min-h-0 flex-col overflow-hidden">
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link tap-scale flex items-center gap-3 py-3 transition-all duration-500 ${
                    pathname === link.href ||
                    (link.href === "/businesses" && isVenturesPath(pathname)) ||
                    (link.href === "/blog" && isJournalPath(pathname)) ||
                    (link.href === "/recipes" && isRecipesPath(pathname))
                      ? "nav-link-active"
                      : ""
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon name={link.icon} size={16} className="text-brand-gold" />
                  {link.label}
                </Link>
              ))}
              <p className="sub-label pt-4 text-brand-text-muted">Services</p>
              {SERVICE_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link tap-scale flex items-center gap-3 py-3 pl-4 ${pathname === link.href ? "nav-link-active" : ""}`}
                  style={{ transitionDelay: mobileOpen ? `${(NAV_LINKS.length + i) * 40}ms` : "0ms" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon name={link.icon} size={16} className="text-brand-gold" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="shrink-0 border-t border-white/10 bg-brand-surface/95 px-6 py-4">
            <Link
              href="/contact?type=private-chef"
              className="btn-primary-solid flex w-full items-center justify-center gap-2 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              onClick={() => setMobileOpen(false)}
            >
              <Icon name="chef-hat" size={16} />
              Book Private Chef
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
