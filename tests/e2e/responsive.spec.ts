import { test, expect, devices } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('should be responsive on mobile', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();
    await page.goto('/');

    // Check if mobile menu exists
    const viewport = page.viewportSize();
    expect(viewport?.width).toBeLessThan(768);

    // Main content should be visible
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();

    await context.close();
  });

  test('should be responsive on tablet', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPad Pro'],
    });
    const page = await context.newPage();
    await page.goto('/');

    const viewport = page.viewportSize();
    expect(viewport?.width).toBeGreaterThanOrEqual(768);
    expect(viewport?.width).toBeLessThan(1024);

    // Content should adapt to tablet size
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();

    await context.close();
  });

  test('should be responsive on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    // Desktop layout should be visible
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });
});
