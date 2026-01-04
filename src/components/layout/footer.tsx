import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/base-components'
import { COMPANY, CONTACT, SEO } from '@/lib/constants'

const footerLinks = {
  producto: [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Casos de uso', href: '/use-cases' },
    { name: 'Documentación', href: '/docs' },
    { name: 'API Reference', href: '/docs/api' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contact' },
    { name: 'Empleo', href: '/careers' },
  ],
  recursos: [
    { name: 'Guías', href: '/blog' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Status', href: 'https://status.complianceflow.es', external: true },
    { name: 'Changelog', href: '/changelog' },
  ],
  legal: [
    { name: 'Privacidad', href: '/privacy' },
    { name: 'Términos', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'GDPR', href: '/privacy#gdpr' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: CONTACT.social.github },
  { name: 'Twitter', icon: Twitter, href: `https://twitter.com/${CONTACT.social.twitter}` },
  { name: 'LinkedIn', icon: Linkedin, href: CONTACT.social.linkedin },
  { name: 'Email', icon: Mail, href: `mailto:${CONTACT.email.general}` },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-sm">CF</span>
              </div>
              <span className="font-bold text-lg">{COMPANY.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              {COMPANY.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-3 capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} {COMPANY.legalName}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Todos los sistemas operativos</span>
            </div>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
