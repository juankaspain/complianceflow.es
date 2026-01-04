import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { GradientCard } from '@/components/ui/gradient-card'
import { FileText, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Términos y condiciones de uso de ComplianceFlow. Condiciones legales de nuestros servicios de API para compliance fiscal.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <Breadcrumbs items={[{ label: 'Términos y Condiciones', href: '/terms' }]} />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Términos y Condiciones</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Última actualización: 4 de Enero, 2026
          </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <GradientCard gradient="orange" className="not-prose mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
              <p className="text-sm">
                Al acceder y usar los servicios de ComplianceFlow, aceptas estar sujeto a estos
                términos y condiciones. Lee atentamente antes de usar nuestros servicios.
              </p>
            </div>
          </GradientCard>

          <h2>1. Definiciones</h2>
          <ul>
            <li>
              <strong>"Servicio":</strong> API REST de ComplianceFlow para compliance fiscal (SII,
              Verifactu, TicketBAI)
            </li>
            <li>
              <strong>"Cliente":</strong> Persona física o jurídica que contrata el Servicio
            </li>
            <li>
              <strong>"API Key":</strong> Credenciales de acceso al Servicio
            </li>
            <li>
              <strong>"Transacción":</strong> Envío de factura o documento fiscal a través de la
              API
            </li>
          </ul>

          <h2>2. Aceptación de los términos</h2>
          <p>
            Al registrarte y usar ComplianceFlow, confirmas que:
          </p>
          <ul>
            <li>Eres mayor de 18 años o representas a una empresa autorizada</li>
            <li>Aceptas cumplir con estos términos y la legislación aplicable</li>
            <li>La información proporcionada es veraz y actualizada</li>
          </ul>

          <h2>3. Descripción del servicio</h2>
          <p>ComplianceFlow proporciona:</p>
          <ul>
            <li>API REST para integración con SII de la AEAT</li>
            <li>Soporte para Verifactu y TicketBAI</li>
            <li>Validación automática de documentos fiscales</li>
            <li>Gestión de reintentos y errores</li>
            <li>Dashboard de monitorización</li>
            <li>Soporte técnico según plan contratado</li>
          </ul>

          <h2>4. Planes y facturación</h2>

          <h3>4.1 Planes disponibles</h3>
          <ul>
            <li>
              <strong>Starter:</strong> 49€/mes (hasta 1,000 transacciones)
            </li>
            <li>
              <strong>Professional:</strong> 199€/mes (hasta 10,000 transacciones)
            </li>
            <li>
              <strong>Enterprise:</strong> 499€/mes (ilimitadas transacciones)
            </li>
          </ul>

          <h3>4.2 Facturación</h3>
          <ul>
            <li>La facturación es mensual, por adelantado</li>
            <li>Aceptamos tarjeta de crédito y transferencia bancaria</li>
            <li>Los precios no incluyen IVA (21% España)</li>
            <li>Prueba gratuita de 14 días sin tarjeta requerida</li>
          </ul>

          <h3>4.3 Cancelación y reembolsos</h3>
          <ul>
            <li>Puedes cancelar en cualquier momento desde el dashboard</li>
            <li>No hay permanencia mínima</li>
            <li>Reembolso prorrateado disponible en los primeros 30 días</li>
            <li>Después de 30 días, no hay reembolsos (servicio ya consumido)</li>
          </ul>

          <h2>5. Uso aceptable</h2>

          <h3>5.1 Está permitido:</h3>
          <ul>
            <li>Usar el servicio para tu compliance fiscal legítimo</li>
            <li>Integrar la API en tu software</li>
            <li>Hacer pruebas en el entorno sandbox</li>
          </ul>

          <h3>5.2 Está prohibido:</h3>
          <ul>
            <li>Revender o redistribuir el servicio sin autorización</li>
            <li>Realizar ingeniería inversa de la API</li>
            <li>Usar el servicio para fraude fiscal</li>
            <li>Compartir API Keys con terceros</li>
            <li>Sobrecargar la API intencionadamente (abuse)</li>
            <li>Scraping o extracción masiva de datos</li>
          </ul>

          <h2>6. API Keys y seguridad</h2>
          <ul>
            <li>Eres responsable de mantener seguras tus API Keys</li>
            <li>Notifica inmediatamente si sospechas compromiso de credenciales</li>
            <li>No compartas API Keys en repositorios públicos</li>
            <li>Usa variables de entorno para almacenar credenciales</li>
          </ul>

          <h2>7. Disponibilidad y SLA</h2>
          <ul>
            <li>Garantizamos 99.9% uptime mensual (planes Pro y Enterprise)</li>
            <li>Mantenimientos programados notificados con 48h de antelación</li>
            <li>
              Compensación: 10% descuento por cada 1% por debajo de 99.9% (máx. 100% del mes)
            </li>
            <li>Tiempo de respuesta soporte: según plan contratado</li>
          </ul>

          <h2>8. Limitación de responsabilidad</h2>
          <p>ComplianceFlow no será responsable de:</p>
          <ul>
            <li>Errores en la información fiscal proporcionada por el cliente</li>
            <li>Problemas derivados de caídas de la AEAT</li>
            <li>Pérdidas indirectas o lucro cesante</li>
            <li>Daños superiores al importe pagado en los últimos 12 meses</li>
          </ul>

          <GradientCard gradient="blue" className="not-prose my-8">
            <p className="text-sm">
              <strong>Importante:</strong> ComplianceFlow es una herramienta técnica que facilita
              el envío de información fiscal. El cliente es responsable de la exactitud y legalidad
              de los datos enviados.
            </p>
          </GradientCard>

          <h2>9. Propiedad intelectual</h2>
          <ul>
            <li>ComplianceFlow retiene todos los derechos sobre la API y plataforma</li>
            <li>El cliente retiene derechos sobre sus datos fiscales</li>
            <li>Licencia de uso no exclusiva, intransferible</li>
            <li>Prohibido copiar, modificar o crear obras derivadas</li>
          </ul>

          <h2>10. Protección de datos</h2>
          <p>
            El tratamiento de datos personales se rige por nuestra{' '}
            <a href="/privacy" className="text-primary hover:underline">
              Política de Privacidad
            </a>
            , conforme al RGPD.
          </p>

          <h2>11. Modificaciones</h2>
          <ul>
            <li>Podemos actualizar estos términos con 30 días de antelación</li>
            <li>Notificación por email de cambios significativos</li>
            <li>Continuar usando el servicio implica aceptación</li>
          </ul>

          <h2>12. Ley aplicable y jurisdicción</h2>
          <ul>
            <li>Estos términos se rigen por la legislación española</li>
            <li>Jurisdicción: Tribunales de Madrid, España</li>
            <li>Idioma oficial: Español</li>
          </ul>

          <h2>13. Contacto</h2>
          <p>Para dudas sobre estos términos:</p>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:legal@complianceflow.es" className="text-primary">
                legal@complianceflow.es
              </a>
            </li>
            <li>Teléfono: +34 900 000 000</li>
            <li>Dirección: Calle Principal 123, 28001 Madrid</li>
          </ul>

          <GradientCard gradient="indigo" className="not-prose mt-8">
            <h3 className="font-semibold mb-3">¿Dudas sobre los términos?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nuestro equipo legal está disponible para resolver cualquier pregunta sobre estos
              términos y condiciones.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              Contactar equipo legal
            </a>
          </GradientCard>
        </article>
      </div>
    </div>
  )
}
