import type { Metadata } from 'next';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carreras',
  description: 'Únete al equipo de ComplianceFlow.',
};

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Backend Engineer',
      department: 'Ingeniería',
      location: 'Madrid / Remoto',
      type: 'Full-time',
      description: 'Buscamos un ingeniero backend con experiencia en Node.js, TypeScript y arquitecturas cloud.',
    },
    {
      title: 'Product Designer',
      department: 'Diseño',
      location: 'Remoto',
      type: 'Full-time',
      description: 'Diseñador de producto con experiencia en SaaS B2B y sistemas de diseño.',
    },
    {
      title: 'Compliance Specialist',
      department: 'Compliance',
      location: 'Madrid',
      type: 'Full-time',
      description: 'Experto en normativas GDPR, ISO 27001 y SOC 2 para liderar nuestro equipo de compliance.',
    },
  ];

  const benefits = [
    'Salario competitivo',
    'Trabajo remoto flexible',
    'Seguro médico privado',
    '25 días de vacaciones',
    'Presupuesto para formación',
    'Equipamiento de última generación',
    'Stock options',
    'Ambiente internacional',
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6">
              Trabaja con nosotros
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 mb-8">
              Únete a un equipo apasionado por la seguridad y el compliance.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/50 hover:bg-primary-600"
            >
              <Briefcase className="h-5 w-5" />
              Ver posiciones abiertas
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Beneficios</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center"
              >
                <p className="text-white font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="border-t border-gray-800 py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Posiciones Abiertas</h2>
          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-primary/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-400">{job.description}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-600 transition-all whitespace-nowrap"
                  >
                    Aplicar <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿No ves la posición perfecta?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Envíanos tu CV. Siempre estamos buscando talento excepcional.
          </p>
          <a
            href="mailto:jobs@complianceflow.es"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 px-8 py-4 text-lg font-semibold text-white hover:bg-gray-900"
          >
            Envía tu CV
          </a>
        </div>
      </section>
    </div>
  );
}
