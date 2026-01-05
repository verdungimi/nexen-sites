export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexen Sites",
    "url": "https://nexensites.hu",
    "logo": "https://nexensites.hu/logo.png",
    "description": "Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak vállalkozásoknak.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kecskemét",
      "addressCountry": "HU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+36-70-576-7845",
      "contactType": "customer service",
      "email": "info@nexensites.hu",
      "availableLanguage": "Hungarian"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61585984076838"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Weboldal készítés",
    "provider": {
      "@type": "Organization",
      "name": "Nexen Sites"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Hungary"
    },
    "description": "Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak vállalkozásoknak.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "HUF",
      "availability": "https://schema.org/InStock"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nexen Sites",
    "url": "https://nexensites.hu",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nexensites.hu/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
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

