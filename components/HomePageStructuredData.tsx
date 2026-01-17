export default function HomePageStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Főoldal",
        "item": "https://nexensites.hu"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nexensites.hu/#organization",
    "name": "Nexen Sites",
    "image": "https://nexensites.hu/logo.png",
    "description": "Nexen Sites - Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak vállalkozásoknak.",
    "url": "https://nexensites.hu",
    "telephone": "+36-70-576-7845",
    "email": "info@nexensites.hu",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kecskemét",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.8964",
      "longitude": "19.6897"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Hungary"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Weboldal készítés szolgáltatások",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weboldal készítés",
            "description": "Prémium weboldal készítés 10 nap alatt"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mennyi idő alatt készül el a weboldal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Nexen Sites weboldal készítés 10 nap alatt készül el. Fix határidővel dolgozunk, garantálva a minőséget."
        }
      },
      {
        "@type": "Question",
        "name": "Milyen típusú weboldalakat készít a Nexen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Nexen Sites prémium, modern, mobilbarát weboldalakat készít vállalkozásoknak. Next.js, React és TypeScript technológiákkal dolgozunk."
        }
      },
      {
        "@type": "Question",
        "name": "Mennyibe kerül egy weboldal készítése?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Nexen Sites weboldal készítés árai 299,000 Ft-tól kezdődnek. Részletes árazást a csomagok oldalunkon találsz."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
