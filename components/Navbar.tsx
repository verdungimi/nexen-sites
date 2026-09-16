"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/site/Logo";
import { ButtonLink } from "@/components/site/Button";
import { cn } from "@/lib/utils";

// Floating pill navigation. The sliding active marker is adapted from the
// "Tubelight Navbar" pattern on 21st.dev (framer-motion layoutId), without the glow.

export const NAV_ITEMS = [
  { href: "/packages", label: "Szolgáltatás" },
  { href: "/folyamat", label: "Folyamat" },
  { href: "/rolunk", label: "Stúdió" },
  { href: "/blog", label: "Blog" },
  { href: "/gyik", label: "GYIK" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen ? "border-b border-rule/60 bg-graphite/85 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      <a
        href="#tartalom"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-brass focus:px-4 focus:py-2 focus:text-graphite"
      >
        Ugrás a tartalomra
      </a>
      <div className="mx-auto flex h-[4.5rem] w-full max-w-site items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Fő menü" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-rule bg-graphite-raised/80 p-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative z-10 flex min-h-10 items-center rounded-full px-4 text-[0.9375rem] font-medium transition-colors duration-200",
                      active ? "text-bone" : "text-fog hover:text-bone"
                    )}
                  >
                    {item.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-rule bg-graphite-strong"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/book" className="hidden sm:inline-flex">
            Konzultációt foglalok
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rule text-bone transition-colors hover:bg-graphite-strong lg:hidden"
          >
            <span className="sr-only">{menuOpen ? "Menü bezárása" : "Menü megnyitása"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id={menuId} hidden={!menuOpen} className="border-t border-rule/60 lg:hidden">
        <nav aria-label="Mobil menü" className="mx-auto w-full max-w-site px-4 pb-8 pt-4 sm:px-6">
          <ul className="divide-y divide-rule/60">
            {[{ href: "/", label: "Főoldal" }, ...NAV_ITEMS, { href: "/kapcsolat", label: "Kapcsolat" }].map((item) => {
              const active = item.href === "/" ? pathname === "/" : isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "wdth-title flex min-h-14 items-center justify-between text-2xl font-semibold",
                      active ? "text-brass" : "text-bone"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLink href="/book" size="lg" className="mt-6 w-full">
            Konzultációt foglalok
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
