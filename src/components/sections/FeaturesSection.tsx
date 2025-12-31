'use client';

import { Zap, Shield, BarChart3, Code, Webhook, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'APIs ultrarrápidas',
    description:
      'Latencia < 100ms con CDN global. Edge computing para máximo rendimiento.',
  },
  {
    icon: Shield,
    title: 'Seguridad enterprise',
    description:
      'Certificaciones SOC2, ISO 27001. Pentesting continuo y bug bounty program.',
  },
  {
    icon: BarChart3,
    title: 'Analytics en tiempo real',
    description:
      'Dashboards avanzados con métricas de compliance. Alertas proactivas.',
  },
  {
    icon: Code,
    title: 'SDKs en 8 lenguajes',
    description:
      'Librerías oficiales en Python, Node.js, PHP, Ruby, Go, Java, .NET y más.',
  },
  {
    icon: Webhook,
    title: 'Webhooks inteligentes',
    description:
      'Notificaciones en tiempo real con reintentos automáticos y firma HMAC.',
  },
  {
    icon: Lock,
    title: 'GDPR by design',
    description:
      'Cumplimiento GDPR nativo. Datos en UE, DPO disponible, derecho al olvido.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Plataforma completa
            <span className="block mt-2 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              para compliance
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Todo lo que necesitas para automatizar y gestionar tu cumplimiento normativo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:bg-gray-900"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <Icon className="h-7 w-7 text-primary-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
