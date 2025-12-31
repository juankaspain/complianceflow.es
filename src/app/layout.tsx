import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/lib/analytics/posthog';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://complianceflow.netlify.app'),
  title: {
    default: 'ComplianceFlow - Enterprise Compliance APIs',
    template: '%s | ComplianceFlow',
  },
  description:
    'Infraestructura enterprise-grade con las certificaciones y estándares más exigentes del sector.',
  keywords: [
    'compliance',
    'cumplimiento normativo',
    'GDPR',
    'ISO 27001',
    'SOC2',
    'enterprise',
    'APIs',
  ],
  authors: [{ name: 'ComplianceFlow Team' }],
  creator: 'ComplianceFlow',
  publisher: 'ComplianceFlow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://complianceflow.netlify.app',
    title: 'ComplianceFlow - Enterprise Compliance APIs',
    description:
      'Seguridad y compliance por diseño. Infraestructura certificada.',
    siteName: 'ComplianceFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComplianceFlow',
    description: 'Enterprise Compliance APIs',
    creator: '@complianceflow',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-gray-950 font-sans antialiased">
        <ErrorBoundary>
          {/* Header - Dark Professional */}
          <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
              <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                  {/* Logo Icon */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all">
                    <span className="text-white font-bold text-xl">CF</span>
                  </div>
                  {/* Logo Text */}
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white">
                      ComplianceFlow
                    </span>
                    <span className="text-xs text-gray-500">Enterprise Compliance APIs</span>
                  </div>
                </a>
              </div>
              
              <div className="hidden lg:flex lg:gap-x-8">
                <a
                  href="/features"
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
                >
                  Plataforma
                </a>
                <a
                  href="#demos"
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
                >
                  Demos
                </a>
                <a
                  href="/pricing"
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
                >
                  Precios
                </a>
                <a
                  href="/docs"
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
                >
                  Documentación
                </a>
              </div>
              
              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                <a
                  href="/login"
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
                >
                  Iniciar sesión
                </a>
                <a
                  href="/signup"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/50 hover:bg-primary-600 transition-all hover:shadow-primary/70"
                >
                  Probar gratis
                </a>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          {children}

          {/* Footer - Dark */}
          <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Producto</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="/features" className="text-sm hover:text-white transition-colors">
                        Características
                      </a>
                    </li>
                    <li>
                      <a href="/pricing" className="text-sm hover:text-white transition-colors">
                        Precios
                      </a>
                    </li>
                    <li>
                      <a href="/docs" className="text-sm hover:text-white transition-colors">
                        Documentación
                      </a>
                    </li>
                    <li>
                      <a href="/security" className="text-sm hover:text-white transition-colors">
                        Seguridad
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Empresa</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="/about" className="text-sm hover:text-white transition-colors">
                        Sobre nosotros
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="text-sm hover:text-white transition-colors">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-sm hover:text-white transition-colors">
                        Contacto
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-sm hover:text-white transition-colors">
                        Carreras
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="/privacy" className="text-sm hover:text-white transition-colors">
                        Privacidad
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-sm hover:text-white transition-colors">
                        Términos
                      </a>
                    </li>
                    <li>
                      <a href="/dpa" className="text-sm hover:text-white transition-colors">
                        DPA
                      </a>
                    </li>
                    <li>
                      <a href="/sla" className="text-sm hover:text-white transition-colors">
                        SLA
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Desarrolladores</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="/docs/api" className="text-sm hover:text-white transition-colors">
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="/docs/sdks" className="text-sm hover:text-white transition-colors">
                        SDKs
                      </a>
                    </li>
                    <li>
                      <a href="/status" className="text-sm hover:text-white transition-colors">
                        Status
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/juankaspain" className="text-sm hover:text-white transition-colors">
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm">
                    © {new Date().getFullYear()} ComplianceFlow. Todos los derechos reservados.
                  </p>
                  <div className="flex gap-6">
                    <a href="https://twitter.com/complianceflow" className="hover:text-white transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/complianceflow" className="hover:text-white transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://github.com/juankaspain/complianceflow.es" className="hover:text-white transition-colors">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* Analytics */}
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  );
}
