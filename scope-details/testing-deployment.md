# Scope: Testing & Deployment - Quality Assurance & Launch

**Phase**: 8
**Duration**: Week 13
**Status**: Not Started

---

## Overview

Comprehensive testing, final quality assurance, and deployment to production. This phase ensures the portfolio is bug-free, performant, and ready for public viewing.

---

## Objectives

- Implement comprehensive test suite
- Conduct thorough QA testing
- Deploy to production environment
- Set up CI/CD pipeline
- Configure custom domain and SSL
- Set up monitoring and error tracking
- Perform post-launch optimization

---

## Tasks

### 1. Unit Testing

#### Component Tests

- [ ] Test all UI components
- [ ] Test form validation logic
- [ ] Test utility functions
- [ ] Test hooks
- [ ] Test data transformations
- [ ] Achieve 80%+ code coverage

**Tools:**

- Vitest
- React Testing Library
- @testing-library/jest-dom

**Files to Create:**

- `__tests__/components/` (component tests)
- `__tests__/lib/` (utility tests)
- `__tests__/hooks/` (hook tests)

#### Example Test

```typescript
// __tests__/components/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

### 2. Integration Testing

#### API Routes

- [ ] Test contact form submission
- [ ] Test email sending
- [ ] Test newsletter subscription
- [ ] Test GitHub API integration
- [ ] Test rate limiting
- [ ] Test error handling

#### Data Fetching

- [ ] Test project data loading
- [ ] Test blog post loading (if applicable)
- [ ] Test dynamic routes

**Files to Create:**

- `__tests__/api/` (API route tests)
- `__tests__/integration/` (integration tests)

### 3. End-to-End Testing

#### Critical User Flows

- [ ] Navigation flow
- [ ] Contact form submission flow
- [ ] Project filtering flow
- [ ] Theme switching flow
- [ ] Resume download flow
- [ ] Mobile menu flow

**Tools:**

- Playwright

**Files to Create:**

- `e2e/navigation.spec.ts`
- `e2e/contact.spec.ts`
- `e2e/projects.spec.ts`
- `e2e/theme.spec.ts`

#### Example E2E Test

```typescript
// e2e/contact.spec.ts
import { test, expect } from "@playwright/test";

test("contact form submission", async ({ page }) => {
  await page.goto("/");

  // Fill form
  await page.fill('[name="name"]', "John Doe");
  await page.fill('[name="email"]', "john@example.com");
  await page.fill('[name="subject"]', "Test Subject");
  await page.fill('[name="message"]', "Test message content");

  // Submit
  await page.click('button[type="submit"]');

  // Check success message
  await expect(page.locator(".success-message")).toBeVisible();
});
```

### 4. Visual Regression Testing (Optional)

- [ ] Set up visual testing tool (Percy, Chromatic)
- [ ] Capture screenshots of key pages
- [ ] Set up baseline images
- [ ] Automate visual diff checking

### 5. Performance Testing

#### Lighthouse CI

- [ ] Set up Lighthouse CI
- [ ] Configure performance budgets
- [ ] Run tests on all pages
- [ ] Set up automated reporting

**Files to Create:**

- `lighthouserc.json`

```json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/projects",
        "http://localhost:3000/blog"
      ]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 1 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

#### Load Testing

- [ ] Test with multiple concurrent users
- [ ] Test API rate limits
- [ ] Test under slow network conditions
- [ ] Verify caching works correctly

### 6. Accessibility Testing

#### Automated Testing

- [ ] Run axe accessibility tests
- [ ] Run Pa11y tests
- [ ] Fix all critical issues
- [ ] Document known issues

#### Manual Testing

- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Test keyboard-only navigation
- [ ] Test with high contrast mode
- [ ] Test with zoom (200%, 400%)
- [ ] Test with reduced motion

### 7. Cross-Browser & Device Testing

#### Browser Testing

- [ ] Chrome (Windows, Mac, Linux)
- [ ] Firefox (Windows, Mac, Linux)
- [ ] Safari (Mac, iOS)
- [ ] Edge (Windows)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

#### Device Testing

