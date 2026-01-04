// lib/devops/deployment-config.ts
// Configuración de DevOps y deployment para máxima disponibilidad

/**
 * GitHub Actions Configuration
 * CI/CD Pipeline para automated testing y deployment
 */
export const GITHUB_ACTIONS_CONFIG = {
  name: 'SEO Audit - CI/CD Pipeline',
  on: {
    push: { branches: ['main', 'develop'] },
    pull_request: { branches: ['main'] },
  },
  jobs: {
    test: {
      'runs-on': 'ubuntu-latest',
      steps: [
        { uses: 'actions/checkout@v3' },
        { uses: 'actions/setup-node@v3', with: { 'node-version': '18' } },
        { run: 'npm ci' },
        { run: 'npm run lint' },
        { run: 'npm run type-check' },
        { run: 'npm run test' },
        { run: 'npm run build' },
      ],
    },
    lighthouse: {
      'runs-on': 'ubuntu-latest',
      steps: [
        { uses: 'actions/checkout@v3' },
        { uses: 'treosh/lighthouse-ci-action@v9' },
      ],
    },
    deploy: {
      'runs-on': 'ubuntu-latest',
      'needs': ['test', 'lighthouse'],
      'if': "github.ref == 'refs/heads/main' && github.event_name == 'push'",
      steps: [
        { uses: 'actions/checkout@v3' },
        { uses: 'vercel/action@main', with: { 'vercel-token': '${{ secrets.VERCEL_TOKEN }}' } },
      ],
    },
  },
};

/**
 * Environment Variables para Production
 */
export const PRODUCTION_ENV = {
  NODE_ENV: 'production',
  NEXT_PUBLIC_ANALYTICS_ID: 'G-XXXXXXXXXX',
  NEXT_PUBLIC_SITE_URL: 'https://complianceflow.es',
  SENTRY_DSN: 'https://xxxxxxxxxx@sentry.io/xxxxx',
  // Security
  CSRF_TOKEN_SECRET: 'should-be-in-vercel-secrets',
  API_RATE_LIMIT: '100/min',
  // Cache
  CACHE_CONTROL: 'public, max-age=3600, s-maxage=86400',
};

/**
 * Vercel Configuration (next.config.js)
 */
export const VERCEL_NEXTJS_CONFIG = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,

  // Images optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // 301
      },
    ];
  },

  // Headers for security & performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'" },
        ],
      },
      // Cache static assets
      {
        source: '/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Middleware for performance monitoring
  experimental: {
    instrumentationHook: true,
  },
};

/**
 * Sentry Configuration para error tracking
 */
export const SENTRY_CONFIG = {
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  integrations: [
    // Sentry.browserTracingIntegration(),
    // Sentry.replayIntegration(),
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
};

/**
 * Database/Cache Configuration
 */
export const CACHE_CONFIG = {
  redis: {
    url: process.env.REDIS_URL,
    ttl: {
      default: 3600, // 1 hour
      static: 86400, // 24 hours
      dynamic: 300, // 5 minutes
    },
  },

  // Edge caching
  edgeConfig: {
    ttl: 3600,
    sMaxAge: 86400,
    staleWhileRevalidate: 604800, // 7 days
  },
};

/**
 * Database Configuration (si se usa)
 */
export const DATABASE_CONFIG = {
  // Cosmos DB (Azure)
  cosmosDb: {
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY,
    database: 'complianceflow',
  },

  // MongoDB (alternativa)
  mongodb: {
    uri: process.env.MONGODB_URI,
    database: 'complianceflow',
  },
};

/**
 * Monitoring & Alerting
 */
export const MONITORING_CONFIG = {
  // Google Analytics 4
  ga4: {
    measurementId: 'G-XXXXXXXXXX',
    enableDebugMode: false,
    trackCoreWebVitals: true,
  },

  // Vercel Analytics
  vercelAnalytics: {
    enabled: true,
    debug: false,
  },

  // Custom monitoring
  customMetrics: {
    trackPerformance: true,
    trackErrors: true,
    trackConversions: true,
  },

  // Alerting thresholds
  alerts: {
    lcp: { critical: 4000, warning: 2500 },
    inp: { critical: 500, warning: 200 },
    cls: { critical: 0.25, warning: 0.1 },
    errorRate: { critical: 0.05, warning: 0.01 },
  },
};

export default {
  GITHUB_ACTIONS_CONFIG,
  PRODUCTION_ENV,
  VERCEL_NEXTJS_CONFIG,
  SENTRY_CONFIG,
  CACHE_CONFIG,
  DATABASE_CONFIG,
  MONITORING_CONFIG,
};
