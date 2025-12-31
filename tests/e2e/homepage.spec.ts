import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/ComplianceFlow/);
  });

  test('should render hero section with CTA', async ({ page }) => {
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();

    // Check for CTA button
    const ctaButton = page.locator('a:has-text("Comenzar"), a:has-text("Get Started")');
    await expect(ctaButton.first()).toBeVisible();
  });

  test('should have working CTA button', async ({ page }) => {
    const ctaButton = page.locator('a:has-text("Comenzar"), a:has-text("Get Started")').first();
    await ctaButton.click();
    // Should navigate to signup or contact
    await expect(page).toHaveURL(/contact|signup|pricing/);
  });

  test('should display features section', async ({ page }) => {
    const featuresSection = page.locator('text=/features|características/i');
    await expect(featuresSection.first()).toBeVisible();
  });

  test('should scroll smoothly to sections', async ({ page }) => {
    const initialY = await page.evaluate(() => window.scrollY);
    await page.evaluate(() => window.scrollTo({ top: 1000, behavior: 'smooth' }));
    await page.waitForTimeout(500);
    const newY = await page.evaluate(() => window.scrollY);
    expect(newY).toBeGreaterThan(initialY);
  });
});
