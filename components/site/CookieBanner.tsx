"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { OPEN_COOKIE_SETTINGS_EVENT, readConsent, saveConsent } from "@/lib/consent";
import { cn } from "@/lib/utils";
import { buttonClasses } from "./Button";

const CATEGORIES = [
  {
    key: "necessary" as const,
    title: "Szükséges",
    text: "A döntésed megjegyzéséhez és az űrlapok működéséhez kell. Nem kapcsolható ki.",
  },
  {
    key: "analytics" as const,
    title: "Statisztika",
    text: "Google Analytics: névtelenül látjuk, hány látogató jár az oldalon, és honnan érkezik.",
  },
  {
    key: "marketing" as const,
    title: "Marketing",
    text: "Meta Pixel: ezzel mérjük, hogy a Facebook- és Instagram-hirdetéseinkből hány megkeresés érkezik.",
  },
];

/** Cookie bar with three buttons: accept all, necessary only, settings. */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [choice, setChoice] = useState({ analytics: false, marketing: false });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = readConsent();
    if (consent) setChoice({ analytics: consent.analytics, marketing: consent.marketing });
    else setVisible(true);

    const reopen = () => {
      const current = readConsent();
      if (current) setChoice({ analytics: current.analytics, marketing: current.marketing });
      setSettingsOpen(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (visible && settingsOpen) panelRef.current?.focus();
  }, [visible, settingsOpen]);

  const decide = (value: { analytics: boolean; marketing: boolean }) => {
    saveConsent(value);
    setChoice(value);
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-[44rem] rounded-3xl border-[1.5px] border-line-strong bg-white p-5 text-navy shadow-[0_24px_70px_-20px_rgba(11,30,63,0.45)] outline-none sm:inset-x-6 sm:bottom-6 sm:p-7"
    >
      <h2 id="cookie-title" className="font-display text-xl font-semibold">
        Cookie-k az oldalon
      </h2>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
        A működéshez szükséges cookie-kon túl statisztikai és marketing célú cookie-kat csak akkor használunk, ha hozzájárulsz. Részletek a{" "}
        <Link href="/cookies" className="link">
          cookie tájékoztatóban
        </Link>
        .
      </p>

      {settingsOpen && (
        <ul className="mt-5 space-y-2.5">
          {CATEGORIES.map((category) => {
            const locked = category.key === "necessary";
            const checked = locked ? true : choice[category.key];
            return (
              <li key={category.key}>
                <label
                  className={cn(
                    "flex cursor-pointer items-start gap-4 rounded-2xl border-[1.5px] p-4 transition-colors duration-200",
                    checked ? "border-navy bg-mist" : "border-line-strong",
                    locked && "cursor-default"
                  )}
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 flex-none accent-[#0B1E3F]"
                    checked={checked}
                    disabled={locked}
                    onChange={(event) => !locked && setChoice((current) => ({ ...current, [category.key]: event.target.checked }))}
                  />
                  <span>
                    <span className="block font-bold">{category.title}</span>
                    <span className="mt-0.5 block text-[0.9375rem] leading-snug text-muted">{category.text}</span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={() => decide({ analytics: true, marketing: true })} className={buttonClasses("primary", "md", "sm:order-1")}>
          Elfogadom mind
        </button>
        <button type="button" onClick={() => decide({ analytics: false, marketing: false })} className={buttonClasses("navy", "md", "sm:order-2")}>
          Csak a szükségesek
        </button>
        {settingsOpen ? (
          <button type="button" onClick={() => decide(choice)} className={buttonClasses("outline", "md", "sm:order-3")}>
            Mentem a beállításaimat
          </button>
        ) : (
          <button type="button" onClick={() => setSettingsOpen(true)} className={buttonClasses("outline", "md", "sm:order-3")}>
            Beállítások
          </button>
        )}
      </div>
    </div>
  );
}
