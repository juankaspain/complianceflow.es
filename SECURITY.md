# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Reporting a Vulnerability

We take the security of ComplianceFlow seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: security@complianceflow.es

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the following information:

- Type of issue (e.g. XSS, CSRF, SQL injection, etc.)
- Full paths of source file(s) related to the issue
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue

## Security Measures

### Implemented Security Features

- **Rate Limiting**: Protection against brute force and DDoS attacks
- **Content Security Policy**: Strict CSP headers to prevent XSS
- **HTTPS Only**: Strict Transport Security enforced
- **Input Sanitization**: All user inputs are sanitized
- **Environment Variables**: Secure configuration management
- **Error Boundaries**: Graceful error handling
- **Logging**: Comprehensive security event logging
- **Authentication**: Secure token-based authentication
- **Authorization**: Role-based access control

### Security Headers

We implement the following security headers:

- Content-Security-Policy
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Best Practices

1. **Keep Dependencies Updated**: Regular security audits with `npm audit`
2. **Code Reviews**: All code changes require review
3. **Automated Testing**: Security tests in CI/CD pipeline
4. **Principle of Least Privilege**: Minimal permissions for all services
5. **Data Encryption**: Sensitive data encrypted at rest and in transit

## Security Checklist

Before deploying to production:

- [ ] All environment variables are set correctly
- [ ] HTTPS is enforced
- [ ] Rate limiting is configured
- [ ] CSP headers are properly set
- [ ] Authentication is working correctly
- [ ] Input validation is implemented
- [ ] Error messages don't leak sensitive information
- [ ] Logging is configured and monitored
- [ ] Backup and recovery procedures are in place
- [ ] Security headers are verified

## Compliance

ComplianceFlow is designed to help organizations maintain regulatory compliance. We follow:

- GDPR (General Data Protection Regulation)
- CCPA (California Consumer Privacy Act)
- SOC 2 Type II standards
- ISO 27001 best practices

## Updates

This security policy is reviewed and updated quarterly. Last update: December 2025
