'use client';

import React from 'react';
import { EnterpriseBadge } from '@/components/ui/enterprise-badge';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function EnterpriseBadgeShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900/30 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,199,192,0.08),transparent_60%)]" />
        <div className="absolute top-0 -right-1/2 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto space-y-20 px-4 py-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Enterprise Badge Component
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional showcasing ComplianceFlow certifications and enterprise features
          </p>
        </motion.section>

        {/* Full Variant */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-teal-400" />
              Full Variant
            </h2>
            <p className="text-gray-400 text-sm">
              Complete badge with all features for hero sections
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-8 sm:p-12 backdrop-blur-sm">
            <EnterpriseBadge variant="full" />
          </div>

          <div className="flex gap-4 pt-4">
            <code className="text-sm text-gray-300 bg-gray-900/50 px-3 py-2 rounded border border-white/10 flex-1 font-mono">
              enterpriseBadge variant="full"
            </code>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Minimal Variant */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              Minimal Variant
            </h2>
            <p className="text-gray-400 text-sm">
              Compact layout for footers and headers
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8 backdrop-blur-sm">
              <EnterpriseBadge variant="minimal" />
            </div>
            <div className="space-y-3 px-4 py-4">
              <p className="text-gray-300 text-sm font-semibold">Perfect for:</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Footer sections</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Navigation bars</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>About pages</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Compact Variant */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Compact Variant
            </h2>
            <p className="text-gray-400 text-sm">
              Single card for widgets and sidebars
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8 backdrop-blur-sm max-w-sm">
              <EnterpriseBadge variant="compact" />
            </div>
            <div className="space-y-3 px-4 py-4">
              <p className="text-gray-300 text-sm font-semibold">Best for:</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Sidebar widgets</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Card layouts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Mobile views</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-6 pt-12 border-t border-white/10"
        >
          <h2 className="text-2xl font-bold text-white">Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '✨', title: 'Smooth Animations', desc: 'Framer Motion' },
              { icon: '📱', title: 'Responsive', desc: 'All devices' },
              { icon: '🎨', title: '3 Variants', desc: 'Different uses' },
              { icon: '♿', title: 'Accessible', desc: 'WCAG 2.1' },
              { icon: '⚡', title: 'Performance', desc: '60fps' },
              { icon: '🔒', title: 'Enterprise', desc: 'Security' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-white/10 bg-white/4 p-4 backdrop-blur-sm"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
