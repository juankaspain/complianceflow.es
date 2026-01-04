import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { GradientCard } from '@/components/ui/gradient-card'
import { Code, CheckCircle, AlertCircle, Zap } from 'lucide-react'
import { ArticleSchema, HowToSchema } from '@/components/seo/content-schemas'

export const metadata: Metadata = {
  title: 'Guía Completa de Integración SII con API REST',
  description:
    'Aprende a integrar el Suministro Inmediato de Información (SII) de la AEAT en tu aplicación usando nuestra API REST. Tutorial paso a paso con ejemplos de código.',
  keywords: [
    'integración SII',
    'tutorial SII',
    'API SII guía',
    'AEAT API',
    'suministro inmediato información',
    'implementar SII',
  ],
  openGraph: {
    title: 'Guía Completa de Integración SII con API REST',
    description: 'Tutorial paso a paso para integrar SII en tu aplicación',
    type: 'article',
    publishedTime: '2026-01-04T00:00:00Z',
    authors: ['ComplianceFlow Team'],
  },
}

export default function SIIIntegrationGuide() {
  return (
    <>
      <ArticleSchema
        title="Guía Completa de Integración SII con API REST"
        description="Aprende a integrar el Suministro Inmediato de Información (SII) de la AEAT en tu aplicación usando nuestra API REST. Tutorial paso a paso con ejemplos de código."
        datePublished="2026-01-04T00:00:00Z"
        url="https://complianceflow.es/blog/guia-integracion-sii"
      />
      <HowToSchema
        name="Cómo integrar SII con ComplianceFlow API"
        description="Tutorial paso a paso para integrar el SII en tu aplicación"
        totalTime="PT30M"
        steps={[
          {
            name: 'Obtener API Key',
            text: 'Regístrate en ComplianceFlow y obtén tu API key desde el dashboard',
          },
          {
            name: 'Enviar factura',
            text: 'Usa el endpoint POST /v1/sii/invoices con tus datos de factura',
          },
          {
            name: 'Configurar webhooks',
            text: 'Configura tu endpoint para recibir notificaciones en tiempo real',
          },
        ]}
      />
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Guía Integración SII', href: '/blog/guia-integracion-sii' },
          ]}
        />

        {/* Header */}
        <header className="mt-8 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <time dateTime="2026-01-04">4 de Enero, 2026</time>
            <span>·</span>
            <span>10 min lectura</span>
            <span>·</span>
            <span className="text-primary">Tutorial</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guía Completa de Integración SII con API REST
          </h1>
          <p className="text-xl text-muted-foreground">
            Aprende a integrar el Suministro Inmediato de Información (SII) de la AEAT en tu
            aplicación en menos de 30 minutos. Tutorial paso a paso con ejemplos reales.
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <GradientCard gradient="blue" className="not-prose mb-8">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">TL;DR - Resumen rápido</h3>
                <p className="text-sm text-muted-foreground">
                  La integración SII con ComplianceFlow se reduce a 3 pasos: obtener API key,
                  configurar webhook, enviar facturas. Tiempo total: ~5 minutos. Sin certificados
                  digitales, sin SOAP, sin complicaciones.
                </p>
              </div>
            </div>
          </GradientCard>

          <h2>¿Qué es el SII?</h2>
          <p>
            El Suministro Inmediato de Información (SII) es un sistema de la Agencia Tributaria
            (AEAT) que obliga a las grandes empresas a enviar información sobre sus facturas de
            forma telemática en un plazo de 4 días desde su expedición.
          </p>

          <h3>Empresas obligadas a usar SII</h3>
          <ul>
            <li>Facturación anual superior a 6 millones de euros</li>
            <li>Grupos de IVA (independientemente de la facturación)</li>
            <li>
              Empresas que voluntariamente se adhieran (recomendado para automatizar compliance)
            </li>
          </ul>

          <h2>Método tradicional vs ComplianceFlow API</h2>

          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            <GradientCard gradient="orange">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <h3 className="font-semibold">Método Tradicional (SOAP)</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>✗ Certificados digitales complejos</li>
                <li>✗ XML SOAP verboso</li>
                <li>✗ Múltiples endpoints por tipo de factura</li>
                <li>✗ Gestión manual de reintentos</li>
                <li>✗ Sin notificaciones automáticas</li>
                <li>✗ Tiempo de desarrollo: 2-4 semanas</li>
              </ul>
            </GradientCard>

            <GradientCard gradient="green">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                <h3 className="font-semibold">ComplianceFlow API (REST)</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ Simple API key authentication</li>
                <li>✓ JSON limpio y fácil</li>
                <li>✓ Único endpoint universal</li>
                <li>✓ Reintentos automáticos incluidos</li>
                <li>✓ Webhooks en tiempo real</li>
                <li>✓ Tiempo de desarrollo: 5-30 minutos</li>
              </ul>
            </GradientCard>
          </div>

          <h2>Paso 1: Obtener API Key</h2>
          <p>
            Regístrate en{' '}
            <a href="/pricing" className="text-primary hover:underline">
              ComplianceFlow
            </a>{' '}
            y obtén tu API key desde el dashboard. Plan Starter disponible con 14 días gratis.
          </p>

          <GradientCard gradient="purple" className="not-prose my-6">
            <div className="flex items-start gap-3">
              <Code className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-sm font-medium mb-2">Tu API Key</p>
                <code className="block bg-black/20 p-3 rounded text-sm font-mono">
                  cf_live_sk_1234567890abcdef
                </code>
              </div>
            </div>
          </GradientCard>

          <h2>Paso 2: Enviar tu Primera Factura</h2>
          <p>Ejemplo de código para enviar una factura emitida al SII:</p>

          <pre className="not-prose">
            <code className="language-javascript">{`// JavaScript/Node.js example
const axios = require('axios');

const invoice = {
  type: 'issued', // factura emitida
  invoiceNumber: 'F-2026-001',
  date: '2026-01-04',
  customer: {
    nif: 'B12345678',
    name: 'Cliente SL',
  },
  items: [
    {
      description: 'Servicio de consultoría',
      quantity: 1,
      unitPrice: 1000,
      vatRate: 21,
    },
  ],
  total: 1210,
  vatAmount: 210,
};

const response = await axios.post(
  'https://api.complianceflow.es/v1/sii/invoices',
  invoice,
  {
    headers: {
      'Authorization': 'Bearer cf_live_sk_1234567890abcdef',
      'Content-Type': 'application/json',
    },
  }
);

console.log('SII Response:', response.data);
// { status: 'accepted', siiReference: 'SII-2026-001234' }`}</code>
          </pre>

          <h2>Paso 3: Configurar Webhooks (Opcional)</h2>
          <p>
            Recibe notificaciones en tiempo real cuando la AEAT procesa tus facturas. Configura tu
            webhook endpoint en el dashboard:
          </p>

          <pre className="not-prose">
            <code className="language-javascript">{`// Tu endpoint recibirá:
{
  "event": "invoice.accepted",
  "invoiceId": "inv_123",
  "siiReference": "SII-2026-001234",
  "timestamp": "2026-01-04T10:30:00Z",
  "data": {
    "status": "accepted",
    "csv": "A1B2C3D4E5F6"
  }
}`}</code>
          </pre>

          <h2>Gestión de Errores</h2>
          <p>
            ComplianceFlow maneja automáticamente reintentos y errores comunes. Si una factura es
            rechazada, recibirás un error descriptivo:
          </p>

          <GradientCard gradient="orange" className="not-prose my-6">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "error": {
    "code": "SII_INVALID_NIF",
    "message": "El NIF del cliente no es válido",
    "field": "customer.nif",
    "suggestion": "Verifica que el NIF sea correcto (formato: A12345678)"
  }
}`}</code>
            </pre>
          </GradientCard>

          <h2>Tipos de Facturas Soportadas</h2>
          <ul>
            <li>
              <strong>Facturas Emitidas</strong> - Las que tu empresa emite a clientes
            </li>
            <li>
              <strong>Facturas Recibidas</strong> - Las que recibes de proveedores
            </li>
            <li>
              <strong>Bienes de Inversión</strong> - Compras de activos
            </li>
            <li>
              <strong>Operaciones Intracomunitarias</strong> - Comercio UE
            </li>
            <li>
              <strong>Facturas Simplificadas</strong> - Tickets y facturas sin desglose
            </li>
          </ul>

          <h2>Mejores Prácticas</h2>

          <div className="not-prose space-y-4 my-8">
            <GradientCard gradient="blue">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Envía en tiempo real
              </h3>
              <p className="text-sm text-muted-foreground">
                Envía facturas inmediatamente después de generarlas. El límite legal son 4 días,
                pero hacerlo en tiempo real evita acumulación.
              </p>
            </GradientCard>

            <GradientCard gradient="green">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Valida antes de enviar
              </h3>
              <p className="text-sm text-muted-foreground">
                Usa nuestro endpoint /validate para verificar facturas antes del envío definitivo.
                Ahorra tiempo y evita rechazos.
              </p>
            </GradientCard>

            <GradientCard gradient="purple">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Monitorea con webhooks
              </h3>
              <p className="text-sm text-muted-foreground">
                Configura webhooks para recibir notificaciones automáticas. Mantén sincronizado tu
                sistema con el estado real en AEAT.
              </p>
            </GradientCard>
          </div>

          <h2>Próximos Pasos</h2>
          <ul>
            <li>
              <a href="/docs/api-reference" className="text-primary hover:underline">
                Consulta la documentación completa de la API
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-primary hover:underline">
                Prueba gratis durante 14 días
              </a>
            </li>
            <li>
              <a href="/contact" className="text-primary hover:underline">
                Habla con nuestro equipo para casos complejos
              </a>
            </li>
          </ul>

          <GradientCard gradient="indigo" className="not-prose mt-12">
            <h3 className="font-semibold mb-4">¿Necesitas ayuda con la integración?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier pregunta
              técnica o dudas sobre compliance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold text-sm"
            >
              Contactar Soporte
            </a>
          </GradientCard>
        </article>
      </div>
    </div>
    </>
  )
}
