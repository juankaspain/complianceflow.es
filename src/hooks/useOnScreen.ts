import { useEffect, useState, RefObject } from 'react';

/**
 * Hook to detect if an element is visible on screen
 * Useful for lazy loading, animations, infinite scroll, etc.
 */
export function useOnScreen(
  ref: RefObject<HTMLElement>,
  rootMargin: string = '0px'
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}