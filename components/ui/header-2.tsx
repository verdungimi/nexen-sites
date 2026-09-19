"use client";

// Adapted from the 21st.dev "header-2" floating pill header.
// Kept: the centered pill with logo | links | action, the hover dimming of the other links and the animated
// dropdown card on small screens. Changed for this site: no sign-up/sign-in buttons (one booking button instead),
// wider spacing between the items, our own links/buttons (the original imports were not part of the package),
// framer-motion instead of a second "motion" package, a sliding marker for the current page, an
// "Ugrás a tartalomra" skip link, Escape and outside-click to close the mobile menu.

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/site/Logo";
import { ButtonLink } from "@/components/site/Button";
import { CTA, NAV_ITEMS } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Divider() {
  return <span aria-hidden="true" className="mx-5 hidden h-5 w-px flex-none bg-rule xl:block" />;
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);

  // Close on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close with Escape or a click outside the header
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    const onPointer = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [isOpen]);

  const spring = reduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 380, damping: 32 };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <a
        href="#tartalom"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-brass focus:px-4 focus:py-2 focus:text-graphite"
      >
        Ugrás a tartalomra
      </a>

      <nav
        ref={navRef}
        aria-label="Fő menü"
        className="pointer-events-auto flex w-full max-w-lg flex-col gap-2 xl:max-w-fit"
      >
        <div className="flex h-14 items-center rounded-full border border-rule bg-graphite-raised/85 pl-2 pr-2 shadow-[0_14px_34px_-14px_rgba(0,0,0,0.65)] backdrop-blur-md xl:pl-3">
          <Logo />

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls={isOpen ? menuId : undefined}
            className="ml-auto inline-flex h-11 w-11 flex-none items-center justify-center rounded-full text-bone transition-colors hover:bg-graphite-strong xl:hidden"
          >
            <span className="sr-only">{isOpen ? "Menü bezárása" : "Menü megnyitása"}</span>
            {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>

          {/* Desktop */}
          <Divider />
          <LayoutGroup id="header-nav">
            <ul className="group hidden items-center gap-2 xl:flex">
              {NAV_ITEMS.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative z-10 flex h-10 items-center rounded-full px-5 text-[0.9375rem] font-medium transition-colors duration-300 ease-in-out",
                        "group-has-[a:hover]:text-fog/60 hover:!text-bone",
                        active ? "text-bone" : "text-fog"
                      )}
                    >
                      {item.label}
                    </Link>
                    {active && (
                      <motion.span
                        layoutId="header-active"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border border-rule bg-graphite-strong"
                        transition={spring}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </LayoutGroup>
          <Divider />
          <ButtonLink href="/book" className="hidden flex-none xl:inline-flex">
            {CTA.nav}
          </ButtonLink>
        </div>

        {/* Mobile dropdown card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={menuId}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeInOut" }}
              className="flex w-full flex-col gap-2 rounded-3xl border border-rule bg-graphite-raised p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] xl:hidden"
            >
              <ul className="flex flex-col gap-1">
                {[{ href: "/", label: "Főoldal" }, ...NAV_ITEMS, { href: "/kapcsolat", label: "Kapcsolat" }].map((item) => {
                  const active = item.href === "/" ? pathname === "/" : isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex h-12 w-full items-center rounded-2xl px-4 text-lg font-medium transition-colors",
                          active ? "bg-graphite-strong text-brass" : "text-fog hover:bg-graphite-strong/60 hover:text-bone"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <span aria-hidden="true" className="mx-2 h-px bg-rule" />
              <ButtonLink href="/book" size="lg" className="w-full">
                {CTA.navMobile}
              </ButtonLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default SiteHeader;
