// lib/performance/lcp-optimization.ts
// Optimizaciones para Largest Contentful Paint (LCP < 2.5s target)

/**
 * Estrategia de optimización LCP
 * Desglose: TTFB + Resource Load Delay + Resource Load Time + Element Render Delay
 */

export interface LCPOptimizationConfig {
  // Time to First Byte (Baseline)
  ttfbTarget: number; // 600ms

  // Resource Load Delay
  preloadCritical: boolean;
  removeFromLazyLoad: boolean;

  // Resource Load Time
  imageOptimization: boolean;
  formatConversion: boolean; // AVIF + WebP

  // Element Render Delay
  criticalCSS: boolean;
  deferNonCriticalJS: boolean;
  fontDisplay: 'swap' | 'optional' | 'fallback';
}

/**
 * Configuración por defecto para máxima optimización LCP
 */
export const DEFAULT_LCP_CONFIG: LCPOptimizationConfig = {
  ttfbTarget: 600,
  preloadCritical: true,
  removeFromLazyLoad: true,
  imageOptimization: true,
  formatConversion: true,
  criticalCSS: true,
  deferNonCriticalJS: true,
  fontDisplay: 'swap',
};

/**
 * Utilidad para precargar recursos críticos
 */
export function generatePreloadLinks(resources: Array<{
  href: string;
  as: 'image' | 'script' | 'style' | 'font';
  type?: string;
  crossOrigin?: boolean;
}>): string[] {
  return resources.map(resource => {
    const attrs = [
      `href="${resource.href}"`,
      `rel="preload"`,
      `as="${resource.as}"`,
    ];

    if (resource.type) attrs.push(`type="${resource.type}"`);
    if (resource.crossOrigin) attrs.push(`crossOrigin="anonymous"`);

    return `<link ${attrs.join(' ')} />`;
  });
}

/**
 * Utilidad para marcar LCP element con fetchpriority
 */
export function getLCPImageProps() {
  return {
    fetchpriority: 'high' as const,
    priority: true,
    loading: 'eager' as const,
  };
}

/**
 * CSS crítico para above-the-fold content
 * Debe ser inlineado en <head>
 */
export const CRITICAL_CSS = `
  /* Hero/Header Styles */
  header, .hero, [role="banner"] {
    display: block;
  }

  /* Navigation */
  nav, [role="navigation"] {
    display: block;
  }

  /* Main Content */
  main, [role="main"] {
    display: block;
  }

  /* Hero Image Styles */
  .hero-image, [data-type="hero-image"] {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    aspect-ratio: auto;
  }

  /* Prevent layout shift for images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Font Loading Strategy */
  @font-face {
    font-family: 'Inter';
    font-display: swap;
  }
`;

/**
 * Chequeo de Core Web Vitals actuales
 */
export function checkLCPStatus(lcpValue: number): {
  status: 'good' | 'needs-improvement' | 'poor';
  message: string;
  recommendations: string[];
} {
  if (lcpValue <= 2500) {
    return {
      status: 'good',
      message: `LCP is ${lcpValue}ms - Excellent!`,
      recommendations: [
        'Monitor LCP to ensure it stays below 2.5s',
        'Consider further optimizations to reach <1.5s',
      ],
    };
  } else if (lcpValue <= 4000) {
    return {
      status: 'needs-improvement',
      message: `LCP is ${lcpValue}ms - Needs improvement`,
      recommendations: [
        'Reduce TTFB (Time to First Byte)',
        'Preload critical resources',
        'Optimize images (WebP/AVIF)',
        'Eliminate render-blocking resources',
        'Defer non-critical JavaScript',
      ],
    };
  } else {
    return {
      status: 'poor',
      message: `LCP is ${lcpValue}ms - Poor performance`,
      recommendations: [
        'Check TTFB (should be <600ms)',
        'Enable image optimization',
        'Implement critical CSS inlining',
        'Remove render-blocking scripts',
        'Use CDN for asset delivery',
        'Consider server-side rendering optimization',
      ],
    };
  }
}

/**
 * Optimizaciones específicas para Next.js LCP
 */
export const NEXTJS_LCP_OPTIMIZATIONS = {
  imageConfig: {
    // next.config.js
    images: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 31536000, // 1 year
    },
  },

  // Preload key assets
  preloadAssets: [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: true },
    { href: '/fonts/jetbrains-mono.woff2', as: 'font', type: 'font/woff2', crossOrigin: true },
  ],

  // Critical CSS to inline
  criticalCSS: CRITICAL_CSS,

  // Defer non-critical JS
  deferredScripts: [
    'analytics.js',
    'chatbot.js',
    'social-widgets.js',
  ],
};

export default {
  DEFAULT_LCP_CONFIG,
  generatePreloadLinks,
  getLCPImageProps,
  checkLCPStatus,
  NEXTJS_LCP_OPTIMIZATIONS,
};
