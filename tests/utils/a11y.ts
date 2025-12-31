import { axe, toHaveNoViolations } from 'jest-axe';
import { expect } from 'vitest';

// Extend Vitest matchers
expect.extend(toHaveNoViolations);

/**
 * Test component for accessibility violations
 * @param container - DOM container to test
 */
export async function testA11y(container: HTMLElement) {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
}

export { axe };
