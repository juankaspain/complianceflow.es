# Changelog

All notable changes to ComplianceFlow will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-01-02

### 🚀 Major Upgrades

#### Framework & Core
- **BREAKING**: Upgraded Next.js from 14.0.4 to 15.1.3
  - Turbopack enabled for 76.7% faster dev server
  - Enhanced App Router with improved caching
  - React Compiler support (experimental)
- **BREAKING**: Upgraded React from 18.2.0 to 19.0.0
  - New concurrent features
  - Improved Server Components
  - Better hydration performance
- Upgraded TypeScript from 5.3.3 to 5.7.2
  - Better type inference
  - Enhanced error messages

#### Styling & UI
- **BREAKING**: Upgraded Tailwind CSS from 3.4.0 to 4.0.0
  - New Oxide engine (10x faster builds)
  - Native cascade layers support
  - P3 color gamut for modern displays
- Upgraded Framer Motion from 10.16.16 to 11.15.0
  - Better performance
  - New animation primitives
- Added Radix UI components
  - `@radix-ui/react-dialog@^1.1.2`
  - `@radix-ui/react-dropdown-menu@^2.1.2`
  - `@radix-ui/react-slot@^1.1.0`

### ✨ New Features

#### Testing Infrastructure
- Added Vitest 2.1.8 for unit testing
  - Lightning-fast test execution
  - Native ESM support
  - Coverage reporting with v8
- Added Playwright 1.49.1 for E2E testing
  - Multi-browser testing (Chrome, Firefox, Safari)
  - Mobile device emulation
  - Visual regression testing
- New test scripts:
  - `npm run test` - Run unit tests
  - `npm run test:watch` - Watch mode
  - `npm run test:ui` - Interactive UI
  - `npm run test:e2e` - E2E tests
  - `npm run test:coverage` - Coverage report

#### Security & Performance
- Added Upstash Redis for rate limiting
  - `@upstash/ratelimit@^2.0.4`
  - `@upstash/redis@^1.34.3`
- Added Pino for structured logging
  - `pino@^9.5.0`
  - `pino-pretty@^12.0.0`
- Added NextAuth v5 (beta)
  - Modern authentication
  - OAuth providers support
  - Session management

#### Developer Experience
- Added `zod-to-json-schema@^3.24.1`
  - Automatic API documentation
  - Schema validation
- Updated all ESLint packages to v8/v9
  - Better error detection
  - Flat config support
- Upgraded Prettier to 3.4.2
  - Faster formatting
  - Better Tailwind integration

### 🔧 Improvements

#### Configuration
- Enhanced `next.config.js`:
  - Turbopack configuration
  - React Compiler (experimental)
  - Improved security headers
  - Better bundle analyzer integration
- Stricter `tsconfig.json`:
  - `verbatimModuleSyntax` enabled
  - `noPropertyAccessFromIndexSignature` enabled
  - `allowUnreachableCode: false`
- New `vitest.config.ts` with optimal settings
- New `playwright.config.ts` with multi-browser support

#### Scripts
- Added `npm run dev` with `--turbo` flag
- Added comprehensive test scripts
- Added `npm run test:coverage` for coverage reports
- Improved `lint-staged` to run tests on changed files

#### Documentation
- Complete README.md rewrite
  - Tech stack documentation
  - Installation guide
  - Testing strategy
  - Deployment instructions
- New `.env.example` with all variables documented
- This CHANGELOG.md

### 🐛 Bug Fixes
- Fixed missing dependencies:
  - `framer-motion` (build errors)
  - `clsx` (utility function errors)
  - `tailwind-merge` (class merging issues)
  - `zod` (validation errors)

### 🗑️ Removed
- Removed deprecated webpack configuration
- Removed unused postcss plugins

### ⚠️ Breaking Changes

1. **Next.js 15 Migration**
   - Some middleware patterns changed
   - Image optimization defaults changed
   - Route handlers have new conventions

2. **React 19 Migration**
   - Some hooks behavior changed
   - Server Component patterns updated
   - useFormState replaced with useActionState

3. **Tailwind 4 Migration**
   - Configuration moved to CSS
   - Some class names changed
   - Plugin API updated

4. **Node.js Requirement**
   - Minimum Node.js version: 20.0.0 (was 18.0.0)
   - Minimum npm version: 10.0.0 (was 9.0.0)

### 🔒 Security
- Updated all dependencies to latest secure versions
- Added rate limiting infrastructure
- Enhanced CSP headers
- Improved CORS configuration

### 📊 Performance
- 76.7% faster dev server startup (Turbopack)
- 96.3% faster Fast Refresh
- 10x faster Tailwind builds (Oxide)
- Smaller bundle sizes
- Better code splitting

### 📝 Migration Guide

To upgrade from 2.x to 3.0:

1. **Update dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Update environment variables**:
   - Copy new variables from `.env.example`
   - Update `NEXT_PUBLIC_SITE_URL` if needed

3. **Run codemods** (if needed):
   ```bash
   npx @next/codemod@latest upgrade
   ```

4. **Update Tailwind config**:
   - Review Tailwind 4 migration guide
   - Update custom classes if any

5. **Test thoroughly**:
   ```bash
   npm run test
   npm run test:e2e
   npm run build
   ```

---

## [2.0.1] - 2026-01-01

### Fixed
- Fixed missing dependencies causing build failures
- Resolved package.json versioning issues

## [2.0.0] - 2025-12-31

### Added
- Initial stable release
- Complete Next.js setup
- Tailwind CSS integration
- Basic component library
- PostHog analytics
- CI/CD pipeline

---

[3.0.0]: https://github.com/juankaspain/complianceflow.es/compare/v2.0.1...v3.0.0
[2.0.1]: https://github.com/juankaspain/complianceflow.es/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/juankaspain/complianceflow.es/releases/tag/v2.0.0
