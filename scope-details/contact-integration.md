# Scope: Contact & Integration - Communication & Third-party Services

**Phase**: 5
**Duration**: Week 8
**Status**: Not Started

---

## Overview

Implement a functional contact system with form validation, email integration, social media links, and analytics. This phase enables visitors to get in touch and provides insights into portfolio performance.

---

## Objectives

- Create an accessible, user-friendly contact form
- Integrate email service for form submissions
- Add social media links and profiles
- Set up analytics for traffic and behavior tracking
- Implement error tracking and monitoring
- Add newsletter subscription (optional)

---

## Tasks

### 1. Contact Form Component

- [ ] Design contact form layout
- [ ] Create form fields (name, email, subject, message)
- [ ] Add field labels and placeholders
- [ ] Implement form validation (client-side)
- [ ] Add error message display
- [ ] Create success message component
- [ ] Add loading state during submission
- [ ] Implement honeypot for spam prevention
- [ ] Add reCAPTCHA or alternative bot protection
- [ ] Make form fully responsive

**Components to Create:**

- `components/sections/contact.tsx`
- `components/forms/contact-form.tsx`
- `components/common/form-field.tsx`
- `components/common/form-error.tsx`
- `components/common/form-success.tsx`

### 2. Form Validation & Handling

- [ ] Install React Hook Form
- [ ] Install Zod for schema validation
- [ ] Create validation schema
- [ ] Implement real-time validation
- [ ] Add custom error messages
- [ ] Validate email format
- [ ] Set character limits for fields
- [ ] Sanitize user input
- [ ] Test validation edge cases

**Files to Create:**

- `lib/validations/contact-schema.ts`
- `lib/utils/sanitize.ts`

### 3. Email Service Integration

- [ ] Choose email service (Resend, SendGrid, Nodemailer)
- [ ] Set up API keys and environment variables
- [ ] Create API route for form submission
- [ ] Design email template
- [ ] Implement email sending logic
- [ ] Add autoresponder email (thank you message)
- [ ] Add notification email to yourself
- [ ] Implement rate limiting
- [ ] Add error handling and retry logic
- [ ] Test email delivery

**Files to Create:**

- `app/api/contact/route.ts`
- `lib/services/email.ts`
- `lib/templates/contact-email.tsx`
- `lib/templates/autoresponder-email.tsx`

### 4. Social Media Links

- [ ] Create social links component
- [ ] Add icons for each platform
- [ ] Include GitHub, LinkedIn, Twitter/X
- [ ] Add Email and optional platforms (YouTube, Medium, etc.)
- [ ] Implement hover effects
- [ ] Add "Share this portfolio" functionality
- [ ] Make links open in new tab
- [ ] Add aria-labels for accessibility

**Components to Create:**

- `components/common/social-links.tsx`
- `components/common/social-icon.tsx`
- `components/common/share-button.tsx`

### 5. Analytics Integration

- [ ] Choose analytics platform (Google Analytics, Plausible, Vercel Analytics)
- [ ] Set up analytics account
- [ ] Install analytics package
- [ ] Add tracking code to app
- [ ] Set up custom events (form submission, resume download, etc.)
- [ ] Configure goals and conversions
- [ ] Add privacy-friendly analytics
- [ ] Create cookie consent banner (if using GA)
- [ ] Test analytics in production

**Files to Create:**

- `lib/services/analytics.ts`
- `components/common/cookie-consent.tsx` (if needed)
- `app/layout.tsx` (update with analytics)

### 6. Error Tracking & Monitoring

- [ ] Choose error tracking tool (Sentry, LogRocket)
- [ ] Set up error tracking account
- [ ] Install SDK
- [ ] Configure error reporting
- [ ] Add source maps for production
- [ ] Set up alerts for critical errors
- [ ] Test error reporting
- [ ] Add performance monitoring

**Files to Create:**

- `lib/services/error-tracking.ts`
- `sentry.config.js` (if using Sentry)

### 7. Newsletter Subscription (Optional)

- [ ] Choose email marketing platform (Mailchimp, ConvertKit, Resend)
- [ ] Create newsletter signup form
- [ ] Integrate with email marketing API
- [ ] Add double opt-in confirmation
- [ ] Create thank you page/message
- [ ] Add unsubscribe functionality
- [ ] Ensure GDPR compliance

**Components to Create:**

- `components/forms/newsletter-form.tsx`
- `app/api/newsletter/route.ts`

### 8. Contact Information Section

- [ ] Display email address
- [ ] Add location (city/country)
- [ ] Include timezone information
- [ ] Add availability status
- [ ] Display response time expectation
- [ ] Add preferred contact methods

### 9. Call-to-Action Enhancements

- [ ] Create floating/sticky contact button
- [ ] Add "Scroll to Contact" CTAs throughout site
- [ ] Implement contact modal (quick contact)
- [ ] Add contextual CTAs on project pages

**Components to Create:**

- `components/common/floating-contact-button.tsx`
- `components/common/contact-modal.tsx`

---

## Data Structures

### Contact Form Schema

