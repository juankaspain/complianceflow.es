import type { Metadata } from 'next';
import { Shield, Lock, FileCheck, Server, Eye, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Seguridad y Compliance',
  description: 'Infraestructura enterprise-grade con las certificaciones y estándares más exigentes del sector.',
};

export default function SecurityPage() {
  const certifications = [
    {
      icon: Shield,
      name: 'ISO 27001',
      description: 'Certificación internacional de gestión de seguridad de la información.',
      status: 'Certificado',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Lock,
      name: 'SOC 2 Type II',
      description: 'Auditoría de controles de seguridad, disponibilidad e integridad.',
      status: 'Certificado',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: FileCheck,
      name: 'GDPR Compliant',
      description: 'Cumplimiento del Reglamento General de Protección de Datos.',
      status: 'Conforme',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Server,
      name: 'PCI DSS',
      description: 'Estándar de seguridad de datos para la industria de tarjetas de pago.',
      status: 'Nivel 1',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
  ];

  const securityFeatures = [
    {
      title: 'Cifrado de extremo a extremo',
      description: 'Todos los datos se cifran con AES-256 en reposo y TLS 1.3 en tránsito.',
      icon: Lock,
    },
    {
      title: 'Autenticación multifactor',
      description: 'MFA obligatorio para todos los usuarios con acceso a datos sensibles.',
      icon: Shield,
    },
    {
      title: 'Auditoría continua',
      description: 'Logs detallados de todas las acciones con retención de 7 años.',
      icon: Eye,
    },
    {
      title: 'Respuesta a incidentes',
      description: 'Equipo 24/7 para gestionar y responder a incidentes de seguridad.',
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              <span>Seguridad Enterprise-Grade</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Seguridad y{' '}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Compliance
              </span>
              {' '}por Diseño
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-400 sm:text-xl">
              Infraestructura certificada con los estándares más exigentes del sector.
              Tu confianza es nuestra prioridad.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Certificaciones y Estándares
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Cumplimos con las certificaciones más estrictas de la industria.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className={`inline-flex rounded-lg ${cert.bgColor} p-3 mb-6`}>
                    <Icon className={`h-8 w-8 ${cert.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{cert.description}</p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    {cert.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Características de Seguridad
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Protección multicapa para garantizar la seguridad de tus datos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex gap-6 rounded-xl border border-gray-800 bg-gray-900/30 p-8 backdrop-blur-sm transition-all hover:border-gray-700"
                >
                  <div className="flex-shrink-0">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="border-t border-gray-800 bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.99%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Monitorización</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">&lt;15min</div>
              <div className="text-sm text-gray-400">Respuesta a incidentes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">AES-256</div>
              <div className="text-sm text-gray-400">Cifrado</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            ¿Necesitas más información?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Nuestro equipo de seguridad está disponible para responder cualquier pregunta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/50 transition-all hover:bg-primary-600 hover:shadow-primary/70"
            >
              <Shield className="h-5 w-5" />
              Contactar con Seguridad
            </a>
            <a
              href="/docs/security"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-gray-600 hover:bg-gray-900"
            >
              <FileCheck className="h-5 w-5" />
              Ver Documentación
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
