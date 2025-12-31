'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  const [auditsPerYear, setAuditsPerYear] = useState(4);

  // Cálculos
  const inHouseCost = {
    devSalary: 60000 * 2, // 2 devs
    infrastructure: 15000,
    auditorCost: 8000 * auditsPerYear,
    certifications: 25000,
  };

  const totalInHouse = Object.values(inHouseCost).reduce((a, b) => a + b, 0);

  const complianceFlowCost = {
    subscription: employees * 10 * 12, // €10/usuario/mes
    setup: 0,
    maintenance: 0,
  };

  const totalCF = Object.values(complianceFlowCost).reduce((a, b) => a + b, 0);

  const savings = totalInHouse - totalCF;
  const savingsPercent = ((savings / totalInHouse) * 100).toFixed(0);

  return (
    <section className="py-24 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
            Calcula tu{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              ahorro anual
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre cuánto puedes ahorrar vs desarrollo in-house
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Tus datos</h3>

            {/* Input: Employees */}
            <div className="mb-8">
              <label className="flex justify-between text-sm font-medium text-gray-300 mb-3">
                <span>Número de empleados</span>
                <span className="text-primary-400 font-bold">{employees}</span>
              </label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            {/* Input: Audits */}
            <div className="mb-8">
              <label className="flex justify-between text-sm font-medium text-gray-300 mb-3">
                <span>Auditorías al año</span>
                <span className="text-primary-400 font-bold">{auditsPerYear}</span>
              </label>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={auditsPerYear}
                onChange={(e) => setAuditsPerYear(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1</span>
                <span>12</span>
              </div>
            </div>

            {/* Results Preview */}
            <div className="space-y-4 pt-6 border-t border-gray-800">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Coste in-house/año:</span>
                <span className="text-white font-semibold">
                  €{totalInHouse.toLocaleString('es-ES')}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">ComplianceFlow/año:</span>
                <span className="text-primary-400 font-semibold">
                  €{totalCF.toLocaleString('es-ES')}
                </span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Big Savings Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl border-2 border-green-500/50 p-8 text-center">
                <div className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                  Tu ahorro anual
                </div>
                <div className="text-6xl font-bold text-white mb-2">
                  €{savings.toLocaleString('es-ES')}
                </div>
                <div className="text-2xl font-bold text-green-400 mb-4">
                  {savingsPercent}% menos
                </div>
                <p className="text-sm text-gray-300">
                  Ahorras <span className="font-bold text-white">€{Math.floor(savings / 12).toLocaleString('es-ES')}</span> cada mes
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
              <h4 className="text-lg font-bold text-white mb-4">
                ¿En qué ahorras?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white font-medium">Sin contratar 2 desarrolladores</div>
                    <div className="text-xs text-gray-500">€{inHouseCost.devSalary.toLocaleString('es-ES')}/año</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white font-medium">Sin infraestructura propia</div>
                    <div className="text-xs text-gray-500">€{inHouseCost.infrastructure.toLocaleString('es-ES')}/año</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white font-medium">Auditorías incluidas</div>
                    <div className="text-xs text-gray-500">€{inHouseCost.auditorCost.toLocaleString('es-ES')}/año</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white font-medium">Certificaciones gestionadas</div>
                    <div className="text-xs text-gray-500">€{inHouseCost.certifications.toLocaleString('es-ES')}/año</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/pricing"
              className="block w-full text-center rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-950 transition-all duration-300"
            >
              Ver planes y precios
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4F46E5;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4F46E5;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
        }
      `}</style>
    </section>
  );
}
