"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    // Initialize analytics/marketing scripts here if needed
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
    // Initialize analytics/marketing scripts based on preferences
  };

  const togglePreference = (key: "analytics" | "marketing") => {
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-xl">
          {!showSettings ? (
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    🍪 Cookie-k használata
                  </h3>
                  <p className="text-[#A8B3C7] text-sm md:text-base leading-relaxed">
                    Weboldalunk cookie-kat használ a felhasználói élmény javítása, 
                    weboldalunk működésének biztosítása és a forgalom elemzése érdekében. 
                    Az "Elfogadom mind" gombra kattintva hozzájárulsz az összes cookie használatához. 
                    További információkért látogasd meg az{" "}
                    <Link href="/privacy" className="text-[#7C5CFF] hover:text-[#50AEDF] underline">
                      Adatvédelmi tájékoztatónkat
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 text-sm font-semibold whitespace-nowrap"
                  >
                    Beállítások
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 text-sm font-semibold whitespace-nowrap"
                  >
                    Csak szükséges
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl hover:shadow-[0_0_30px_rgba(124,92,255,0.7)] hover:scale-105 transition-all duration-300 font-semibold text-sm whitespace-nowrap"
                  >
                    Elfogadom mind
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Cookie beállítások
                </h3>
                <p className="text-[#A8B3C7] text-sm md:text-base">
                  Válaszd ki, mely cookie-kat szeretnéd engedélyezni. A szükséges cookie-k 
                  mindig aktívak, mert ezek nélkül a weboldal nem működne megfelelően.
                </p>
              </div>

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Szükséges cookie-k</h4>
                      <p className="text-[#A8B3C7] text-sm">
                        Ezek a cookie-k elengedhetetlenek a weboldal működéséhez. 
                        Nem kapcsolhatók ki.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-[#7C5CFF] rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-50">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Analitikai cookie-k</h4>
                      <p className="text-[#A8B3C7] text-sm">
                        Segítenek megérteni, hogyan használják a látogatók a weboldalt, 
                        hogy javíthassuk a teljesítményt.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference("analytics")}
                        className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                          cookiePreferences.analytics
                            ? "bg-[#7C5CFF] justify-end"
                            : "bg-[rgba(255,255,255,0.2)] justify-start"
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">Marketing cookie-k</h4>
                      <p className="text-[#A8B3C7] text-sm">
                        Használjuk a reklámok személyre szabásához és a marketing kampányok hatékonyságának méréséhez.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                          cookiePreferences.marketing
                            ? "bg-[#7C5CFF] justify-end"
                            : "bg-[rgba(255,255,255,0.2)] justify-start"
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 text-sm font-semibold"
                >
                  Vissza
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-3 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl hover:shadow-[0_0_30px_rgba(124,92,255,0.7)] hover:scale-105 transition-all duration-300 font-semibold text-sm flex-1 sm:flex-none"
                >
                  Beállítások mentése
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

