'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/base-components'

const navigation = [
  {
    name: 'Producto',
    items: [
      { name: 'Features', href: '/#features', description: 'Todas nuestras funcionalidades' },
      { name: 'Casos de uso', href: '/use-cases', description: 'Ejemplos reales de integración' },
      { name: 'API Docs', href: '/docs', description: 'Documentación técnica completa' },
    ],
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  {
    name: 'Recursos',
    items: [
      { name: 'Guías', href: '/blog', description: 'Tutoriales y mejores prácticas' },
      { name: 'FAQ', href: '/#faq', description: 'Preguntas frecuentes' },
      { name: 'Status', href: 'https://status.complianceflow.es', description: 'Estado del servicio', external: true },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">CF</span>
            </div>
            <span className="font-bold text-xl">ComplianceFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) =>
              item.items ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                      'hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        activeDropdown === item.name && 'rotate-180'
                      )}
                    />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                        >
                          <div className="font-medium text-sm">{subItem.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {subItem.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="ghost" size="sm">
                Contactar
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="sm">Prueba gratis</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="space-y-1">
              {navigation.map((item) =>
                item.items ? (
                  <div key={item.name}>
                    <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                      {item.name}
                    </div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-accent rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="pt-4 space-y-2">
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full">
                    Contactar
                  </Button>
                </Link>
                <Link href="/pricing" className="block">
                  <Button className="w-full">Prueba gratis</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
