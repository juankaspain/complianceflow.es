'use client';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const baseClasses = 'bg-gray-800';
  
  const variantClasses = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-wave',
    none: '',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

// Preset skeleton components
export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 space-y-4">
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 space-y-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} variant="circular" width={20} height={20} />
        ))}
      </div>
      <Skeleton variant="text" className="w-full h-20" />
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" className="w-32" />
          <Skeleton variant="text" className="w-48" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-8">
      <div className="text-center space-y-6">
        <Skeleton variant="rectangular" className="w-64 h-10 mx-auto" />
        <Skeleton variant="text" className="w-full max-w-4xl h-16 mx-auto" />
        <Skeleton variant="text" className="w-full max-w-4xl h-16 mx-auto" />
        <Skeleton variant="text" className="w-3/4 max-w-2xl h-8 mx-auto" />
        <div className="flex gap-4 justify-center mt-8">
          <Skeleton variant="rectangular" className="w-40 h-14" />
          <Skeleton variant="rectangular" className="w-40 h-14" />
        </div>
      </div>
    </div>
  );
}
