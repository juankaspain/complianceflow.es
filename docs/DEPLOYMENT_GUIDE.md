# Deployment Guide

## 🚀 Overview

ComplianceFlow is deployed as a **static site** to **Netlify** using GitHub Actions for CI/CD.

---

## 🎯 Current Deployment Architecture

```
GitHub Repository
      ↓
   Push to main
      ↓
GitHub Actions
  │
  ├── CI Pipeline (build, lint, test)
  ├── Security Scan
  ├── Code Quality
  └── Deploy Production
      ↓
   npm run build
      ↓
  Static files (./out)
      ↓
 Netlify CLI deploy
      ↓
Netlify CDN
      ↓
https://complianceflow.netlify.app
```

---

## 🛠️ Prerequisites

### Required

1. **GitHub Account** with repo access
2. **Netlify Account** (free tier works)
3. **Netlify Site** created

### GitHub Secrets Required

```
NETLIFY_AUTH_TOKEN  - Your Netlify personal access token
NETLIFY_SITE_ID     - Your site ID from Netlify
```

---

## 🔑 Setup Netlify

### 1. Create Netlify Site

1. Go to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"**
3. Choose **"Import an existing project"**
4. Connect to GitHub
5. Select `complianceflow.es` repository

### 2. Build Settings

```yaml
Build command: npm run build
Publish directory: out
Node version: 20
```

### 3. Get Site ID

```bash
# In Netlify Dashboard:
Site settings > General > Site details > Site ID
```

Copy the Site ID (looks like: `abc123-456def-789ghi`)

### 4. Get Auth Token

```bash
# In Netlify Dashboard:
User settings > Applications > Personal access tokens
> New access token
```

Name it: `ComplianceFlow GitHub Actions`

---

## 🔐 Configure GitHub Secrets

### Add Secrets

1. Go to your GitHub repository
2. **Settings** > **Secrets and variables** > **Actions**
3. Click **"New repository secret"**

Add these two secrets:

```
Name: NETLIFY_AUTH_TOKEN
Value: [your token from Netlify]

Name: NETLIFY_SITE_ID
Value: [your site ID from Netlify]
```

### Verify Secrets

```bash
# Run this workflow manually:
Actions > Verify Secrets Configuration > Run workflow
```

Should show: ✅ Both secrets configured

---

## 📦 Manual Deployment

### Local Build + Deploy

```bash
# 1. Build locally
npm run build

# 2. Verify output
ls -la out/

# 3. Install Netlify CLI
npm install -g netlify-cli

# 4. Login to Netlify
netlify login

# 5. Deploy
netlify deploy --prod --dir=out
```

### One-liner

```bash
npm run build && npx netlify-cli deploy --prod --dir=out
```

---

## 🤖 Automatic Deployment

### Trigger Conditions

Deployment runs automatically on:

1. **Push to `main` branch**
   ```bash
   git push origin main
   ```

2. **Tag creation**
   ```bash
   git tag v2.1.0
   git push origin v2.1.0
   ```

3. **Manual trigger**
   ```bash
   Actions > Deploy Production > Run workflow
   ```

### Deployment Steps

The workflow does:

1. ✅ **Pre-deployment checks**
   - Lint code
   - Type check
   - Run tests
   - Build project

2. ✅ **Deploy to Netlify**
   - Install Netlify CLI
   - Deploy to production
   - Wait for deployment

3. ✅ **Health check**
   - Test site is live
   - Retry up to 5 times
   - Wait 15 seconds between checks

4. ✅ **Create deployment record**
   - Register in GitHub
   - Link to deployment URL

---

## 📊 Monitor Deployment

### GitHub Actions

```bash
# View workflows:
https://github.com/juankaspain/complianceflow.es/actions
```

**Look for**:
- ✅ Green checkmark = Success
- 🟡 Yellow dot = In progress
- ❌ Red X = Failed

### Netlify Dashboard

```bash
# View deployments:
https://app.netlify.com/sites/[your-site]/deploys
```

**Check**:
- Deploy time (usually <2 min)
- Build logs
- Deploy preview URL

---

## ⚡ Performance Optimization

### Netlify Settings

#### Asset Optimization

