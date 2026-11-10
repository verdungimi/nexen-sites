import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./site.css";
import Analytics from "@/components/site/Analytics";
import CookieBanner from "@/components/site/CookieBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import JsonLd from "@/components/site/JsonLd";
import RevealObserver from "@/components/site/RevealObserver";
import StickyCta from "@/components/site/StickyCta";
import { BRAND, CONTACT, LEGAL, SITE_URL } from "@/lib/site";

// Fraunces for headings, Instrument Sans for text. Both carry every Hungarian accented letter
// (ő and ű included) in all the weights used; this was checked glyph by glyph before choosing them.
const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const DESCRIPTION =
  "Egyedi kódú weboldal kis- és középvállalkozásoknak. Előbb megnézed az ingyenes demót a saját cégedre, és csak akkor fizetsz, ha tetszik.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Weboldalkészítés ingyenes demóval | Nexen Sites",
    template: "%s | Nexen Sites",
  },
  description: DESCRIPTION,
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,
  // Title and description are left out on purpose: Next.js copies each page's own
  // title/description into og:* and twitter:* when these objects don't set them.
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: BRAND,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "Weboldalkészítés",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    // Route groups make Next hash file-based metadata routes (see app/(site)/apple-icon.tsx)
    apple: [{ url: "/apple-icon-12o0cb", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export const viewport: Viewport = {
  themeColor: "#0B1E3F",
  width: "device-width",
  initialScale: 1,
};

/** The business itself, for search engines and AI assistants. No ratings: there are no verified reviews to mark up yet. */
const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: BRAND,
  legalName: LEGAL.name,
  url: SITE_URL,
  description: DESCRIPTION,
  telephone: CONTACT.phoneHref,
  email: CONTACT.email,
  taxID: LEGAL.taxNumber,
  address: {
    "@type": "PostalAddress",
    streetAddress: LEGAL.street,
    addressLocality: LEGAL.city,
    postalCode: LEGAL.postalCode,
    addressCountry: "HU",
  },
  areaServed: { "@type": "Country", name: "Magyarország" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    name: CONTACT.person,
    telephone: CONTACT.phoneHref,
    email: CONTACT.email,
    availableLanguage: "hu",
  },
  sameAs: [CONTACT.facebook],
  knowsAbout: ["weboldalkészítés", "landing oldal", "webshop", "keresőoptimalizálás", "GEO", "Next.js"],
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        {/* Marks that JavaScript runs, before the first paint. Without it every element simply stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-xl focus:bg-sky focus:px-4 focus:py-3 focus:font-bold focus:text-navy"
        >
          Ugrás a tartalomra
        </a>
        <Header />
        <main id="tartalom">{children}</main>
        <Footer />
        <StickyCta />
        <CookieBanner />
        <RevealObserver />
        <Analytics />
        <JsonLd data={BUSINESS_JSON_LD} />
      </body>
    </html>
  );
}
