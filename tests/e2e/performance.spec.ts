import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('should load home page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have good Core Web Vitals', async ({ page }) => {
    await page.goto('/');

    // Measure LCP (Largest Contentful Paint)
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.renderTime || lastEntry.loadTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        setTimeout(() => resolve(0), 5000);
      });
    });

    // LCP should be under 2.5 seconds (good)
    expect(Number(lcp)).toBeLessThan(2500);
  });

  test('should lazy load images', async ({ page }) => {
    await page.goto('/');

    // Check if images have loading="lazy" attribute
    const images = await page.locator('img[loading="lazy"]').count();
    expect(images).toBeGreaterThan(0);
  });

  test('should minimize JavaScript bundle size', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    // Check for chunked JS files
    const jsRequests = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter((r: any) => r.name.includes('.js'))
        .map((r: any) => r.transferSize);
    });

    // Total JS should be reasonable (under 500KB)
    const totalJsSize = jsRequests.reduce((a: number, b: number) => a + b, 0);
    expect(totalJsSize).toBeLessThan(500000);
  });

  test('should use caching headers', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();
    
    // Should have cache-control header
    expect(headers).toHaveProperty('cache-control');
  });

  test('should not have render-blocking resources', async ({ page }) => {
    await page.goto('/');

    // Check for async/defer scripts
    const blockingScripts = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script'));
      return scripts.filter(s => !s.async && !s.defer && s.src).length;
    });

    expect(blockingScripts).toBeLessThanOrEqual(2);
  });
});
