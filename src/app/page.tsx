import DemoSection from '@/components/sections/DemoSection';
import SecuritySection from '@/components/sections/SecuritySection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ComplianceFlow – Enterprise Compliance APIs | ISO 27001 & SOC 2 Certified',
  description:
    'Plataforma de APIs enterprise para cumplimiento normativo automatizado. Certificada ISO 27001, SOC 2 Type II, GDPR compliant. Integración en minutos, 99.99% SLA garantizado.',
  keywords: [
    'compliance API',
    'cumplimiento normativo automatizado',
    'GDPR compliance',
    'ISO 27001 certified',
    'SOC2 Type II',
    'enterprise security API',
    'audit automation',
    'regulatory compliance',
    'compliance as a service',
    'API seguridad enterprise',
    'HIPAA compliance',
    'PCI DSS',
    'audit trail API',
    'compliance management platform',
  ],
  authors: [{ name: 'ComplianceFlow', url: 'https://complianceflow.netlify.app' }],
  creator: 'ComplianceFlow',
  publisher: 'ComplianceFlow',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://complianceflow.netlify.app',
    title: 'ComplianceFlow – Enterprise Compliance APIs',
    description:
      'Automatiza el cumplimiento normativo con APIs enterprise. ISO 27001, SOC 2, GDPR certified. Trusted by 500+ companies.',
    siteName: 'ComplianceFlow',
    images: [
      {
        url: 'https://complianceflow.netlify.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ComplianceFlow - Enterprise Compliance APIs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComplianceFlow – Enterprise Compliance APIs',
    description: 'Automatiza compliance con APIs enterprise. ISO 27001 & SOC 2 certified.',
    creator: '@complianceflow',
    images: ['https://complianceflow.netlify.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://complianceflow.netlify.app',
  },
};

export default function HomePage() {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://complianceflow.netlify.app/#organization',
        name: 'ComplianceFlow',
        url: 'https://complianceflow.netlify.app',
        logo: 'https://complianceflow.netlify.app/logo-main.svg',
        description: 'Enterprise compliance APIs platform',
        sameAs: [
          'https://twitter.com/complianceflow',
          'https://linkedin.com/company/complianceflow',
          'https://github.com/juankaspain/complianceflow.es',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://complianceflow.netlify.app/#website',
        url: 'https://complianceflow.netlify.app',
        name: 'ComplianceFlow',
        publisher: {
          '@id': 'https://complianceflow.netlify.app/#organization',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'ComplianceFlow',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, API',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          description: 'Free tier available',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '500',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Qué certificaciones tiene ComplianceFlow?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ComplianceFlow está certificado ISO 27001, SOC 2 Type II y es totalmente GDPR compliant.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuánto tiempo toma la integración?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La integración básica toma menos de 30 minutos con nuestras SDKs y documentación completa.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gray-950">
        {/* Hero Section - Enhanced */}
        <section 
          className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-24 sm:py-32 lg:py-40"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced background effects */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Status Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary-300 shadow-lg shadow-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                </span>
                <span>Certificado ISO 27001 & SOC 2 Type II</span>
              </div>

              {/* Main Heading - SEO optimized */}
              <h1 
                id="hero-heading"
                className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                <span className="block leading-tight">
                  Cumplimiento normativo
                </span>
                <span className="mt-3 block bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent leading-tight">
                  automatizado via APIs
                </span>
              </h1>

              {/* Value Proposition - More professional */}
              <p className="mt-8 text-xl leading-relaxed text-gray-300 sm:text-2xl max-w-4xl mx-auto font-light">
                Infraestructura enterprise con certificaciones{' '}
                <span className="font-semibold text-white">ISO 27001</span>,{' '}
                <span className="font-semibold text-white">SOC 2 Type II</span> y{' '}
                <span className="font-semibold text-white">GDPR</span>.
                Integración en minutos, compliance para siempre.
              </p>

              {/* Enhanced Stats */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { label: 'Uptime SLA', value: '99.99%', icon: '🟢' },
                  { label: 'Tiempo integración', value: '<30min', icon: '⚡' },
                  { label: 'Empresas', value: '500+', icon: '🏢' },
                  { label: 'Respuesta API', value: '<50ms', icon: '🚀' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-gray-900/80"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced CTAs */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#demos"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-primary hover:bg-primary-600 rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-950"
                  aria-label="Ver demos interactivos"
                >
                  <span>Explorar demos</span>
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-950"
                  aria-label="Leer documentación técnica"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Documentación API
                </a>
              </div>

              {/* Trust Section - Enhanced */}
              <div className="mt-20 pt-12 border-t border-gray-800">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-10">
                  Confianza de empresas líderes en Europa y América Latina
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity">
                  {[
                    { name: 'ISO 27001', subtitle: 'Information Security' },
                    { name: 'SOC 2 Type II', subtitle: 'Security & Privacy' },
                    { name: 'GDPR', subtitle: 'Data Protection' },
                    { name: 'HIPAA', subtitle: 'Healthcare Ready' },
                  ].map((cert) => (
                    <div key={cert.name} className="text-center group cursor-default">
                      <div className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                        {cert.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{cert.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance Section */}
        <SecuritySection />

        {/* Demo Section */}
        <section id="demos" className="bg-gray-950" aria-labelledby="demos-heading">
          <DemoSection />
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
