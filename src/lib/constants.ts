/**
 * Application constants and configuration
 * Single source of truth for all app-wide constants
 */

// ============================================================================
// COMPANY INFO
// ============================================================================

export const COMPANY = {
  name: 'ComplianceFlow',
  legalName: 'ComplianceFlow SL',
  cif: 'B12345678',
  foundedYear: 2024,
  tagline: 'Compliance via APIs',
  description: 'API REST para compliance fiscal automatizado en España',
} as const

// ============================================================================
// CONTACT INFO
// ============================================================================

export const CONTACT = {
  email: {
    general: 'contact@complianceflow.es',
    support: 'support@complianceflow.es',
    legal: 'legal@complianceflow.es',
    privacy: 'privacy@complianceflow.es',
    sales: 'sales@complianceflow.es',
  },
  phone: {
    main: '+34 900 000 000',
    support: '+34 900 000 001',
  },
  address: {
    street: 'Calle Principal 123',
    city: 'Madrid',
    zipCode: '28001',
    country: 'España',
  },
  social: {
    twitter: '@complianceflow',
    linkedin: 'https://linkedin.com/company/complianceflow',
    github: 'https://github.com/complianceflow',
  },
} as const

// ============================================================================
// URLS
// ============================================================================

export const URLS = {
  site: 'https://complianceflow.es',
  api: process.env.NEXT_PUBLIC_API_URL || 'https://api.complianceflow.es',
  docs: 'https://docs.complianceflow.es',
  status: 'https://status.complianceflow.es',
  blog: 'https://complianceflow.es/blog',
} as const

// ============================================================================
// PRICING
// ============================================================================

export const PRICING = {
  plans: {
    starter: {
      id: 'starter',
      name: 'Starter',
      price: 49,
      currency: 'EUR',
      interval: 'month',
      features: [
        'Hasta 1,000 transacciones/mes',
        'API SII, Verifactu y TicketBAI',
        'Soporte por email (48h)',
        'Dashboard básico',
        '99.9% uptime SLA',
      ],
      limits: {
        transactions: 1000,
        apiCalls: 10000,
        users: 3,
      },
    },
    professional: {
      id: 'professional',
      name: 'Professional',
      price: 199,
      currency: 'EUR',
      interval: 'month',
      features: [
        'Hasta 10,000 transacciones/mes',
        'Todas las features de Starter',
        'Soporte prioritario (24h)',
        'Dashboard avanzado con analytics',
        'Webhooks personalizados',
        'Integraciones con ERPs',
      ],
      limits: {
        transactions: 10000,
        apiCalls: 100000,
        users: 10,
      },
      popular: true,
    },
    enterprise: {
      id: 'enterprise',
      name: 'Enterprise',
      price: 499,
      currency: 'EUR',
      interval: 'month',
      features: [
        'Transacciones ilimitadas',
        'Todas las features de Professional',
        'Soporte 24/7 dedicado',
        'SLA 99.99% garantizado',
        'Onboarding personalizado',
        'Gestión de cuenta dedicada',
        'Integraciones custom',
      ],
      limits: {
        transactions: Infinity,
        apiCalls: Infinity,
        users: Infinity,
      },
    },
  },
  trial: {
    duration: 14,
    features: 'all',
    creditCardRequired: false,
  },
} as const

// ============================================================================
// FEATURES
// ============================================================================

export const FEATURES = {
  sii: {
    name: 'SII (Suministro Inmediato de Información)',
    description: 'Integración completa con el sistema SII de la AEAT',
    icon: 'FileText',
  },
  verifactu: {
    name: 'Verifactu',
    description: 'Sistema de verificación de facturas de Hacienda',
    icon: 'Shield',
  },
  ticketbai: {
    name: 'TicketBAI',
    description: 'Compliance para País Vasco y Navarra',
    icon: 'Check',
  },
} as const

// ============================================================================
// SOCIAL PROOF
// ============================================================================

export const STATS = {
  customers: 500,
  transactionsProcessed: 5000000,
  uptime: 99.99,
  avgResponseTime: 150, // ms
  yearsInBusiness: new Date().getFullYear() - COMPANY.foundedYear,
} as const

export const TRUST_LOGOS = [
  { name: 'AEAT', image: '/logos/aeat.svg' },
  { name: 'ISO 27001', image: '/logos/iso27001.svg' },
  { name: 'GDPR Compliant', image: '/logos/gdpr.svg' },
  { name: 'SSL Secure', image: '/logos/ssl.svg' },
] as const

// ============================================================================
// SEO
// ============================================================================

export const SEO = {
  defaultTitle: 'ComplianceFlow · API SII, Verifactu y TicketBAI para España',
  titleTemplate: '%s | ComplianceFlow',
  defaultDescription:
    'API REST para compliance fiscal automatizado en España. Integra SII, Verifactu y TicketBAI en 5 minutos. +500 empresas, 99.99% uptime, soporte 24/7.',
  keywords: [
    'API SII',
    'API Verifactu',
    'API TicketBAI',
    'compliance fiscal',
    'facturación electrónica',
    'AEAT API',
  ],
  ogImage: '/og-image.png',
  twitterHandle: '@complianceflow',
} as const

// ============================================================================
// ANALYTICS
// ============================================================================

export const ANALYTICS = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  enableTracking: process.env.NODE_ENV === 'production',
} as const

// ============================================================================
// API LIMITS
// ============================================================================

export const API_LIMITS = {
  rateLimit: {
    requests: 60,
    window: 60 * 1000, // 1 minute
  },
  maxRequestSize: 5 * 1024 * 1024, // 5 MB
  timeout: 30000, // 30 seconds
} as const

// ============================================================================
// VALIDATION RULES
// ============================================================================

export const VALIDATION = {
  email: {
    minLength: 5,
    maxLength: 100,
  },
  password: {
    minLength: 8,
    maxLength: 100,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },
  name: {
    minLength: 2,
    maxLength: 50,
  },
  company: {
    minLength: 2,
    maxLength: 100,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
} as const

// ============================================================================
// CACHE DURATIONS
// ============================================================================

export const CACHE = {
  static: 31536000, // 1 year
  images: 31536000, // 1 year
  api: 3600, // 1 hour
  revalidate: 60, // 1 minute
} as const
