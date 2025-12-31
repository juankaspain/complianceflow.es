'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function BrandedFooter() {
  const footerLinks = {
    product: [
      { name: 'Características', href: '/features' },
      { name: 'Integraciones', href: '/integrations' },
      { name: 'Precios', href: '/pricing' },
      { name: 'Changelog', href: '/changelog' },
    ],
    company: [
      { name: 'Sobre Nosotros', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carreras', href: '/careers' },
      { name: 'Contacto', href: '/contact' },
    ],
    resources: [
      { name: 'Documentación', href: '/docs' },
      { name: 'Guías', href: '/guides' },
      { name: 'API Reference', href: '/api' },
      { name: 'Estado', href: '/status' },
    ],
    legal: [
      { name: 'Privacidad', href: '/privacy' },
      { name: 'Términos', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Licencias', href: '/licenses' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/juankaspain', icon: Github },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: 'mailto:contact@complianceflow.es', icon: Mail },
  ];

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Logo variant="primary" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Automatiza tus procesos de compliance con nuestra plataforma API moderna y segura.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-brand-primary-500 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ComplianceFlow. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con ❤️ en Madrid, España
          </p>
        </div>
      </div>
    </footer>
  );
}

export default BrandedFooter;
