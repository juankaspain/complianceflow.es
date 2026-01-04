import Script from 'next/script'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ComplianceFlow',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '49',
      highPrice: '499',
      offerCount: '3',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    provider: {
      '@type': 'Organization',
      name: 'ComplianceFlow',
      url: 'https://complianceflow.es',
      logo: 'https://complianceflow.es/logo.png',
      sameAs: [
        'https://twitter.com/complianceflow',
        'https://linkedin.com/company/complianceflow',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'support@complianceflow.es',
        availableLanguage: ['Spanish', 'English'],
      },
    },
    description:
      'API REST para compliance fiscal automatizado en España. SII, Verifactu, TicketBAI integrados en 5 minutos.',
    screenshot: 'https://complianceflow.es/screenshot.png',
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://complianceflow.es/#business',
    name: 'ComplianceFlow',
    image: 'https://complianceflow.es/logo.png',
    url: 'https://complianceflow.es',
    telephone: '+34-900-000-000',
    email: 'info@complianceflow.es',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Principal 123',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      postalCode: '28001',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.4168',
      longitude: '-3.7038',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '€€',
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo tarda la integración?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La integración básica tarda menos de 5 minutos. Para integraciones más complejas, nuestro equipo puede ayudarte en un proceso que típicamente tarda 1-2 días.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Es compatible con mi ERP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. ComplianceFlow funciona con cualquier sistema mediante nuestra API REST estándar. Tenemos conectores pre-construidos para SAP, Sage, A3, Holded, y más.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué sucede si cambian las regulaciones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monitoreamos constantemente cambios en SII, Verifactu, TicketBAI. Cuando hay actualizaciones, las implementamos automáticamente sin que tengas que hacer nada.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo cancelar en cualquier momento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, sin penalizaciones ni permanencia. Cancelas cuando quieras desde el dashboard. Mantendrás acceso hasta el final del periodo pagado.',
        },
      },
    ],
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'ComplianceFlow API',
    description:
      'API REST para compliance fiscal automatizado: SII, Verifactu, TicketBAI integrados',
    brand: {
      '@type': 'Brand',
      name: 'ComplianceFlow',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Plan Starter',
        price: '49',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://complianceflow.es/pricing',
      },
      {
        '@type': 'Offer',
        name: 'Plan Professional',
        price: '199',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://complianceflow.es/pricing',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  }

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
