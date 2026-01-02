'use client';

import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

/**
 * AnimatedCounter - Smooth counting animation for numbers
 * 
 * @example
 * <AnimatedCounter value={99.99} suffix="%" decimals={2} />
 * <AnimatedCounter value={500} suffix="+" prefix="" />
 * <AnimatedCounter value={1250000} prefix="$" />
 */
export default function AnimatedCounter({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  });
  
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const formatted = latest.toFixed(decimals);
      setDisplayValue(formatted);
    });

    return () => unsubscribe();
  }, [springValue, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
