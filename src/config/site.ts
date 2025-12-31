export const siteConfig = {
  name: 'ComplianceFlow',
  author: 'ComplianceFlow Team',
  description:
    'Automatiza SII, Verifactu, KYC, prevención de blanqueo y análisis documental legal en segundos. APIs de compliance diseñadas para desarrolladores.',
  keywords: [
    'SII API',
    'Verifactu',
    'KYC España',
    'API compliance',
    'AEAT automatización',
    'PSD2',
    'AML',
    'prevención fraude',
    'onboarding digital',
    'facturación electrónica',
  ],
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://complianceflow.es',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/juankaspain/complianceflow.es',
    email: 'mailto:hola@complianceflow.es',
    docs: '/documentacion',
  },
};

export type SiteConfig = typeof siteConfig;
