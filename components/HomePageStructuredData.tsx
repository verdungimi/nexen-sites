import { FAQ_ITEMS, TIERS } from "@/lib/content";
import { CONTACT, SITE_URL } from "@/lib/site";
import { LOGO_URL, ORGANIZATION_DESCRIPTION, jsonLd } from "@/components/StructuredData";

export default function HomePageStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Főoldal",
        item: SITE_URL,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    name: "Nexen Sites",
    image: LOGO_URL,
    description: ORGANIZATION_DESCRIPTION,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressCountry: "HU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.8964",
      longitude: "19.6897",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "Country",
      name: "Hungary",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Weboldal-csomagok",
      itemListElement: TIERS.map((tier) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: tier.name,
          description: tier.summary,
        },
      })),
    },
  };

  // Built from the same FAQ_ITEMS the home FAQ renders, so the markup never drifts from the page.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localBusinessSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />
    </>
  );
}
