# Troubleshooting Guide

Common issues and solutions for ComplianceFlow.

## Build Issues

### Build fails with "Module not found"

**Problem**: TypeScript can't find a module.

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm ci
npm run build
```

### Build fails with "Out of memory"

**Problem**: Node.js runs out of memory during build.

**Solution**:
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### TypeScript errors in CI but not locally

**Problem**: Different TypeScript versions.

**Solution**:
```bash
# Use exact versions in package.json
npm ci  # instead of npm install
```

## Runtime Issues

### "NEXT_PUBLIC_ variables not defined"

**Problem**: Environment variables not loaded.

**Solution**:
1. Check `.env.local` exists
2. Restart dev server after env changes
3. Ensure variables start with `NEXT_PUBLIC_` for client-side

### API routes return 404

**Problem**: Routes not properly configured.

**Solution**:
1. Check file is in `src/app/api/` directory
2. File must export named functions (GET, POST, etc.)
3. Restart dev server

### Images not loading

**Problem**: Image optimization failing.

**Solution**:
```javascript
// next.config.js
images: {
  domains: ['your-domain.com'],
  unoptimized: false,
}
```

### "Hydration mismatch" error

**Problem**: Server and client render differently.

**Solution**:
- Don't use `window` or `document` during render
- Use `useEffect` for browser-only code
- Ensure consistent data between server and client

## Database Issues

### "Connection timeout"

**Problem**: Can't connect to database.

**Solution**:
1. Check DATABASE_URL is correct
2. Verify database is running
3. Check firewall rules
4. Verify network connectivity

### "Too many connections"

**Problem**: Database connection pool exhausted.

**Solution**:
```env
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
```

## Performance Issues

### Slow page loads

**Diagnosis**:
```bash
# Run Lighthouse audit
npm run lighthouse

# Analyze bundle size
npm run analyze
```

**Solutions**:
- Enable code splitting
- Lazy load components
- Optimize images
- Enable caching

### High memory usage

**Problem**: Memory leaks in application.

**Solution**:
- Check for uncleared intervals/timeouts
- Remove event listeners properly
- Use React.memo for expensive components
- Profile with Chrome DevTools

## Security Issues

### CSP violations

**Problem**: Content Security Policy blocking resources.

**Solution**:
```javascript
// next.config.js
ContentSecurityPolicy: `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.trusted-domain.com;
  style-src 'self' 'unsafe-inline';
`
```

### Rate limit triggering

**Problem**: Too many requests.

**Solution**:
- Implement exponential backoff
- Add request caching
- Batch API calls
- Increase rate limits if legitimate

## Docker Issues

### Container won't start

**Problem**: Docker build or startup fails.

**Solution**:
```bash
# View logs
docker logs complianceflow-app

# Rebuild without cache
docker-compose build --no-cache

# Check health
docker-compose ps
```

### Volume permission errors

**Problem**: Can't write to mounted volumes.

**Solution**:
```bash
# Fix permissions
sudo chown -R $USER:$USER ./data
```

## Deployment Issues

### Netlify build fails

**Problem**: Build fails in Netlify.

**Solution**:
1. Check build logs in Netlify dashboard
2. Verify environment variables are set
3. Check Node version matches local
4. Test build locally: `npm run build`

### Environment variables not working in production

**Problem**: Vars not available in deployed app.

**Solution**:
1. Set in Netlify dashboard (Site settings > Environment variables)
2. Client-side vars must start with `NEXT_PUBLIC_`
3. Redeploy after changing vars

## Email Issues

### Emails not sending

**Problem**: SMTP configuration issue.

**Solution**:
```bash
# Test SMTP connection
telnet smtp.gmail.com 587

# Check credentials
# Enable "Less secure app access" for Gmail
```

### Emails going to spam

**Problem**: Missing SPF/DKIM records.

**Solution**:
1. Add SPF record to DNS
2. Configure DKIM
3. Set up DMARC
4. Use dedicated sending domain

## Testing Issues

### Tests failing in CI but passing locally

**Problem**: Environment differences.

**Solution**:
```bash
# Use same Node version
# Check CI environment variables
# Run tests with --runInBand flag
npm run test -- --runInBand
```

### E2E tests timing out

**Problem**: Tests too slow or flaky.

**Solution**:
```typescript
// Increase timeout
test.setTimeout(60000);

// Use proper waits
await page.waitForSelector('[data-testid="element"]');
```

## Getting Help

### Log Collection

```bash
# Application logs
npm run dev > app.log 2>&1

# Docker logs
docker-compose logs > docker.log

# System info
node --version
npm --version
git --version
```

### Report an Issue

1. Search existing issues: [GitHub Issues](https://github.com/juankaspain/complianceflow.es/issues)
2. Create new issue with:
   - Error message
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details
   - Relevant logs

### Community Support

- GitHub Discussions
- Email: support@complianceflow.es
- Slack: [Join our Slack]

---

**Still having issues?**

Contact our support team at support@complianceflow.es with:
- Detailed problem description
- Error logs
- Environment information
- Steps to reproduce