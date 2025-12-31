'use client';

export default function ComparisonSection() {
  const comparisonData = [
    {
      criterio: 'Time-to-market',
      complianceflow: '< 1 semana',
      inhouse: '6-12 meses',
      otros: '2-4 meses',
      cfColor: 'bg-secondary/10 text-secondary-300',
    },
    {
      criterio: 'Coste inicial',
      complianceflow: '0 € (sandbox)',
      inhouse: '€80K-150K',
      otros: '€5K-15K',
      cfColor: 'bg-secondary/10 text-secondary-300',
    },
    {
      criterio: 'Mantenimiento',
      complianceflow: 'Incluido',
      inhouse: '2-3 devs full-time',
      otros: 'Variable',
      cfColor: 'bg-secondary/10 text-secondary-300',
    },
    {
      criterio: 'Actualizaciones regulatorias',
      complianceflow: 'Automáticas',
      inhouse: 'Manual',
      otros: 'Manual/lenta',
      cfColor: 'bg-secondary/10 text-secondary-300',
    },
    {
      criterio: 'SLA & Soporte',
      complianceflow: '99.9% + 4h response',
      inhouse: 'Sin garantía',
      otros: 'Variable',
      cfColor: 'bg-secondary/10 text-secondary-300',
    },
    {
      criterio: 'Escalabilidad',
      complianceflow: 'Ilimitada',
      inhouse: 'Requiere inversión',
      otros: 'Limitada',
      cfColor: 'bg-secondary/10 text-secondary-300',
    },
    {
      criterio: 'Certificaciones',
      complianceflow: 'ISO 27001, SOC 2, GDPR',
      inhouse: 'A conseguir',
      otros: 'Algunas',
      cfColor: 'bg-secondary/10 text-secondary-300',
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
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
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
                      className="bg-primary/10 px-6 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider w-1/5"
                    >
                      Criterio
                    </th>
                    <th
                      scope="col"
                      className="bg-primary px-6 py-5 text-center text-sm font-semibold text-white uppercase tracking-wider w-1/5"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>ComplianceFlow</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="bg-gray-800/50 px-6 py-5 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider w-1/5"
                    >
                      Desarrollo in-house
                    </th>
                    <th
                      scope="col"
                      className="bg-gray-800/50 px-6 py-5 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider w-1/5"
                    >
                      Otros proveedores
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-800 bg-gray-950">
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-900/50 transition-colors"
                    >
                      {/* Criterio */}
                      <td className="px-6 py-5 text-sm font-medium text-white whitespace-nowrap">
                        {row.criterio}
                      </td>

                      {/* ComplianceFlow - Highlighted */}
                      <td
                        className={`px-6 py-5 text-center text-sm font-semibold whitespace-nowrap ${row.cfColor}`}
                      >
                        {row.complianceflow}
                      </td>

                      {/* In-house */}
                      <td className="px-6 py-5 text-center text-sm text-gray-400 whitespace-nowrap">
                        {row.inhouse}
                      </td>

                      {/* Otros */}
                      <td className="px-6 py-5 text-center text-sm text-gray-400 whitespace-nowrap">
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
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 px-8 py-4">
            <svg
              className="h-6 w-6 text-secondary-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-white">Veredicto:</span>{' '}
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
