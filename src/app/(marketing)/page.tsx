import { HeroSection } from '@/components/sections/hero-section'
import { StatsGrid } from '@/components/ui/stats-counter'
import { TrustLogos } from '@/components/sections/trust-logos'
import { FeatureShowcase } from '@/components/sections/feature-showcase'
import { ROICalculator } from '@/components/sections/roi-calculator'
import { PricingSection } from '@/components/sections/pricing-section'
import { ComparisonTable } from '@/components/sections/comparison-table'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { FAQSection } from '@/components/sections/faq-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { CTASection } from '@/components/sections/cta-section'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { FAQSchema, ProductSchema } from '@/components/seo/structured-data'

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
      <FAQSchema />
      <ProductSchema />
      <AnimatedBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container">
          <StatsGrid stats={stats} />
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustLogos />

      {/* Features */}
      <FeatureShowcase />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Pricing */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Final CTA */}
      <CTASection />
    </main>
  )
}
