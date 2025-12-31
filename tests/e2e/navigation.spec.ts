import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages from header', async ({ page }) => {
    await page.goto('/');

    // Test Features navigation
    await page.click('text=Features');
    await expect(page).toHaveURL(/.*features/);
    await expect(page.locator('h1')).toBeVisible();

    // Test Pricing navigation
    await page.goto('/');
    await page.click('text=Pricing');
    await expect(page).toHaveURL(/.*pricing/);
    await expect(page.locator('h1')).toBeVisible();

    // Test Security navigation
    await page.goto('/');
    await page.click('text=Security');
    await expect(page).toHaveURL(/.*security/);
    await expect(page.locator('h1')).toBeVisible();

    // Test Contact navigation
    await page.goto('/');
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate using footer links', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Test footer links
    const privacyLink = page.locator('footer >> text=Privacy');
    await privacyLink.click();
    await expect(page).toHaveURL(/.*privacy/);
  });

  test('should return to home when clicking logo', async ({ page }) => {
    await page.goto('/features');
    await page.click('[href="/"]');
    await expect(page).toHaveURL('/');
  });
});
