// Shared Nexen Sites business details. Import from here instead of repeating them in pages.

export const SITE_URL = "https://nexensites.hu";

export const CONTACT = {
  phone: "+36 70 576 7845",
  phoneHref: "+36705767845",
  email: "verdung.imi@gmail.com",
  city: "Kecskemét",
  facebook: "https://www.facebook.com/profile.php?id=61585984076838",
};

/**
 * Link texts for the booking page (/book). The nav keeps the primary label; the other spots vary on purpose,
 * because repeating one anchor text many times on a page is flagged by SEO tools.
 */
export const CTA = {
  nav: "Konzultációt foglalok",
  navMobile: "Időpontot foglalok",
  hero: "Foglalj konzultációt",
  calculator: "Átnézzük a számaidat",
  contact: "Időpontot kérek",
  footer: "Konzultáció foglalása",
  closing: "Beszéljünk a projektedről",
} as const;

/** Main navigation, used by the header (components/ui/header-2.tsx). */
export const NAV_ITEMS = [
  { href: "/packages", label: "Szolgáltatás" },
  { href: "/folyamat", label: "Folyamat" },
  { href: "/rolunk", label: "Stúdió" },
  { href: "/blog", label: "Blog" },
  { href: "/gyik", label: "GYIK" },
] as const;
