"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { CONTACT, CTA_HREF, CTA_LABEL } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Sticky call-to-action bar on phones. It appears after the first screen and steps aside while a form
 * or the quiz is on screen, so it never covers the fields the visitor is filling in.
 */
export default function StickyCta() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setFormVisible(false);
    const forms = Array.from(document.querySelectorAll("[data-hide-sticky]"));
    if (forms.length === 0 || !("IntersectionObserver" in window)) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setFormVisible(visible.size > 0);
      },
      { threshold: 0.15 }
    );
    forms.forEach((form) => observer.observe(form));
    return () => observer.disconnect();
  }, [pathname]);

  // On the pages that have the quiz, the button scrolls to it instead of leaving the page
  const href = pathname === "/" || pathname === "/demo" ? "#kerdessor" : CTA_HREF;
  const shown = pastHero && !formVisible;

  return (
    <div
      aria-hidden={!shown}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 ease-out sm:hidden",
        shown ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
    >
      <div className="flex gap-2.5">
        <Link
          href={href}
          tabIndex={shown ? 0 : -1}
          className="flex min-h-[3.375rem] grow items-center justify-center rounded-[0.875rem] bg-sky text-[1.0625rem] font-bold text-navy active:scale-[0.98]"
        >
          {CTA_LABEL}
        </Link>
        <a
          href={`tel:${CONTACT.phoneHref}`}
          tabIndex={shown ? 0 : -1}
          aria-label={`Hívás: ${CONTACT.phone}`}
          className="flex h-[3.375rem] w-[3.375rem] flex-none items-center justify-center rounded-[0.875rem] bg-navy text-white active:scale-[0.98]"
        >
          <Phone aria-hidden="true" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
