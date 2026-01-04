import { MetadataRoute } from 'next'

// ============================================================================
// STATIC PAGES
// ============================================================================

const staticPages = [
  {
    url: '',
    priority: 1.0,
    changeFrequency: 'daily' as const,
  },
  {
    url: '/pricing',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/docs',
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/blog',
    priority: 0.8,
    changeFrequency: 'daily' as const,
  },
  {
    url: '/use-cases',
    priority: 0.7,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/contact',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/about',
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/privacy',
    priority: 0.4,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/terms',
    priority: 0.4,
    changeFrequency: 'monthly' as const,
  },
]

// ============================================================================
// BLOG POSTS
// ============================================================================

const blogPosts = [
  {
    slug: 'guia-integracion-sii',
    lastModified: '2026-01-04',
    priority: 0.8,
  },
  {
    slug: 'verifactu-que-es',
    lastModified: '2026-01-03',
    priority: 0.7,
  },
  {
    slug: 'ticketbai-pais-vasco',
    lastModified: '2026-01-02',
    priority: 0.7,
  },
  {
    slug: 'api-rest-vs-soap',
    lastModified: '2026-01-01',
    priority: 0.6,
  },
]

// ============================================================================
// DOCUMENTATION PAGES
// ============================================================================

const docPages = [
  'getting-started',
  'authentication',
  'api-reference',
  'sii-integration',
  'verifactu-integration',
  'ticketbai-integration',
  'webhooks',
  'errors',
  'rate-limits',
  'changelog',
]

// ============================================================================
// SITEMAP GENERATOR
// ============================================================================

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://complianceflow.es'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Blog posts
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: post.priority,
  }))

  // Documentation
  const docUrls = docPages.map((page) => ({
    url: `${baseUrl}/docs/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...blogUrls, ...docUrls]
}
