export const siteConfig = {
  name: 'ComplianceFlow',
  description:
    'APIs de compliance para automatizar SII, Verifactu, KYC, fraude y análisis documental legal.',
  url: 'https://complianceflow.es',
  ogImage: 'https://complianceflow.es/og-image.png',
  links: {
    github: 'https://github.com/juankaspain/complianceflow.es',
    docs: '/documentacion',
    email: 'hola@complianceflow.es',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.complianceflow.es',
    version: 'v1',
  },
};

export type SiteConfig = typeof siteConfig;
