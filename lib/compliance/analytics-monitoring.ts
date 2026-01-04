// lib/compliance/analytics-monitoring.ts
// Google Analytics 4, Core Web Vitals tracking, y monitoring completo

/**
 * Core Web Vitals Reporter
 * Envía métricas a Google Analytics y servidor
 */
export class WebVitalsReporter {
  private metricsQueue: any[] = [];
  private batchSize = 5;

  /**
   * Reportar LCP (Largest Contentful Paint)
   */
  reportLCP(value: number): void {
    this.addMetric({
      name: 'LCP',
      value: Math.round(value),
      rating: this.getRating('LCP', value),
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Reportar INP (Interaction to Next Paint)
   */
  reportINP(value: number): void {
    this.addMetric({
      name: 'INP',
      value: Math.round(value),
      rating: this.getRating('INP', value),
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Reportar CLS (Cumulative Layout Shift)
   */
  reportCLS(value: number): void {
    this.addMetric({
      name: 'CLS',
      value: Math.round(value * 1000) / 1000, // 3 decimales
      rating: this.getRating('CLS', value),
      timestamp: new Date().toISOString(),
    });
  }

  private getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = {
      LCP: { good: 2500, poor: 4000 },
      INP: { good: 200, poor: 500 },
      CLS: { good: 0.1, poor: 0.25 },
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  private addMetric(metric: any): void {
    this.metricsQueue.push(metric);

    // Auto-send cuando se alcanza batch size
    if (this.metricsQueue.length >= this.batchSize) {
      this.sendMetrics();
    }
  }

  /**
   * Enviar métricas a Google Analytics
   */
  private sendMetrics(): void {
    if (typeof window === 'undefined' || !window.gtag) return;

    this.metricsQueue.forEach(metric => {
      gtag('event', 'web_vitals', {
        metric_id: metric.name,
        metric_value: metric.value,
        metric_rating: metric.rating,
        metric_delta: metric.value, // Para incrementales
      });
    });

    // Enviar también al servidor si es necesario
    this.sendToServer();

    // Limpiar queue
    this.metricsQueue = [];
  }

  private sendToServer(): void {
    // POST a tu endpoint /api/metrics
    const payload = {
      metrics: this.metricsQueue,
      url: typeof window !== 'undefined' ? window.location.href : '',
      timestamp: new Date().toISOString(),
    };

    if (typeof fetch !== 'undefined') {
      fetch('/api/metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true, // Important para no perder datos on page unload
      }).catch(e => console.error('Failed to send metrics:', e));
    }
  }

  /**
   * Forzar envío antes de descargar página
   */
  flushOnUnload(): void {
    if (typeof window === 'undefined') return;
    window.addEventListener('unload', () => this.sendMetrics());
  }
}

/**
 * Conversion Tracking
 * Rastrear eventos importantes (registros, compras, suscripciones)
 */
export class ConversionTracker {
  /**
   * Trackear conversión de registro
   */
  trackSignup(userId: string, method: string = 'form'): void {
    if (typeof window !== 'undefined' && window.gtag) {
      gtag('event', 'sign_up', {
        method: method,
        user_id: userId,
      });
    }
  }

  /**
   * Trackear añadir a carrito (ecommerce)
   */
  trackAddToCart(items: Array<{ id: string; price: number; quantity: number }>): void {
    if (typeof window !== 'undefined' && window.gtag) {
      gtag('event', 'add_to_cart', {
        items: items.map(item => ({
          item_id: item.id,
          price: item.price,
          quantity: item.quantity,
        })),
      });
    }
  }

  /**
   * Trackear compra
   */
  trackPurchase(
    transactionId: string,
    value: number,
    currency: string = 'EUR',
    items: any[] = []
  ): void {
    if (typeof window !== 'undefined' && window.gtag) {
      gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency,
        items: items,
      });
    }
  }

  /**
   * Trackear scroll depth
   */
  trackScrollDepth(): void {
    if (typeof window === 'undefined') return;

    const checkScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 25 && scrollPercentage <= 50) {
        gtag('event', 'scroll_depth', { depth: '25' });
      } else if (scrollPercentage > 50 && scrollPercentage <= 75) {
        gtag('event', 'scroll_depth', { depth: '50' });
      } else if (scrollPercentage > 75) {
        gtag('event', 'scroll_depth', { depth: '75' });
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
  }

  /**
   * Trackear tiempo en página
   */
  trackTimeOnPage(): void {
    if (typeof window === 'undefined') return;

    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      gtag('event', 'page_view_duration', {
        duration_seconds: timeOnPage,
      });
    });
  }
}

/**
 * Error Tracking & Crash Reporting
 */
export class ErrorTracker {
  /**
   * Capturar errores globales
   */
  static setupGlobalErrorHandler(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (event: ErrorEvent) => {
      ErrorTracker.reportError({
        type: 'uncaught_exception',
        message: event.message,
        source: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
      });
    });

    window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
      ErrorTracker.reportError({
        type: 'unhandled_rejection',
        message: String(event.reason),
        stack: event.reason?.stack,
      });
    });
  }

  /**
   * Reportar error a backend
   */
  private static reportError(error: any): void {
    const payload = {
      ...error,
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      timestamp: new Date().toISOString(),
    };

    if (typeof fetch !== 'undefined') {
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(e => console.error('Failed to report error:', e));
    }

    // También enviar a Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      gtag('event', 'exception', {
        description: error.message,
        fatal: error.type === 'uncaught_exception',
      });
    }
  }
}

/**
 * Session Replay (para debugging)
 * Graba sesiones de usuario para análisis
 */
export class SessionRecorder {
  private recordingEnabled = false;

  /**
   * Iniciar grabación de sesión
   * Nota: Requiere librería como rrweb o Clarity
   */
  startRecording(): void {
    if (typeof window === 'undefined') return;

    // Placeholder para integración con Microsoft Clarity o similar
    console.log('Session recording started - integrate with rrweb or Clarity');

    this.recordingEnabled = true;
  }

  /**
   * Parar grabación
   */
  stopRecording(): void {
    this.recordingEnabled = false;
  }
}

export default {
  WebVitalsReporter,
  ConversionTracker,
  ErrorTracker,
  SessionRecorder,
};
