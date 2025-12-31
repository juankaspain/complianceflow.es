import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calculator, Scale } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    title: 'Fintech · Onboarding & pagos',
    features: [
      'Alta KYC completa en segundos desde tu app',
      'Scoring PSD2 en tiempo real por cada pago',
      'Justificación completa para auditorías y supervisores',
    ],
  },
  {
    icon: Calculator,
    title: 'ERPs y asesorías',
    features: [
      'Automatiza SII y facturación electrónica sin tocar el core',
      'Disminuye el riesgo de sanciones y errores manuales',
      'Ofrece nuevo valor añadido a tus clientes finales',
    ],
  },
  {
    icon: Scale,
    title: 'Legal & compliance',
    features: [
      'Screening masivo de contratos y expedientes',
      'Identificación de cláusulas y riesgos clave',
      'Informes ejecutivos para comités de riesgo',
    ],
  },
];

export function UseCases() {
  return (
    <section id="casos-uso" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Casos de uso prioritarios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nos centramos en procesos críticos: allí donde un error implica sanciones, pérdida de clientes o pérdida de confianza del regulador.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <Card key={useCase.title}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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