- [ ] iPhone (multiple models)
- [ ] iPad
- [ ] Android phones (various sizes)
- [ ] Android tablets
- [ ] Desktop (various resolutions)

#### Tools

- BrowserStack
- LambdaTest
- Real devices

### 8. Security Testing

#### Security Checks

- [ ] Run security audit (`npm audit`)
- [ ] Fix critical vulnerabilities
- [ ] Test XSS protection
- [ ] Test CSRF protection
- [ ] Verify environment variables are secure
- [ ] Test rate limiting
- [ ] Verify email validation
- [ ] Test input sanitization

#### Headers & Security

- [ ] Set security headers
- [ ] Configure CSP (Content Security Policy)
- [ ] Set X-Frame-Options
- [ ] Set X-Content-Type-Options
- [ ] Enable HSTS

**Files to Create/Update:**

- `next.config.js` (add security headers)

```javascript
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];
```

### 9. Pre-Deployment Checklist

#### Code Quality

- ✅ All tests passing
- ✅ No console.logs in production code
- ✅ No ESLint errors
- ✅ No TypeScript errors
- ✅ Code formatted with Prettier
- ✅ Dependencies up to date
- ✅ No security vulnerabilities

#### Content

- ✅ All placeholder content replaced
- ✅ All images optimized
- ✅ All links working
- ✅ Resume uploaded and accessible
- ✅ Contact information correct
- ✅ Social links working
- ✅ About section complete
- ✅ Projects added with descriptions

#### Configuration

- ✅ Environment variables set
- ✅ Analytics configured
- ✅ Error tracking configured
- ✅ Email service configured
- ✅ Domain ready
- ✅ SSL certificate ready

### 10. CI/CD Pipeline Setup

#### GitHub Actions Workflow

- [ ] Set up build workflow
- [ ] Set up test workflow
- [ ] Set up deployment workflow
- [ ] Configure environment secrets
- [ ] Set up preview deployments
- [ ] Configure automatic deployments on merge

**Files to Create:**

- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`

#### Example CI Workflow

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Run linting
        run: npm run lint

      - name: Build
        run: npm run build
```

### 11. Vercel Deployment

#### Initial Setup

- [ ] Create Vercel account (if not exists)
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Set environment variables
- [ ] Configure domains

#### Production Deployment

- [ ] Deploy to production
- [ ] Verify deployment successful
- [ ] Test production URL
- [ ] Run smoke tests
- [ ] Monitor initial traffic

#### Custom Domain

- [ ] Purchase domain (if needed)
- [ ] Configure DNS settings
- [ ] Add domain to Vercel
- [ ] Verify domain ownership
- [ ] Enable SSL certificate
- [ ] Test with custom domain
- [ ] Set up www redirect (optional)

### 12. Post-Deployment Verification

#### Functionality Testing

- [ ] Test all pages load
- [ ] Test contact form works
- [ ] Test email delivery
- [ ] Test analytics tracking
- [ ] Test error tracking
- [ ] Verify GitHub integration
- [ ] Test resume download
- [ ] Test social sharing

#### Performance Verification

- [ ] Run Lighthouse audit on production
- [ ] Check Core Web Vitals
- [ ] Verify images load correctly
- [ ] Test on slow connection
- [ ] Check mobile performance

#### SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt accessible
- [ ] Test social sharing previews
- [ ] Verify structured data with Google Rich Results Test

### 13. Monitoring & Analytics Setup

#### Error Monitoring

- [ ] Verify Sentry is tracking errors
- [ ] Set up error alerts
- [ ] Test error reporting
- [ ] Configure error sampling

#### Analytics

- [ ] Verify analytics tracking
- [ ] Set up custom events
- [ ] Configure goals
- [ ] Set up conversion tracking
- [ ] Test event tracking

#### Uptime Monitoring

- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure alerts
- [ ] Set check frequency
- [ ] Add status page (optional)

### 14. Documentation

#### User Documentation

- [ ] Update README with live URL
- [ ] Document features
- [ ] Add screenshots
- [ ] Include tech stack

#### Developer Documentation

- [ ] Document setup instructions
- [ ] Document environment variables
- [ ] Document deployment process
- [ ] Document testing process
- [ ] Update CLAUDE.md

