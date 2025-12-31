import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { Github, Mail } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Producto', href: '/#producto' },
    { name: 'Precios', href: '/#pricing' },
    { name: 'Casos de uso', href: '/#casos-uso' },
    { name: 'Documentación', href: '/documentacion' },
  ],
  legal: [
    { name: 'Privacidad', href: '/legal/privacidad' },
    { name: 'Términos', href: '/legal/terminos' },
    { name: 'Cookies', href: '/legal/cookies' },
  ],
  company: [
    { name: 'Sobre nosotros', href: '/sobre-nosotros' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: siteConfig.links.email },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                CF
              </div>
              <span className="text-lg font-bold">ComplianceFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              APIs de compliance para automatizar SII, KYC y fraude.
            </p>
            <div className="flex items-center space-x-3">
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
                href={siteConfig.links.email}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3">Producto</h3>
            <ul className="space-y-2">
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

          {/* Legal */}
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

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Empresa</h3>
            <ul className="space-y-2">
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
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. APIs de compliance para España y la UE.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con ❤️ en España
          </p>
        </div>
      </div>
    </footer>
  );
}
