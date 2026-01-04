'use client'

import { createContext, useContext, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

// ============================================================================
// TYPES
// ============================================================================

interface AccordionContextType {
  openItems: string[]
  toggleItem: (value: string) => void
  type: 'single' | 'multiple'
}

// ============================================================================
// CONTEXT
// ============================================================================

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within Accordion')
  }
  return context
}

// ============================================================================
// ACCORDION ROOT
// ============================================================================

interface AccordionProps {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  children: React.ReactNode
  className?: string
}

export function Accordion({ type = 'single', defaultValue, children, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (!defaultValue) return []
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  })

  const toggleItem = (value: string) => {
    setOpenItems((current) => {
      if (type === 'single') {
        return current.includes(value) ? [] : [value]
      }

      return current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

// ============================================================================
// ACCORDION ITEM
// ============================================================================

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div
      className={cn('border border-border rounded-lg overflow-hidden', className)}
      data-state={value}
    >
      {children}
    </div>
  )
}

// ============================================================================
// ACCORDION TRIGGER
// ============================================================================

interface AccordionTriggerProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionTrigger({ value, children, className }: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordionContext()
  const isOpen = openItems.includes(value)

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      className={cn(
        'flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-accent',
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-5 w-5 shrink-0 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  )
}

// ============================================================================
// ACCORDION CONTENT
// ============================================================================

interface AccordionContentProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionContent({ value, children, className }: AccordionContentProps) {
  const { openItems } = useAccordionContext()
  const isOpen = openItems.includes(value)

  return (
    <div
      id={`accordion-content-${value}`}
      role="region"
      aria-labelledby={`accordion-trigger-${value}`}
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'animate-accordion-down' : 'animate-accordion-up hidden'
      )}
    >
      <div className={cn('p-4 pt-0', className)}>{children}</div>
    </div>
  )
}
