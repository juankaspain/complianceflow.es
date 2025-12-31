import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  const pages = [
    { name: 'Home', url: '/', title: 'ComplianceFlow' },
    { name: 'Features', url: '/features', title: 'Features' },
    { name: 'Pricing', url: '/pricing', title: 'Pricing' },
    { name: 'Contact', url: '/contact', title: 'Contact' },
  ];

  for (const { name, url, title } of pages) {
    test(`${name} page should have proper meta tags`, async ({ page }) => {
      await page.goto(url);

      // Check title
      await expect(page).toHaveTitle(new RegExp(title, 'i'));

      // Check meta description
      const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
      expect(metaDescription).toBeTruthy();
      expect(metaDescription!.length).toBeGreaterThan(50);
      expect(metaDescription!.length).toBeLessThan(160);

      // Check Open Graph tags
      const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
      expect(ogTitle).toBeTruthy();

      const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
      expect(ogDescription).toBeTruthy();

      // Check canonical URL
      const canonical = page.locator('link[rel="canonical"]');
      const canonicalHref = await canonical.getAttribute('href');
      expect(canonicalHref).toBeTruthy();
    });
  }

  test('should have structured data', async ({ page }) => {
    await page.goto('/');

    const structuredData = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      return scripts.map(s => s.textContent);
    });

    expect(structuredData.length).toBeGreaterThan(0);
  });

  test('should have robots meta tag', async ({ page }) => {
    await page.goto('/');
    
    const robotsMeta = await page.locator('meta[name="robots"]').getAttribute('content');
    expect(robotsMeta).toBeTruthy();
    expect(robotsMeta).toContain('index');
  });

  test('should have sitemap.xml', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);
    
    const body = await response.text();
    expect(body).toContain('<?xml');
    expect(body).toContain('<urlset');
  });

  test('should have robots.txt', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
    
    const body = await response.text();
    expect(body).toContain('User-agent');
  });
});
