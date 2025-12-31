# 🎆 Enterprise Badge Component - Real World Examples

## Quick Start

```tsx
import { EnterpriseBadge } from '@/components/ui/enterprise-badge';

// Use immediately in your components
<EnterpriseBadge variant="full" />
```

## Example 1: Full Page Hero Section

```tsx
'use client';

import { EnterpriseBadge } from '@/components/ui/enterprise-badge';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black py-24">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,199,192,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <EnterpriseBadge variant="full" />
      </div>
    </section>
  );
}
```

## Example 2: Footer with Enterprise Badge

```tsx
'use client';

import { EnterpriseBadge } from '@/components/ui/enterprise-badge';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left: Enterprise badge */}
          <div>
            <EnterpriseBadge variant="minimal" />
          </div>

          {/* Right: Footer links */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-teal-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-teal-400 transition">About</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-teal-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">DPA</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 ComplianceFlow. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## Example 3: About Page Section

```tsx
'use client';

import { EnterpriseBadge } from '@/components/ui/enterprise-badge';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            About ComplianceFlow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            Leading enterprise compliance infrastructure
          </motion.p>
        </div>
      </section>

      {/* Enterprise Badge Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <EnterpriseBadge variant="full" />
        </div>
      </section>

      {/* Additional content */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-gray-400 max-w-3xl">
            We empower organizations to achieve and maintain compliance with the
            most demanding regulatory requirements worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
```

## Example 4: Sidebar Widget

```tsx
'use client';

import { EnterpriseBadge } from '@/components/ui/enterprise-badge';

export default function DocsSidebar() {
  return (
    <div className="flex gap-8">
      {/* Main content */}
      <main className="flex-1">
        {/* Your page content here */}
      </main>

      {/* Sidebar */}
      <aside className="w-80 space-y-8 sticky top-20 h-fit">
        {/* Compact enterprise badge */}
        <EnterpriseBadge variant="compact" />

        {/* Other sidebar content */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Examples</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
```

## Example 5: Marketing Page Landing

```tsx
'use client';

import { EnterpriseBadge } from '@/components/ui/enterprise-badge';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Enterprise Badge Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(88,199,192,0.1),transparent_60%)]" />

        <div className="container mx-auto px-4">
          <EnterpriseBadge variant="full" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to get started?
          </h2>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition"
            >
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose ComplianceFlow?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Enterprise-Grade Security',
              'Global Compliance Support',
              '99.99% Uptime SLA',
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3 items-start"
              >
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

## Example 6: Dashboard Widget

```tsx
'use client';

import { EnterpriseBadge } from '@/components/ui/enterprise-badge';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          {/* Your dashboard content here */}
        </div>

        {/* Right sidebar with Enterprise Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <EnterpriseBadge variant="compact" />
          </div>

          {/* Additional widgets */}
        </motion.div>
      </div>
    </div>
  );
}
```

## Styling Customization

### Dark Background
```tsx
<div className="bg-black/80 backdrop-blur-md">
  <EnterpriseBadge variant="full" />
</div>
```

### With Custom Padding
```tsx
<EnterpriseBadge 
  variant="full" 
  className="px-8 py-12 lg:px-16 lg:py-20"
/>
```

### Full Width Container
```tsx
<section className="w-full bg-black">
  <div className="container mx-auto">
    <EnterpriseBadge variant="full" />
  </div>
</section>
```

## Responsive Behavior

The component automatically adapts:

```tsx
// Mobile: 2-column grid
// Tablet: 4-column grid  
// Desktop: Full responsive layout

<EnterpriseBadge variant="full" />
```

## Performance Tips

1. **Lazy load** the component when below the fold
2. **Use variant="compact"** for sidebar/widget contexts to reduce animation overhead
3. **Wrap in Suspense** for better perceived performance

```tsx
import { Suspense } from 'react';

<Suspense fallback={<div className="h-64" />}>
  <EnterpriseBadge variant="full" />
</Suspense>
```

## Integration Checklist

- [x] Import component: `import { EnterpriseBadge } from '@/components/ui/enterprise-badge'`
- [x] Choose variant: `full`, `minimal`, or `compact`
- [x] Optional: Add custom className
- [x] Test on mobile/tablet/desktop
- [x] Verify animations work
- [x] Check color contrast for accessibility

---

**Pro Tip:** The component is optimized for dark backgrounds. For light backgrounds, adjust the color values in the component file.

For full documentation, see: [ENTERPRISE_BADGE_GUIDE.md](./ENTERPRISE_BADGE_GUIDE.md)
