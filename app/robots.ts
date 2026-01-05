import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/calendar'],
      },
    ],
    sitemap: 'https://nexensites.hu/sitemap.xml',
  };
}

