'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  variant?: 'card' | 'text' | 'stat' | 'circle' | 'rectangle';
  width?: string;
  height?: string;
  className?: string;
}

/**
 * LoadingSkeleton - Animated skeleton for loading states
 * 
 * @example
 * <LoadingSkeleton variant="card" />
 * <LoadingSkeleton variant="text" width="200px" />
 */
export default function LoadingSkeleton({
  variant = 'rectangle',
  width,
  height,
  className = '',
}: SkeletonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'card':
        return 'w-full h-64 rounded-2xl';
      case 'text':
        return 'w-full h-4 rounded-md';
      case 'stat':
        return 'w-full h-32 rounded-xl';
      case 'circle':
        return 'w-16 h-16 rounded-full';
      case 'rectangle':
      default:
        return 'w-full h-8 rounded-lg';
    }
  };

  const customStyles = {
    width: width || undefined,
    height: height || undefined,
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden
        bg-gray-800/50
        ${getVariantStyles()}
        ${className}
      `}
      style={customStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"
        animate={{
          translateX: ['100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={
          {
            '--tw-gradient-from': 'transparent',
            '--tw-gradient-to': 'transparent',
          } as React.CSSProperties
        }
      />

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-gray-700/20"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}

/**
 * SkeletonCard - Pre-built skeleton for card layouts
 */
export function SkeletonCard() {
  return (
    <div className="space-y-4 p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
      <LoadingSkeleton variant="circle" width="64px" height="64px" className="mx-auto" />
      <LoadingSkeleton variant="text" width="120px" className="mx-auto" />
      <LoadingSkeleton variant="text" width="80px" className="mx-auto" />
    </div>
  );
}

/**
 * SkeletonText - Pre-built skeleton for text blocks
 */
export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <LoadingSkeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? '60%' : '100%'}
        />
      ))}
    </div>
  );
}

/**
 * SkeletonStats - Pre-built skeleton for stats grid
 */
export function SkeletonStats({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
