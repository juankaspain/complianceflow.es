import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Zap, FileCheck } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: '/sii · /verifactu',
    label: 'Facturación y AEAT',
    description: 'Convierte facturas en envíos SII válidos para la AEAT y genera tickets Verifactu sin reescribir tu ERP ni tu software de facturación.',
    features: [
      'Mapeo automático de campos de factura',
      'Gestión de errores y reintentos',
      'Listo para futuras obligaciones de e-factura',
    ],
  },
  {
    icon: Shield,
    title: '/kyc',
    label: 'Onboarding digital',
    description: 'Procesa DNI/pasaporte + selfie, valida identidad y calcula un score de riesgo compatible con PSD2 y políticas internas.',
    features: [
      'Detección de documentos manipulados',
      'Comparación biométrica selfie vs documento',
      'Respuestas explicables para compliance',
    ],
  },
  {
    icon: Zap,
    title: '/score/risk',
    label: 'Fraude transaccional',
    description: 'Calcula en milisegundos el riesgo de cada pago o movimiento combinando reglas deterministas e IA.',
    features: [
      'Reglas configurables por producto',
      'Modelos entrenados con patrones de fraude',
      'Salida 0-100 con motivos del bloqueo',
    ],
  },
  {
    icon: FileCheck,
    title: '/extract · /summarize',
    label: 'Documentos y contratos',
    description: 'Extrae datos clave de facturas, DNIs, contratos y expedientes, y genera resúmenes ejecutivos para decisiones rápidas.',
    features: [
      'OCR multiformato (PDF, imagen)',
      'Detección de cláusulas sensibles',
      'Resúmenes listos para informes internos',
    ],
  },
];

export function Features() {
  return (
    <section id="producto" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Una plataforma, cuatro bloques de APIs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ComplianceFlow está organizado en bloques modulares: Facturación (SII/Verifactu), Identidad (KYC), Riesgo (fraude) y Documentos (OCR + contratos). Integra solo lo que necesitas y escala al resto cuando tu negocio crezca.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.label}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}