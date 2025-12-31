# 🧪 Tests Directory

## Structure

```
tests/
├── setup.ts                  # Global test setup
├── utils/                    # Shared utilities
│   ├── test-utils.tsx        # Custom render & exports
│   ├── a11y.ts                # Accessibility helpers
│   ├── mock-data.ts           # Mock data for tests
│   └── helpers.ts             # Helper functions
├── unit/                     # Unit tests (Vitest)
│   └── pages/                # Page component tests
├── integration/              # Integration tests
│   ├── api.test.ts           # API integration
│   └── components.test.tsx   # Component integration
└── e2e/                      # E2E tests (Playwright)
    ├── homepage.spec.ts
    ├── navigation.spec.ts
    ├── contact-form.spec.ts
    ├── pricing.spec.ts
    ├── responsive.spec.ts
    ├── accessibility.spec.ts
    ├── performance.spec.ts
    └── seo.spec.ts
```

## Test Types

### 📦 Unit Tests (`tests/unit/`)
**What:** Test individual components and functions in isolation
**When:** During development, on every commit
**Tools:** Vitest + React Testing Library
**Coverage:** Minimum 80%

### 🔗 Integration Tests (`tests/integration/`)
**What:** Test how multiple components/modules work together
**When:** Before merging to main
**Tools:** Vitest + React Testing Library
**Focus:** API calls, component interactions, data flow

### 🎭 E2E Tests (`tests/e2e/`)
**What:** Test complete user flows in a real browser
**When:** Before deployment, on PR
**Tools:** Playwright
**Focus:** Critical paths, user journeys, cross-browser

### ♿ Accessibility Tests
**What:** Check WCAG 2.1 compliance
**When:** On every page change
**Tools:** axe-core + Playwright
**Standard:** WCAG 2.1 AA

### 📊 Performance Tests
**What:** Measure load times, bundle sizes, Core Web Vitals
**When:** Before deployment
**Tools:** Lighthouse CI
**Targets:** LCP < 2.5s, FID < 100ms, CLS < 0.1

### 🔍 SEO Tests
**What:** Verify meta tags, structured data, sitemap
**When:** On every page
**Tools:** Playwright
**Check:** Titles, descriptions, Open Graph, Schema.org

## Quick Reference

### Run Specific Tests
```bash
# Unit test for home page
npx vitest run tests/unit/pages/home.test.tsx

# E2E test for navigation
npx playwright test tests/e2e/navigation.spec.ts

# Only accessibility tests
npm run test:a11y

# Integration tests
npx vitest run tests/integration/
```

### Debug Tests
```bash
# Debug unit tests
npx vitest --ui

# Debug E2E with browser
npx playwright test --headed --debug

# Generate test report
npx playwright show-report
```

### Watch Mode
```bash
# Watch unit tests
npm run test:watch

# Watch specific file
npx vitest watch tests/unit/pages/home.test.tsx
```

## Writing New Tests

### 1. Unit Test Template
```typescript
import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '../utils/test-utils';

describe('ComponentName', () => {
  it('should render correctly', () => {
    renderWithProviders(<ComponentName />);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
```

### 2. E2E Test Template
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/path');
    await expect(page.locator('h1')).toBeVisible();
  });
});
```

### 3. Accessibility Test Template
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('no a11y violations', async ({ page }) => {
  await page.goto('/path');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

## Common Patterns

### Testing Forms
```typescript
const user = userEvent.setup();
await user.type(screen.getByLabelText('Email'), 'test@example.com');
await user.click(screen.getByRole('button', { name: /submit/i }));
```

### Testing API Calls
```typescript
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: async () => ({ success: true }),
  } as Response)
);
```

### Testing Navigation
```typescript
await page.click('text=Features');
await expect(page).toHaveURL('/features');
```

## CI/CD Integration

All tests run automatically in GitHub Actions:
- ✅ On every push
- ✅ On every PR
- ✅ Before deployment
- ✅ Weekly security scans

See `.github/workflows/` for configuration.

## Coverage Reports

Generated in `coverage/` directory:
- `index.html` - Interactive coverage report
- `lcov.info` - Coverage data for CI
- Uploaded to Codecov automatically

## Best Practices

1. ✅ **Write tests first** (TDD when possible)
2. ✅ **Test user behavior**, not implementation
3. ✅ **Use semantic queries** (getByRole, getByLabelText)
4. ✅ **Keep tests simple** and focused
5. ✅ **Mock external dependencies**
6. ✅ **Test accessibility** on every page
7. ✅ **Run tests locally** before pushing
8. ✅ **Update tests** when features change

## Troubleshooting

### Tests failing locally but passing in CI
- Clear cache: `rm -rf node_modules/.cache`
- Reinstall: `npm ci`

### Playwright tests timing out
- Increase timeout in `playwright.config.ts`
- Check network conditions
- Ensure dev server is running

### Coverage not meeting threshold
- Run `npm run test:coverage`
- Check `coverage/index.html` for details
- Add missing test cases

## Resources

- [Testing Guide](../TESTING.md)
- [Vitest Docs](https://vitest.dev)
- [Playwright Docs](https://playwright.dev)
- [Testing Library](https://testing-library.com)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
