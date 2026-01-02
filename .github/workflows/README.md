# GitHub Actions Workflows

## 🎯 Optimized Workflow Structure

This project uses **3 consolidated workflows** instead of 16+ redundant ones, reducing CI/CD overhead by ~80%.

## 📋 Active Workflows

### 1. CI Pipeline (`ci.yml`)
**Triggers**: Push to main/develop, Pull Requests  
**Purpose**: Complete code quality and build validation

**Jobs**:
- Type checking with TypeScript
- Linting with ESLint 9
- Code formatting validation
- Unit tests with Vitest
- Production build verification

**Optimizations**:
- Uses `concurrency` to cancel redundant runs
- Leverages npm cache for faster installs
- Runs on every push and PR

---

### 2. Security Scan (`security.yml`)
**Triggers**: Push to main, Pull Requests, Weekly schedule (Mondays)  
**Purpose**: Security vulnerability detection

**Jobs**:
- **CodeQL Analysis**: Scans TypeScript/JavaScript for security issues
- **Dependency Audit**: Runs npm audit for vulnerable packages

**Optimizations**:
- Consolidated 3 separate security workflows into 1
- Weekly scheduled scans to catch new vulnerabilities
- Uses `continue-on-error` to not block PRs on audit warnings

---

### 3. Performance (`performance.yml`)
**Triggers**: Pull Requests, Weekly schedule (Mondays 2 AM)  
**Purpose**: Performance monitoring and Lighthouse audits

**Jobs**:
- Lighthouse CI audits (Performance, SEO, Accessibility, Best Practices)
- Bundle size analysis

**Optimizations**:
- Only runs on PRs and weekly (not every push)
- Uses `continue-on-error` to not block development

---

## 🗑️ Removed Workflows

The following redundant/stub workflows were removed:

| Workflow | Reason | Replaced By |
|----------|--------|-------------|
| `main.yml` | Duplicate CI pipeline | `ci.yml` |
| `code-quality.yml` | Duplicate linting | `ci.yml` |
| `pr-checks.yml` | Duplicate PR checks | `ci.yml` |
| `security-scan.yml` | Duplicate security | `security.yml` |
| `security-scheduled.yml` | Duplicate scheduled scan | `security.yml` |
| `lighthouse.yml` | Duplicate performance | `performance.yml` |
| `performance-monitor.yml` | Stub file (382 bytes) | `performance.yml` |
| `backup.yml` | Stub file (347 bytes) | N/A |
| `dependency-update.yml` | Stub file (384 bytes) | Use Dependabot |
| `verify-secrets.yml` | Stub file (382 bytes) | N/A |

---

## 📊 Impact

### Before Optimization
- **16 workflows** running on every event
- **1,341 workflow runs** accumulated
- Multiple duplicate jobs per push
- High GitHub Actions minutes consumption

### After Optimization
- **3 consolidated workflows**
- ~**80% reduction** in workflow runs
- **Faster CI/CD** with concurrency controls
- **Lower Actions minutes** usage

---

## 🔧 Keeping Workflows

These workflows are intentionally kept (for specific use cases):

- `deploy-preview.yml` - Deploy previews for specific branches
- `release.yml` - Release automation
- `stale.yml` - Issue/PR management

---

## 🚀 Best Practices Applied

1. **Concurrency Control**: Automatically cancels outdated workflow runs
2. **Smart Caching**: Uses npm cache to speed up installs
3. **Strategic Triggers**: Only runs when necessary
4. **Fail-Safe**: Uses `continue-on-error` for non-blocking checks
5. **DRY Principle**: No duplicate functionality

---

## 📝 Adding New Workflows

Before adding a new workflow, ask:

1. Can this be added to an existing workflow?
2. Does it need to run on every push?
3. Is there a native GitHub feature (like Dependabot) instead?

If you must add a new workflow:
- Always use `concurrency` groups
- Use caching when possible
- Document the trigger conditions
- Consider scheduled runs vs event-based
