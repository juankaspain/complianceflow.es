import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Precios pensados para producto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Empieza gratis y escala por volumen; sin costes ocultos ni permanencias.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {siteConfig.pricing.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlighted ? 'border-primary shadow-lg scale-105' : ''}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  {plan.price !== null ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">{plan.price}€</span>
                      <span className="text-muted-foreground">/ {plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold">A medida</div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.highlighted ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <Link href={plan.price === 0 ? '#demo' : '#contacto'}>
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          ¿Necesitas volumen personalizado o despliegue dedicado?{' '}
          <Link href="#contacto" className="underline underline-offset-4 hover:text-primary">
            Contáctanos
          </Link>
        </p>
      </div>
    </section>
  );
}