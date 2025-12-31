import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { UseCases } from '@/components/sections/UseCases';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Automatiza SII, Verifactu, KYC y prevención de fraude con APIs diseñadas para desarrolladores. Prueba gratis 1.000 llamadas.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}