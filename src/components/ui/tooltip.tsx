'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

// ============================================================================
// TYPES
// ============================================================================

type TooltipSide = 'top' | 'right' | 'bottom' | 'left'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: TooltipSide
  delayDuration?: number
  className?: string
}

// ============================================================================
// TOOLTIP COMPONENT
// ============================================================================

export function Tooltip({
  content,
  children,
  side = 'top',
  delayDuration = 200,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect()
        const pos = calculatePosition(rect, side)
        setPosition(pos)
        setIsVisible(true)
      }
    }, delayDuration)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const calculatePosition = (rect: DOMRect, side: TooltipSide) => {
    const spacing = 8
    const positions = {
      top: {
        top: rect.top - spacing,
        left: rect.left + rect.width / 2,
      },
      bottom: {
        top: rect.bottom + spacing,
        left: rect.left + rect.width / 2,
      },
      left: {
        top: rect.top + rect.height / 2,
        left: rect.left - spacing,
      },
      right: {
        top: rect.top + rect.height / 2,
        left: rect.right + spacing,
      },
    }
    return positions[side]
  }

  const sideClasses = {
    top: '-translate-x-1/2 -translate-y-full',
    bottom: '-translate-x-1/2',
    left: '-translate-y-1/2 -translate-x-full',
    right: '-translate-y-1/2',
  }

  const arrowClasses = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-foreground border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-foreground border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-[-4px] top-1/2 -translate-y-1/2 border-l-foreground border-t-transparent border-b-transparent border-r-transparent',
    right: 'left-[-4px] top-1/2 -translate-y-1/2 border-r-foreground border-t-transparent border-b-transparent border-l-transparent',
  }

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>

      {isVisible &&
        typeof window !== 'undefined' &&
        createPortal(
          <div
            role="tooltip"
            className={cn(
              'fixed z-50 px-3 py-1.5 text-sm text-primary-foreground bg-foreground rounded-md shadow-md animate-in fade-in-50 duration-100',
              sideClasses[side],
              className
            )}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            {content}
            <div
              className={cn('absolute w-0 h-0 border-4', arrowClasses[side])}
              aria-hidden="true"
            />
          </div>,
          document.body
        )}
    </>
  )
}

// ============================================================================
// SIMPLE TOOLTIP (No Portal)
// ============================================================================

interface SimpleTooltipProps {
  text: string
  children: React.ReactNode
}

export function SimpleTooltip({ text, children }: SimpleTooltipProps) {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block group-focus-within:block">
        <div className="relative bg-foreground text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
        </div>
      </div>
    </div>
  )
}
