"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    // Check cookie consent
    const cookiePreferences = localStorage.getItem("cookiePreferences");
    if (!cookiePreferences) {
      return; // Wait for cookie consent
    }

    const preferences = JSON.parse(cookiePreferences);
    if (!preferences.analytics) {
      return; // User didn't consent to analytics
    }

    // Initialize gtag if available
    if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    }
  }, []);

  if (!GA_MEASUREMENT_ID) {
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
            
            // Check cookie consent before initializing
            const cookiePreferences = localStorage.getItem('cookiePreferences');
            if (cookiePreferences) {
              const preferences = JSON.parse(cookiePreferences);
              if (preferences.analytics) {
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                });
              }
            }
          `,
        }}
      />
    </>
  );
}

