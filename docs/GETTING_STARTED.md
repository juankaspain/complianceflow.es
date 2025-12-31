# Getting Started with ComplianceFlow

## 📝 Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** (20.x LTS recommended)
- **npm 9+** (10.x recommended)
- **Git**
- A code editor (VS Code recommended)

### Check Versions

```bash
node --version  # Should be >= 18.0.0
npm --version   # Should be >= 9.0.0
git --version
```

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/juankaspain/complianceflow.es.git
cd complianceflow.es
```

### 2. Install Dependencies

```bash
npm ci  # Use ci for clean install
```

This will install all dependencies from `package-lock.json`.

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**You should see**: ComplianceFlow homepage with the professional logo and dark theme.

---

## 📚 Project Structure Overview

```
complianceflow.es/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   └── lib/              # Utilities
├── public/           # Static assets (logos, images)
├── docs/             # Documentation
└── .github/          # CI/CD workflows
```

---

## 🛠️ Common Development Tasks

### Running the Development Server

```bash
npm run dev
```

- Hot reload enabled
- Opens on `http://localhost:3000`
- Changes auto-refresh in browser

### Building for Production

```bash
npm run build
```

Output: `./out` directory with static files.

### Preview Production Build

```bash
npm run build
npx serve out
```

Preview at `http://localhost:3000`

### Type Checking

```bash
npm run type-check
```

Runs TypeScript compiler without emitting files.

### Linting

```bash
npm run lint      # Check for issues
npm run lint:fix  # Auto-fix issues
```

### Formatting

```bash
npm run format         # Format all files
npm run format:check   # Check formatting
```

### Clean Build Artifacts

```bash
npm run clean
```

Removes `.next`, `out`, and cache directories.

---

## 🎯 Environment Variables

### Create .env.local

```bash
cp .env.example .env.local
```

### Required Variables

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://complianceflow.netlify.app
NEXT_PUBLIC_API_URL=https://api.complianceflow.es

# Analytics (Optional)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here
```

### Variable Prefixes

- `NEXT_PUBLIC_*` - Exposed to browser
- No prefix - Server-side only (not used in static export)

---

## 🧪 Testing

### Unit Tests

```bash
npm run test:unit
```

**Note**: Tests are optional and won't block builds if missing.

### E2E Tests

```bash
npm run test:e2e
```

Requires Playwright browsers installed:

```bash
npx playwright install
```

### Watch Mode

```bash
npm run test:watch
```

### Coverage Report

```bash
npm run test:coverage
```

---

## 🔧 Git Workflow

### Pre-commit Hooks

Husky automatically runs on commit:

1. **Lint-staged**: Lints modified files
2. **Prettier**: Formats code
3. **Type-check**: Validates TypeScript

### Commit Message Format

Use Conventional Commits:

```bash
feat: add new feature
fix: bug fix
docs: documentation update
style: code style changes
refactor: code refactoring
test: add tests
chore: maintenance
```

### Creating a Branch

```bash
git checkout -b feature/your-feature-name
```

### Making Changes

```bash
# Make your changes
git add .
git commit -m "feat: add awesome feature"
git push origin feature/your-feature-name
```

---

## 🐛 Common Issues

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Node Modules Issues

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clean and rebuild
npm run clean
npm run build
```

### TypeScript Errors

```bash
# Check types
npm run type-check

# Restart VS Code TypeScript server
# Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server"
```

### Image Not Loading

- Check file exists in `public/` directory
- Use absolute paths: `/logo.svg` not `./logo.svg`
- Verify image format is supported

---

## 📚 Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-playwright.playwright",
    "ZixuanChen.vitest-explorer"
  ]
}
```

Install with: `Cmd/Ctrl + Shift + P` > "Extensions: Show Recommended Extensions"

---

## 🔗 Useful Links

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Project Docs
- [Current Stack](CURRENT_STACK.md)
- [Deployment Guide](DEPLOYMENT_GUIDE.md)
- [Workflow Fixes](WORKFLOW_FIXES.md)
- [Brand Guidelines](BRAND_GUIDELINES.md)

---

## ❓ Need Help?

- **Documentation**: Check `docs/` directory
- **Issues**: [GitHub Issues](https://github.com/juankaspain/complianceflow.es/issues)
- **Email**: juanca755@hotmail.com

---

## ✅ Checklist for First Setup

- [ ] Node.js 18+ installed
- [ ] Repository cloned
- [ ] Dependencies installed (`npm ci`)
- [ ] Dev server runs (`npm run dev`)
- [ ] Can access localhost:3000
- [ ] Logo appears in header
- [ ] No console errors
- [ ] TypeScript working in editor
- [ ] Can make a commit
- [ ] `.env.local` created (if needed)

---

**Welcome to ComplianceFlow! 🎉**

You're ready to start developing. Check out the [Current Stack](CURRENT_STACK.md) to understand what's available.
