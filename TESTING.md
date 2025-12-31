# 🧪 Testing Guide - ComplianceFlow

## 🎯 Overview

This project has a comprehensive testing infrastructure covering:
- ✅ **Unit Tests** (Vitest + React Testing Library)
- 🎭 **E2E Tests** (Playwright)
- ♿ **Accessibility Tests** (axe-core)
- 📊 **Performance Tests** (Lighthouse)
- 🔒 **Security Scans** (Snyk + CodeQL)
- 📝 **SEO Tests**

---

## 🛠️ Setup

### Install Dependencies
```bash
npm install
```

### Install Playwright Browsers
```bash
npx playwright install
```

---

## 📝 Test Commands

### Unit Tests
```bash
# Run unit tests
npm run test:unit

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage

# UI mode (interactive)
npx vitest --ui
```

### E2E Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run in UI mode
npm run test:e2e:ui

# Debug mode
npm run test:e2e:debug

# Run specific test file
npx playwright test tests/e2e/homepage.spec.ts

# Run on specific browser
npx playwright test --project=chromium
```

### Accessibility Tests
```bash
# Run accessibility tests
npm run test:a11y

# Generate accessibility report
npx playwright test tests/e2e/accessibility.spec.ts --reporter=html
```

### Performance Tests
```bash
# Run Lighthouse CI
npm run lighthouse

# Run performance tests
npx playwright test tests/e2e/performance.spec.ts
```

### All Tests
```bash
# Run everything
npm run test:all
```

---

## 📁 Test Structure

```
tests/
├── setup.ts                    # Test setup and mocks
├── utils/                      # Test utilities
│   ├── test-utils.tsx          # Custom render functions
│   ├── a11y.ts                  # Accessibility helpers
│   ├── mock-data.ts             # Mock data
│   └── helpers.ts               # Helper functions
├── unit/                       # Unit tests
│   └── pages/
│       ├── home.test.tsx
│       ├── features.test.tsx
│       ├── pricing.test.tsx
│       ├── contact.test.tsx
│       ├── security.test.tsx
│       └── blog.test.tsx
└── e2e/                        # E2E tests
    ├── homepage.spec.ts
    ├── navigation.spec.ts
    ├── contact-form.spec.ts
    ├── pricing.spec.ts
    ├── responsive.spec.ts
    ├── accessibility.spec.ts
    ├── performance.spec.ts
    └── seo.spec.ts
```

---

## 📊 Coverage Thresholds

Minimum coverage requirements (configured in `vitest.config.ts`):
- **Lines**: 80%
- **Functions**: 80%
- **Branches**: 80%
- **Statements**: 80%

---

## 🤖 GitHub Actions CI/CD

### Workflows

#### 1. **Test Workflow** (`.github/workflows/test.yml`)
Runs on every push and PR:
- ✅ Unit tests with coverage
- 🎭 E2E tests (Chromium, Firefox, WebKit)
- ♿ Accessibility tests
- 📝 Lint & type check
- 📊 Lighthouse CI

#### 2. **PR Checks** (`.github/workflows/pr-checks.yml`)
- Validates PR title (conventional commits)
- Checks for merge conflicts
- Runs quick tests
- Checks bundle size
- Dependency review

#### 3. **Deploy Preview** (`.github/workflows/deploy-preview.yml`)
- Builds and deploys preview to Netlify
- Runs tests before deployment
- Comments PR with preview URL

#### 4. **Security Scan** (`.github/workflows/security.yml`)
- npm audit
- Snyk vulnerability scan
- CodeQL analysis
- Runs weekly + on every push to main

---

## ✍️ Writing Tests

### Unit Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../../utils/test-utils';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    renderWithProviders(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should handle click events', async () => {
    const { user } = renderWithProviders(<MyComponent />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(screen.getByText('Clicked')).toBeInTheDocument();
  });
});
```

### E2E Test Example

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature', () => {
  test('should work correctly', async ({ page }) => {
    await page.goto('/feature');
    await expect(page.locator('h1')).toBeVisible();
    await page.click('button');
    await expect(page).toHaveURL('/success');
  });
});
```

### Accessibility Test Example

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should have no a11y violations', async ({ page }) => {
  await page.goto('/');
  
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});
```

---

## 📖 Best Practices

### Unit Tests
1. **Test user behavior**, not implementation details
2. Use **semantic queries** (`getByRole`, `getByLabelText`)
3. **Mock external dependencies** (API calls, external libraries)
4. Keep tests **isolated** and **independent**
5. Use **descriptive test names**

### E2E Tests
1. Test **critical user journeys**
2. Use **page objects** for complex pages
3. **Wait for elements** properly (avoid `waitForTimeout`)
4. Test on **multiple browsers**
5. Use **fixtures** for common setup

### Accessibility
1. Test with **real screen readers** when possible
2. Check **keyboard navigation**
3. Verify **color contrast**
4. Test **ARIA labels** and roles
5. Ensure **semantic HTML**

---

## 🐛 Debugging

### Debug Unit Tests
```bash
# Add breakpoints in code
import { debug } from '@testing-library/react';
debug(); // Prints DOM

# Run specific test
npx vitest run tests/unit/pages/home.test.tsx
```

### Debug E2E Tests
```bash
# Debug mode (step through)
npm run test:e2e:debug

# Show browser (headed mode)
npx playwright test --headed

# Generate trace
npx playwright test --trace on
npx playwright show-trace trace.zip
```

### View Reports
```bash
# Unit test coverage
open coverage/index.html

# Playwright report
npx playwright show-report

# Lighthouse report
open .lighthouseci/lhr-*.html
```

---

## 📊 Test Reports

All test reports are uploaded as artifacts in GitHub Actions:
- **Coverage reports**: `coverage-reports/`
- **Playwright reports**: `playwright-report/`
- **Accessibility reports**: `a11y-report/`
- **Lighthouse results**: `.lighthouseci/`

---

## 🔧 Configuration Files

| File | Purpose |
|------|----------|
| `vitest.config.ts` | Vitest configuration |
| `playwright.config.ts` | Playwright configuration |
| `tests/setup.ts` | Test environment setup |
| `.lighthouserc.json` | Lighthouse CI config |

---

## ✅ Checklist

Before committing:
- [ ] All unit tests pass
- [ ] All E2E tests pass
- [ ] No accessibility violations
- [ ] Coverage meets thresholds
- [ ] No linting errors
- [ ] TypeScript compiles
- [ ] Tests are documented

---

## 🔗 Resources

- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
- [Testing Library Docs](https://testing-library.com)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** December 31, 2025
