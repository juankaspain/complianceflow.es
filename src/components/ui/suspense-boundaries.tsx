import { Suspense } from 'react'
import { Skeleton, CardSkeleton, TableSkeleton, Spinner } from './loading-states'

// ============================================================================
// PAGE SECTION SUSPENSE
// ============================================================================

interface PageSectionSuspenseProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function PageSectionSuspense({ children, fallback }: PageSectionSuspenseProps) {
  return (
    <Suspense
      fallback={
        fallback || (
          <div className="space-y-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )
      }
    >
      {children}
    </Suspense>
  )
}

// ============================================================================
// CARD GRID SUSPENSE
// ============================================================================

interface CardGridSuspenseProps {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4
  rows?: number
}

export function CardGridSuspense({ children, columns = 3, rows = 3 }: CardGridSuspenseProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <Suspense
      fallback={
        <div className={`grid gap-6 ${gridCols[columns]}`}>
          {Array.from({ length: rows * columns }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

// ============================================================================
// TABLE SUSPENSE
// ============================================================================

interface TableSuspenseProps {
  children: React.ReactNode
  rows?: number
}

export function TableSuspense({ children, rows = 5 }: TableSuspenseProps) {
  return (
    <Suspense fallback={<TableSkeleton rows={rows} />}>
      {children}
    </Suspense>
  )
}

// ============================================================================
// MODAL CONTENT SUSPENSE
// ============================================================================

interface ModalContentSuspenseProps {
  children: React.ReactNode
}

export function ModalContentSuspense({ children }: ModalContentSuspenseProps) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-12">
          <Spinner size="lg" />
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

// ============================================================================
// BLOG POST SUSPENSE
// ============================================================================

export function BlogPostSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <article className="prose prose-lg max-w-none">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-64 w-full my-8" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </article>
      }
    >
      {children}
    </Suspense>
  )
}

// ============================================================================
// DYNAMIC IMPORT HELPER
// ============================================================================

import dynamic from 'next/dynamic'

/**
 * Create dynamic component with custom loading
 */
export function createDynamicComponent<P extends object>(
  importFn: () => Promise<{ default: React.ComponentType<P> }>,
  loading?: React.ComponentType
) {
  return dynamic(importFn, {
    loading: loading || (() => <Spinner size="lg" />),
    ssr: true,
  })
}

/**
 * Create client-only dynamic component
 */
export function createClientComponent<P extends object>(
  importFn: () => Promise<{ default: React.ComponentType<P> }>,
  loading?: React.ComponentType
) {
  return dynamic(importFn, {
    loading: loading || (() => <Spinner size="lg" />),
    ssr: false,
  })
}
