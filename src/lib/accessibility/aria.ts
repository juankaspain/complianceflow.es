/**
 * ARIA utilities for accessibility
 * WCAG 2.1 Level AA compliance
 */

/**
 * Generate unique ID for ARIA attributes
 */
export function generateAriaId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * ARIA live region announcer
 */
export class AriaAnnouncer {
  private liveRegion: HTMLElement | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.createLiveRegion();
    }
  }

  private createLiveRegion(): void {
    this.liveRegion = document.createElement('div');
    this.liveRegion.setAttribute('role', 'status');
    this.liveRegion.setAttribute('aria-live', 'polite');
    this.liveRegion.setAttribute('aria-atomic', 'true');
    this.liveRegion.className = 'sr-only';
    document.body.appendChild(this.liveRegion);
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.liveRegion) return;

    this.liveRegion.setAttribute('aria-live', priority);
    this.liveRegion.textContent = message;

    // Clear after announcement
    setTimeout(() => {
      if (this.liveRegion) {
        this.liveRegion.textContent = '';
      }
    }, 1000);
  }
}

/**
 * Global announcer instance
 */
export const announcer = typeof window !== 'undefined' ? new AriaAnnouncer() : null;

/**
 * Focus trap utility for modals/dialogs
 */
export class FocusTrap {
  private element: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private firstFocusable: HTMLElement | null = null;
  private lastFocusable: HTMLElement | null = null;
  private previouslyFocused: HTMLElement | null = null;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  activate(): void {
    this.previouslyFocused = document.activeElement as HTMLElement;
    this.updateFocusableElements();
    this.firstFocusable?.focus();
    this.element.addEventListener('keydown', this.handleKeyDown);
  }

  deactivate(): void {
    this.element.removeEventListener('keydown', this.handleKeyDown);
    this.previouslyFocused?.focus();
  }

  private updateFocusableElements(): void {
    const selector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    
    this.focusableElements = Array.from(
      this.element.querySelectorAll(selector)
    ) as HTMLElement[];
    
    this.firstFocusable = this.focusableElements[0] || null;
    this.lastFocusable =
      this.focusableElements[this.focusableElements.length - 1] || null;
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      if (document.activeElement === this.firstFocusable) {
        event.preventDefault();
        this.lastFocusable?.focus();
      }
    } else {
      if (document.activeElement === this.lastFocusable) {
        event.preventDefault();
        this.firstFocusable?.focus();
      }
    }
  };
}

/**
 * Skip to main content link
 */
export function createSkipLink(): HTMLElement {
  const link = document.createElement('a');
  link.href = '#main-content';
  link.textContent = 'Saltar al contenido principal';
  link.className =
    'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white';
  return link;
}

/**
 * Check if element is visible to screen readers
 */
export function isAriaHidden(element: HTMLElement): boolean {
  return element.getAttribute('aria-hidden') === 'true';
}

/**
 * Get accessible name of element
 */
export function getAccessibleName(element: HTMLElement): string {
  // Check aria-label
  const ariaLabel = element.getAttribute('aria-label');
  if (ariaLabel) return ariaLabel;

  // Check aria-labelledby
  const labelledby = element.getAttribute('aria-labelledby');
  if (labelledby) {
    const labelElement = document.getElementById(labelledby);
    if (labelElement) return labelElement.textContent || '';
  }

  // Check associated label
  const id = element.id;
  if (id) {
    const label = document.querySelector(`label[for="${id}"]`);
    if (label) return label.textContent || '';
  }

  // Fall back to text content
  return element.textContent || '';
}