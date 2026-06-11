"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-brand-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo variant="full" priority />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}
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
              className={`nav-link flex items-center gap-1 ${
                isServicePath(pathname) ? "nav-link-active" : ""
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <span className="text-[10px]" aria-hidden="true">
                ▾
              </span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 min-w-[200px] border border-white/10 bg-brand-surface py-2 shadow-lg">
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-2.5 font-display text-xs font-light uppercase tracking-wide text-brand-cream transition-colors hover:bg-brand-gold/10 hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href ||
                (link.href === "/businesses" && isVenturesPath(pathname)) ||
                (link.href === "/blog" && isJournalPath(pathname))
                  ? "nav-link-active"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-brand-cream md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-white/5 bg-brand-surface px-6 py-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-2 ${
                  pathname === link.href ||
                  (link.href === "/businesses" && isVenturesPath(pathname)) ||
                  (link.href === "/blog" && isJournalPath(pathname))
                    ? "nav-link-active"
                    : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <p className="sub-label pt-2 text-brand-text-muted">Services</p>
            {SERVICE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-2 pl-4 ${pathname === link.href ? "nav-link-active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
