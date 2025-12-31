import Link from 'next/link';
import { Github, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

const footerLinks = {
  producto: [
    { name: 'Características', href: '#producto' },
    { name: 'Casos de uso', href: '#casos-uso' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Documentación', href: '/documentacion' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '/sobre-nosotros' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '#contacto' },
  ],
  legal: [
    { name: 'Privacidad', href: '/legal/privacidad' },
    { name: 'Términos', href: '/legal/terminos' },
    { name: 'Cookies', href: '/legal/cookies' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                CF
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">ComplianceFlow</span>
                <span className="text-xs text-muted-foreground">Compliance via APIs</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${siteConfig.contact.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Producto</h3>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
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

          <div>
            <h3 className="font-semibold mb-3">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
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

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
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

        {/* Bottom */}
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ComplianceFlow. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con ❤️ en Madrid, España
          </p>
        </div>
      </div>
    </footer>
  );
}