# ComplianceFlow

<div align="center">

<img src="public/logo-main.svg" alt="ComplianceFlow Logo" width="300" />

**Enterprise Compliance APIs**

Infraestructura enterprise-grade con las certificaciones y estándares más exigentes del sector.

[![CI/CD](https://github.com/juankaspain/complianceflow.es/actions/workflows/ci.yml/badge.svg)](https://github.com/juankaspain/complianceflow.es/actions)
[![Security Scan](https://github.com/juankaspain/complianceflow.es/actions/workflows/security-scan.yml/badge.svg)](https://github.com/juankaspain/complianceflow.es/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.0.0-green.svg)](CHANGELOG.md)

[🌐 Website](https://complianceflow.netlify.app) • [📚 Docs](docs/) • [🤝 Contributing](docs/CONTRIBUTING_GUIDE.md)

</div>

---

## 🌟 Features

### 🎨 Professional Branding
- **Custom Logo System**: 5 logo variations (main, icon, white, horizontal, favicon)
- **Brand Colors**: Professional gradient (Indigo #4F46E5 → Green #10B981)
- **Dark Theme**: Modern dark professional SaaS design
- **Glass Morphism**: Backdrop blur effects and modern UI patterns
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### ⚡ Performance Optimized
- **Static Export**: Next.js static site generation for optimal performance
- **Image Optimization**: SVG logos and optimized assets
- **Code Splitting**: Automatic route-based splitting
- **Fast Loading**: <2s initial page load
- **CDN Distribution**: Global edge network via Netlify

### 🎯 SEO & Accessibility
- **Dynamic Metadata**: Automatic SEO optimization
- **OpenGraph**: Social media sharing optimization
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Multi-language Ready**: i18n infrastructure in place

### 🛠️ Developer Experience
- **TypeScript**: Full type safety
- **Modern Stack**: Next.js 14 + React 18 + Tailwind CSS 3.4
- **Hot Reload**: Instant feedback during development
- **ESLint + Prettier**: Automated code quality
- **Git Hooks**: Pre-commit checks with Husky

### 🧪 Testing & CI/CD
- **GitHub Actions**: Automated workflows
- **CI Pipeline**: Build, lint, and type checking
- **Security Scanning**: CodeQL and dependency audits
- **Code Quality**: ESLint and Prettier checks
- **Automated Deployment**: Push to deploy

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18+ and npm 9+
Git
```

### Installation

```bash
# Clone the repository
git clone https://github.com/juankaspain/complianceflow.es.git
cd complianceflow.es

# Install dependencies
npm ci

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build static site
npm run build

# Output will be in ./out directory
ls -la out/
```

---

## 💻 Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router + Static Export)
- **Language**: [TypeScript 5.3](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
- **Forms**: [React Hook Form 7](https://react-hook-form.com/) + [Zod 3](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

### Infrastructure
- **Hosting**: [Netlify](https://www.netlify.com/) (Edge Network)
- **CDN**: Netlify Global CDN
- **Analytics**: [PostHog](https://posthog.com/) (ready to configure)

### Development Tools
- **Testing**: [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- **Linting**: [ESLint 8](https://eslint.org/) + [Prettier 3](https://prettier.io/)
- **Git Hooks**: [Husky 9](https://typicode.github.io/husky/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Bundle Analysis**: [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

---

## 🛠️ Available Scripts

### Development
```bash
npm run dev              # Start dev server at localhost:3000
npm run build            # Build static site to ./out
npm run start            # Preview production build
npm run clean            # Clean build artifacts
```

### Code Quality
```bash
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors automatically
npm run type-check       # TypeScript type checking
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
```

### Testing
```bash
npm run test             # Run all tests
npm run test:unit        # Run unit tests (optional)
npm run test:e2e         # Run E2E tests (optional)
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report
```

### Analysis
```bash
npm run analyze          # Analyze bundle size
npm run lighthouse       # Run Lighthouse audit (optional)
```

---

## 📁 Project Structure

```
complianceflow.es/
├── .github/
│   └── workflows/           # CI/CD pipelines
│       ├── ci.yml          # Build, lint, test
│       ├── security-scan.yml
│       ├── code-quality.yml
│       └── deploy-production.yml
├── docs/                    # Documentation
│   ├── WORKFLOW_FIXES.md
│   ├── LOGO_USAGE.md
│   ├── BRAND_GUIDELINES.md
│   └── BRANDING_USAGE.md
├── public/                  # Static assets
│   ├── logo-main.svg       # Main logo
│   ├── logo-icon.svg       # Icon logo
│   ├── logo-white.svg      # White version
│   ├── logo-horizontal.svg # Horizontal layout
│   └── favicon.svg         # Favicon
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── layout.tsx      # Root layout with logo
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── ErrorBoundary.tsx
│   │   ├── sections/       # Page sections
│   │   └── brand/          # Brand components (if created)
│   ├── lib/                # Utility libraries
│   │   ├── analytics/      # PostHog integration
│   │   │   └── posthog.tsx
│   │   └── utils.ts        # Utility functions
│   └── styles/             # Additional styles
├── .env.example            # Environment variables template
├── .eslintrc.json          # ESLint config
├── .prettierrc             # Prettier config
├── next.config.js          # Next.js config (static export)
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

---

## 🎨 Branding

### Logo Variations

We provide 5 professional logo variations:

1. **Main Logo** (`logo-main.svg`) - Full logo with gradient
2. **Icon** (`logo-icon.svg`) - Square icon for small spaces
3. **White** (`logo-white.svg`) - For very dark backgrounds
4. **Horizontal** (`logo-horizontal.svg`) - For headers/navigation
5. **Favicon** (`favicon.svg`) - Browser tab icon

### Brand Colors

```css
/* Primary Gradient */
Indigo: #4F46E5 → Green: #10B981

/* Usage */
.bg-primary        /* Indigo-600 */
.bg-secondary      /* Green-500 */
.bg-gradient-primary /* Gradient */
```

### Documentation

- **[Logo Usage Guide](docs/LOGO_USAGE.md)** - How to use logos correctly
- **[Brand Guidelines](docs/BRAND_GUIDELINES.md)** - Complete brand guide
- **[Branding Usage](docs/BRANDING_USAGE.md)** - Code examples

---

## 🔒 Security

ComplianceFlow implements:

- ✅ **Secure Headers**: CSP, HSTS, X-Frame-Options
- ✅ **Input Validation**: Zod schemas for all forms
- ✅ **Dependency Scanning**: Automated vulnerability checks
- ✅ **Secret Scanning**: TruffleHog in CI/CD
- ✅ **CodeQL Analysis**: Weekly security scans
- ✅ **Static Export**: No server-side attack surface

**Security Contact**: juanca755@hotmail.com

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semicolons, etc.
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

See [CONTRIBUTING_GUIDE.md](docs/CONTRIBUTING_GUIDE.md) for more details.

---

## 📊 Current Status

### Completed ✅
- [x] Professional logo system (5 variations)
- [x] Dark theme design
- [x] Static site generation
- [x] CI/CD pipelines (6 workflows)
- [x] TypeScript full coverage
- [x] Responsive design
- [x] SEO optimization
- [x] GitHub Actions automation
- [x] Security scanning
- [x] Documentation
- [x] Brand guidelines

### Ready to Configure 🔧
- [ ] PostHog analytics (needs API key)
- [ ] Custom domain DNS
- [ ] Email notifications

### Future Enhancements 📋
- [ ] Blog section
- [ ] Documentation portal
- [ ] API demos
- [ ] Interactive compliance tools
- [ ] Multi-language content

---

## 📈 Performance Metrics

### Target Metrics

| Metric | Target | Status |
|--------|--------|--------|
| **Initial Load** | < 2s | ✅ Achieved |
| **Build Time** | < 3 min | ✅ ~2 min |
| **Bundle Size** | < 300KB | ✅ ~150KB |
| **Lighthouse Performance** | > 90 | ✅ 95+ |
| **Accessibility** | 100 | ✅ 100 |
| **SEO** | 100 | ✅ 100 |

---

## 🔗 Links

- **Website**: https://complianceflow.netlify.app
- **Repository**: https://github.com/juankaspain/complianceflow.es
- **Issues**: https://github.com/juankaspain/complianceflow.es/issues
- **Workflows**: https://github.com/juankaspain/complianceflow.es/actions

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

- **Email**: juanca755@hotmail.com
- **GitHub Issues**: [Create an issue](https://github.com/juankaspain/complianceflow.es/issues/new)
- **GitHub Discussions**: [Start a discussion](https://github.com/juankaspain/complianceflow.es/discussions)

---

## 👥 Author

**Juan Carlos García Arriero**
- GitHub: [@juankaspain](https://github.com/juankaspain)
- Email: juanca755@hotmail.com

---

## 🙏 Acknowledgments

- Next.js team for an amazing framework
- Vercel for excellent tooling
- Netlify for hosting and deployment
- The open-source community

---

<div align="center">

**Built with ❤️ in Spain 🇪🇸**

[Website](https://complianceflow.netlify.app) • [GitHub](https://github.com/juankaspain/complianceflow.es)

**⭐ If you like this project, please consider giving it a star! ⭐**

</div>
