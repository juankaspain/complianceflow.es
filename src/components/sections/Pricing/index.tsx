import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Sandbox',
    price: '0',
    period: '/mes',
    description: 'Para probar y desarrollar',
    features: [
      '1.000 llamadas/mes',
      'Acceso a todos los endpoints',
      'Sin tarjeta de crédito',
      'Documentación completa',
    ],
    cta: 'Empezar gratis',
    href: '/#demo',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '99',
    period: '/mes',
    description: 'Para equipos en producción',
    features: [
      '100.000 llamadas/mes',
      'SLA 99,9% uptime',
      'Soporte por email',
      'Dashboard de métricas',
      'Alertas configurables',
    ],
    cta: 'Comenzar prueba',
    href: '/contacto',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'A medida',
    period: '',
    description: 'Para grandes volúmenes',
    features: [
      'Volumen personalizado',
      'SLAs dedicados',
      'Despliegue dedicado opcional',
      'Integración compliance interno',
      'Soporte prioritario 24/7',
    ],
    cta: 'Contactar ventas',
    href: '/contacto',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-spacing">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Precios pensados para producto
          </h2>
          <p className="text-lg text-muted-foreground">
            Empieza gratis y escala por volumen. Sin costes ocultos ni permanencias.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlighted ? 'border-primary shadow-lg relative' : ''}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">€{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.highlighted ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos los planes incluyen cifrado end-to-end, cumplimiento GDPR y almacenamiento en la UE.
        </p>
      </div>
    </section>
  );
}
