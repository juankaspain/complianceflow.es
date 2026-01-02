'use client';

import Tooltip from '@/components/ui/Tooltip';

export default function ComparisonSection() {
  const comparisonData = [
    {
      criterio: 'Time-to-market',
      tooltip: 'Tiempo desde la decisión hasta tener el sistema en producción',
      complianceflow: '< 1 semana',
      inhouse: '6-12 meses',
      otros: '2-4 meses',
    },
    {
      criterio: 'Coste inicial',
      tooltip: 'Inversión necesaria para comenzar a usar el sistema',
      complianceflow: '0 € (sandbox)',
      inhouse: '€80K-150K',
      otros: '€5K-15K',
    },
    {
      criterio: 'Mantenimiento',
      tooltip: 'Recursos necesarios para mantener el sistema actualizado y funcionando',
      complianceflow: 'Incluido',
      inhouse: '2-3 devs full-time',
      otros: 'Variable',
    },
    {
      criterio: 'Actualizaciones regulatorias',
      tooltip: 'Cómo se aplican cambios en normativas (SII, Verifactu, GDPR, etc.)',
      complianceflow: 'Automáticas',
      inhouse: 'Manual',
      otros: 'Manual/lenta',
    },
    {
      criterio: 'SLA & Soporte',
      tooltip: 'Service Level Agreement: garantía de disponibilidad y tiempo de respuesta a incidencias',
      complianceflow: '99.9% + 4h response',
      inhouse: 'Sin garantía',
      otros: 'Variable',
    },
    {
      criterio: 'Escalabilidad',
      tooltip: 'Capacidad del sistema para crecer con tu negocio sin pérdida de rendimiento',
      complianceflow: 'Ilimitada',
      inhouse: 'Requiere inversión',
      otros: 'Limitada',
    },
    {
      criterio: 'Certificaciones',
      tooltip: 'Estándares internacionales de seguridad y privacidad',
      complianceflow: 'ISO 27001, SOC 2, GDPR',
      inhouse: 'A conseguir',
      otros: 'Algunas',
    },
  ];

  return (
    <section className="py-24 bg-gray-900" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="comparison-heading"
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            ¿Por qué elegir{' '}
            <span 
              className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-300 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 40px rgba(103, 232, 249, 0.6), 0 0 20px rgba(147, 197, 253, 0.4)'
              }}
            >
              ComplianceFlow
            </span>
            ?
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Comparamos con las alternativas más comunes para automatizar compliance
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
              <table className="min-w-full divide-y divide-gray-800">
                {/* Table Header */}
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="bg-gray-800/80 px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider w-1/4"
                    >
                      Criterio
                    </th>
                    <th
                      scope="col"
                      className="bg-gradient-to-br from-primary-600 to-primary-700 px-6 py-5 text-center text-sm font-bold text-white uppercase tracking-wider w-1/4 shadow-lg shadow-primary/20"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base">ComplianceFlow</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="bg-gray-800/50 px-6 py-5 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider w-1/4"
                    >
                      Desarrollo in-house
                    </th>
                    <th
                      scope="col"
                      className="bg-gray-800/50 px-6 py-5 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider w-1/4"
                    >
                      Otros proveedores
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-800/50 bg-gray-950">
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-900/50 transition-colors duration-200"
                    >
                      {/* Criterio with Tooltip */}
                      <td className="px-6 py-5 text-sm font-semibold text-gray-200 bg-gray-900/30">
                        <Tooltip content={row.tooltip} position="right">
                          <span className="cursor-help border-b border-dotted border-gray-500 hover:border-primary-400 transition-colors">
                            {row.criterio}
                          </span>
                        </Tooltip>
                      </td>

                      {/* ComplianceFlow - Highlighted with better contrast */}
                      <td className="px-6 py-5 text-center text-base font-bold bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border-l-2 border-r-2 border-primary-500/30 relative">
                        {/* Glow effect background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-400/10 to-transparent pointer-events-none" />
                        
                        {/* Text content */}
                        <span className="relative z-10 text-primary-200 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">
                          {row.complianceflow}
                        </span>
                      </td>

                      {/* In-house */}
                      <td className="px-6 py-5 text-center text-sm text-gray-500">
                        {row.inhouse}
                      </td>

                      {/* Otros */}
                      <td className="px-6 py-5 text-center text-sm text-gray-500">
                        {row.otros}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Veredicto */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/40 px-10 py-5 shadow-xl shadow-primary/10">
            <svg
              className="h-8 w-8 text-green-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-lg text-gray-200">
              <span className="font-bold text-white">Veredicto:</span>{' '}
              ComplianceFlow ofrece el mejor balance entre velocidad, coste y fiabilidad
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#demos"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/50 hover:bg-primary-600 hover:shadow-primary/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
          >
            Probar gratis ahora
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