```yaml
# netlify.toml (optional, but recommended)
[build]
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.svg"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

#### Enable Optimizations

In Netlify Dashboard:

1. **Site settings** > **Build & deploy**
2. **Post processing**:
   - ✅ Asset optimization
   - ✅ Bundle optimization  
   - ✅ Image optimization
   - ✅ Pretty URLs

---

## 🔍 Troubleshooting

### Build Fails

```bash
# Check workflow logs:
Actions > Failed workflow > Build Verification

# Common issues:
1. Missing environment variables
2. TypeScript errors
3. Dependency conflicts
4. Out of memory

# Solutions:
1. Check .env.example is up to date
2. Run `npm run type-check` locally
3. Delete node_modules, reinstall
4. Increase Node memory in workflow
```

### Deploy Fails

```bash
# Check if secrets are set:
Settings > Secrets > Actions

# Verify secrets:
Actions > Verify Secrets > Run workflow

# Re-generate Netlify token:
Netlify > User settings > Applications > Revoke > Create new
```

### Site Not Loading

```bash
# Check Netlify deploy status:
https://app.netlify.com/sites/[site]/deploys

# Check DNS:
nslookup complianceflow.netlify.app

# Check health:
curl -I https://complianceflow.netlify.app
```

### Health Check Fails

```yaml
# The workflow waits 15s then checks site
# If it fails:

1. Netlify might be slow (rare)
2. Site returned non-200 status
3. DNS not propagated yet

# Solution: Re-run workflow
Actions > Failed workflow > Re-run failed jobs
```

---

## 🔄 Rollback

### Via Netlify Dashboard

1. Go to **Deploys**
2. Find previous successful deploy
3. Click **"Publish deploy"**
4. Confirm

### Via Git Revert

```bash
# Revert last commit
git revert HEAD
git push origin main

# Automatic redeploy will trigger
```

### Via Git Reset (dangerous)

```bash
# Only if you know what you're doing!
git reset --hard HEAD~1
git push -f origin main
```

---

## 🎯 Custom Domain Setup

### 1. Buy Domain

Examples:
- complianceflow.com
- complianceflow.es

### 2. Configure in Netlify

```bash
Site settings > Domain management > Add custom domain
```

### 3. Update DNS

Add these records at your DNS provider:

```
Type: A
Name: @
Value: 75.2.60.5 (Netlify load balancer)

Type: CNAME  
Name: www
Value: [your-site].netlify.app
```

### 4. Enable HTTPS

```bash
Site settings > Domain management > HTTPS > Verify DNS > Provision certificate
```

Wait 24-48 hours for propagation.

### 5. Update Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://complianceflow.com
```

Commit and push.

---

## 📊 Deployment Metrics

### Current Performance

| Metric | Time | Status |
|--------|------|--------|
| **Build Time** | ~2 min | ✅ Good |
| **Deploy Time** | ~30s | ✅ Excellent |
| **Total Time** | ~2.5 min | ✅ Good |
| **Cache Hit Rate** | ~80% | ✅ Good |

### Expected Times

```
Cold build: 2-3 minutes
Cached build: 1-2 minutes
Deploy only: 20-40 seconds
Health check: 15 seconds
```

---

## 📝 Deployment Checklist

### Before Deploy

- [ ] All tests passing locally
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Build succeeds locally
- [ ] `.env.example` is up to date
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json

### After Deploy

- [ ] Site loads at production URL
- [ ] No console errors
- [ ] Logo displays correctly
- [ ] Navigation works
- [ ] Dark theme works
- [ ] Forms submit (if any)
- [ ] Analytics working (if configured)
- [ ] Lighthouse score > 90

---

## 🔗 Useful Links

- **Live Site**: https://complianceflow.netlify.app
- **Netlify Dashboard**: https://app.netlify.com/
- **GitHub Actions**: https://github.com/juankaspain/complianceflow.es/actions
- **Workflow Files**: `.github/workflows/`

---

## 📧 Support

Deployment issues?

- Check [Workflow Fixes](WORKFLOW_FIXES.md)
- Review [GitHub Actions logs](https://github.com/juankaspain/complianceflow.es/actions)
- Contact: juanca755@hotmail.com

---

**Happy Deploying! 🚀**
