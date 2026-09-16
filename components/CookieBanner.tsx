"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/site/Button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem("cookiePreferences");
      if (savedPreferences) {
        setCookiePreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    setShowBanner(false);
    // Reload page to initialize analytics scripts
    window.location.reload();
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setCookiePreferences(necessaryOnly);
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreferences", JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    setShowBanner(false);
    setShowSettings(false);
    // Reload page to initialize/remove analytics scripts based on preferences
    if (cookiePreferences.analytics || cookiePreferences.marketing) {
      window.location.reload();
    }
  };

  const togglePreference = (key: "analytics" | "marketing") => {
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  const categories = [
    {
      key: "necessary" as const,
      title: "Szükséges cookie-k",
      text: "Ezek nélkül az oldal nem működik rendesen, ezért nem kapcsolhatók ki.",
    },
    {
      key: "analytics" as const,
      title: "Analitikai cookie-k",
      text: "Megmutatják, hogyan használják a látogatók az oldalt, így tudjuk javítani.",
    },
    {
      key: "marketing" as const,
      title: "Marketing cookie-k",
      text: "A hirdetéseink személyre szabásához és mérésükhöz használjuk őket.",
    },
  ];

  return (
    <div
      role="region"
      aria-label="Cookie beállítások"
      className="animate-cookie-banner fixed inset-x-0 bottom-0 z-50 p-3 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:p-0"
    >
      <div className="rounded-2xl border border-rule bg-graphite-raised p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] sm:p-6">
        {!showSettings ? (
          <>
            <h2 className="wdth-title text-lg font-semibold text-bone">Cookie-k ezen az oldalon</h2>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-fog">
              Az oldal működéséhez szükséges cookie-kat mindig használjuk. Analitikai és marketing cookie-t csak
              a hozzájárulásoddal. Részletek az{" "}
              <Link href="/privacy" className="text-bone underline decoration-rule underline-offset-4 hover:decoration-brass">
                adatvédelmi tájékoztatóban
              </Link>
              .
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Button onClick={acceptAll}>Elfogadom mind</Button>
              <Button variant="secondary" onClick={acceptNecessary}>
                Csak a szükségesek
              </Button>
              <Button variant="quiet" onClick={() => setShowSettings(true)} className="ml-2">
                Beállítások
              </Button>
            </div>
          </>
        ) : (
          <>
            <h2 className="wdth-title text-lg font-semibold text-bone">Cookie beállítások</h2>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {categories.map((category) => {
                const locked = category.key === "necessary";
                const checked = cookiePreferences[category.key];
                return (
                  <li key={category.key} className="flex items-start justify-between gap-4 py-4">
                    <div>
                      <p className="font-semibold text-bone">{category.title}</p>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-fog">{category.text}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={checked}
                      aria-label={category.title}
                      disabled={locked}
                      onClick={locked ? undefined : () => togglePreference(category.key as "analytics" | "marketing")}
                      className={`relative mt-1 inline-flex h-7 w-12 flex-none items-center rounded-full border transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${
                        checked ? "border-brass bg-brass" : "border-rule bg-graphite"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 rounded-full transition-transform duration-200 ${
                          checked ? "translate-x-[1.375rem] bg-graphite" : "translate-x-1 bg-fog"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Button onClick={savePreferences}>Beállítások mentése</Button>
              <Button variant="secondary" onClick={() => setShowSettings(false)}>
                Vissza
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
