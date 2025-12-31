import type { Metadata } from 'next';
import { Check, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Precios',
  description: 'Planes flexibles para equipos de todos los tamaños.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfecto para proyectos pequeños',
      features: [
        '10,000 requests/mes',
        'APIs básicas',
        'Soporte por email',
        '1 usuario',
        'Dashboard básico',
      ],
      cta: 'Empezar gratis',
      popular: false,
    },
    {
      name: 'Professional',
      price: '199',
      description: 'Para equipos en crecimiento',
      features: [
        '100,000 requests/mes',
        'Todas las APIs',
        'Soporte prioritario',
        '10 usuarios',
        'Analytics avanzado',
        'Webhooks',
        'SSO',
      ],
      cta: 'Probar 14 días gratis',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Para grandes organizaciones',
      features: [
        'Requests ilimitados',
        'APIs personalizadas',
        'Soporte 24/7',
        'Usuarios ilimitados',
        'SLA garantizado',
        'Onboarding dedicado',
        'Compliance personalizado',
      ],
      cta: 'Contactar ventas',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6">
              Precios{' '}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Transparentes
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400">
              Sin costes ocultos. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-primary bg-gradient-to-b from-primary/5 to-gray-900/50 shadow-xl shadow-primary/20'
                    : 'border-gray-800 bg-gray-900/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white shadow-lg">
                      <Zap className="h-4 w-4" />
                      Más popular
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    {plan.price !== 'Custom' && <span className="text-gray-500 text-2xl">€</span>}
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-400">/mes</span>}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className={`block w-full rounded-lg py-3 text-center font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary text-white shadow-lg shadow-primary/50 hover:bg-primary-600'
                      : 'border border-gray-700 bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">¿Puedo cambiar de plan?</h3>
              <p className="text-gray-400">Sí, puedes cambiar de plan en cualquier momento desde tu dashboard.</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">¿Ofrecen descuentos anuales?</h3>
              <p className="text-gray-400">Sí, ahorra un 20% con facturación anual.</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-gray-400">Tarjetas de crédito/débito, PayPal y transferencia bancaria para planes Enterprise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
