'use client';

import React from 'react';
import { Logo, BrandedButton, BrandedCard, GradientText } from '@/components/brand';
import { Users, Target, Heart, Award, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Juan Carlos García',
    role: 'CEO & Founder',
    image: 'JG',
    bio: 'Ex-Santander Digital. 15+ años en FinTech y Compliance.',
    linkedin: '#'
  },
  {
    name: 'María López',
    role: 'CTO',
    image: 'ML',
    bio: 'Ex-Google. Expert en arquitectura de sistemas distribuidos.',
    linkedin: '#'
  },
  {
    name: 'Carlos Martínez',
    role: 'Head of Compliance',
    image: 'CM',
    bio: 'Ex-BBVA. Especialista en regulaciones europeas.',
    linkedin: '#'
  },
  {
    name: 'Ana Rodríguez',
    role: 'Head of Product',
    image: 'AR',
    bio: 'Ex-Microsoft. Product leader con foco en UX.',
    linkedin: '#'
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <a href="/">
              <BrandedButton variant="ghost" size="sm">
                Volver al Inicio
              </BrandedButton>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-50 via-background to-brand-secondary-50/30 dark:from-brand-primary-950/20 dark:via-background dark:to-brand-secondary-950/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <GradientText as="h1" className="text-5xl md:text-6xl mb-6">
              Nuestra Misión
            </GradientText>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Hacer que el compliance sea simple, automático y accesible para todas las empresas,
              sin importar su tamaño.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <BrandedCard className="p-8 text-center">
              <div className="bg-brand-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-brand-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excelencia</h3>
              <p className="text-muted-foreground">
                Nos comprometemos a ofrecer la mejor calidad en cada detalle de nuestro producto.
              </p>
            </BrandedCard>

            <BrandedCard className="p-8 text-center">
              <div className="bg-brand-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-brand-secondary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparencia</h3>
              <p className="text-muted-foreground">
                Creemos en la honestidad y claridad en todas nuestras interacciones con clientes.
              </p>
            </BrandedCard>

            <BrandedCard className="p-8 text-center">
              <div className="bg-brand-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-accent-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovación</h3>
              <p className="text-muted-foreground">
                Constantemente buscamos nuevas formas de mejorar y simplificar el compliance.
              </p>
            </BrandedCard>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <GradientText as="h2" className="text-4xl font-bold mb-4">
              Nuestro Equipo
            </GradientText>
            <p className="text-xl text-muted-foreground">
              Profesionales con experiencia en las mejores empresas tecnológicas y financieras
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <BrandedCard key={index} hover className="p-6 text-center group">
                <div className="bg-gradient-primary w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-brand-primary-500 text-sm mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <a href={member.linkedin} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-primary-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </BrandedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BrandedCard gradient className="p-12 text-center max-w-3xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-6 text-brand-primary-500" />
            <h2 className="text-3xl font-bold mb-4">Únete a Nuestro Equipo</h2>
            <p className="text-muted-foreground mb-6">
              Estamos buscando talento excepcional para unirse a nuestra misión de transformar el compliance.
            </p>
            <BrandedButton variant="gradient" size="lg">
              Ver Ofertas de Empleo
            </BrandedButton>
          </BrandedCard>
        </div>
      </section>
    </div>
  );
}
