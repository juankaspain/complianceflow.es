'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { BrandedButton } from './BrandedButton';
import { Menu, X } from 'lucide-react';

export function BrandedHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/products' },
    { name: 'Soluciones', href: '/solutions' },
    { name: 'Documentación', href: '/docs' },
    { name: 'Precios', href: '/pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo priority />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Iniciar Sesión
          </Link>
          <BrandedButton variant="gradient" size="sm">
            Comenzar Gratis
          </BrandedButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Link href="/login">
                <BrandedButton variant="outline" className="w-full">
                  Iniciar Sesión
                </BrandedButton>
              </Link>
              <BrandedButton variant="gradient" className="w-full">
                Comenzar Gratis
              </BrandedButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default BrandedHeader;
