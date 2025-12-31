'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Producto', href: '#producto' },
  { name: 'Casos de uso', href: '#casos-uso' },
  { name: 'Cómo funciona', href: '#como-funciona' },
  { name: 'Precios', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Docs', href: '/documentacion' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between" aria-label="Navegación principal">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg" aria-hidden="true">
            CF
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-bold">ComplianceFlow</span>
            <span className="text-xs text-muted-foreground">Compliance via APIs</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex md:items-center md:gap-x-4">
          <Button variant="ghost" asChild>
            <Link href="/documentacion">Docs API</Link>
          </Button>
          <Button asChild>
            <Link href="#demo">Probar gratis</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container space-y-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" asChild className="w-full">
                <Link href="/documentacion">Docs API</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="#demo">Probar gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}