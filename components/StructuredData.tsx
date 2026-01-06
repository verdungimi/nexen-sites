export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexen Sites - Weboldal Készítő Cég",
    "alternateName": "Nexen Sites",
    "url": "https://nexensites.hu",
    "logo": "https://nexensites.hu/logo.png",
    "description": "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon. Prémium minőség, fix ár, garantált határidő.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kecskemét",
      "addressRegion": "Bács-Kiskun",
      "addressCountry": "HU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+36-70-576-7845",
      "contactType": "customer service",
      "email": "info@nexensites.hu",
      "availableLanguage": ["Hungarian", "hu"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61585984076838"
    ],
    "knowsAbout": [
      "Weboldal készítés",
      "Weboldal fejlesztés",
      "Next.js",
      "React",
      "TypeScript"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Weboldal készítés",
    "provider": {
      "@type": "Organization",
      "name": "Nexen Sites - Weboldal Készítő Cég"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Hungary"
    },
    "description": "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cégként prémium minőségű, modern, gyors, mobilbarát weboldalakat készítünk vállalkozásoknak.",
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Weboldal készítés",
        "description": "Professzionális weboldal készítés 10 nap alatt"
      },
      "priceCurrency": "HUF",
      "price": "299000",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "HUF",
        "price": "299000",
        "valueAddedTaxIncluded": true
      },
      "availability": "https://schema.org/InStock"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nexen Sites - Weboldal Készítés",
    "alternateName": "Nexen Sites",
    "url": "https://nexensites.hu",
    "description": "Professzionális weboldal készítés 10 nap alatt. Olcsó weboldal készítő cég Magyarországon.",
    "inLanguage": "hu-HU",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nexensites.hu/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexen Sites",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexensites.hu/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

