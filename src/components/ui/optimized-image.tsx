'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: string
  lowQualityPlaceholder?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback = '/images/placeholder.png',
  lowQualityPlaceholder,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Low quality placeholder (LQIP) */}
      {lowQualityPlaceholder && isLoading && (
        <div
          className="absolute inset-0 blur-sm"
          style={{
            backgroundImage: `url(${lowQualityPlaceholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <Image
        src={hasError ? fallback : src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        loading="lazy"
        quality={90}
        {...props}
      />

      {/* Loading skeleton */}
      {isLoading && !lowQualityPlaceholder && (
        <div className="absolute inset-0 skeleton" />
      )}
    </div>
  )
}

// Preset for hero images
export function HeroImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority
      quality={95}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    />
  )
}

// Preset for thumbnails
export function ThumbnailImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      quality={75}
      sizes="(max-width: 768px) 50vw, 200px"
    />
  )
}

// Preset for full-width images
export function FullWidthImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      quality={85}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )
}
