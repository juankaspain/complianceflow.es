import { test, expect } from '@playwright/test';

test.describe('Pricing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test('should display all pricing plans', async ({ page }) => {
    // Should have at least 3 pricing cards
    const pricingCards = page.locator('[class*="pricing"], article, [class*="card"]');
    const count = await pricingCards.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('should display prices in euros', async ({ page }) => {
    await expect(page.locator('text=/€/').first()).toBeVisible();
  });

  test('should have CTA buttons for each plan', async ({ page }) => {
    const ctaButtons = page.locator('a:has-text("Comenzar"), a:has-text("Get Started"), a:has-text("Contactar")');
    const count = await ctaButtons.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('should highlight most popular plan', async ({ page }) => {
    const popularBadge = page.locator('text=/popular|recomendado/i');
    await expect(popularBadge.first()).toBeVisible();
  });

  test('should show FAQ section', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const faqSection = page.locator('text=/faq|preguntas/i');
    await expect(faqSection.first()).toBeVisible();
  });
});
