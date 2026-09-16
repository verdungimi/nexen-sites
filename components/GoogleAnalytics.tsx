"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // CookieBanner stores the visitor's choice; nothing loads from Google before it says yes.
    try {
      const saved = localStorage.getItem("cookiePreferences");
      setHasConsent(Boolean(saved && JSON.parse(saved).analytics));
    } catch {
      setHasConsent(false);
    }
  }, []);

  if (!GA_MEASUREMENT_ID || !hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `,
        }}
      />
    </>
  );
}
