import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.locator('input[name="name"], input[placeholder*="nombre" i]')).toBeVisible();
    await expect(page.locator('input[name="email"], input[type="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"], textarea[placeholder*="mensaje" i]')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    const submitButton = page.locator('button[type="submit"], button:has-text("Enviar")');
    await submitButton.click();

    // Check for HTML5 validation or custom error messages
    const nameInput = page.locator('input[name="name"], input[placeholder*="nombre" i]');
    const isInvalid = await nameInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });

  test('should accept valid input', async ({ page }) => {
    await page.fill('input[name="name"], input[placeholder*="nombre" i]', 'Test User');
    await page.fill('input[name="email"], input[type="email"]', 'test@example.com');
    await page.fill('textarea[name="message"], textarea[placeholder*="mensaje" i]', 'This is a test message');

    const nameInput = page.locator('input[name="name"], input[placeholder*="nombre" i]');
    const value = await nameInput.inputValue();
    expect(value).toBe('Test User');
  });

  test('should show contact information', async ({ page }) => {
    await expect(page.locator('text=/email|correo/i')).toBeVisible();
  });
});
