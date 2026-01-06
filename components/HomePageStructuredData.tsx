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
    "name": "Nexen Sites - Weboldal Készítő Cég",
    "alternateName": "Nexen Sites",
    "image": "https://nexensites.hu/logo.png",
    "description": "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon. Prémium minőség, fix ár, garantált határidő.",
    "url": "https://nexensites.hu",
    "telephone": "+36-70-576-7845",
    "email": "info@nexensites.hu",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kecskemét",
      "addressRegion": "Bács-Kiskun",
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
            "description": "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég szolgáltatása.",
            "serviceType": "Weboldal készítés",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nexen Sites"
            }
          },
          "priceCurrency": "HUF",
          "price": "299000",
          "availability": "https://schema.org/InStock"
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
          "text": "A Nexen Sites weboldal készítés 10 nap alatt készül el. Fix határidővel dolgozunk, garantálva a minőséget. 10 nap alatt kész weboldal szolgáltatást nyújtunk."
        }
      },
      {
        "@type": "Question",
        "name": "Olcsó weboldal készítő cég vagy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Igen, olcsó weboldal készítő cégként dolgozunk, de prémium minőséget nyújtunk. A weboldal készítés áraink 299,000 Ft-tól kezdődnek, miközben professzionális weboldal készítés szolgáltatást nyújtunk."
        }
      },
      {
        "@type": "Question",
        "name": "Milyen típusú weboldalakat és webshopokat készít a Nexen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Nexen Sites prémium, modern, mobilbarát weboldalakat készít vállalkozásoknak. Weboldal készítés szolgáltatásaink Next.js, React és TypeScript technológiákkal készülnek."
        }
      },
      {
        "@type": "Question",
        "name": "Mennyibe kerül egy weboldal készítése?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Nexen Sites weboldal készítés árai 299,000 Ft-tól kezdődnek. Olcsó weboldal készítő cégként prémium minőségű weboldal készítés szolgáltatást nyújtunk. Részletes árazást a csomagok oldalunkon találsz."
        }
      },
      {
        "@type": "Question",
        "name": "Tényleg 10 nap alatt készül el a weboldal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Igen, garantáltan 10 nap alatt kész weboldal szolgáltatást nyújtunk. A weboldal készítés és webshop készítés folyamata fix határidővel működik, ha az anyagok időben megérkeznek."
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

