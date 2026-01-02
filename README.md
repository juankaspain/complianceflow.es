# ComplianceFlow

> Enterprise-grade compliance platform with APIs for SII, Verifactu, and KYC integrations

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 Tech Stack

### Core Framework
- **Next.js 15.1.3** - React framework with App Router, Server Components, and Turbopack
- **React 19.0.0** - Latest stable with Actions, Suspense improvements, and React Compiler support
- **TypeScript 5.7.2** - Strict type checking with advanced configurations

### Styling & UI
- **Tailwind CSS 4.0.0** - CSS framework with new Oxide engine (10x faster builds)
- **Framer Motion 11.15.0** - Advanced animations and gestures
- **Radix UI** - Accessible, unstyled component primitives
  - Dialog, Dropdown Menu, Slot
- **Lucide React 0.468.0** - Modern icon library

### Data & Validation
- **Zod 3.24.1** - TypeScript-first schema validation
- **zod-to-json-schema** - Automatic API schema documentation

### Authentication & Security
- **NextAuth v5** - Authentication with App Router support
- **Upstash Rate Limit** - Edge-ready rate limiting
- **Upstash Redis** - Serverless Redis for sessions and caching

### Logging & Analytics
- **Pino 9.5.0** - High-performance structured logging
- **PostHog 1.187.2** - Product analytics, feature flags, session replay

### Testing
- **Vitest 2.1.8** - Fast unit testing with native ESM support
- **Playwright 1.49.1** - End-to-end testing
- **Testing Library** - React component testing
- **Coverage V8** - Native code coverage

### Code Quality
- **ESLint 9.17.0** - Flat config format with TypeScript support
- **Prettier 3.4.2** - Code formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged** - Run linters on staged files

### Performance & Optimization
- **Bundle Analyzer** - Visualize bundle size
- **Lighthouse CI** - Automated performance audits
- **Turbopack** - Next.js dev server (76% faster)

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/juankaspain/complianceflow.es.git
cd complianceflow.es

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server with Turbopack
npm run dev
```

## 🛠️ Development

```bash
# Development server with Turbopack (faster HMR)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Watch mode
npm run test:watch

# UI mode (interactive)
npm run test:ui

# Coverage report
npm run test:coverage

# E2E tests
npm run test:e2e
npm run test:e2e:ui
```

## 📊 Performance Analysis

```bash
# Analyze bundle size
npm run analyze

# Run Lighthouse CI
npm run lighthouse
```

## 🎨 Project Structure

```
complianceflow.es/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── globals.css   # Tailwind 4 theme config
│   │   └── layout.tsx    # Root layout
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   └── brand/       # Brand-specific components
│   ├── lib/             # Utilities and helpers
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── tests/               # Test files
│   ├── unit/           # Unit tests
│   └── e2e/            # Playwright E2E tests
├── eslint.config.mjs    # ESLint 9 flat config
├── tailwind.config.ts   # Tailwind configuration
├── vitest.config.ts     # Vitest configuration
└── next.config.js       # Next.js configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.complianceflow.es

# NextAuth
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000

# PostHog
NEXT_PUBLIC_POSTHOG_KEY=your-key-here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Upstash Redis
UPSTASH_REDIS_REST_URL=your-url-here
UPSTASH_REDIS_REST_TOKEN=your-token-here
```

## 🚀 Optimizations Applied

### Recent Updates (January 2026)

1. **Next.js 15 + React 19**
   - 76.7% faster dev server startup
   - 96.3% faster Fast Refresh
   - Improved Server Components

2. **Tailwind CSS 4**
   - 10x faster builds with Oxide engine
   - CSS-based configuration (`@theme`)
   - P3 color space support

3. **ESLint 9 Flat Config**
   - Modern configuration format
   - Better TypeScript integration
   - Improved performance

4. **Complete Testing Suite**
   - Vitest for unit tests
   - Playwright for E2E
   - Coverage reporting

5. **Enterprise Features**
   - Rate limiting with Upstash
   - Structured logging with Pino
   - Session management with Redis
   - Authentication with NextAuth v5

## 📝 Scripts Explanation

- `dev` - Start development server with Turbopack
- `build` - Create production build
- `start` - Start production server
- `lint` - Run ESLint
- `lint:fix` - Fix linting issues
- `type-check` - Run TypeScript compiler check
- `format` - Format code with Prettier
- `test` - Run unit tests
- `test:e2e` - Run E2E tests
- `analyze` - Analyze bundle size
- `lighthouse` - Run Lighthouse audits

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Private - All rights reserved

## 👤 Author

**Juan Carlos Garcia Arriero**
- Email: juanca755@hotmail.com
- GitHub: [@juankaspain](https://github.com/juankaspain)

---

**Built with ❤️ for enterprise compliance**
