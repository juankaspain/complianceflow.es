export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  description?: string;
}

export const mainNav: NavItem[] = [
  {
    title: 'Producto',
    href: '/#producto',
    description: 'Descubre nuestras APIs de compliance',
  },
  {
    title: 'Casos de uso',
    href: '/#casos-uso',
    description: 'Cómo ComplianceFlow resuelve problemas reales',
  },
  {
    title: 'Precios',
    href: '/#pricing',
    description: 'Planes flexibles para cada etapa',
  },
  {
    title: 'Documentación',
    href: '/documentacion',
    description: 'Guías completas y referencia de API',
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'Artículos sobre compliance y APIs',
  },
];

export const footerNav = [
  {
    title: 'Producto',
    items: [
      { title: 'APIs', href: '/#producto' },
      { title: 'Precios', href: '/#pricing' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Status', href: 'https://status.complianceflow.es', external: true },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { title: 'Documentación', href: '/documentacion' },
      { title: 'Blog', href: '/blog' },
      { title: 'Casos de uso', href: '/#casos-uso' },
      { title: 'FAQ', href: '/#faq' },
    ],
  },
  {
    title: 'Empresa',
    items: [
      { title: 'Sobre nosotros', href: '/sobre-nosotros' },
      { title: 'Contacto', href: '/contacto' },
      { title: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { title: 'Privacidad', href: '/legal/privacidad' },
      { title: 'Términos', href: '/legal/terminos' },
      { title: 'Cookies', href: '/legal/cookies' },
    ],
  },
];
