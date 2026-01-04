// lib/seo/schema-generators.ts
// Generadores de Schema.org para máxima cobertura SEO

/**
 * Schema Generator: Organization
 * Información de la empresa
 */
export function generateOrganizationSchema(org: {
  name: string;
  logo: string;
  url: string;
  sameAs: string[];
  contactPoint?: {
    type: string;
    telephone: string;
    contactOption: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    sameAs: org.sameAs,
    ...(org.contactPoint && { contactPoint: org.contactPoint }),
  };
}

/**
 * Schema Generator: BreadcrumbList
 * Navegación por migas de pan para SEO
 */
export function generateBreadcrumbSchema(items: Array<{
  name: string;
  url: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Schema Generator: LocalBusiness
 * Para negocios locales (SII compliance + Maps)
 */
export function generateLocalBusinessSchema(business: {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  openingHours?: string[];
  image?: string;
  rating?: { ratingValue: number; reviewCount: number };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    telephone: business.telephone,
    email: business.email,
    ...(business.openingHours && { openingHoursSpecification: business.openingHours }),
    ...(business.image && { image: business.image }),
    ...(business.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: business.rating.ratingValue,
        reviewCount: business.rating.reviewCount,
      },
    }),
  };
}

/**
 * Schema Generator: Article
 * Para contenido editorial y blog posts
 */
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: { name: string; url?: string };
  publisher?: { name: string; logo?: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    ...(article.dateModified && { dateModified: article.dateModified }),
    author: {
      '@type': 'Person',
      name: article.author.name,
      ...(article.author.url && { url: article.author.url }),
    },
    ...(article.publisher && {
      publisher: {
        '@type': 'Organization',
        name: article.publisher.name,
        ...(article.publisher.logo && { logo: article.publisher.logo }),
      },
    }),
  };
}

/**
 * Schema Generator: FAQ
 * Para FAQ sections (featured snippets)
 */
export function generateFAQSchema(faqs: Array<{
  question: string;
  answer: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Schema Generator: Product
 * Para ecommerce y catálogos
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  rating?: { ratingValue: number; reviewCount: number };
  sku?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
    },
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating.ratingValue,
        reviewCount: product.rating.reviewCount,
      },
    }),
    ...(product.sku && { sku: product.sku }),
  };
}

/**
 * Schema Generator: Event
 * Para eventos y webinars
 */
export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  eventLocation?: {
    name: string;
    address: string;
  };
  eventAttendanceMode: 'OfflineEventAttendanceMode' | 'OnlineEventAttendanceMode' | 'MixedEventAttendanceMode';
  organizer: { name: string; url?: string };
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: `https://schema.org/${event.eventAttendanceMode}`,
    ...(event.eventLocation && {
      location: {
        '@type': 'Place',
        name: event.eventLocation.name,
        address: event.eventLocation.address,
      },
    }),
    organizer: {
      '@type': 'Organization',
      name: event.organizer.name,
      ...(event.organizer.url && { url: event.organizer.url }),
    },
    ...(event.image && { image: event.image }),
  };
}

/**
 * Generador de OpenGraph para todas las páginas
 * Máxima cobertura para Social Media + Whatsapp
 */
export function generateOpenGraphMeta(og: {
  title: string;
  description: string;
  image: string;
  url: string;
  type: 'website' | 'article' | 'product';
  locale?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}) {
  return [
    { property: 'og:title', content: og.title },
    { property: 'og:description', content: og.description },
    { property: 'og:image', content: og.image },
    { property: 'og:url', content: og.url },
    { property: 'og:type', content: og.type },
    { property: 'og:locale', content: og.locale || 'es_ES' },
    ...(og.author ? [{ property: 'article:author', content: og.author }] : []),
    ...(og.publishedTime ? [{ property: 'article:published_time', content: og.publishedTime }] : []),
    ...(og.modifiedTime ? [{ property: 'article:modified_time', content: og.modifiedTime }] : []),
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: og.title },
    { name: 'twitter:description', content: og.description },
    { name: 'twitter:image', content: og.image },
  ];
}

export default {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateProductSchema,
  generateEventSchema,
  generateOpenGraphMeta,
};
