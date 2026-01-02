'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type GlowVariant = 'none' | 'primary' | 'success' | 'warning' | 'error';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  glow?: GlowVariant;
  hover?: boolean;
  className?: string;
}

const glowStyles: Record<GlowVariant, string> = {
  none: '',
  primary: 'shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-10px_rgba(99,102,241,0.7)]',
  success: 'shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_60px_-10px_rgba(34,197,94,0.7)]',
  warning: 'shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_0_60px_-10px_rgba(245,158,11,0.7)]',
  error: 'shadow-[0_0_40px_-10px_rgba(239,68,68,0.5)] hover:shadow-[0_0_60px_-10px_rgba(239,68,68,0.7)]',
};

/**
 * GlassCard - Modern glassmorphism card component
 * 
 * @example
 * <GlassCard glow="primary" hover>
 *   <h3>Title</h3>
 *   <p>Content</p>
 * </GlassCard>
 */
export default function GlassCard({
  children,
  glow = 'none',
  hover = true,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className={`
        relative rounded-2xl
        bg-gray-900/75 backdrop-blur-xl
        border border-white/10
        p-6
        transition-all duration-300
        ${glow !== 'none' ? glowStyles[glow] : ''}
        ${hover ? 'hover:border-white/20 hover:bg-gray-900/90' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * GlassCardStrong - Stronger glass effect variant
 */
export function GlassCardStrong({
  children,
  glow = 'none',
  hover = true,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className={`
        relative rounded-2xl
        bg-gray-900/90 backdrop-blur-2xl
        border border-white/20
        p-6
        transition-all duration-300
        ${glow !== 'none' ? glowStyles[glow] : ''}
        ${hover ? 'hover:border-white/30 hover:bg-gray-900/95' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
