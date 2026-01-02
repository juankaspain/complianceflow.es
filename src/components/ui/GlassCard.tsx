'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

type GlowVariant = 'none' | 'primary' | 'success' | 'warning' | 'error';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  glow?: GlowVariant;
  hover?: boolean;
  className?: string;
}

const glowStyles: Record<GlowVariant, string> = {
  none: '',
  // Mobile-optimized (lighter shadows)
  primary: 'shadow-[0_0_30px_-12px_rgba(99,102,241,0.4)] md:shadow-[0_0_50px_-12px_rgba(99,102,241,0.6),0_0_25px_-8px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.6)] md:hover:shadow-[0_0_70px_-12px_rgba(99,102,241,0.8),0_0_35px_-8px_rgba(99,102,241,0.6)]',
  success: 'shadow-[0_0_25px_-12px_rgba(34,197,94,0.3)] md:shadow-[0_0_40px_-12px_rgba(34,197,94,0.5),0_0_20px_-8px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_-12px_rgba(34,197,94,0.5)] md:hover:shadow-[0_0_60px_-12px_rgba(34,197,94,0.7),0_0_30px_-8px_rgba(34,197,94,0.5)]',
  warning: 'shadow-[0_0_25px_-12px_rgba(251,191,36,0.3)] md:shadow-[0_0_40px_-12px_rgba(251,191,36,0.5),0_0_20px_-8px_rgba(251,191,36,0.3)] hover:shadow-[0_0_35px_-12px_rgba(251,191,36,0.5)] md:hover:shadow-[0_0_60px_-12px_rgba(251,191,36,0.7),0_0_30px_-8px_rgba(251,191,36,0.5)]',
  error: 'shadow-[0_0_25px_-12px_rgba(239,68,68,0.3)] md:shadow-[0_0_40px_-12px_rgba(239,68,68,0.5),0_0_20px_-8px_rgba(239,68,68,0.3)] hover:shadow-[0_0_35px_-12px_rgba(239,68,68,0.5)] md:hover:shadow-[0_0_60px_-12px_rgba(239,68,68,0.7),0_0_30px_-8px_rgba(239,68,68,0.5)]',
};

const borderStyles: Record<GlowVariant, string> = {
  none: 'border-white/10 hover:border-white/20',
  primary: 'border-primary-500/30 hover:border-primary-400/50',
  success: 'border-green-500/30 hover:border-green-400/50',
  warning: 'border-yellow-500/30 hover:border-yellow-400/50',
  error: 'border-red-500/30 hover:border-red-400/50',
};

/**
 * GlassCard - Modern glassmorphism card component with mobile optimization
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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hover && !prefersReducedMotion ? { scale: 1.02 } : {}}
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
        will-change-transform
        ${className}
      `}
      style={{
        transform: 'translateZ(0)', // GPU acceleration
      }}
      {...props}
    >
      {/* Inner glow gradient - lighter on mobile */}
      {glow !== 'none' && (
        <div
          className="absolute inset-0 opacity-15 md:opacity-20 pointer-events-none"
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
 * GlassCardStrong - Stronger glass effect variant with mobile optimization
 */
export function GlassCardStrong({
  children,
  glow = 'none',
  hover = true,
  className = '',
  ...props
}: GlassCardProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hover && !prefersReducedMotion ? { scale: 1.02 } : {}}
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
        will-change-transform
        ${className}
      `}
      style={{
        transform: 'translateZ(0)', // GPU acceleration
      }}
      {...props}
    >
      {/* Strong inner glow - lighter on mobile */}
      {glow !== 'none' && (
        <div
          className="absolute inset-0 opacity-20 md:opacity-30 pointer-events-none"
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
