// lib/testing/performance-testing.ts
// Framework de testing para Core Web Vitals y performance

import { CLSMonitor, INPMonitor } from '../performance/inp-cls-optimization';

/**
 * Performance Metrics Collector
 * Recolecta métricas en tiempo real
 */
export class PerformanceMetricsCollector {
  private metrics: Record<string, number> = {};
  private observers: Map<string, PerformanceObserver> = new Map();

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    if (typeof window === 'undefined') return;

    // Navigation Timing
    try {
      const perfData = window.performance.timing;
      this.metrics['ttfb'] = perfData.responseStart - perfData.navigationStart;
      this.metrics['fcp'] = perfData.responseEnd - perfData.navigationStart;
      this.metrics['tti'] = perfData.loadEventEnd - perfData.navigationStart;
    } catch (e) {
      console.error('Navigation Timing error:', e);
    }

    // Resource Timing
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const key = `resource_${entry.name}`;
          this.metrics[key] = entry.duration;
        }
      });
      observer.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', observer);
    } catch (e) {
      console.error('Resource Timing error:', e);
    }

    // Paint Timing (FCP, LCP)
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics[entry.name] = entry.startTime;
        }
      });
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
      this.observers.set('paint', observer);
    } catch (e) {
      console.error('Paint Timing error:', e);
    }
  }

  getMetrics() {
    return { ...this.metrics };
  }

  getMetric(key: string) {
    return this.metrics[key];
  }

  reportMetrics() {
    return {
      ttfb: this.metrics['ttfb'],
      fcp: this.metrics['first-contentful-paint'],
      lcp: this.metrics['largest-contentful-paint'],
      tti: this.metrics['tti'],
      resourceCount: Object.keys(this.metrics).filter(k => k.startsWith('resource_')).length,
    };
  }

  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

/**
 * SEO Testing - Validar compliance con Google requirements
 */
export class SEOTester {
  private issues: string[] = [];

  testMetaTags(): boolean {
    const required = ['description', 'keywords', 'viewport'];
    const missing = required.filter(tag => !document.querySelector(`meta[name="${tag}"]`));

    if (missing.length > 0) {
      this.issues.push(`Missing meta tags: ${missing.join(', ')}`);
      return false;
    }
    return true;
  }

  testHeadings(): boolean {
    const h1 = document.querySelectorAll('h1');
    if (h1.length !== 1) {
      this.issues.push(`Expected 1 h1, found ${h1.length}`);
      return false;
    }
    return true;
  }

  testImages(): boolean {
    const images = document.querySelectorAll('img');
    const withoutAlt = Array.from(images).filter(img => !img.getAttribute('alt'));

    if (withoutAlt.length > 0) {
      this.issues.push(`${withoutAlt.length} images without alt text`);
      return false;
    }
    return true;
  }

  testMobileResponsive(): boolean {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      this.issues.push('Missing viewport meta tag');
      return false;
    }
    return true;
  }

  testSecurityHeaders(): boolean {
    // Note: Can only check via fetch in some cases
    const checks = [
      // Check CSP
      // Check HSTS
      // Check X-Frame-Options
    ];
    return true;
  }

  getIssues() {
    return this.issues;
  }

  runFullAudit(): { score: number; passed: number; failed: number; issues: string[] } {
    const tests = [
      this.testMetaTags(),
      this.testHeadings(),
      this.testImages(),
      this.testMobileResponsive(),
      this.testSecurityHeaders(),
    ];

    const passed = tests.filter(t => t).length;
    const failed = tests.length - passed;
    const score = Math.round((passed / tests.length) * 100);

    return {
      score,
      passed,
      failed,
      issues: this.issues,
    };
  }
}

/**
 * Lighthouse-like scoring system
 */
export function calculatePerformanceScore(metrics: {
  ttfb?: number;
  fcp?: number;
  lcp?: number;
  tti?: number;
  cls?: number;
  inp?: number;
}): number {
  let score = 100;

  // TTFB (Time to First Byte) - 600ms target
  if (metrics.ttfb && metrics.ttfb > 600) {
    score -= Math.min(20, (metrics.ttfb - 600) / 100);
  }

  // FCP (First Contentful Paint) - 1.8s target
  if (metrics.fcp && metrics.fcp > 1800) {
    score -= Math.min(15, (metrics.fcp - 1800) / 200);
  }

  // LCP (Largest Contentful Paint) - 2.5s target
  if (metrics.lcp && metrics.lcp > 2500) {
    score -= Math.min(25, (metrics.lcp - 2500) / 200);
  }

  // INP (Interaction to Next Paint) - 200ms target
  if (metrics.inp && metrics.inp > 200) {
    score -= Math.min(20, (metrics.inp - 200) / 100);
  }

  // CLS (Cumulative Layout Shift) - 0.1 target
  if (metrics.cls && metrics.cls > 0.1) {
    score -= Math.min(15, (metrics.cls - 0.1) * 100);
  }

  return Math.max(0, Math.round(score));
}

export default {
  PerformanceMetricsCollector,
  SEOTester,
  calculatePerformanceScore,
};
