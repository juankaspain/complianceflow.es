import { Metadata } from 'next'
import { COMPANY, SEO, URLS } from '@/lib/constants'

// ============================================================================
// TYPES
// ============================================================================

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
  nofollow?: boolean
  canonical?: string
}

// ============================================================================
// GENERATE METADATA
// ============================================================================

export function generateMetadata({
  title,
  description = SEO.defaultDescription,
  keywords = SEO.keywords,
  image = SEO.ogImage,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  noindex = false,
  nofollow = false,
  canonical,
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${COMPANY.name}` : SEO.defaultTitle
  const pageUrl = url ? `${URLS.site}${url}` : URLS.site
  const imageUrl = image.startsWith('http') ? image : `${URLS.site}${image}`

  return {
    title: pageTitle,
    description,
    keywords: keywords.join(', '),

    authors: author ? [{ name: author }] : [{ name: COMPANY.name }],

    creator: COMPANY.name,
    publisher: COMPANY.name,

    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    alternates: {
      canonical: canonical || pageUrl,
    },

    openGraph: {
      type,
      locale: 'es_ES',
      url: pageUrl,
      siteName: COMPANY.name,
      title: pageTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || COMPANY.name,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
      }),
    },

    twitter: {
      card: 'summary_large_image',
      site: SEO.twitterHandle,
      creator: SEO.twitterHandle,
      title: pageTitle,
      description,
      images: [imageUrl],
    },

    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },

    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },

    category: 'Technology',
  }
}

// ============================================================================
// PRESETS FOR COMMON PAGES
// ============================================================================

export const SEO_PRESETS = {
  home: (): Metadata => generateMetadata({
    title: 'API SII, Verifactu y TicketBAI para España',
    keywords: [
      'API SII',
      'API Verifactu',
      'API TicketBAI',
      'compliance fiscal',
      'facturación electrónica',
      'AEAT',
      'automatización fiscal',
      'integracion SII',
    ],
  }),

  pricing: (): Metadata => generateMetadata({
    title: 'Planes y Precios - Desde €49/mes',
    description: 'Planes transparentes y escalables. Empieza gratis y escala según crezcas. Sin sorpresas, sin permanencia.',
    keywords: ['precios API SII', 'planes compliance', 'pricing'],
    url: '/pricing',
  }),

  docs: (): Metadata => generateMetadata({
    title: 'Documentación',
    description: 'Documentación técnica completa de ComplianceFlow API. Guías, tutoriales y referencia API.',
    keywords: ['documentación API', 'guía SII', 'tutorial Verifactu'],
    url: '/docs',
  }),

  blog: (title?: string, description?: string, publishedTime?: string): Metadata => generateMetadata({
    title,
    description,
    type: 'article',
    publishedTime,
    author: 'ComplianceFlow Team',
    url: title ? `/blog/${title.toLowerCase().replace(/\s+/g, '-')}` : '/blog',
  }),

  contact: (): Metadata => generateMetadata({
    title: 'Contacto',
    description: 'Contacta con nuestro equipo. Soporte 24/7, respuesta en menos de 2 horas.',
    url: '/contact',
  }),
}

// ============================================================================
// JSON-LD SCHEMAS
// ============================================================================

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: URLS.site,
    logo: `${URLS.site}/logo.png`,
    description: COMPANY.description,
    foundingDate: COMPANY.foundedYear.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Principal 123',
      addressLocality: 'Madrid',
      postalCode: '28001',
      addressCountry: 'ES',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+34-900-000-000',
        contactType: 'Customer Service',
        email: 'support@complianceflow.es',
        availableLanguage: ['Spanish', 'English'],
      },
    ],
    sameAs: [
      'https://twitter.com/complianceflow',
      'https://linkedin.com/company/complianceflow',
      'https://github.com/complianceflow',
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    url: URLS.site,
    description: SEO.defaultDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${URLS.site}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${URLS.site}${item.url}`,
    })),
  }
}
