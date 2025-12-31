import { logger } from './logger';

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private readonly maxMetrics = 100;

  /**
   * Record a performance metric
   */
  recordMetric(name: string, value: number): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
    };

    this.metrics.push(metric);

    // Keep only recent metrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics.shift();
    }

    // Log slow operations
    if (value > 1000) {
      logger.warn(`Slow operation detected: ${name}`, { duration: value });
    }
  }

  /**
   * Get metrics by name
   */
  getMetrics(name?: string): PerformanceMetric[] {
    if (name) {
      return this.metrics.filter((m) => m.name === name);
    }
    return this.metrics;
  }

  /**
   * Get average metric value
   */
  getAverage(name: string): number {
    const filtered = this.metrics.filter((m) => m.name === name);
    if (filtered.length === 0) return 0;
    const sum = filtered.reduce((acc, m) => acc + m.value, 0);
    return sum / filtered.length;
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();

/**
 * Decorator for measuring function execution time
 */
export function measurePerformance(metricName: string) {
  return function (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: unknown[]) {
      const start = performance.now();
      try {
        const result = await originalMethod.apply(this, args);
        const duration = performance.now() - start;
        performanceMonitor.recordMetric(
          `${metricName}.${propertyKey}`,
          duration
        );
        return result;
      } catch (error) {
        const duration = performance.now() - start;
        performanceMonitor.recordMetric(
          `${metricName}.${propertyKey}.error`,
          duration
        );
        throw error;
      }
    };

    return descriptor;
  };
}

/**
 * Web Vitals reporting
 */
export function reportWebVitals(metric: {
  id: string;
  name: string;
  value: number;
}): void {
  logger.debug('Web Vital', {
    id: metric.id,
    name: metric.name,
    value: metric.value,
  });

  performanceMonitor.recordMetric(`webvital.${metric.name}`, metric.value);

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    // TODO: Send to analytics service
    // Example: posthog.capture('web_vital', metric);
  }
}