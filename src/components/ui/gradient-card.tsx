'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientCardProps {
  children: ReactNode
  className?: string
  gradient?: 'purple' | 'blue' | 'green' | 'orange'
  hover?: boolean
}

const gradients = {
  purple: 'from-purple-500/10 via-indigo-500/10 to-blue-500/10',
  blue: 'from-blue-500/10 via-cyan-500/10 to-teal-500/10',
  green: 'from-green-500/10 via-emerald-500/10 to-teal-500/10',
  orange: 'from-orange-500/10 via-red-500/10 to-pink-500/10',
}

const borders = {
  purple: 'from-purple-500 via-indigo-500 to-blue-500',
  blue: 'from-blue-500 via-cyan-500 to-teal-500',
  green: 'from-green-500 via-emerald-500 to-teal-500',
  orange: 'from-orange-500 via-red-500 to-pink-500',
}

export function GradientCard({
  children,
  className,
  gradient = 'purple',
  hover = true,
}: GradientCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.2 }}
      className={cn('relative group', className)}
    >
      {/* Gradient border */}
      <div
        className={cn(
          'absolute -inset-0.5 bg-gradient-to-r rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300',
          borders[gradient]
        )}
      />

      {/* Card content */}
      <div
        className={cn(
          'relative bg-background rounded-xl p-6 h-full',
          'border border-border/50',
          'backdrop-blur-sm'
        )}
      >
        {/* Subtle gradient overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
            gradients[gradient]
          )}
        />

        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  )
}
