export const siteConfig = {
  name: 'ComplianceFlow',
  description: 'APIs de compliance para automatizar SII, Verifactu, KYC, fraude y análisis documental legal sobre una única API.',
  url: 'https://complianceflow.es',
  ogImage: 'https://complianceflow.es/og-image.png',
  links: {
    github: 'https://github.com/juankaspain/complianceflow.es',
    docs: '/documentacion',
    api: 'https://api.complianceflow.es',
  },
  contact: {
    email: 'hola@complianceflow.es',
  },
  features: [
    {
      title: 'SII & Verifactu',
      description: 'Automatiza el envío de facturas al SII de la AEAT y genera tickets Verifactu sin modificar tu ERP.',
      icon: '📊',
    },
    {
      title: 'KYC Digital',
      description: 'Verifica identidades con DNI/pasaporte + selfie compatible con PSD2 y normativas europeas.',
      icon: '🔐',
    },
    {
      title: 'Detección de Fraude',
      description: 'Calcula scores de riesgo en milisegundos combinando reglas e inteligencia artificial.',
      icon: '🛡️',
    },
    {
      title: 'Análisis Documental',
      description: 'Extrae datos clave de contratos y documentos con OCR y IA avanzada.',
      icon: '📄',
    },
  ],
  pricing: [
    {
      name: 'Sandbox',
      price: 0,
      currency: 'EUR',
      period: 'mes',
      description: 'Perfecto para probar la plataforma',
      features: [
        '1.000 llamadas/mes',
        'Acceso a todos los endpoints',
        'Sin tarjeta de crédito',
        'Documentación completa',
      ],
      cta: 'Empezar gratis',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 99,
      currency: 'EUR',
      period: 'mes',
      description: 'Para equipos y productos en producción',
      features: [
        '100.000 llamadas/mes',
        'SLA 99.9% uptime',
        'Soporte prioritario por email',
        'Dashboard de métricas',
        'Alertas configurables',
      ],
      cta: 'Empezar prueba',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: null,
      currency: 'EUR',
      period: 'mes',
      description: 'Para grandes volúmenes y requisitos especiales',
      features: [
        'Volumen personalizado',
        'SLAs a medida',
        'Despliegue dedicado',
        'Integración con compliance interno',
        'Soporte 24/7',
      ],
      cta: 'Contactar ventas',
      highlighted: false,
    },
  ],
};

export type SiteConfig = typeof siteConfig;