# GitHub Actions Workflows

This directory contains all CI/CD workflows for the ComplianceFlow project.

## Workflows Overview

### Core CI/CD

#### 🔄 CI Pipeline (`ci.yml`)
- **Trigger**: Push to main/develop/feat/*, Pull requests
- **Purpose**: Continuous Integration checks
- **Jobs**:
  - Linting with ESLint
  - Code formatting check with Prettier
  - TypeScript type checking
  - Security audit
  - Build verification
  - Unit tests
- **Duration**: ~10-15 minutes

#### 📊 Code Quality (`code-quality.yml`)
- **Trigger**: Push to main/develop, PRs, Weekly schedule
- **Purpose**: Deep code quality analysis
- **Jobs**:
  - Quality gate checks
  - Test coverage reporting
  - E2E tests with Playwright
  - Lighthouse performance audits
- **Duration**: ~20-30 minutes

#### 🔒 Security Scan (`security-scan.yml`)
- **Trigger**: Push, PRs, Weekly schedule, Manual
- **Purpose**: Security vulnerability detection
- **Jobs**:
  - CodeQL analysis
  - Dependency vulnerability scanning with Snyk
  - Secret detection with TruffleHog
  - License compliance checking
- **Duration**: ~15-20 minutes

### Pull Request Workflows

#### ✅ PR Checks (`pr-checks.yml`)
- **Trigger**: PR opened/synchronized/reopened
- **Purpose**: Automated PR validation
- **Jobs**:
  - PR title validation (semantic commits)
  - Code analysis (large files, TODOs)
  - Bundle size checking
  - Preview deployment to Netlify
  - Automated PR summary comment
- **Duration**: ~15-20 minutes

### Deployment

#### 🚀 Deploy Production (`deploy-production.yml`)
- **Trigger**: Push to main, Tags, Manual
- **Purpose**: Production deployment
- **Jobs**:
  - Pre-deployment checks (lint, test, build)
  - Deploy to Netlify
  - Health checks
  - Deployment status reporting
- **Duration**: ~20 minutes
- **Environment**: production
- **URL**: https://complianceflow.netlify.app

### Automation

#### 🏷️ Release (`release.yml`)
- **Trigger**: Git tags (v*.*.*), Manual
- **Purpose**: Automated release creation
- **Jobs**:
  - Run all tests
  - Generate changelog
  - Create GitHub release
  - Update CHANGELOG.md
  - Trigger production deployment
- **Duration**: ~25 minutes

#### 📦 Dependency Updates (`dependency-update.yml`)
- **Trigger**: Weekly (Mondays at 3 AM), Manual
- **Purpose**: Automated dependency updates
- **Jobs**:
  - Check for outdated dependencies
  - Update and test
  - Create PR with changes
  - Auto-merge minor/patch Dependabot PRs
- **Duration**: ~20 minutes

#### 🧹 Stale (`stale.yml`)
- **Trigger**: Daily, Manual
- **Purpose**: Clean up stale issues and PRs
- **Configuration**:
  - Issues: Stale after 60 days, close after 7 days
  - PRs: Stale after 30 days, close after 14 days
  - Exempt labels: pinned, security, bug, enhancement
- **Duration**: ~5 minutes

#### 📊 Performance Monitor (`performance-monitor.yml`)
- **Trigger**: Push to main, PRs, Every 6 hours, Manual
- **Purpose**: Continuous performance monitoring
- **Jobs**:
  - Lighthouse CI monitoring
  - Bundle size analysis
  - Performance budget checks
- **Duration**: ~15-20 minutes

#### 💾 Backup (`backup.yml`)
- **Trigger**: Weekly (Sundays at 2 AM), Manual
- **Purpose**: Automated repository backups
- **Jobs**:
  - Create compressed backup archive
  - Upload to GitHub artifacts
  - Retention: 90 days
- **Duration**: ~10 minutes

## Configuration Files

### `.github/changelog-config.json`
Configuration for automated changelog generation in releases.

### `.github/dependabot.yml`
Dependabot configuration for automated dependency updates.

### `.github/size-limit.json`
Bundle size limits and budgets.

## Secrets Required

### Required Secrets
- `NETLIFY_SITE_ID`: Netlify site identifier
- `NETLIFY_AUTH_TOKEN`: Netlify authentication token

### Optional Secrets
- `CODECOV_TOKEN`: Codecov integration token
- `SNYK_TOKEN`: Snyk security scanning token
- `LHCI_GITHUB_APP_TOKEN`: Lighthouse CI token
- `NEXT_PUBLIC_SITE_URL`: Public site URL
- `NEXT_PUBLIC_API_URL`: API endpoint URL
- `NEXT_PUBLIC_POSTHOG_KEY`: PostHog analytics key

## Workflow Best Practices

### Concurrency Control
All workflows use concurrency groups to prevent multiple runs:
```yaml
concurrency:
  group: workflow-${{ github.ref }}
  cancel-in-progress: true
```

### Caching Strategy
Dependencies and build artifacts are cached:
```yaml
- uses: actions/cache@v4
  with:
    path: |
      ~/.npm
      node_modules
      .next/cache
```

### Timeout Protection
All jobs have timeout limits:
```yaml
timeout-minutes: 15
```

### Error Handling
Non-critical steps use `continue-on-error: true`

### Node.js Version
All workflows use Node.js 20 (LTS) for consistency.

## Monitoring and Notifications

### GitHub Step Summaries
All workflows generate detailed summaries visible in the Actions tab.

### Deployment Status
Deployment workflows create GitHub deployments for tracking.

### Artifact Retention
- Test reports: 30 days
- Build artifacts: 7 days
- Backups: 90 days

## Manual Triggers

Most workflows support manual triggering via `workflow_dispatch`:
1. Go to Actions tab
2. Select the workflow
3. Click "Run workflow"
4. Fill in any required inputs

## Performance Optimization

- **Parallel Execution**: Independent jobs run in parallel
- **Smart Caching**: Dependencies cached across runs
- **Selective Testing**: Only run relevant tests based on changes
- **Optimized Docker**: Use multi-stage builds when applicable

## Troubleshooting

### Failed Workflows
1. Check the logs in the Actions tab
2. Review the step summary
3. Check for missing secrets
4. Verify Node.js version compatibility

### Stuck Workflows
- All workflows have timeout protection
- Use "Cancel workflow" button if needed

### Permission Issues
- Verify repository secrets are configured
- Check workflow permissions in settings

## Contributing

When adding new workflows:
1. Follow existing naming conventions
2. Add appropriate concurrency controls
3. Set reasonable timeouts
4. Use caching where applicable
5. Add continue-on-error for non-critical steps
6. Update this README
7. Test with workflow_dispatch first

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
