'use client';

import React from 'react';
import { Logo, BrandedButton, BrandedCard, GradientText } from '@/components/brand';
import { BrandedHeader } from '@/components/brand/BrandedHeader';
import { BrandedFooter } from '@/components/brand/BrandedFooter';
import { BrandedSpinner } from '@/components/brand/BrandedLoading';
import { Shield, Zap, Lock, CheckCircle } from 'lucide-react';

export default function BrandShowcase() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrandedHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-dark text-white py-20">
          <div className="container text-center">
            <GradientText as="h1" className="text-6xl mb-6">
              Brand Showcase
            </GradientText>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Explora todos los componentes y elementos de diseño de ComplianceFlow
            </p>
          </div>
        </section>

        {/* Logos */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold mb-8">Logos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BrandedCard className="p-8 text-center">
              <h3 className="font-semibold mb-4">Primary Logo</h3>
              <Logo variant="primary" />
            </BrandedCard>
            <BrandedCard className="p-8 text-center bg-gray-900">
              <h3 className="font-semibold mb-4 text-white">White Logo</h3>
              <Logo variant="white" />
            </BrandedCard>
            <BrandedCard className="p-8 text-center">
              <h3 className="font-semibold mb-4">Icon Logo</h3>
              <Logo variant="icon" />
            </BrandedCard>
          </div>
        </section>

        {/* Colors */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold mb-8">Colores de Marca</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Primary 500', class: 'bg-brand-primary-500' },
              { name: 'Primary 600', class: 'bg-brand-primary-600' },
              { name: 'Secondary 500', class: 'bg-brand-secondary-500' },
              { name: 'Accent 500', class: 'bg-brand-accent-500' },
              { name: 'Success', class: 'bg-success' },
              { name: 'Warning', class: 'bg-warning' },
              { name: 'Error', class: 'bg-error' },
              { name: 'Info', class: 'bg-info' },
            ].map((color) => (
              <div key={color.name} className="text-center">
                <div className={`${color.class} h-24 rounded-lg mb-2`} />
                <p className="text-sm font-medium">{color.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold mb-8">Botones</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Variantes</h3>
              <div className="flex flex-wrap gap-4">
                <BrandedButton variant="primary">Primary</BrandedButton>
                <BrandedButton variant="secondary">Secondary</BrandedButton>
                <BrandedButton variant="outline">Outline</BrandedButton>
                <BrandedButton variant="ghost">Ghost</BrandedButton>
                <BrandedButton variant="gradient">Gradient</BrandedButton>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tamaños</h3>
              <div className="flex flex-wrap items-center gap-4">
                <BrandedButton size="sm">Small</BrandedButton>
                <BrandedButton size="md">Medium</BrandedButton>
                <BrandedButton size="lg">Large</BrandedButton>
                <BrandedButton size="xl">Extra Large</BrandedButton>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold mb-8">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <BrandedCard className="p-6">
              <div className="bg-brand-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Basic Card</h3>
              <p className="text-muted-foreground">Simple card without effects</p>
            </BrandedCard>

            <BrandedCard hover className="p-6">
              <div className="bg-brand-secondary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-brand-secondary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hover Card</h3>
              <p className="text-muted-foreground">Hover to see effect</p>
            </BrandedCard>

            <BrandedCard gradient className="p-6">
              <div className="bg-brand-accent-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-brand-accent-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gradient Card</h3>
              <p className="text-muted-foreground">With subtle gradient</p>
            </BrandedCard>
          </div>
        </section>

        {/* Gradients */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold mb-8">Gradientes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
              <h3 className="font-bold text-2xl mb-2">Primary Gradient</h3>
              <p className="text-white/80">Blue to Cyan</p>
            </div>
            <div className="bg-gradient-secondary rounded-lg p-8 text-white text-center">
              <h3 className="font-bold text-2xl mb-2">Secondary Gradient</h3>
              <p className="text-white/80">Green to Light Green</p>
            </div>
            <div className="bg-gradient-accent rounded-lg p-8 text-white text-center">
              <h3 className="font-bold text-2xl mb-2">Accent Gradient</h3>
              <p className="text-white/80">Purple to Magenta</p>
            </div>
            <div className="bg-gradient-dark rounded-lg p-8 text-white text-center">
              <h3 className="font-bold text-2xl mb-2">Dark Gradient</h3>
              <p className="text-white/80">Dark Gray to Black</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold mb-8">Tipografía</h2>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Heading 1</h1>
            <h2 className="text-4xl font-bold">Heading 2</h2>
            <h3 className="text-3xl font-semibold">Heading 3</h3>
            <h4 className="text-2xl font-semibold">Heading 4</h4>
            <p className="text-lg">Body Large - Lorem ipsum dolor sit amet</p>
            <p className="text-base">Body Base - Lorem ipsum dolor sit amet</p>
            <p className="text-sm">Body Small - Lorem ipsum dolor sit amet</p>
            <GradientText gradient="primary" className="text-4xl">
              Gradient Text Primary
            </GradientText>
            <GradientText gradient="secondary" className="text-4xl">
              Gradient Text Secondary
            </GradientText>
          </div>
        </section>

        {/* Loading States */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold mb-8">Estados de Carga</h2>
          <div className="flex gap-8 items-center">
            <BrandedSpinner size="sm" />
            <BrandedSpinner size="md" />
            <BrandedSpinner size="lg" />
          </div>
        </section>

        {/* Icons */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold mb-8">Iconos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Seguridad', color: 'text-brand-primary-500' },
              { icon: Zap, label: 'Velocidad', color: 'text-brand-secondary-500' },
              { icon: Lock, label: 'Privacidad', color: 'text-brand-accent-500' },
              { icon: CheckCircle, label: 'Verificado', color: 'text-success' },
            ].map(({ icon: Icon, label, color }) => (
              <BrandedCard key={label} className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Icon className={`w-12 h-12 ${color}`} />
                </div>
                <p className="font-medium">{label}</p>
              </BrandedCard>
            ))}
          </div>
        </section>
      </main>

      <BrandedFooter />
    </div>
  );
}
