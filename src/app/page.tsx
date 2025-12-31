import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { UseCases } from '@/components/sections/UseCases';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Demo } from '@/components/sections/Demo';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <UseCases />
      <HowItWorks />
      <Demo />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
