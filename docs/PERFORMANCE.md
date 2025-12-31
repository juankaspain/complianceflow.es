# Performance Optimization Guide

## Overview

ComplianceFlow is optimized for maximum performance. This guide explains our performance strategies and best practices.

## Core Web Vitals Targets

| Metric | Target | Current |
|--------|--------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | ~1.8s |
| FID (First Input Delay) | < 100ms | ~50ms |
| CLS (Cumulative Layout Shift) | < 0.1 | ~0.05 |
| FCP (First Contentful Paint) | < 1.8s | ~1.2s |
| TTI (Time to Interactive) | < 3.8s | ~2.5s |

## Optimization Strategies

### 1. Code Splitting

**Route-based splitting**:
```typescript
// Automatic with Next.js App Router
app/
  page.tsx       // Main bundle
  about/
    page.tsx     // About bundle
  dashboard/
    page.tsx     // Dashboard bundle
```

**Component lazy loading**:
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Loading />,
  ssr: false, // If not needed on server
});
```

### 2. Image Optimization

**Use Next.js Image component**:
```typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // For above-the-fold images
  quality={85}
  placeholder="blur"
/>
```

**Image formats**:
- AVIF (best compression)
- WebP (good compatibility)
- JPEG/PNG (fallback)

### 3. Caching Strategy

**Static assets** (1 year):
```javascript
// next.config.js
headers: [
  {
    source: '/images/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      },
    ],
  },
]
```

**API responses** (5 minutes):
```typescript
import { cache } from '@/lib/cache';

const data = await apiClient.get('/endpoint', {
  cache: true,
  cacheTTL: 300000, // 5 minutes
});
```

**Browser caching**:
```typescript
import { storageCache } from '@/lib/cache';

// Cache for 24 hours
storageCache.set('user-preferences', data, 86400000);
```

### 4. Bundle Size Optimization

**Analyze bundle**:
```bash
npm run analyze
```

**Tree shaking**:
```typescript
// ✅ Good - imports only what's needed
import { Button } from '@/components/ui/button';

// ❌ Bad - imports entire library
import * as Components from '@/components';
```

**Dynamic imports**:
```typescript
// Heavy libraries
const Chart = dynamic(() => import('chart.js'), {
  ssr: false,
});
```

### 5. Rendering Strategies

**Static Site Generation (SSG)**:
```typescript
// For pages that can be pre-rendered
export async function generateStaticParams() {
  return [{ slug: 'page-1' }, { slug: 'page-2' }];
}
```

**Server-Side Rendering (SSR)**:
```typescript
// For pages that need real-time data
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

**Incremental Static Regeneration (ISR)**:
```typescript
export const revalidate = 3600; // Revalidate every hour
```

### 6. Font Optimization

**Use next/font**:
```typescript
import { Inter } from 'next/font/inter';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
```

**Subset fonts**:
```typescript
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
```

### 7. Resource Hints

**Preconnect to external domains**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://api.example.com" />
```

**Prefetch critical resources**:
```typescript
<link rel="prefetch" href="/critical-data.json" />
```

### 8. JavaScript Optimization

**Minimize re-renders**:
```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* ... */}</div>;
});

// Use useMemo for expensive calculations
const result = useMemo(() => expensiveCalculation(data), [data]);

// Use useCallback for stable function references
const handleClick = useCallback(() => {
  // ...
}, []);
```

**Avoid layout shifts**:
```typescript
// Specify dimensions for images and containers
<div style={{ width: '300px', height: '200px' }}>
  <Image src="/image.jpg" width={300} height={200} />
</div>
```

### 9. API Optimization

**Pagination**:
```typescript
const { data } = await apiClient.get('/items', {
  params: { page: 1, limit: 20 },
});
```

**Batching requests**:
```typescript
const [users, posts, comments] = await Promise.all([
  apiClient.get('/users'),
  apiClient.get('/posts'),
  apiClient.get('/comments'),
]);
```

**Request deduplication**:
```typescript
import { memoize } from '@/lib/cache';

const getUser = memoize(async (id: string) => {
  return apiClient.get(`/users/${id}`);
});
```

### 10. CSS Optimization

**Critical CSS**:
```typescript
// Inline critical CSS in head
<style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
```

**CSS modules**:
```typescript
import styles from './Component.module.css';

<div className={styles.container}>
```

**Tailwind purging**:
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // Automatically purges unused styles
};
```

## Performance Monitoring

### Real User Monitoring (RUM)

```typescript
import { reportWebVitals } from '@/lib/monitoring';

export function reportWebVitals(metric) {
  // Send to analytics
  console.log(metric);
}
```

### Lighthouse CI

```bash
# Run Lighthouse audit
npm run lighthouse
```

### Performance budgets

```javascript
// lighthouserc.json
{
  "ci": {
    "assert": {
      "assertions": {
        "first-contentful-paint": ["error", { "maxNumericValue": 2000 }],
        "interactive": ["error", { "maxNumericValue": 3800 }],
        "speed-index": ["error", { "maxNumericValue": 3400 }]
      }
    }
  }
}
```

## Performance Checklist

- [ ] Images optimized and using next/image
- [ ] Code split by routes
- [ ] Heavy components lazy loaded
- [ ] Fonts optimized with next/font
- [ ] CSS purged and minified
- [ ] API responses cached
- [ ] No unnecessary re-renders
- [ ] Bundle size < 200KB (initial)
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals in green

## Tools

- **Chrome DevTools**: Performance profiling
- **Lighthouse**: Audits and recommendations
- **WebPageTest**: Real-world performance testing
- **Bundle Analyzer**: Visualize bundle composition
- **React DevTools Profiler**: Component rendering analysis

## Best Practices

1. **Measure first**: Use tools to identify bottlenecks
2. **Optimize iteratively**: Focus on biggest impacts
3. **Monitor continuously**: Set up performance tracking
4. **Set budgets**: Define and enforce performance budgets
5. **Test on real devices**: Mobile performance matters

## Resources

- [web.dev/vitals](https://web.dev/vitals)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Chrome DevTools Guide](https://developers.google.com/web/tools/chrome-devtools)
