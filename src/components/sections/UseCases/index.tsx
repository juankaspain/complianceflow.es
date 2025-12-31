import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, Building2, Scale } from 'lucide-react';

const useCases = [
  {
    icon: Wallet,
    title: 'Fintech · Onboarding & pagos',
    items: [
      'Alta KYC completa en segundos desde tu app',
      'Scoring PSD2 en tiempo real por cada pago',
      'Justificación completa para auditorías',
    ],
  },
  {
    icon: Building2,
    title: 'ERPs y asesorías',
    items: [
      'Automatiza SII y facturación sin tocar el core',
      'Disminuye riesgo de sanciones y errores',
      'Ofrece valor añadido a clientes finales',
    ],
  },
  {
    icon: Scale,
    title: 'Legal & compliance',
    items: [
      'Screening masivo de contratos y expedientes',
      'Identificación de cláusulas y riesgos clave',
      'Informes ejecutivos para comités de riesgo',
    ],
  },
];

export function UseCases() {
  return (
    <section id="casos-uso" className="section-spacing bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Casos de uso prioritarios
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos centramos en procesos críticos: donde un error implica sanciones, pérdida de
            clientes o confianza del regulador.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <Card key={useCase.title}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {useCase.items.map((item) => (
                      <li key={item} className="flex items-start text-sm">
                        <span className="mr-2 text-primary font-bold">✓</span>
                        <span>{item}</span>
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
