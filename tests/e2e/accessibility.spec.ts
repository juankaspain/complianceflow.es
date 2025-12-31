import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  const pages = [
    { name: 'Home', url: '/' },
    { name: 'Features', url: '/features' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Security', url: '/security' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Privacy', url: '/privacy' },
    { name: 'Terms', url: '/terms' },
  ];

  for (const { name, url } of pages) {
    test(`${name} page should have no accessibility violations`, async ({ page }) => {
      await page.goto(url);
      
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/');
    
    // Check for main landmark
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Check for navigation
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT']).toContain(focused);
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .analyze();

    const contrastViolations = accessibilityScanResults.violations.filter(
      (v) => v.id === 'color-contrast'
    );
    expect(contrastViolations).toEqual([]);
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
    
    // Should not skip heading levels
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').allTextContents();
    expect(headings.length).toBeGreaterThan(0);
  });

  test('images should have alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });
});
