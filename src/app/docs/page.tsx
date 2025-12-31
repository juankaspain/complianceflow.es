import type { Metadata } from 'next';
import { Book, Code, Zap, Shield, Search, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentación',
  description: 'Guías, referencias de API y tutoriales.',
};

export default function DocsPage() {
  const sections = [
    {
      icon: Zap,
      title: 'Quick Start',
      description: 'Comienza en 5 minutos con nuestra guía rápida.',
      links: [
        { label: 'Crear cuenta', href: '/docs/quickstart/signup' },
        { label: 'Obtener API Key', href: '/docs/quickstart/api-key' },
        { label: 'Primera request', href: '/docs/quickstart/first-request' },
      ],
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Documentación completa de todos los endpoints.',
      links: [
        { label: 'Authentication', href: '/docs/api/auth' },
        { label: 'Compliance APIs', href: '/docs/api/compliance' },
        { label: 'Webhooks', href: '/docs/api/webhooks' },
        { label: 'SDKs', href: '/docs/api/sdks' },
      ],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Mejores prácticas de seguridad y cumplimiento.',
      links: [
        { label: 'GDPR Compliance', href: '/docs/security/gdpr' },
        { label: 'ISO 27001', href: '/docs/security/iso' },
        { label: 'Cifrado', href: '/docs/security/encryption' },
        { label: 'Auditoría', href: '/docs/security/audit' },
      ],
    },
    {
      icon: Book,
      title: 'Guías',
      description: 'Tutoriales paso a paso para casos de uso comunes.',
      links: [
        { label: 'Integración con React', href: '/docs/guides/react' },
        { label: 'Integración con Node.js', href: '/docs/guides/nodejs' },
        { label: 'Manejo de errores', href: '/docs/guides/errors' },
        { label: 'Rate limiting', href: '/docs/guides/rate-limits' },
      ],
    },
  ];

  const popularDocs = [
    'Authentication',
    'Quick Start',
    'API Keys',
    'Webhooks',
    'Rate Limits',
    'GDPR Compliance',
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6">
              Documentación
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 mb-8">
              Todo lo que necesitas para integrar ComplianceFlow.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar en la documentación..."
                className="w-full rounded-xl border border-gray-700 bg-gray-900/50 pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {popularDocs.map((doc) => (
                <a
                  key={doc}
                  href="#"
                  className="rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-sm text-gray-300 hover:border-primary hover:text-primary transition-colors"
                >
                  {doc}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-primary/50"
                >
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
                  <p className="text-gray-400 mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="border-t border-gray-800 py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ejemplo de Código</h2>
            <p className="text-gray-400">Comienza con tu primera request en segundos</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center justify-between rounded-t-xl border border-gray-800 bg-gray-900/80 px-4 py-3">
                <span className="text-sm font-medium text-gray-400">JavaScript</span>
                <button className="text-xs text-primary hover:text-primary-400">Copiar</button>
              </div>
              <pre className="rounded-b-xl border border-t-0 border-gray-800 bg-gray-900/50 p-4 overflow-x-auto">
                <code className="text-sm text-gray-300">{`// Instalar SDK
npm install @complianceflow/sdk

// Importar y configurar
import ComplianceFlow from '@complianceflow/sdk';

const cf = new ComplianceFlow({
  apiKey: 'cf_test_xxx',
});

// Verificar compliance
const result = await cf.compliance.check({
  entity: 'user@example.com',
  type: 'gdpr'
});

console.log(result);
// { status: 'compliant', score: 98 }`}</code>
              </pre>
            </div>
            <div>
              <div className="flex items-center justify-between rounded-t-xl border border-gray-800 bg-gray-900/80 px-4 py-3">
                <span className="text-sm font-medium text-gray-400">cURL</span>
                <button className="text-xs text-primary hover:text-primary-400">Copiar</button>
              </div>
              <pre className="rounded-b-xl border border-t-0 border-gray-800 bg-gray-900/50 p-4 overflow-x-auto">
                <code className="text-sm text-gray-300">{`# API Request con cURL
curl -X POST https://api.complianceflow.es/v1/compliance/check \\
  -H "Authorization: Bearer cf_test_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "entity": "user@example.com",
    "type": "gdpr"
  }'

# Response
{
  "status": "compliant",
  "score": 98,
  "details": {...}
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Necesitas ayuda?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Nuestro equipo está listo para ayudarte con la integración.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/50 hover:bg-primary-600"
            >
              Contactar Soporte
            </a>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 px-6 py-3 font-semibold text-white hover:bg-gray-900"
            >
              Crear cuenta gratis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
