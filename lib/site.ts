// Shared Nexen Sites business details. Import from here instead of repeating them in pages.
// The same name, address and phone number must appear word for word on the Google Business Profile
// and the Facebook page (AI search engines cross-check them).

export const SITE_URL = "https://nexensites.hu";
export const BRAND = "Nexen Sites";

export const CONTACT = {
  person: "Verdung Imre",
  personShort: "Imi",
  phone: "+36 70 576 7845",
  phoneHref: "+36705767845",
  email: "verdung.imi@gmail.com",
  hours: "hétfőtől péntekig 9–18 óra",
  area: "egész Magyarország, online",
  facebook: "https://www.facebook.com/profile.php?id=61585984076838",
} as const;

/** Legal entity behind the brand (impresszum, ÁSZF, data controller). The bank account is never shown on the site. */
export const LEGAL = {
  name: "Asztalos József Attiláné egyéni vállalkozó",
  shortName: "Asztalos József Attiláné e.v.",
  postalCode: "6000",
  city: "Kecskemét",
  street: "Arató utca 12.",
  address: "6000 Kecskemét, Arató utca 12.",
  taxNumber: "91693307-1-23",
  registryNumber: "61722039",
} as const;

/** The one call to action. Same label everywhere, on purpose. */
export const CTA_LABEL = "Kérem az ingyenes demót";
export const CTA_HREF = "/demo";

/**
 * Google review link for /velemeny (https://g.page/r/…/review).
 * [IMI: a Google cégprofil értékelő linkje] Until it is set, the page shows a placeholder instead of a button.
 */
export const GOOGLE_REVIEW_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ?? "";

export const NAV_ITEMS = [
  { href: "/portfolio", label: "Munkáink" },
  { href: "/packages", label: "Csomagok" },
  { href: "/folyamat", label: "Folyamat" },
  { href: "/geo", label: "GEO" },
  { href: "/gyik", label: "GYIK" },
] as const;

export const FOOTER_GROUPS = [
  {
    title: "Szolgáltatás",
    links: [
      { href: "/demo", label: "Ingyenes demo" },
      { href: "/packages", label: "Csomagok" },
      { href: "/geo", label: "GEO: AI-keresőkre optimalizálás" },
      { href: "/folyamat", label: "Hogyan dolgozunk" },
      { href: "/portfolio", label: "Munkáink" },
    ],
  },
  {
    title: "Nexen Sites",
    links: [
      { href: "/rolunk", label: "Rólunk" },
      { href: "/blog", label: "Blog" },
      { href: "/gyik", label: "Gyakori kérdések" },
      { href: "/book", label: "Konzultáció foglalása" },
      { href: "/kapcsolat", label: "Kapcsolat" },
    ],
  },
  {
    title: "Jogi oldalak",
    links: [
      { href: "/impresszum", label: "Impresszum" },
      { href: "/terms", label: "ÁSZF" },
      { href: "/privacy", label: "Adatkezelési tájékoztató" },
      { href: "/cookies", label: "Cookie tájékoztató" },
    ],
  },
] as const;

/**
 * The legal texts were rewritten for the 2026 rebuild and have not been checked by a lawyer yet.
 * While this is true, the legal pages show a notice. Set to false after the review.
 */
export const LEGAL_REVIEW_PENDING = true;
