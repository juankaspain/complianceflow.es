import { cn } from '@/lib/utils'

// ============================================================================
// SKELETON LOADER
# ============================================================================

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular'
}

export function Skeleton({ className, variant = 'rectangular', ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-muted',
        variant === 'text' && 'h-4 rounded',
        variant === 'circular' && 'rounded-full',
        variant === 'rectangular' && 'rounded-lg',
        className
      )}
      {...props}
    />
  )
}

// ============================================================================
// SPINNER
// ============================================================================

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Spinner({ size = 'md', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  return (
    <div
      className={cn(
        'inline-block rounded-full border-current border-t-transparent animate-spin',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Cargando"
    >
      <span className="sr-only">Cargando...</span>
    </div>
  )
}

// ============================================================================
// PROGRESS BAR
// ============================================================================

interface ProgressProps {
  value: number
  max?: number
  className?: string
  showLabel?: boolean
}

export function Progress({ value, max = 100, className, showLabel }: ProgressProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={cn('w-full', className)}>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      {showLabel && (
        <div className="text-sm text-muted-foreground mt-2 text-center">
          {percentage.toFixed(0)}%
        </div>
      )}
    </div>
  )
}

// ============================================================================
// CARD SKELETON
// ============================================================================

export function CardSkeleton() {
  return (
    <div className="border border-border rounded-lg p-6 space-y-4">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 pt-4">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  )
}

// ============================================================================
// TABLE SKELETON
// ============================================================================

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      <Skeleton className="h-10 w-full" /> {/* Header */}
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-16 w-full" />
      ))}
    </div>
  )
}

// ============================================================================
// LOADING OVERLAY
// ============================================================================

interface LoadingOverlayProps {
  isLoading: boolean
  children: React.ReactNode
  message?: string
}

export function LoadingOverlay({ isLoading, children, message }: LoadingOverlayProps) {
  if (!isLoading) return <>{children}</>

  return (
    <div className="relative">
      <div className="opacity-50 pointer-events-none">{children}</div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
        <Spinner size="lg" />
        {message && <p className="mt-4 text-sm text-muted-foreground">{message}</p>}
      </div>
    </div>
  )
}
