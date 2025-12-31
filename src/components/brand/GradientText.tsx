'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type GradientType = 'primary' | 'secondary' | 'accent';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: GradientType;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const gradientClasses: Record<GradientType, string> = {
  primary: 'bg-gradient-to-r from-brand-primary-500 to-blue-400',
  secondary: 'bg-gradient-to-r from-brand-secondary-500 to-green-400',
  accent: 'bg-gradient-to-r from-brand-accent-500 to-purple-400',
};

export function GradientText({
  children,
  gradient = 'primary',
  className,
  as: Component = 'span',
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        'bg-clip-text text-transparent',
        'font-bold',
        gradientClasses[gradient],
        className
      )}
    >
      {children}
    </Component>
  );
}

export default GradientText;
