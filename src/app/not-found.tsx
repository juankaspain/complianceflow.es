'use client';

import React from 'react';
import { Logo, BrandedButton, GradientText } from '@/components/brand';
import { Home, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <GradientText as="h1" className="text-9xl md:text-[200px] font-bold leading-none">
              404
            </GradientText>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Página No Encontrada
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <BrandedButton variant="gradient" size="lg">
                <Home className="w-5 h-5" />
                Volver al Inicio
              </BrandedButton>
            </Link>
            <BrandedButton variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5" />
              Volver Atrás
            </BrandedButton>
          </div>

          {/* Suggestions */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">También puedes visitar:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="text-sm text-brand-primary-500 hover:underline">
                Inicio
              </Link>
              <Link href="/api-docs" className="text-sm text-brand-primary-500 hover:underline">
                API Docs
              </Link>
              <Link href="/about" className="text-sm text-brand-primary-500 hover:underline">
                Sobre Nosotros
              </Link>
              <Link href="/#contact" className="text-sm text-brand-primary-500 hover:underline">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
