'use client';

import React from 'react';
import { EnterpriseBadge } from '@/components/ui/enterprise-badge';
import { motion } from 'framer-motion';

export default function EnterpriseBadgeShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black py-24">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,199,192,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto space-y-32 px-4">
        {/* Full Variant */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Full Variant</h1>
            <p className="text-gray-400 text-sm">Complete professional badge with all features</p>
          </motion.div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 backdrop-blur-md">
            <EnterpriseBadge variant="full" />
          </div>

          <div className="space-y-4 rounded-lg bg-gray-900/50 p-6 border border-white/10">
            <p className="text-sm font-mono text-gray-300">
              {'<EnterpriseBadge variant="full" />'}
            </p>
            <p className="text-xs text-gray-400">
              Best for: Hero sections, dedicated pages, comprehensive information display
            </p>
          </div>
        </section>

        {/* Minimal Variant */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Minimal Variant</h2>
            <p className="text-gray-400 text-sm">Compact horizontal layout for footers and sidebars</p>
          </motion.div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 backdrop-blur-md">
            <EnterpriseBadge variant="minimal" />
          </div>

          <div className="space-y-4 rounded-lg bg-gray-900/50 p-6 border border-white/10">
            <p className="text-sm font-mono text-gray-300">
              {'<EnterpriseBadge variant="minimal" />'}
            </p>
            <p className="text-xs text-gray-400">
              Best for: Footers, sidebars, compact sections, widgets
            </p>
          </div>
        </section>

        {/* Compact Variant */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Compact Variant</h2>
            <p className="text-gray-400 text-sm">Single card layout for tight spaces</p>
          </motion.div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 backdrop-blur-md">
            <div className="max-w-xs">
              <EnterpriseBadge variant="compact" />
            </div>
          </div>

          <div className="space-y-4 rounded-lg bg-gray-900/50 p-6 border border-white/10">
            <p className="text-sm font-mono text-gray-300">
              {'<EnterpriseBadge variant="compact" />'}
            </p>
            <p className="text-xs text-gray-400">
              Best for: Cards, widgets, tight spaces, sidebars
            </p>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Implementation Examples</h2>
            <p className="text-gray-400 text-sm">Common use cases and integration patterns</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Example 1: Footer */}
            <div className="space-y-4 rounded-lg bg-gray-900/50 p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Footer Integration</h3>
              <pre className="overflow-x-auto text-xs text-gray-300 bg-black/50 p-4 rounded">
                {`<footer className="bg-black py-12">
  <div className="container mx-auto">
    <EnterpriseBadge 
      variant="minimal" 
    />
  </div>
</footer>`}
              </pre>
            </div>

            {/* Example 2: Hero Section */}
            <div className="space-y-4 rounded-lg bg-gray-900/50 p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Hero Section</h3>
              <pre className="overflow-x-auto text-xs text-gray-300 bg-black/50 p-4 rounded">
                {`<section className="py-24">
  <div className="container mx-auto">
    <EnterpriseBadge 
      variant="full" 
    />
  </div>
</section>`}
              </pre>
            </div>

            {/* Example 3: With Custom Styling */}
            <div className="space-y-4 rounded-lg bg-gray-900/50 p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Custom Styling</h3>
              <pre className="overflow-x-auto text-xs text-gray-300 bg-black/50 p-4 rounded">
                {`<EnterpriseBadge 
  variant="full"
  className="
    bg-gradient-to-br 
    from-black to-gray-900 
    rounded-2xl p-8
  "
/>`}
              </pre>
            </div>

            {/* Example 4: Sidebar Widget */}
            <div className="space-y-4 rounded-lg bg-gray-900/50 p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Sidebar Widget</h3>
              <pre className="overflow-x-auto text-xs text-gray-300 bg-black/50 p-4 rounded">
                {`<aside className="w-80">
  <EnterpriseBadge 
    variant="compact" 
    className="mb-8"
  />
</aside>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Component Features</h2>
            <p className="text-gray-400 text-sm">What makes this component professional-grade</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '✨ Smooth Animations',
                description: 'Framer Motion powered transitions and hover effects',
              },
              {
                title: '🎨 3 Professional Variants',
                description: 'Full, Minimal, and Compact for different contexts',
              },
              {
                title: '📱 Fully Responsive',
                description: 'Mobile, tablet, and desktop optimized layouts',
              },
              {
                title: '🏆 Enterprise Focused',
                description: 'ISO 27001, SOC 2, GDPR, and SLA certifications',
              },
              {
                title: '♿ Accessible',
                description: 'WCAG 2.1 AA compliant with proper semantics',
              },
              {
                title: '🎯 Zero Dependencies (UI)',
                description: 'Only uses Framer Motion and Lucide icons',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="rounded-lg border border-white/10 bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-4 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-white mb-2 text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Documentation Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-4 py-12 border-t border-white/10"
        >
          <p className="text-gray-400 text-sm">For complete documentation and more examples:</p>
          <a
            href="/docs/enterprise-badge"
            className="inline-block px-6 py-3 rounded-lg bg-teal-500/20 border border-teal-500/50 text-teal-400 hover:bg-teal-500/30 transition-all duration-300 text-sm font-semibold"
          >
            Read Full Documentation →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
