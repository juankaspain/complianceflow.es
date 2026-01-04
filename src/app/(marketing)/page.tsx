import { HeroSection } from '@/components/sections/hero-section'
import { StatsGrid } from '@/components/ui/stats-counter'
import { FeatureShowcase } from '@/components/sections/feature-showcase'
import { PricingSection } from '@/components/sections/pricing-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'
import { AnimatedBackground } from '@/components/ui/animated-background'

const stats = [
  {
    value: 500,
    label: 'Empresas activas',
    suffix: '+',
  },
  {
    value: 10,
    label: 'Millones de transacciones',
    suffix: 'M+',
  },
  {
    value: 99.99,
    label: 'Uptime garantizado',
    suffix: '%',
  },
  {
    value: 24,
    label: 'Soporte disponible',
    suffix: '/7',
  },
]

export default function HomePage() {
  return (
    <main className="relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container">
          <StatsGrid stats={stats} />
        </div>
      </section>

      {/* Features */}
      <FeatureShowcase />

      {/* Pricing */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <CTASection />
    </main>
  )
}
