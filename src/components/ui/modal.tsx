'use client'

import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/base-components'
import { useFocusTrap } from '@/lib/accessibility'

// ============================================================================
// TYPES
// ============================================================================

interface ModalContextType {
  isOpen: boolean
  openModal: (content: React.ReactNode, options?: ModalOptions) => void
  closeModal: () => void
}

interface ModalOptions {
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  className?: string
}

// ============================================================================
// CONTEXT
// ============================================================================

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within ModalProvider')
  }
  return context
}

// ============================================================================
// PROVIDER
// ============================================================================

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<React.ReactNode>(null)
  const [options, setOptions] = useState<ModalOptions>({})

  const openModal = useCallback((newContent: React.ReactNode, newOptions?: ModalOptions) => {
    setContent(newContent)
    setOptions(newOptions || {})
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => {
      setContent(null)
      setOptions({})
    }, 200)
  }, [])

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && <ModalContainer content={content} options={options} onClose={closeModal} />}
    </ModalContext.Provider>
  )
}

// ============================================================================
// MODAL CONTAINER
// ============================================================================

interface ModalContainerProps {
  content: React.ReactNode
  options: ModalOptions
  onClose: () => void
}

function ModalContainer({ content, options, onClose }: ModalContainerProps) {
  const {
    title,
    size = 'md',
    closeOnOverlayClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    className,
  } = options

  const modalRef = useRef<HTMLDivElement>(null)
  useFocusTrap(modalRef, true)

  useEffect(() => {
    if (!closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [closeOnEscape, onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-7xl',
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  if (typeof window === 'undefined') return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        ref={modalRef}
        className={cn(
          'relative w-full bg-background rounded-lg shadow-2xl animate-in zoom-in-95 duration-200',
          sizeClasses[size],
          className
        )}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-border">
            {title && (
              <h2 id="modal-title" className="text-xl font-semibold">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">{content}</div>
      </div>
    </div>,
    document.body
  )
}

// ============================================================================
// MODAL COMPONENT (Alternative API)
// ============================================================================

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  footer?: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children, size = 'md', footer }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  useFocusTrap(modalRef, isOpen)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || typeof window === 'undefined') return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-7xl',
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={cn(
          'relative w-full bg-background rounded-lg shadow-2xl animate-in zoom-in-95 duration-200',
          sizeClasses[size]
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-accent transition-colors ml-auto"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>

        {/* Footer */}
        {footer && <div className="flex justify-end gap-3 p-6 border-t border-border">{footer}</div>}
      </div>
    </div>,
    document.body
  )
}

// ============================================================================
// CONFIRMATION DIALOG
// ============================================================================

interface ConfirmDialogProps {
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
  variant?: 'default' | 'destructive'
}

export function ConfirmDialog({
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel,
  variant = 'default',
}: ConfirmDialogProps) {
  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">{message}</p>
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button variant={variant === 'destructive' ? 'destructive' : 'default'} onClick={onConfirm}>
          {confirmText}
        </Button>
      </div>
    </div>
  )
}
