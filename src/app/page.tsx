import DemoSection from '@/components/sections/DemoSection';
import SecuritySection from '@/components/sections/SecuritySection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ComplianceFlow - Enterprise Compliance APIs',
  description:
    'Infraestructura enterprise-grade con las certificaciones y estándares más exigentes del sector.',
  keywords: [
    'compliance',
    'cumplimiento normativo',
    'GDPR',
    'ISO 27001',
    'SOC2',
    'enterprise security',
  ],
  openGraph: {
    title: 'ComplianceFlow - Enterprise Compliance APIs',
    description:
      'Seguridad y compliance por diseño. Infraestructura certificada ISO 27001.',
    url: 'https://complianceflow.netlify.app',
    siteName: 'ComplianceFlow',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Section - Dark Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-32 sm:py-40">
        <div className="absolute inset-0">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Enterprise-grade compliance APIs
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              <span className="block">Seguridad y compliance</span>
              <span className="mt-2 block bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
                por diseño
              </span>
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-gray-300 sm:text-2xl max-w-4xl mx-auto">
              Infraestructura enterprise-grade con las certificaciones y estándares
              más exigentes del sector.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#demos"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-primary hover:bg-primary-600 rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105"
              >
                <span>Probar demos</span>
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20"
              >
                Ver documentación
              </a>
            </div>

            {/* Trusted by section */}
            <div className="mt-20 pt-10 border-t border-gray-800">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
                Confianza de empresas líderes
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                {['500+ Empresas', '99.9% Uptime', 'ISO 27001', 'SOC 2 Type II'].map((item) => (
                  <div key={item} className="text-lg font-semibold text-gray-400">
                    {item}
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
      <section id="demos" className="bg-gray-950">
        <DemoSection />
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
