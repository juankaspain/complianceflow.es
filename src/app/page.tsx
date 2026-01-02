import DemoSection from '@/components/sections/DemoSection';
import SecuritySection from '@/components/sections/SecuritySection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import TrustIndicators from '@/components/sections/TrustIndicators';
import ROICalculator from '@/components/sections/ROICalculator';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import SocialProof from '@/components/ui/SocialProof';
import LiveMetricsBar from '@/components/ui/LiveMetricsBar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import EnhancedHeroDemo from '@/components/sections/EnhancedHeroDemo';
import { Metadata } from 'next';

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
        {/* Enhanced Hero Section with New Components */}
        <EnhancedHeroDemo />

        {/* Live Metrics Bar */}
        <LiveMetricsBar />

        {/* Social Proof Badges */}
        <SocialProof />

        {/* Trust Indicators */}
        <TrustIndicators />

        {/* Security & Compliance Section */}
        <SecuritySection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Demo Section */}
        <section id="demos" className="bg-gray-950" aria-labelledby="demos-heading">
          <DemoSection />
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* CTA Section */}
        <CTASection />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </main>
    </>
  );
}
