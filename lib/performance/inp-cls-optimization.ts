// lib/performance/inp-cls-optimization.ts
// Optimizaciones para INP (Interaction to Next Paint) < 100ms y CLS < 0.05

/**
 * INP - Interaction to Next Paint Optimization
 * Target: < 200ms (good), < 100ms (excellent)
 */
export interface INPOptimization {
  // Reducir JavaScript execution
  codeSpliitting: boolean;
  asyncScripts: boolean;
  webWorkers: boolean;

  // Event Handler Optimization
  eventDelegation: boolean;
  debouncing: boolean;

  // Main Thread Optimization
  longTaskBreaking: boolean;
  requestIdleCallback: boolean;
}

export const DEFAULT_INP_CONFIG: INPOptimization = {
  codeSpliitting: true,
  asyncScripts: true,
  webWorkers: true,
  eventDelegation: true,
  debouncing: true,
  longTaskBreaking: true,
  requestIdleCallback: true,
};

/**
 * Utility para quebrantar long tasks
 */
export function breakLongTasks(callback: () => void, chunkSize: number = 5): void {
  let count = 0;

  function scheduleChunk() {
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => {
        callback();
        count++;
        if (count < chunkSize) scheduleChunk();
      });
    } else {
      setTimeout(() => {
        callback();
        count++;
        if (count < chunkSize) scheduleChunk();
      }, 0);
    }
  }

  scheduleChunk();
}

/**
 * Debounce helper para event handlers
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Event delegation helper
 */
export function delegateEvent(
  parent: Element,
  selector: string,
  event: string,
  handler: (e: Event) => void
): void {
  parent.addEventListener(event, (e) => {
    const target = e.target as Element;
    if (target?.matches(selector)) {
      handler(e);
    }
  });
}

/**
 * CLS - Cumulative Layout Shift Optimization
 * Target: < 0.1 (good), < 0.05 (excellent)
 */
export interface CLSOptimization {
  // Prevenir layout shift
  sizeAttributes: boolean; // width, height en images/videos
  reserveSpace: boolean; // Ads, embeds
  avoidTopInserts: boolean; // Prevenir content insert above

  // Transform-based animations
  preferTransform: boolean; // transform vs top/left/position

  // Font loading
  fontDisplay: 'swap' | 'optional' | 'fallback';
}

export const DEFAULT_CLS_CONFIG: CLSOptimization = {
  sizeAttributes: true,
  reserveSpace: true,
  avoidTopInserts: true,
  preferTransform: true,
  fontDisplay: 'swap',
};

/**
 * Best Practices para CLS
 */
export const CLS_BEST_PRACTICES = {
  // Always set width/height or use aspect-ratio
  imageAttributes: {
    width: '100%',
    height: 'auto',
    style: 'aspect-ratio: auto;',
  },

  // Reserve space para elementos dinámicos
  skeletonLoading: {
    display: 'block',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    animation: 'pulse 2s infinite',
  },

  // Font loading strategy
  fontDisplay: 'swap', // Mostrar fallback inmediatamente

  // Animations (use transform not position)
  animation: {
    // ❌ WRONG: top, left, position, width, height
    // ✅ CORRECT: transform, opacity
  },
};

/**
 * Monitorear CLS en tiempo real
 */
export class CLSMonitor {
  private clsValue = 0;
  private clsEntries: PerformanceEntry[] = [];

  constructor() {
    this.observe();
  }

  private observe(): void {
    if (typeof window === 'undefined') return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            this.clsValue += (entry as any).value;
            this.clsEntries.push(entry);

            // Alert if CLS is poor
            if (this.clsValue > 0.25) {
              console.warn('⚠️ CLS is poor:', this.clsValue);
              this.reportIssue('CLS_POOR', this.clsValue);
            }
          }
        }
      });

      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (error) {
      console.error('CLSMonitor error:', error);
    }
  }

  private reportIssue(type: string, value: number): void {
    // Send to analytics or server
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vital_issue', {
        metric: type,
        value: Math.round(value * 1000) / 1000,
      });
    }
  }

  getCLS(): number {
    return this.clsValue;
  }

  getStatus(): 'good' | 'needs-improvement' | 'poor' {
    if (this.clsValue < 0.1) return 'good';
    if (this.clsValue < 0.25) return 'needs-improvement';
    return 'poor';
  }
}

/**
 * Monitorear INP en tiempo real
 */
export class INPMonitor {
  private inpValue = 0;
  private interactions: PerformanceEntry[] = [];

  constructor() {
    this.observe();
  }

  private observe(): void {
    if (typeof window === 'undefined') return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();

        entries.forEach((entry: any) => {
          if (entry.interactionID) {
            this.interactions.push(entry);

            // Get max interaction duration
            const duration = entry.duration;
            if (duration > this.inpValue) {
              this.inpValue = duration;
            }

            // Alert if INP is poor
            if (this.inpValue > 500) {
              console.warn('⚠️ INP is poor:', this.inpValue);
              this.reportIssue('INP_POOR', this.inpValue);
            }
          }
        });
      });

      observer.observe({ type: 'event', buffered: true });
    } catch (error) {
      console.error('INPMonitor error:', error);
    }
  }

  private reportIssue(type: string, value: number): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vital_issue', {
        metric: type,
        value: Math.round(value),
      });
    }
  }

  getINP(): number {
    return this.inpValue;
  }

  getStatus(): 'good' | 'needs-improvement' | 'poor' {
    if (this.inpValue < 200) return 'good';
    if (this.inpValue < 500) return 'needs-improvement';
    return 'poor';
  }
}

export default {
  DEFAULT_INP_CONFIG,
  DEFAULT_CLS_CONFIG,
  breakLongTasks,
  debounce,
  delegateEvent,
  CLSMonitor,
  INPMonitor,
};
