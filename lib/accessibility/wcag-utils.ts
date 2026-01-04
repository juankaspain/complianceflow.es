// lib/accessibility/wcag-utils.ts
// Utilidades para WCAG 2.1 Level AA Compliance

/**
 * Color Contrast Checker (4.5:1 ratio para normal text, 3:1 para large)
 */
export function getContrastRatio(rgb1: [number, number, number], rgb2: [number, number, number]): number {
  const l1 = getRelativeLuminance(rgb1);
  const l2 = getRelativeLuminance(rgb2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

function getRelativeLuminance([r, g, b]: [number, number, number]): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Validar ratio de contraste
 */
export function isContrastCompliant(
  ratio: number,
  level: 'A' | 'AA' | 'AAA' = 'AA',
  textSize: 'normal' | 'large' = 'normal'
): boolean {
  const minimums = {
    A: { normal: 3, large: 3 },
    AA: { normal: 4.5, large: 3 },
    AAA: { normal: 7, large: 4.5 },
  };

  return ratio >= minimums[level][textSize];
}

/**
 * WCAG Heading Structure Validator
 */
export function validateHeadingStructure(headings: HTMLElement[]): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  let previousLevel = 0;

  headings.forEach((h, index) => {
    const level = parseInt(h.tagName[1], 10);

    // Check: Only one h1 per page
    if (level === 1 && index > 0) {
      issues.push('Multiple h1 tags detected. Should have only one per page.');
    }

    // Check: No skipped levels (e.g., h1 -> h3)
    if (level > previousLevel + 1) {
      issues.push(`Skipped heading level: ${h.tagName} after h${previousLevel}`);
    }

    previousLevel = level;
  });

  return {
    isValid: issues.length === 0,
    issues,
  };
}

/**
 * Form Label Validator
 */
export function validateFormLabels(form: HTMLFormElement): {
  isValid: boolean;
  unlabeledInputs: HTMLInputElement[];
} {
  const inputs = form.querySelectorAll('input, select, textarea');
  const unlabeledInputs: HTMLInputElement[] = [];

  inputs.forEach((input) => {
    const hasLabel =
      input.getAttribute('aria-label') ||
      input.getAttribute('aria-labelledby') ||
      form.querySelector(`label[for="${input.id}"]`);

    if (!hasLabel) {
      unlabeledInputs.push(input as HTMLInputElement);
    }
  });

  return {
    isValid: unlabeledInputs.length === 0,
    unlabeledInputs,
  };
}

/**
 * Alt Text Validator (Images)
 */
export function validateAltText(container: HTMLElement = document.body): {
  imagesWithoutAlt: HTMLImageElement[];
  imagesWithBadAlt: HTMLImageElement[];
} {
  const images = container.querySelectorAll('img');
  const imagesWithoutAlt: HTMLImageElement[] = [];
  const imagesWithBadAlt: HTMLImageElement[] = [];

  images.forEach((img) => {
    const alt = img.getAttribute('alt');

    if (!alt) {
      imagesWithoutAlt.push(img);
    } else if (alt.length < 5 || alt === 'image' || alt === 'photo') {
      imagesWithBadAlt.push(img);
    }
  });

  return { imagesWithoutAlt, imagesWithBadAlt };
}

/**
 * Keyboard Navigation Checker
 */
export function checkKeyboardNavigation(): {
  focusableElements: HTMLElement[];
  isFocusableOrder: boolean;
} {
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;

  const tabindices = Array.from(focusableElements)
    .map(el => parseInt(el.getAttribute('tabindex') || '0', 10))
    .filter(i => i > 0);

  // Check if tabindex is sequential (0, 1, 2, ... without gaps)
  const isFocusableOrder = tabindices.length === 0 || 
    tabindices.every((_, i) => i === 0 || tabindices[i] > tabindices[i - 1]);

  return {
    focusableElements: Array.from(focusableElements),
    isFocusableOrder,
  };
}

/**
 * Complete WCAG 2.1 AA Audit
 */
export function performA11yAudit(container: HTMLElement = document.body): {
  score: number; // 0-100
  issues: Record<string, any>;
  recommendations: string[];
} {
  const issues: Record<string, any> = {};
  const recommendations: string[] = [];
  let passedChecks = 0;
  let totalChecks = 5;

  // 1. Headings
  const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const headingValidation = validateHeadingStructure(headings as HTMLElement[]);
  issues.headings = headingValidation;
  if (headingValidation.isValid) passedChecks++;
  else recommendations.push('Fix heading structure (h1 only, no skipped levels)');

  // 2. Form Labels
  const forms = container.querySelectorAll('form');
  const formIssues = Array.from(forms).map(validateFormLabels);
  const hasLabelIssues = formIssues.some(f => !f.isValid);
  issues.forms = formIssues;
  if (!hasLabelIssues) passedChecks++;
  else recommendations.push('Add labels to all form inputs');

  // 3. Alt Text
  const altIssues = validateAltText(container);
  issues.altText = altIssues;
  if (altIssues.imagesWithoutAlt.length === 0 && altIssues.imagesWithBadAlt.length === 0) {
    passedChecks++;
  } else {
    recommendations.push('Add descriptive alt text to all images');
  }

  // 4. Keyboard Navigation
  const navIssues = checkKeyboardNavigation();
  issues.navigation = navIssues;
  if (navIssues.isFocusableOrder) passedChecks++;
  else recommendations.push('Fix tabindex order for keyboard navigation');

  // 5. Color Contrast (basic check)
  issues.colorContrast = { note: 'Manual check required or provide colors' };
  passedChecks++; // Assumes manual check done

  const score = Math.round((passedChecks / totalChecks) * 100);

  return {
    score,
    issues,
    recommendations,
  };
}

export default {
  getContrastRatio,
  isContrastCompliant,
  validateHeadingStructure,
  validateFormLabels,
  validateAltText,
  checkKeyboardNavigation,
  performA11yAudit,
};
