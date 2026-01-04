import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { GradientCard } from '@/components/ui/gradient-card'
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad y protección de datos de ComplianceFlow. Información sobre cómo recogemos, usamos y protegemos tus datos personales.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <Breadcrumbs items={[{ label: 'Política de Privacidad', href: '/privacy' }]} />

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidad</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Última actualización: 4 de Enero, 2026
          </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <GradientCard gradient="blue" className="not-prose mb-8">
            <p className="text-sm">
              En ComplianceFlow nos tomamos muy en serio la protección de tus datos personales.
              Esta política explica cómo recogemos, usamos, almacenamos y protegemos tu
              información de acuerdo con el RGPD (Reglamento General de Protección de Datos) y la
              LOPD española.
            </p>
          </GradientCard>

          <h2>1. Responsable del tratamiento</h2>
          <div className="not-prose mb-6">
            <GradientCard gradient="purple">
              <div className="space-y-2 text-sm">
                <p>
                  <strong>ComplianceFlow SL</strong>
                </p>
                <p>CIF: B12345678</p>
                <p>Dirección: Calle Principal 123, 28001 Madrid, España</p>
                <p>Email: privacy@complianceflow.es</p>
                <p>Teléfono: +34 900 000 000</p>
              </div>
            </GradientCard>
          </div>

          <h2>2. Datos que recogemos</h2>
          <p>Recogemos los siguientes tipos de datos personales:</p>

          <h3>2.1 Datos de identificación</h3>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Email</li>
            <li>Teléfono (opcional)</li>
            <li>Empresa (para clientes B2B)</li>
            <li>NIF/CIF (para facturación)</li>
          </ul>

          <h3>2.2 Datos de navegación</h3>
          <ul>
            <li>Dirección IP</li>
            <li>Tipo de navegador</li>
            <li>Páginas visitadas</li>
            <li>Tiempo de navegación</li>
            <li>Referencia de origen</li>
          </ul>

          <h3>2.3 Datos de uso del servicio</h3>
          <ul>
            <li>Facturas procesadas</li>
            <li>Llamadas a la API</li>
            <li>Logs de actividad</li>
            <li>Preferencias de configuración</li>
          </ul>

          <h2>3. Base legal y finalidad del tratamiento</h2>

          <div className="not-prose space-y-4 my-6">
            <GradientCard gradient="green">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Ejecución de contrato</h4>
                  <p className="text-sm text-muted-foreground">
                    Procesamos tus datos para prestar nuestros servicios de API y soporte técnico.
                  </p>
                </div>
              </div>
            </GradientCard>

            <GradientCard gradient="blue">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Consentimiento</h4>
                  <p className="text-sm text-muted-foreground">
                    Utilizamos cookies de analytics solo si has dado tu consentimiento explícito.
                  </p>
                </div>
              </div>
            </GradientCard>

            <GradientCard gradient="orange">
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Obligación legal</h4>
                  <p className="text-sm text-muted-foreground">
                    Conservamos datos de facturación según exige la legislación fiscal española.
                  </p>
                </div>
              </div>
            </GradientCard>
          </div>

          <h2>4. Destinatarios de los datos</h2>
          <p>Tus datos pueden ser compartidos con:</p>
          <ul>
            <li>
              <strong>Proveedores de infraestructura:</strong> Netlify (hosting), Google Cloud
              (almacenamiento)
            </li>
            <li>
              <strong>Herramientas de analytics:</strong> Google Analytics (con anonimización IP)
            </li>
            <li>
              <strong>Procesadores de pago:</strong> Stripe (datos de facturación)
            </li>
            <li>
              <strong>Soporte técnico:</strong> Intercom (chat de soporte)
            </li>
          </ul>
          <p>
            Todos nuestros proveedores están ubicados en la UE o tienen certificación Privacy
            Shield para transferencias internacionales.
          </p>

          <h2>5. Periodo de conservación</h2>
          <ul>
            <li>
              <strong>Datos de clientes activos:</strong> Durante la vigencia del contrato
            </li>
            <li>
              <strong>Datos de facturación:</strong> 6 años (obligación fiscal)
            </li>
            <li>
              <strong>Cookies de analytics:</strong> 26 meses
            </li>
            <li>
              <strong>Logs de API:</strong> 90 días
            </li>
            <li>
              <strong>Datos de newsletter:</strong> Hasta que te des de baja
            </li>
          </ul>

          <h2>6. Tus derechos (RGPD)</h2>
          <p>Como usuario, tienes derecho a:</p>
          <ul>
            <li>
              <strong>Acceso:</strong> Solicitar una copia de tus datos personales
            </li>
            <li>
              <strong>Rectificación:</strong> Corregir datos inexactos o incompletos
            </li>
            <li>
              <strong>Supresión:</strong> Eliminar tus datos (derecho al olvido)
            </li>
            <li>
              <strong>Limitación:</strong> Restringir el procesamiento de tus datos
            </li>
            <li>
              <strong>Portabilidad:</strong> Recibir tus datos en formato estructurado
            </li>
            <li>
              <strong>Oposición:</strong> Oponerte al tratamiento con fines de marketing
            </li>
          </ul>

          <GradientCard gradient="indigo" className="not-prose my-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Ejercer tus derechos</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Para ejercer cualquiera de estos derechos, envía un email a{' '}
                  <a href="mailto:privacy@complianceflow.es" className="text-primary">
                    privacy@complianceflow.es
                  </a>{' '}
                  con tu solicitud. Responderemos en un plazo máximo de 30 días.
                </p>
              </div>
            </div>
          </GradientCard>

          <h2>7. Seguridad de los datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas:</p>
          <ul>
            <li>Encriptación TLS/SSL en todas las comunicaciones</li>
            <li>Encriptación de datos en reposo (AES-256)</li>
            <li>Autenticación de dos factores (2FA)</li>
            <li>Auditorías de seguridad trimestrales</li>
            <li>Control de acceso basado en roles (RBAC)</li>
            <li>Logs de auditoría completos</li>
            <li>Backups diarios encriptados</li>
          </ul>

          <h2>8. Cookies</h2>
          <p>
            Utilizamos cookies para mejorar la experiencia del usuario. Puedes gestionar tus
            preferencias de cookies desde el banner de consentimiento o en la configuración de tu
            navegador.
          </p>
          <p>
            Consulta nuestra{' '}
            <a href="/cookies" className="text-primary hover:underline">
              Política de Cookies
            </a>{' '}
            para más información.
          </p>

          <h2>9. Menores de edad</h2>
          <p>
            Nuestros servicios están dirigidos a empresas y profesionales. No recogemos
            intencionadamente datos de menores de 16 años.
          </p>

          <h2>10. Modificaciones</h2>
          <p>
            Podemos actualizar esta política periódicamente. Te notificaremos cambios significativos
            por email y actualizaremos la fecha en la parte superior.
          </p>

          <h2>11. Contacto y reclamaciones</h2>
          <p>
            Para cualquier duda sobre esta política, contacta con:{' '}
            <a href="mailto:privacy@complianceflow.es" className="text-primary">
              privacy@complianceflow.es
            </a>
          </p>
          <p>
            También tienes derecho a presentar una reclamación ante la{' '}
            <strong>Agencia Española de Protección de Datos (AEPD)</strong>:
          </p>
          <ul>
            <li>Web: www.aepd.es</li>
            <li>Dirección: C/ Jorge Juan, 6, 28001 Madrid</li>
            <li>Teléfono: 901 100 099 / 912 663 517</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
