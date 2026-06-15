"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { useNav } from "@/components/layout/NavContext";

const SCROLL_THRESHOLD = 400;

export function StickyBookCta() {
  const pathname = usePathname();
  const { mobileOpen } = useNav();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact" || mobileOpen) {
    return null;
  }

  return (
    <div
      className={`sticky-book-cta transition-transform duration-500 ease-premium motion-reduce:transition-none ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="px-4 py-3">
        <Link
          href="/contact?type=private-chef"
          className="btn-primary-solid flex w-full items-center justify-center gap-2 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
        >
          <Icon name="chef-hat" size={16} />
          Book Private Chef
        </Link>
      </div>
    </div>
  );
}
