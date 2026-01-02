# ComplianceFlow 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-Private-red)](LICENSE)

> Enterprise-grade compliance platform providing APIs for Spanish tax regulations (SII, Verifactu) and KYC integrations.

## 🌟 Features

- **⚡ Next.js 15** with Turbopack for blazing-fast development
- **🎨 Tailwind CSS 4** with Oxide engine for optimal performance
- **🔐 Enterprise Security** with OWASP compliance and GDPR adherence
- **📊 Analytics** powered by PostHog for product insights
- **🧪 Testing Suite** with Vitest + Playwright for reliability
- **♿ Accessibility** WCAG 2.1 compliant components
- **🌍 SEO Optimized** with Next.js metadata and structured data
- **📱 Responsive Design** mobile-first approach

## 🛠️ Tech Stack v3.0

### Core Framework
- **Next.js 15.1** - React framework with App Router, Server Components, and Turbopack
- **React 19.0** - Latest React with concurrent features
- **TypeScript 5.7** - Strict type safety with enhanced compiler checks

### Styling & UI
- **Tailwind CSS 4.0** - Utility-first CSS with Oxide engine
- **Framer Motion 11** - Production-ready animation library
- **Radix UI** - Headless accessible components
- **Lucide React** - Beautiful & consistent icon set

### Development Tools
- **Vitest 2.1** - Fast unit testing with native ESM support
- **Playwright 1.49** - Reliable E2E testing across browsers
- **ESLint 9** - Modern linting with flat config
- **Prettier 3.4** - Code formatting with Tailwind plugin
- **Husky 9** - Git hooks for quality checks

### Utilities
- **Zod 3.24** - TypeScript-first schema validation
- **PostHog** - Product analytics and feature flags
- **NextAuth v5** - Authentication for Next.js
- **Upstash** - Serverless Redis for rate limiting
- **Pino** - High-performance logging

## 🚀 Getting Started

### Prerequisites

```bash
node >= 20.0.0
npm >= 10.0.0
```

### Installation

```bash
# Clone the repository
git clone https://github.com/juankaspain/complianceflow.es.git
cd complianceflow.es

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

### Development
```bash
npm run dev              # Start dev server with Turbopack (faster)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types
```

### Testing
```bash
npm run test             # Run unit tests
npm run test:watch       # Run tests in watch mode
npm run test:ui          # Open Vitest UI
npm run test:coverage    # Generate coverage report
npm run test:e2e         # Run E2E tests with Playwright
npm run test:e2e:ui      # Open Playwright UI
```

### Analysis
```bash
npm run analyze          # Analyze bundle size
npm run lighthouse       # Run Lighthouse CI
```

## 🏗️ Project Structure

```
complianceflow.es/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (routes)/        # Route groups
│   │   ├── api/             # API routes
│   │   └── layout.tsx       # Root layout
│   ├── components/          # React components
│   │   ├── ui/              # Reusable UI components
│   │   └── features/        # Feature-specific components
│   ├── lib/                 # Utilities and helpers
│   │   ├── api/             # API clients
│   │   ├── hooks/           # Custom React hooks
│   │   └── utils/           # Utility functions
│   ├── styles/              # Global styles
│   └── types/               # TypeScript types
├── tests/
│   ├── unit/                # Unit tests
│   └── e2e/                 # E2E tests
├── public/                  # Static assets
└── config files             # Configuration
```

## 🧪 Testing Strategy

### Unit Tests (Vitest)

Test individual components and functions:

```typescript
// src/components/Button/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### E2E Tests (Playwright)

Test critical user flows:

```typescript
// tests/e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/ComplianceFlow/);
});
```

## 🌐 Environment Variables

Create `.env.local` with:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://complianceflow.es
NEXT_PUBLIC_API_URL=https://api.complianceflow.es

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Authentication (NextAuth v5)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here

# Upstash Redis (Rate Limiting)
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

## 🚢 Deployment

### Cloudflare Pages (Recommended)

1. Connect your GitHub repository
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/`
3. Add environment variables
4. Deploy!

### Vercel (Alternative)

```bash
npm i -g vercel
vercel --prod
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

- HTTPS enforced with HSTS
- CSP headers configured
- XSS protection enabled
- CSRF protection via NextAuth
- Rate limiting on API routes
- Input validation with Zod
- Regular security audits

## 🤝 Contributing

This is a private repository. For internal contributors:

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Run tests: `npm run test && npm run test:e2e`
4. Commit with conventional commits: `git commit -m 'feat: add amazing feature'`
5. Push and create a Pull Request

### Commit Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## 📄 License

Private and Proprietary - All rights reserved.

## 👤 Author

**Juan Carlos Garcia Arriero**
- Email: juanca755@hotmail.com
- GitHub: [@juankaspain](https://github.com/juankaspain)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and tooling
- Open source community

---

**Built with ❤️ using Next.js 15 and React 19**
