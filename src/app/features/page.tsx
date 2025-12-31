import type { Metadata } from 'next';
import { Shield, Zap, Globe, Lock, Code, BarChart, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Características',
  description: 'Descubre todas las características enterprise de ComplianceFlow.',
};

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: 'Seguridad Enterprise',
      description: 'Cifrado AES-256, autenticación multifactor y cumplimiento de normativas internacionales.',
      highlights: ['ISO 27001', 'SOC 2 Type II', 'GDPR Ready'],
    },
    {
      icon: Zap,
      title: 'Rendimiento Ultra-rápido',
      description: 'APIs optimizadas con latencias <50ms y disponibilidad del 99.99%.',
      highlights: ['CDN Global', 'Edge Computing', 'Auto-scaling'],
    },
    {
      icon: Globe,
      title: 'Cobertura Global',
      description: 'Infraestructura distribuida en 12 regiones para mínima latencia.',
      highlights: ['Europa', 'América', 'Asia-Pacífico'],
    },
    {
      icon: Lock,
      title: 'Privacidad Garantizada',
      description: 'Tus datos permanecen bajo tu control. Zero-knowledge architecture.',
      highlights: ['Cifrado E2E', 'Datos en EU', 'GDPR Compliant'],
    },
    {
      icon: Code,
      title: 'APIs RESTful',
      description: 'Documentación completa, SDKs en múltiples lenguajes y ejemplos de código.',
      highlights: ['OpenAPI', 'SDKs', 'Webhooks'],
    },
    {
      icon: BarChart,
      title: 'Analytics Avanzado',
      description: 'Dashboard en tiempo real con métricas detalladas y alertas configurables.',
      highlights: ['Real-time', 'Custom Alerts', 'Export Data'],
    },
    {
      icon: Users,
      title: 'Gestión de Equipos',
      description: 'Control de acceso granular, roles personalizados y auditoría completa.',
      highlights: ['RBAC', 'SSO', 'Audit Logs'],
    },
    {
      icon: Clock,
      title: 'Soporte 24/7',
      description: 'Equipo dedicado disponible siempre. SLA garantizado.',
      highlights: ['Chat en vivo', 'Email', 'Teléfono'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6">
              Características{' '}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Todo lo que necesitas para cumplir con las normativas más exigentes.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para empezar?</h2>
          <p className="text-xl text-gray-400 mb-8">Prueba gratis durante 14 días. Sin tarjeta de crédito.</p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/50 hover:bg-primary-600"
          >
            Comenzar ahora
          </a>
        </div>
      </section>
    </div>
  );
}
