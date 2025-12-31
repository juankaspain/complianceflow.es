import type { Metadata } from 'next';
import { FileCheck, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Processing Agreement',
  description: 'Acuerdo de procesamiento de datos conforme al GDPR.',
};

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <FileCheck className="h-4 w-4" />
              <span>GDPR Compliant</span>
            </div>
            <h1 className="text-5xl font-bold text-white sm:text-6xl mb-6">
              Data Processing Agreement
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 mb-8">
              Acuerdo de Procesamiento de Datos conforme al Artículo 28 del GDPR.
            </p>
            <a
              href="/dpa.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/50 hover:bg-primary-600"
            >
              <Download className="h-5 w-5" />
              Descargar DPA (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Resumen Ejecutivo</h3>
              <p className="text-gray-400">
                Este Data Processing Agreement (DPA) establece los términos bajo los cuales ComplianceFlow procesa datos personales en nombre de sus clientes, en cumplimiento del Reglamento General de Protección de Datos (GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Definiciones</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Responsable del Tratamiento:</strong> El cliente que determina los fines y medios del procesamiento</li>
                <li><strong>Encargado del Tratamiento:</strong> ComplianceFlow, que procesa datos en nombre del Responsable</li>
                <li><strong>Datos Personales:</strong> Cualquier información relativa a una persona física identificada o identificable</li>
                <li><strong>Subencargado:</strong> Terceros autorizados por ComplianceFlow para procesar datos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Objeto y Duración</h2>
              <p>ComplianceFlow procesará datos personales en nombre del Responsable del Tratamiento durante la vigencia del contrato de servicios, exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Prestación de servicios de APIs de compliance</li>
                <li>Soporte técnico y mantenimiento</li>
                <li>Mejora y optimización del servicio</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Obligaciones del Encargado</h2>
              <p>ComplianceFlow se compromete a:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Procesar datos solo según instrucciones documentadas del Responsable</li>
                <li>Garantizar confidencialidad del personal autorizado</li>
                <li>Implementar medidas técnicas y organizativas apropiadas</li>
                <li>Asistir al Responsable en el cumplimiento de derechos de los interesados</li>
                <li>Notificar violaciones de seguridad en un plazo máximo de 24 horas</li>
                <li>Eliminar o devolver datos al finalizar los servicios</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Medidas de Seguridad</h2>
              <p>ComplianceFlow implementa las siguientes medidas:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Cifrado AES-256 en reposo y TLS 1.3 en tránsito</li>
                <li>Autenticación multifactor obligatoria</li>
                <li>Control de acceso basado en roles (RBAC)</li>
                <li>Auditorías de seguridad periódicas</li>
                <li>Copias de seguridad cifradas diarias</li>
                <li>Plan de respuesta a incidentes 24/7</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Subencargados</h2>
              <p>ComplianceFlow utiliza los siguientes subencargados autorizados:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>AWS:</strong> Hosting e infraestructura cloud</li>
                <li><strong>Stripe:</strong> Procesamiento de pagos</li>
              </ul>
              <p className="mt-4">El Responsable será notificado con 30 días de antelación antes de añadir nuevos subencargados.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Transferencias Internacionales</h2>
              <p>Todos los datos se almacenan en servidores ubicados en la Unión Europea. Cualquier transferencia fuera de la UE se realizará mediante:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Cláusulas contractuales tipo aprobadas por la Comisión Europea</li>
                <li>Certificaciones de privacidad aplicables</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Auditorías</h2>
              <p>El Responsable tiene derecho a realizar auditorías o inspecciones previa solicitud con 30 días de antelación. ComplianceFlow proporcionará:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Informes de certificación ISO 27001 y SOC 2</li>
                <li>Documentación de medidas de seguridad</li>
                <li>Acceso a instalaciones bajo acuerdos de confidencialidad</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contacto</h2>
              <p>Para cuestiones relacionadas con este DPA:</p>
              <p className="mt-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:dpa@complianceflow.es" className="text-primary hover:underline">
                  dpa@complianceflow.es
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
