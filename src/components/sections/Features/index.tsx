import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Brain, FileSearch } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: '/sii · /verifactu',
    label: 'Facturación y AEAT',
    description:
      'Convierte facturas en envíos SII válidos para la AEAT y genera tickets Verifactu sin reescribir tu ERP.',
    benefits: [
      'Mapeo automático de campos de factura',
      'Gestión de errores y reintentos',
      'Listo para e-factura',
    ],
  },
  {
    icon: Shield,
    title: '/kyc',
    label: 'Onboarding digital',
    description:
      'Procesa DNI/pasaporte + selfie, valida identidad y calcula score de riesgo compatible con PSD2.',
    benefits: [
      'Detección de documentos manipulados',
      'Comparación biométrica selfie vs documento',
      'Respuestas explicables para compliance',
    ],
  },
  {
    icon: Brain,
    title: '/score/risk',
    label: 'Fraude transaccional',
    description:
      'Calcula en milisegundos el riesgo de cada pago combinando reglas deterministas e IA.',
    benefits: [
      'Reglas configurables por producto',
      'Modelos entrenados con patrones de fraude',
      'Salida 0-100 con motivos del bloqueo',
    ],
  },
  {
    icon: FileSearch,
    title: '/extract · /summarize',
    label: 'Documentos y contratos',
    description:
      'Extrae datos clave de facturas, DNIs, contratos y genera resúmenes ejecutivos.',
    benefits: [
      'OCR multiformato (PDF, imagen)',
      'Detección de cláusulas sensibles',
      'Resúmenes listos para informes',
    ],
  },
];

export function Features() {
  return (
    <section id="producto" className="section-spacing">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Una plataforma, cuatro bloques de APIs
          </h2>
          <p className="text-lg text-muted-foreground">
            ComplianceFlow está organizado en bloques modulares. Integra solo lo que necesitas y
            escala al resto cuando tu negocio crezca.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {feature.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm">
                        <span className="mr-2 text-primary">•</span>
                        <span>{benefit}</span>
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
