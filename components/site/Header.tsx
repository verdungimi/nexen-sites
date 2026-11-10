"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CONTACT, CTA_HREF, CTA_LABEL, NAV_ITEMS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonClasses } from "./Button";
import Container from "./Container";
import Logo from "./Logo";

/** Dark blue header, sticky on every page. On phones the links move into a full-screen menu. */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the menu after navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open menu, and close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "on-navy sticky top-0 z-40 bg-navy text-white transition-shadow duration-300",
        scrolled && !open && "shadow-[0_1px_0_#2C4A80,0_10px_30px_-18px_rgba(0,0,0,0.6)]"
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Fő menü" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center border-b-2 font-medium transition-colors duration-200 hover:text-sky",
                      active ? "border-sky" : "border-transparent"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <a href={`tel:${CONTACT.phoneHref}`} className="hidden min-h-11 items-center font-semibold transition-colors hover:text-sky xl:inline-flex">
            {CONTACT.phone}
          </a>
          <Link href={CTA_HREF} className={buttonClasses("primary", "md", "hidden sm:inline-flex")}>
            {CTA_LABEL}
          </Link>
          <a
            href={`tel:${CONTACT.phoneHref}`}
            aria-label={`Hívás: ${CONTACT.phone}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl sm:hidden"
          >
            <Phone aria-hidden="true" className="h-[1.375rem] w-[1.375rem]" />
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-xl lg:hidden"
          >
            {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <div
        id="mobil-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-navy lg:hidden"
      >
        <Container className="flex min-h-full flex-col pb-8 pt-2">
          <nav aria-label="Mobil menü">
            <ul>
              {[...NAV_ITEMS, { href: "/rolunk", label: "Rólunk" }, { href: "/blog", label: "Blog" }, { href: "/kapcsolat", label: "Kapcsolat" }].map((item) => (
                <li key={item.href} className="border-b border-navy-line">
                  <Link href={item.href} className="flex min-h-[3.75rem] items-center font-display text-2xl font-semibold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link href={CTA_HREF} className={buttonClasses("primary", "lg", "w-full")}>
              {CTA_LABEL}
            </Link>
            <a href={`tel:${CONTACT.phoneHref}`} className={buttonClasses("outlineOnNavy", "lg", "w-full")}>
              <Phone aria-hidden="true" className="h-5 w-5" />
              {CONTACT.phone}
            </a>
            <p className="mt-2 text-center text-[0.9375rem] text-cloud">Hívható {CONTACT.hours} között</p>
          </div>
        </Container>
      </div>
    </header>
  );
}
