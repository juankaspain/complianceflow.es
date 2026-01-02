import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'shimmer' | 'none';
}

/**
 * Skeleton loading component with premium shimmer effect
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Skeleton className="h-12 w-full" />
 * 
 * // Circular avatar skeleton
 * <Skeleton variant="circular" className="h-16 w-16" />
 * 
 * // Card skeleton
 * <div className="space-y-4">
 *   <Skeleton className="h-48 w-full" />
 *   <Skeleton className="h-4 w-3/4" />
 *   <Skeleton className="h-4 w-1/2" />
 * </div>
 * ```
 */
export function Skeleton({
  className,
  variant = 'default',
  animation = 'shimmer',
  ...props
}: SkeletonProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading..."
      aria-live="polite"
      className={cn(
        'relative overflow-hidden bg-gray-800',
        {
          'rounded-md': variant === 'default',
          'rounded-full': variant === 'circular',
          'rounded-none': variant === 'rectangular',
        },
        {
          'animate-pulse': animation === 'pulse',
          'shimmer': animation === 'shimmer',
        },
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

/**
 * Skeleton text component for text loading states
 */
export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', className)} role="status" aria-label="Loading text...">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-4',
            i === lines - 1 ? 'w-3/4' : 'w-full' // Last line shorter
          )}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton card component
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn('glass rounded-2xl p-6 space-y-4', className)}
      role="status"
      aria-label="Loading card..."
    >
      <Skeleton className="h-48 w-full rounded-xl" />
      <div className="space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-10 w-24 rounded-lg" />
        <Skeleton className="h-10 w-24 rounded-lg" />
      </div>
    </div>
  );
}

/**
 * Skeleton avatar component
 */
export function SkeletonAvatar({
  size = 'md',
  className,
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
  };

  return (
    <Skeleton
      variant="circular"
      className={cn(sizeClasses[size], className)}
      aria-label="Loading avatar..."
    />
  );
}

/**
 * Skeleton table component
 */
export function SkeletonTable({
  rows = 5,
  columns = 4,
  className,
}: {
  rows?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div
      className={cn('space-y-4', className)}
      role="status"
      aria-label="Loading table..."
    >
      {/* Header */}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={`header-${i}`} className="h-10" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={`cell-${rowIndex}-${colIndex}`} className="h-12" />
          ))}
        </div>
      ))}
    </div>
  );
}
