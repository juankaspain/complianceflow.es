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
  primary: 'shadow-[0_0_50px_-12px_rgba(99,102,241,0.6),0_0_25px_-8px_rgba(99,102,241,0.4)] hover:shadow-[0_0_70px_-12px_rgba(99,102,241,0.8),0_0_35px_-8px_rgba(99,102,241,0.6)]',
  success: 'shadow-[0_0_40px_-12px_rgba(34,197,94,0.5),0_0_20px_-8px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_-12px_rgba(34,197,94,0.7),0_0_30px_-8px_rgba(34,197,94,0.5)]',
  warning: 'shadow-[0_0_40px_-12px_rgba(251,191,36,0.5),0_0_20px_-8px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_-12px_rgba(251,191,36,0.7),0_0_30px_-8px_rgba(251,191,36,0.5)]',
  error: 'shadow-[0_0_40px_-12px_rgba(239,68,68,0.5),0_0_20px_-8px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_-12px_rgba(239,68,68,0.7),0_0_30px_-8px_rgba(239,68,68,0.5)]',
};

const borderStyles: Record<GlowVariant, string> = {
  none: 'border-white/10 hover:border-white/20',
  primary: 'border-primary-500/30 hover:border-primary-400/50',
  success: 'border-green-500/30 hover:border-green-400/50',
  warning: 'border-yellow-500/30 hover:border-yellow-400/50',
  error: 'border-red-500/30 hover:border-red-400/50',
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
        relative rounded-2xl overflow-hidden
        bg-gray-900/80 backdrop-blur-xl
        border
        ${borderStyles[glow]}
        p-6
        transition-all duration-300
        ${glow !== 'none' ? glowStyles[glow] : ''}
        ${hover ? 'hover:bg-gray-900/90' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Inner glow gradient */}
      {glow !== 'none' && (
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              glow === 'primary'
                ? 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.2), transparent 70%)'
                : glow === 'success'
                ? 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.2), transparent 70%)'
                : glow === 'warning'
                ? 'radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.2), transparent 70%)'
                : 'radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.2), transparent 70%)',
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
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
        relative rounded-2xl overflow-hidden
        bg-gray-900/95 backdrop-blur-2xl
        border-2
        ${borderStyles[glow]}
        p-6
        transition-all duration-300
        ${glow !== 'none' ? glowStyles[glow] : ''}
        ${hover ? 'hover:bg-gray-900/98' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Strong inner glow */}
      {glow !== 'none' && (
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              glow === 'primary'
                ? 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.25), transparent 60%)'
                : glow === 'success'
                ? 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.25), transparent 60%)'
                : glow === 'warning'
                ? 'radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.25), transparent 60%)'
                : 'radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.25), transparent 60%)',
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
