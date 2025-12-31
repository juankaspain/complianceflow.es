#!/usr/bin/env node

/**
 * Generate sitemap.xml for ComplianceFlow
 * Run with: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://complianceflow.netlify.app';

// Static pages
const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/features', priority: 0.8, changefreq: 'weekly' },
  { url: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { url: '/about', priority: 0.6, changefreq: 'monthly' },
  { url: '/contact', priority: 0.6, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.4, changefreq: 'yearly' },
  { url: '/terms', priority: 0.4, changefreq: 'yearly' },
  { url: '/cookies', priority: 0.4, changefreq: 'yearly' },
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log('✅ Sitemap generated at:', outputPath);
}

generateSitemap();