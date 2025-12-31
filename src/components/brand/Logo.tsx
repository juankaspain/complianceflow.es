'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type LogoVariant = 'primary' | 'white' | 'icon';

interface LogoProps {
  variant?: LogoVariant;
  width?: number;
  height?: number;
  className?: string;
  href?: string;
  priority?: boolean;
}

export function Logo({
  variant = 'primary',
  width,
  height,
  className = '',
  href = '/',
  priority = false,
}: LogoProps) {
  const logoSrc = {
    primary: '/logo.svg',
    white: '/logo-white.svg',
    icon: '/logo-icon.svg',
  }[variant];

  const defaultWidth = variant === 'icon' ? 44 : 200;
  const defaultHeight = variant === 'icon' ? 44 : 60;

  const logo = (
    <Image
      src={logoSrc}
      alt="ComplianceFlow Logo"
      width={width || defaultWidth}
      height={height || defaultHeight}
      className={className}
      priority={priority}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logo}
      </Link>
    );
  }

  return logo;
}

export default Logo;
