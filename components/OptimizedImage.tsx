// components/OptimizedImage.tsx
// Componente de imagen optimizado con SEO + Core Web Vitals

import Image from 'next/image';
import { CSSProperties } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  className?: string;
  style?: CSSProperties;
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down';
}

/**
 * Componente Image optimizado con:
 * - AVIF + WebP automatic conversion
 * - Responsive sizing
 * - Lazy loading (no priority)
 * - Aspect ratio preservation (no CLS)
 * - SEO alt text
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  className,
  style,
  objectFit = 'cover',
}: OptimizedImageProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${(height / width) * 100}%`,
        backgroundColor: '#f0f0f0', // Skeleton while loading
        ...style,
      }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes}
        style={{
          objectFit,
          objectPosition: 'center',
        }}
        onLoad={(result) => {
          // Preload next image if exists
          if (result.naturalWidth > 0) {
            // Image loaded successfully
          }
        }}
      />
    </div>
  );
}

export default OptimizedImage;