```typescript
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must not exceed 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
  honeypot: z.string().max(0), // Bot trap
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

### Email Template Structure

```typescript
interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
```

---

## Email Service Setup

### Using Resend (Recommended)

```typescript
// lib/services/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: EmailData) {
  try {
    const result = await resend.emails.send({
      from: "portfolio@yourdomain.com",
      to: "your@email.com",
      subject: `Portfolio Contact: ${data.subject}`,
      replyTo: data.email,
      react: ContactEmailTemplate(data),
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
}
```

### API Route

```typescript
// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact-schema";
import { sendContactEmail } from "@/lib/services/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Check honeypot
    if (validatedData.honeypot) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendContactEmail(validatedData);

    if (!result.success) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({
      message: "Message sent successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
```

---

## Analytics Events to Track

### Standard Events

- Page views
- Session duration
- Bounce rate
- Traffic sources

### Custom Events

- Contact form submission
- Resume download
- Project link clicks
- Social media link clicks
- External link clicks
- Newsletter signup
- Theme toggle (dark/light)
- Section visibility (scroll tracking)

### Event Tracking Example

```typescript
// lib/services/analytics.ts
export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, properties);
  }
}

// Usage
trackEvent("contact_form_submit", {
  form_location: "footer",
});
```

---

## Environment Variables Required

```bash
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
FROM_EMAIL=portfolio@yourdomain.com

# Analytics (Google Analytics)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Error Tracking (Sentry)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_AUTH_TOKEN=your_sentry_auth_token

# Newsletter (Optional - Mailchimp)
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_AUDIENCE_ID=your_audience_id

# reCAPTCHA (Optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

---

## Rate Limiting Implementation

```typescript
// lib/utils/rate-limit.ts
import { LRUCache } from "lru-cache";

const rateLimit = new LRUCache({
  max: 500,
  ttl: 60000, // 1 minute
});

export function checkRateLimit(identifier: string): boolean {
  const tokenCount = (rateLimit.get(identifier) as number) || 0;

  if (tokenCount >= 3) {
    return false; // Rate limit exceeded
  }

  rateLimit.set(identifier, tokenCount + 1);
  return true;
}
```

---

## Design Considerations

### Contact Form

- Clear, simple layout
- Large, accessible form fields
- Visible labels and placeholders
- Inline validation feedback
- Success message with animation
- Error states clearly displayed
- Submit button with loading state
- Disabled state during submission

### Social Links

- Consistent icon style
- Hover effects that feel responsive
- Appropriate sizing (not too small)
- Logical ordering (most important first)
- Color coded by platform (optional)

### Floating Contact Button

- Non-intrusive placement
- Only appears after scrolling past hero
- Smooth fade in/out animation
- Mobile-friendly touch target
- Clear icon or text label

---

## Accessibility Requirements

- [ ] Form labels properly associated with inputs
- [ ] Error messages announced to screen readers
- [ ] Success message announced to screen readers
- [ ] Keyboard navigation for all form fields
- [ ] Focus indicators visible
- [ ] ARIA labels for icon-only buttons
- [ ] Form validation errors are clear

---

## Security Considerations

- [ ] Sanitize all user inputs
- [ ] Implement CSRF protection
- [ ] Add rate limiting
- [ ] Use honeypot fields for spam prevention
- [ ] Validate on server-side, not just client
- [ ] Protect API keys (use env variables)
- [ ] Implement bot protection (reCAPTCHA)
- [ ] Use HTTPS in production

---

## Performance Optimization

- [ ] Lazy load analytics scripts
- [ ] Minimize third-party scripts
- [ ] Use lightweight analytics (Plausible over GA)
- [ ] Defer non-critical scripts
- [ ] Optimize email template size

---

## Acceptance Criteria

- ✅ Contact form submits successfully
- ✅ Email is received with correct information
- ✅ Autoresponder email sent to user
- ✅ Form validation works correctly
- ✅ Error states display properly
- ✅ Success message shows after submission
- ✅ Spam prevention is effective
- ✅ Social links all work correctly
- ✅ Analytics tracks events properly
- ✅ Error tracking catches and reports errors
- ✅ Rate limiting prevents abuse
- ✅ Form is fully accessible
- ✅ Works on all devices and browsers

---

## Files to Create/Modify

### New Files

- `components/sections/contact.tsx`
- `components/forms/contact-form.tsx`
- `components/forms/newsletter-form.tsx`
- `components/common/social-links.tsx`
- `components/common/floating-contact-button.tsx`
- `components/common/cookie-consent.tsx`
- `app/api/contact/route.ts`
- `app/api/newsletter/route.ts`
- `lib/services/email.ts`
- `lib/services/analytics.ts`
- `lib/services/error-tracking.ts`
- `lib/validations/contact-schema.ts`
- `lib/templates/contact-email.tsx`
- `lib/templates/autoresponder-email.tsx`
- `lib/utils/rate-limit.ts`

### Update Files

- `app/layout.tsx` (add analytics)
- `.env.local` (add API keys)
- `.env.example` (document required vars)

---

## Dependencies

- **Requires**: Foundation completed
- **Blocks**: None

---

## Testing Checklist

- [ ] Test form with valid data
- [ ] Test form with invalid data
- [ ] Test empty form submission
- [ ] Test spam prevention (honeypot)
- [ ] Verify email delivery
- [ ] Test autoresponder email
- [ ] Check rate limiting works
- [ ] Verify analytics events fire
- [ ] Test error tracking reports errors
- [ ] Test on mobile devices
- [ ] Test with keyboard only
- [ ] Test with screen reader
- [ ] Test in different browsers

---

## Notes

- Consider using Plausible Analytics for privacy-friendly, lightweight tracking
- Resend offers generous free tier for transactional emails
- Add "Thank you" page or modal after successful submission
- Consider adding estimated response time
- Set up email notifications to mobile for urgent inquiries
- Test emails in different clients (Gmail, Outlook, Apple Mail)
- Consider adding Calendly integration for scheduling calls

---

## References

- [Resend Documentation](https://resend.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [Plausible Analytics](https://plausible.io/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
