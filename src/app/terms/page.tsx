import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos de uso de ComplianceFlow.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <FileText className="h-4 w-4" />
              <span>Última actualización: 31 de diciembre de 2025</span>
            </div>
            <h1 className="text-5xl font-bold text-white sm:text-6xl mb-6">
              Términos y Condiciones
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Los términos que rigen el uso de ComplianceFlow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
              <p>Al acceder o utilizar ComplianceFlow, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo, no utilices nuestros servicios.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
              <p>ComplianceFlow proporciona APIs de compliance y herramientas de gestión normativa para empresas. Nos reservamos el derecho de modificar o discontinuar el servicio en cualquier momento.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Registro de Cuenta</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Debes proporcionar información precisa y actualizada</li>
                <li>Eres responsable de mantener la seguridad de tu cuenta</li>
                <li>No puedes compartir tus credenciales con terceros</li>
                <li>Debes notificar inmediatamente cualquier uso no autorizado</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Uso Aceptable</h2>
              <p className="mb-4">Te comprometes a NO:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violar leyes o regulaciones aplicables</li>
                <li>Intentar acceder a sistemas sin autorización</li>
                <li>Interferir con el funcionamiento del servicio</li>
                <li>Utilizar el servicio para actividades fraudulentas</li>
                <li>Realizar ingeniería inversa de nuestras APIs</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad Intelectual</h2>
              <p>Todo el contenido, código, diseños y marcas de ComplianceFlow son propiedad exclusiva de la empresa y están protegidos por las leyes de propiedad intelectual.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Pago y Facturación</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los pagos se procesan a través de Stripe</li>
                <li>Las suscripciones se renuevan automáticamente</li>
                <li>Puedes cancelar en cualquier momento</li>
                <li>No hay reembolsos por periodos parciales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitación de Responsabilidad</h2>
              <p>ComplianceFlow no será responsable de daños indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar el servicio.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Terminación</h2>
              <p>Podemos suspender o terminar tu cuenta si violas estos términos. Tú puedes cancelar tu cuenta en cualquier momento desde tu panel de control.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Ley Aplicable</h2>
              <p>Estos términos se rigen por las leyes de España. Cualquier disputa se resolverá en los tribunales de Madrid.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
              <p>Para preguntas sobre estos términos:</p>
              <p className="mt-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:legal@complianceflow.es" className="text-primary hover:underline">
                  legal@complianceflow.es
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
