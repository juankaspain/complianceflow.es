import type { Metadata } from 'next';
import { Shield, Eye, Lock, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Cómo protegemos y gestionamos tus datos.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              <span>Última actualización: 31 de diciembre de 2025</span>
            </div>
            <h1 className="text-5xl font-bold text-white sm:text-6xl mb-6">
              Política de Privacidad
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Tu privacidad es nuestra prioridad. Así protegemos tus datos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <Lock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Cifrado Total</h3>
                <p className="text-gray-400 text-sm">Todos tus datos están cifrados con AES-256.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <Eye className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Control Total</h3>
                <p className="text-gray-400 text-sm">Tú decides qué datos compartes y cuándo.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <Server className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Datos en la UE</h3>
                <p className="text-gray-400 text-sm">Todos los servidores están en la Unión Europea.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">GDPR Ready</h3>
                <p className="text-gray-400 text-sm">Cumplimiento completo del reglamento GDPR.</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
                <p className="mb-4">Recopilamos la siguiente información:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Datos de cuenta: nombre, email, contraseña cifrada</li>
                  <li>Datos de uso: logs de API, métricas de rendimiento</li>
                  <li>Datos de facturación: información de pago (procesada por Stripe)</li>
                  <li>Datos técnicos: IP, navegador, sistema operativo</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Cómo Usamos tus Datos</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar y mejorar nuestros servicios</li>
                  <li>Procesar pagos y gestionar tu cuenta</li>
                  <li>Enviar notificaciones importantes del servicio</li>
                  <li>Prevenir fraude y garantizar la seguridad</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Compartir Datos</h2>
                <p className="mb-4">NO vendemos tus datos. Solo compartimos información con:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proveedores de servicios (AWS, Stripe) bajo acuerdos estrictos</li>
                  <li>Autoridades legales cuando sea legalmente requerido</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Tus Derechos</h2>
                <p className="mb-4">Bajo el GDPR, tienes derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a tus datos personales</li>
                  <li>Rectificar datos incorrectos</li>
                  <li>Eliminar tu cuenta y datos</li>
                  <li>Exportar tus datos</li>
                  <li>Oponerte al procesamiento</li>
                  <li>Presentar una queja ante la autoridad supervisora</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Seguridad</h2>
                <p>Implementamos medidas de seguridad líderes en la industria:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Cifrado AES-256 en reposo y TLS 1.3 en tránsito</li>
                  <li>Autenticación multifactor obligatoria</li>
                  <li>Auditorías de seguridad regulares</li>
                  <li>Certificaciones ISO 27001 y SOC 2</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Retención de Datos</h2>
                <p>Conservamos tus datos mientras tu cuenta esté activa o según sea necesario para cumplir con obligaciones legales. Puedes solicitar la eliminación en cualquier momento.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contacto</h2>
                <p>Para ejercer tus derechos o hacer preguntas sobre privacidad:</p>
                <p className="mt-4">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@complianceflow.es" className="text-primary hover:underline">
                    privacy@complianceflow.es
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
