"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type NavContextValue = {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
};

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const value = useMemo(() => ({ mobileOpen, setMobileOpen }), [mobileOpen]);
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) {
    throw new Error("useNav must be used within NavProvider");
  }
  return ctx;
}
