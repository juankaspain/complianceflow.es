'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

// ============================================================================
// TYPES
// ============================================================================

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  onLoad?: () => void
}

// ============================================================================
// OPTIMIZED IMAGE COMPONENT
// ============================================================================

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fill = false,
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  objectFit = 'cover',
  onLoad,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          className
        )}
        style={{ width, height }}
      >
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <div
          className={cn(
            'absolute inset-0 bg-muted animate-pulse',
            fill ? '' : 'aspect-video'
          )}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill'
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

// ============================================================================
// RESPONSIVE IMAGE SIZES
// ============================================================================

export const IMAGE_SIZES = {
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  thumbnail: '(max-width: 768px) 50vw, 25vw',
  full: '100vw',
} as const

// ============================================================================
// BLUR DATA URL GENERATOR (for static images)
// ============================================================================

export function generateBlurDataURL(color: string = '#f3f4f6'): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="1" />
      </filter>
      <rect width="8" height="8" fill="${color}" filter="url(#b)" />
    </svg>
  `
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

// ============================================================================
// AVATAR COMPONENT
// ============================================================================

interface AvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
  className?: string
}

export function Avatar({ src, alt, size = 'md', fallback, className }: AvatarProps) {
  const [hasError, setHasError] = useState(false)

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  }

  const initials = fallback || alt.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()

  if (!src || hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold',
          sizeClasses[size],
          className
        )}
      >
        {initials}
      </div>
    )
  }

  return (
    <div className={cn('relative rounded-full overflow-hidden', sizeClasses[size], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  )
}

// ============================================================================
// LOGO COMPONENT
// ============================================================================

interface LogoProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function Logo({ src, alt, width = 120, height = 40, className }: LogoProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      quality={100}
      className={className}
      objectFit="contain"
    />
  )
}
