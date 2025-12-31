import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');

    // Check home page
    await expect(page).toHaveTitle(/ComplianceFlow/);

    // Navigate to features
    await page.click('text=Características');
    await expect(page).toHaveURL(/.*features/);

    // Navigate to pricing
    await page.click('text=Precios');
    await expect(page).toHaveURL(/.*pricing/);

    // Navigate back to home
    await page.click('text=Inicio');
    await expect(page).toHaveURL(/.*\/$/);
  });

  test('should have working footer links', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check privacy policy link
    const privacyLink = page.locator('a[href*="privacy"]');
    await expect(privacyLink).toBeVisible();
  });

  test('mobile menu should work', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Open mobile menu
    const menuButton = page.locator('button[aria-label*="menu"]');
    if (await menuButton.isVisible()) {
      await menuButton.click();
      
      // Check if menu items are visible
      await expect(page.locator('text=Características')).toBeVisible();
    }
  });
});