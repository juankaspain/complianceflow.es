import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://complianceflow.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/features',
    '/pricing',
    '/about',
    '/contact',
    '/blog',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
  ];

  const staticPages: MetadataRoute.Sitemap = [];

  // Generate URLs for all languages
  for (const locale of locales) {
    for (const route of routes) {
      staticPages.push({
        url: `${baseUrl}${locale === 'es' ? '' : `/${locale}`}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${baseUrl}${l === 'es' ? '' : `/${l}`}${route}`,
            ])
          ),
        },
      });
    }
  }

  return staticPages;
}