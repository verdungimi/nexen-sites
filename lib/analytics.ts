"use client";

// Google Analytics event tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === "undefined") return;

  // Check cookie consent
  const cookiePreferences = localStorage.getItem("cookiePreferences");
  if (!cookiePreferences) return;

  const preferences = JSON.parse(cookiePreferences);
  if (!preferences.analytics) return;

  // Track event with gtag
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window === "undefined") return;

  const cookiePreferences = localStorage.getItem("cookiePreferences");
  if (!cookiePreferences) return;

  const preferences = JSON.parse(cookiePreferences);
  if (!preferences.analytics) return;

  if (window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent("conversion", conversionType, undefined, value);
};

// Form submission tracking
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
};

// Button click tracking
export const trackButtonClick = (buttonName: string) => {
  trackEvent("click", "button", buttonName);
};

