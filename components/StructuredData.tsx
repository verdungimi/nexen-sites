import { CONTACT, SITE_URL } from "@/lib/site";

/**
 * Raster logo for JSON-LD, rendered by app/(site)/apple-icon.tsx.
 * Next.js appends a hash suffix ("-12o0cb") to metadata image routes that live inside a route group,
 * so the file is served at /apple-icon-12o0cb, not /apple-icon.
 */
export const LOGO_URL = `${SITE_URL}/apple-icon-12o0cb`;

/**
 * Social share image rendered by app/(site)/opengraph-image.tsx (same route-group suffix as above).
 * Pages inherit it automatically; only pages that define their own `openGraph` must pass it explicitly.
 */
export const OG_IMAGE = {
  url: "/opengraph-image-12o0cb",
  width: 1200,
  height: 630,
  alt: "Nexen Sites – Weboldalkészítés szolgáltató cégeknek",
};

export const ORGANIZATION_DESCRIPTION =
  "Kecskeméti webstúdió, amely konverzióra tervezett weboldalakat készít bejáratott szolgáltató cégeknek. Az első működő változat 3 munkanappal a konzultáció és az anyagok beérkezése után elkészül, a végösszeg hátralévő részét az ügyfél a jóváhagyás után fizeti.";

/** Serialises JSON-LD safely for a <script> tag. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Nexen Sites",
    url: SITE_URL,
    logo: LOGO_URL,
    description: ORGANIZATION_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressCountry: "HU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "customer service",
      email: CONTACT.email,
      availableLanguage: "Hungarian",
    },
    sameAs: [CONTACT.facebook],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Weboldal készítés",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Hungary",
    },
    description:
      "Weboldalak építőipari, épületgépészeti, egészségügyi és szakértői szolgáltató cégeknek: szerkezet és szöveg, design, fejlesztés, két javítási kör és igény szerint havi gondozás.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexen Sites",
    url: SITE_URL,
    inLanguage: "hu-HU",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema)} />
    </>
  );
}