### 15. Launch Activities

#### Pre-Launch

- [ ] Final code review
- [ ] Final content review
- [ ] Backup checklist completed
- [ ] Rollback plan prepared

#### Launch Day

- [ ] Deploy to production
- [ ] Verify deployment
- [ ] Monitor for errors
- [ ] Test all critical paths
- [ ] Announce on social media

#### Post-Launch

- [ ] Monitor analytics
- [ ] Monitor error rates
- [ ] Gather feedback
- [ ] Address critical issues
- [ ] Plan iterations

---

## Testing Strategy

### Test Pyramid

```
        E2E (10%)
      Integration (20%)
    Unit Tests (70%)
```

### Coverage Goals

- Overall: 80%+
- Critical paths: 100%
- Utility functions: 90%+
- Components: 80%+

---

## Deployment Environments

### Development

- **URL**: `localhost:3000`
- **Purpose**: Local development
- **Branch**: Any

### Preview

- **URL**: `*.vercel.app` (automatic)
- **Purpose**: PR previews
- **Branch**: All branches

### Production

- **URL**: `yourdomain.com`
- **Purpose**: Live site
- **Branch**: `main` or `production`

---

## Environment Variables

### Production Environment

```bash
# Email
RESEND_API_KEY=
CONTACT_EMAIL=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# Error Tracking
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=

# GitHub
GITHUB_TOKEN=
NEXT_PUBLIC_GITHUB_USERNAME=

# Other
NEXT_PUBLIC_SITE_URL=
```

---

## Performance Budgets

### JavaScript

- First Load: < 150 KB
- Per Route: < 50 KB

### Images

- Hero Image: < 200 KB
- Project Thumbnails: < 100 KB each
- Icons: < 10 KB

### Fonts

- Total Font Weight: < 100 KB

### Metrics

- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- TTI: < 3.5s

---

## Rollback Plan

In case of critical issues:

1. **Immediate**: Revert to previous deployment in Vercel
2. **Fix**: Identify and fix issue locally
3. **Test**: Run full test suite
4. **Deploy**: Push fix to production
5. **Verify**: Confirm issue resolved
6. **Monitor**: Watch for related issues

---

## Acceptance Criteria

- ✅ All tests passing (unit, integration, E2E)
- ✅ No console errors in production
- ✅ Lighthouse scores meet targets
- ✅ Site accessible on custom domain
- ✅ SSL certificate active
- ✅ Analytics tracking correctly
- ✅ Error monitoring active
- ✅ Contact form working
- ✅ All links functional
- ✅ Cross-browser compatibility verified
- ✅ Mobile responsiveness confirmed
- ✅ Accessibility requirements met
- ✅ SEO optimizations in place
- ✅ Documentation complete

---

## Files to Create/Modify

### New Files

- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`
- `lighthouserc.json`
- `playwright.config.ts`
- `vitest.config.ts`
- `__tests__/**/*.test.ts(x)`
- `e2e/**/*.spec.ts`

### Update Files

- `README.md`
- `CLAUDE.md`
- `package.json` (add test scripts)
- `next.config.js` (security headers)
- `.env.example`

---

## Dependencies

- **Requires**: All previous phases completed
- **Blocks**: None (final phase)

---

## Testing Checklist

### Pre-Deployment

- [ ] Unit tests passing
- [ ] Integration tests passing
- [ ] E2E tests passing
- [ ] Lighthouse audit passing
- [ ] Security audit passing
- [ ] Accessibility tests passing
- [ ] Cross-browser tests passing

### Post-Deployment

- [ ] Production URL loads
- [ ] All pages accessible
- [ ] Forms working
- [ ] Analytics tracking
- [ ] Error tracking working
- [ ] SSL active
- [ ] Performance meets targets
- [ ] SEO meta tags correct

---

## Notes

- Test early and often
- Automate as much testing as possible
- Monitor closely after launch
- Have rollback plan ready
- Communicate with stakeholders
- Celebrate the launch!

---

## References

- [Vercel Deployment Docs](https://vercel.com/docs)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Playwright Documentation](https://playwright.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
