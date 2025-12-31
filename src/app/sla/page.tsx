import type { Metadata } from 'next';
import { Shield, Zap, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Level Agreement',
  description: 'Compromisos de nivel de servicio de ComplianceFlow.',
};

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              <span>Garantizado 99.99%</span>
            </div>
            <h1 className="text-5xl font-bold text-white sm:text-6xl mb-6">
              Service Level Agreement
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Nuestros compromisos de disponibilidad, rendimiento y soporte.
            </p>
          </div>
        </div>
      </section>

      {/* SLA Metrics */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center">
              <div className="inline-flex rounded-lg bg-green-500/10 p-3 mb-4">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">99.99%</div>
              <p className="text-gray-400">Uptime Garantizado</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center">
              <div className="inline-flex rounded-lg bg-blue-500/10 p-3 mb-4">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">&lt;50ms</div>
              <p className="text-gray-400">Latencia P95</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center">
              <div className="inline-flex rounded-lg bg-purple-500/10 p-3 mb-4">
                <CheckCircle className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">&lt;15min</div>
              <p className="text-gray-400">Respuesta a Incidentes</p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center">
              <div className="inline-flex rounded-lg bg-yellow-500/10 p-3 mb-4">
                <Shield className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-400">Monitorización</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Details */}
      <section className="border-t border-gray-800 py-24 bg-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Disponibilidad del Servicio</h2>
              <p>ComplianceFlow garantiza un uptime del 99.99% mensual, excluyendo:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Mantenimientos programados (notificados con 48h de antelación)</li>
                <li>Fuerza mayor o eventos fuera de nuestro control</li>
                <li>Problemas causados por el cliente o terceros</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Rendimiento de APIs</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Latencia P95: &lt;50ms para endpoints estándar</li>
                <li>Latencia P99: &lt;100ms para endpoints estándar</li>
                <li>Tasa de éxito: &gt;99.9% de requests procesados exitosamente</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Tiempos de Respuesta de Soporte</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Severidad</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Descripción</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Tiempo de Respuesta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-red-400">Crítica</td>
                      <td className="px-6 py-4">Servicio caído o inutilizable</td>
                      <td className="px-6 py-4 text-green-400">&lt;15 minutos</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-orange-400">Alta</td>
                      <td className="px-6 py-4">Funcionalidad crítica afectada</td>
                      <td className="px-6 py-4 text-green-400">&lt;1 hora</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-yellow-400">Media</td>
                      <td className="px-6 py-4">Funcionalidad menor afectada</td>
                      <td className="px-6 py-4 text-green-400">&lt;4 horas</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-blue-400">Baja</td>
                      <td className="px-6 py-4">Consultas generales</td>
                      <td className="px-6 py-4 text-green-400">&lt;24 horas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Créditos por Incumplimiento</h2>
              <p>Si no cumplimos el SLA de uptime, proporcionaremos créditos:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>99.9% - 99.99%: 10% de crédito del mes</li>
                <li>99.0% - 99.9%: 25% de crédito del mes</li>
                <li>&lt;99.0%: 50% de crédito del mes</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">Los créditos deben solicitarse dentro de los 30 días siguientes al incidente.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Monitorización y Transparencia</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dashboard de status público: <a href="/status" className="text-primary hover:underline">status.complianceflow.es</a></li>
                <li>Notificaciones automáticas por email y SMS durante incidentes</li>
                <li>Post-mortems públicos para incidentes mayores</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contacto</h2>
              <p>Para reportar incidentes o consultar el SLA:</p>
              <p className="mt-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:support@complianceflow.es" className="text-primary hover:underline">
                  support@complianceflow.es
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
