"use client";

import * as React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Container } from "@/components/common/container";
import { Link } from "@/components/ui/link";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/constants";

/**
 * Icon Map
 * Maps icon names to Lucide React components
 */
const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
} as const;

/**
 * Footer Component
 *
 * Site footer with navigation, social links, and copyright
 *
 * Features:
 * - Responsive multi-column layout
 * - Social media links with icons
 * - Quick navigation links
 * - Copyright and credits
 * - Accessible link labels
 * - Theme-aware styling
 *
 * Technical implementation:
 * - Server component (no client-side JS needed)
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - ARIA labels for icon-only links
 * - Flexible grid layout
 *
 * Design considerations:
 * - Clean, minimal design
 * - Proper spacing and alignment
 * - Mobile-first responsive
 * - Consistent with header styling
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-muted/50 border-t">
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{SITE_CONFIG.name}</h3>
              <p className="text-muted-foreground text-sm">
                Full Stack Developer passionate about building beautiful,
                performant web applications.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  {NAV_ITEMS.slice(0, 5).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        variant="muted"
                        className="hover:text-foreground text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon =
                    ICON_MAP[social.icon as keyof typeof ICON_MAP] || Mail;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      external
                      variant="muted"
                      className="hover:text-foreground"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <p className="text-muted-foreground text-sm">
                Have a project in mind? Let&apos;s work together!
              </p>
              <Link
                href="#contact"
                variant="underline"
                className="text-sm font-medium"
              >
                Contact Me →
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-border my-8 h-px" />

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            {/* Credits */}
            <p className="text-muted-foreground flex items-center gap-1 text-sm">
              Built with
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              using{" "}
              <Link
                href="https://nextjs.org"
                external
                variant="muted"
                className="hover:text-foreground"
              >
                Next.js
              </Link>
              and
              <Link
                href="https://tailwindcss.com"
                external
                variant="muted"
                className="hover:text-foreground"
              >
                Tailwind CSS
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/**
 * Minimal Footer Component
 *
 * A simplified footer for pages that need less footer content
 *
 * @example
 * ```tsx
 * <MinimalFooter />
 * ```
 */
export function MinimalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border border-t py-6">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {SITE_CONFIG.name}
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon =
                ICON_MAP[social.icon as keyof typeof ICON_MAP] || Mail;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  external
                  variant="muted"
                  className="hover:text-foreground"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
