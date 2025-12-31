# Current Technology Stack

## 📋 Overview

This document describes the **actual** technology stack currently implemented in ComplianceFlow (as of December 2025).

---

## 💻 Frontend Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|----------|
| **Next.js** | 14.2.0 | React framework with App Router |
| **React** | 18.3.0 | UI library |
| **TypeScript** | 5.3.0 | Type safety |
| **Tailwind CSS** | 3.4.0 | Utility-first CSS framework |

### UI Components

| Package | Version | Purpose |
|---------|---------|----------|
| **Radix UI Accordion** | 1.1.2 | Accessible accordion component |
| **Radix UI Dialog** | 1.0.5 | Modal dialogs |
| **Radix UI Dropdown** | 2.0.6 | Dropdown menus |
| **Radix UI Slot** | 1.0.2 | Composition primitive |
| **Radix UI Tabs** | 1.0.4 | Tab navigation |
| **Lucide React** | 0.344.0 | Icon library |
| **Framer Motion** | 11.0.0 | Animation library |

### Forms & Validation

| Package | Version | Purpose |
|---------|---------|----------|
| **React Hook Form** | 7.51.0 | Form management |
| **Zod** | 3.22.4 | Schema validation |

### Styling Utilities

| Package | Version | Purpose |
|---------|---------|----------|
| **class-variance-authority** | 0.7.0 | Component variants |
| **clsx** | 2.1.0 | Conditional classNames |
| **tailwind-merge** | 2.2.0 | Merge Tailwind classes |
| **tailwindcss-animate** | 1.0.7 | Animation utilities |
| **next-themes** | 0.2.1 | Dark mode support |

### Analytics (Ready)

| Package | Version | Status |
|---------|---------|--------|
| **PostHog** | 1.100.0 | ⚠️ Installed, needs configuration |

---

## 🛠️ Development Tools

### Testing

| Tool | Version | Purpose |
|------|---------|----------|
| **Vitest** | 1.3.0 | Unit testing framework |
| **Playwright** | 1.42.0 | E2E testing |
| **Testing Library React** | 14.2.0 | React component testing |
| **Testing Library Jest-DOM** | 6.4.0 | Custom matchers |
| **Vitest Coverage** | 1.3.0 | Coverage reporting |

### Code Quality

| Tool | Version | Purpose |
|------|---------|----------|
| **ESLint** | 8.56.0 | JavaScript linter |
| **ESLint Config Next** | 14.2.0 | Next.js ESLint rules |
| **ESLint Config Prettier** | 9.1.0 | Prettier integration |
| **ESLint Plugin JSX a11y** | 6.8.0 | Accessibility rules |
| **TypeScript ESLint** | 7.0.0 | TypeScript linting |
| **Prettier** | 3.2.0 | Code formatter |
| **Prettier Tailwind Plugin** | 0.5.11 | Sort Tailwind classes |

### Git Hooks

| Tool | Version | Purpose |
|------|---------|----------|
| **Husky** | 9.0.0 | Git hooks manager |
| **Lint-staged** | 15.2.0 | Run linters on staged files |

### Build & Analysis

| Tool | Version | Purpose |
|------|---------|----------|
| **@next/bundle-analyzer** | 14.2.0 | Bundle size analysis |
| **@lhci/cli** | 0.13.0 | Lighthouse CI |
| **Autoprefixer** | 10.4.0 | CSS vendor prefixing |
| **PostCSS** | 8.4.0 | CSS transformations |

---

## 🚀 Deployment & Infrastructure

### Hosting

| Service | Purpose | Status |
|---------|---------|--------|
| **Netlify** | Static site hosting | ✅ Active |
| **Netlify CDN** | Global content delivery | ✅ Active |

### Build Configuration

```javascript
// next.config.js
module.exports = {
  output: 'export',              // Static export
  images: { unoptimized: true }, // Required for static
  trailingSlash: true,           // SEO friendly URLs
}
```

---

## 🔧 CI/CD

### GitHub Actions Workflows

| Workflow | File | Purpose | Status |
|----------|------|---------|--------|
| **CI Pipeline** | `ci.yml` | Build, lint, test | ✅ Working |
| **Security Scan** | `security-scan.yml` | CodeQL, Snyk, audits | ✅ Working |
| **Code Quality** | `code-quality.yml` | ESLint, coverage, E2E | ✅ Working |
| **Deploy Production** | `deploy-production.yml` | Netlify deployment | ✅ Working |
| **PR Checks** | `pr-checks.yml` | PR validation | ✅ Working |
| **Dependency Updates** | `dependency-update.yml` | Dependabot helper | ✅ Working |

---

## 📊 Not Yet Implemented

### Backend (Planned)

| Technology | Status | Notes |
|------------|--------|-------|
| **Database** | ❌ Not implemented | PostgreSQL planned |
| **Caching** | ❌ Not implemented | Redis planned |
| **Authentication** | ❌ Not implemented | NextAuth.js planned |
| **API Routes** | ⚠️ Minimal | Only basic endpoints |

### Services (Planned)

| Service | Status | Notes |
|---------|--------|-------|
| **Sentry** | ❌ Not configured | Error tracking ready |
| **Email** | ❌ Not implemented | SMTP/SendGrid planned |
| **Storage** | ❌ Not implemented | S3/Cloudinary planned |

---

## 📝 Node & npm Requirements

```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

### Recommended Versions

- **Node.js**: 20.x LTS (recommended)
- **npm**: 10.x (comes with Node 20)

---

## 📦 Bundle Size

### Current Metrics

```
Initial Bundle: ~150KB (gzipped)
Total Assets: ~500KB (including images)
Build Output: ./out directory (static files)
```

### Optimization

- ✅ Tree shaking enabled
- ✅ Code splitting automatic
- ✅ CSS purging with Tailwind
- ✅ SVG optimization
- ✅ Static generation

---

## 🎯 Browser Support

### Supported Browsers

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- iOS Safari: Last 2 versions
- Android Chrome: Last 2 versions

### Features Used

- ES2020+ syntax
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer
- ResizeObserver

---

## 🔄 Update Frequency

| Category | Frequency | Method |
|----------|-----------|--------|
| **Dependencies** | Monthly | Dependabot |
| **Security Patches** | Weekly | npm audit |
| **Major Updates** | Quarterly | Manual review |
| **Node.js** | LTS releases | Manual upgrade |

---

## 📚 Additional Documentation

- **[Getting Started](GETTING_STARTED.md)** - Setup instructions
- **[Deployment Guide](DEPLOYMENT_GUIDE.md)** - How to deploy
- **[Workflow Fixes](WORKFLOW_FIXES.md)** - CI/CD troubleshooting
- **[Brand Guidelines](BRAND_GUIDELINES.md)** - Design system

---

**Last Updated**: December 31, 2025
**Version**: 2.0.0
