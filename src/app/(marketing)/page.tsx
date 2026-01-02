import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/Hero';
import { FeaturesSection } from '@/components/sections/Features';
import { UseCasesSection } from '@/components/sections/UseCases';
import { HowItWorksSection } from '@/components/sections/HowItWorks';
import { PricingSection } from '@/components/sections/Pricing';
import { FAQSection } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'ComplianceFlow · APIs de Compliance para SII, KYC y AML',
  description:
    'Automatiza SII, Verifactu, KYC y prevención de fraude con APIs diseñadas para desarrolladores. Prueba gratis 1.000 llamadas.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}