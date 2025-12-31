import DemoSection from '@/components/sections/DemoSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ComplianceFlow - Plataforma Enterprise de Gestión de Cumplimiento',
  description:
    'Automatiza tu cumplimiento normativo con ComplianceFlow. Gestión de GDPR, ISO, SOC2 y más con IA.',
  keywords: [
    'compliance',
    'cumplimiento normativo',
    'GDPR',
    'ISO 27001',
    'SOC2',
    'gestión de riesgos',
  ],
  openGraph: {
    title: 'ComplianceFlow - Gestión de Cumplimiento Enterprise',
    description:
      'Automatiza tu cumplimiento normativo con la plataforma líder del mercado',
    url: 'https://complianceflow.netlify.app',
    siteName: 'ComplianceFlow',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComplianceFlow - Gestión de Cumplimiento',
    description: 'Automatiza tu cumplimiento normativo con IA',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Gestión de Cumplimiento{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Simplificada
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Automatiza tu cumplimiento normativo con la plataforma enterprise
              más avanzada del mercado. GDPR, ISO 27001, SOC2 y más.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#demos"
                className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
              >
                Probar demos
              </a>
              <a
                href="/docs"
                className="text-base font-semibold leading-7 text-gray-900 hover:text-primary transition-colors"
              >
                Ver documentación <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="mt-1 text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="mt-1 text-sm text-gray-600">Empresas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="mt-1 text-sm text-gray-600">Normativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="mt-1 text-sm text-gray-600">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - INTEGRADO AUTOMÁTICAMENTE */}
      <section id="demos">
        <DemoSection />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Todo lo que necesitas para el cumplimiento
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Funcionalidades enterprise para empresas de todos los tamaños
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Seguridad Certificada
              </h3>
              <p className="mt-2 text-gray-600">
                Cumplimiento de SOC2, ISO 27001 y certificaciones de seguridad internacionales.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Automatización IA
              </h3>
              <p className="mt-2 text-gray-600">
                Automatiza tareas repetitivas con IA y reduce el tiempo de cumplimiento en un 80%.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Reporting Avanzado
              </h3>
              <p className="mt-2 text-gray-600">
                Informes detallados y dashboards en tiempo real para auditorías y directivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Listo para simplificar tu cumplimiento?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Únete a más de 500 empresas que confían en ComplianceFlow
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/signup"
                className="rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-all"
              >
                Comenzar gratis
              </a>
              <a
                href="/contact"
                className="rounded-lg border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/10 transition-all"
              >
                Contactar ventas
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
