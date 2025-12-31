import type { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
}

const defaultSEO = {
  siteName: 'ComplianceFlow',
  siteUrl: 'https://complianceflow.es',
  defaultImage: '/og-image.png',
  twitterHandle: '@complianceflow',
};

/**
 * Generate comprehensive SEO metadata for Next.js pages
 */
export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    image = defaultSEO.defaultImage,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    keywords,
  } = config;

  const fullTitle = `${title} | ${defaultSEO.siteName}`;
  const fullUrl = url ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl;
  const fullImage = image.startsWith('http') ? image : `${defaultSEO.siteUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    authors: author ? [{ name: author }] : undefined,
    creator: defaultSEO.siteName,
    publisher: defaultSEO.siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'es-ES': fullUrl,
        'en-US': fullUrl.replace('.es', '.com'),
      },
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultSEO.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_ES',
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: defaultSEO.twitterHandle,
      site: defaultSEO.twitterHandle,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

/**
 * Generate JSON-LD structured data
 */
export function generateStructuredData(config: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Product' | 'SoftwareApplication';
  data: Record<string, unknown>;
}): string {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': config.type,
    ...config.data,
  };

  return JSON.stringify(baseData);
}

/**
 * Organization structured data
 */
export const organizationSchema = generateStructuredData({
  type: 'Organization',
  data: {
    name: defaultSEO.siteName,
    url: defaultSEO.siteUrl,
    logo: `${defaultSEO.siteUrl}/logo.png`,
    description: 'Plataforma profesional de gestión de cumplimiento normativo',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-XXX-XXX-XXX',
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://twitter.com/complianceflow',
      'https://linkedin.com/company/complianceflow',
    ],
  },
});

/**
 * SaaS Product structured data
 */
export const softwareSchema = generateStructuredData({
  type: 'SoftwareApplication',
  data: {
    name: defaultSEO.siteName,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
  },
});