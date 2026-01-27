"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { AnimatedText } from "@/components/common/animated-text";
import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { staggerContainer, staggerItem } from "@/lib/utils/animations";

/**
 * Hero Section Component
 *
 * The landing section that creates the first impression
 *
 * Design Decisions:
 * - Full viewport height for immersive experience
 * - Gradient mesh background for modern aesthetic
 * - Staggered text animations for dynamic reveal
 * - Prominent CTA buttons with clear hierarchy
 * - Scroll indicator to guide users
 * - Social links for quick access
 *
 * Visual Hierarchy:
 * 1. Animated headline (largest, most prominent)
 * 2. Subheadline (supporting text)
 * 3. CTA buttons (primary and secondary actions)
 * 4. Social links (tertiary actions)
 * 5. Scroll indicator (subtle guide)
 *
 * Responsive Breakpoints:
 * - Mobile: Single column, centered text
 * - Tablet: Larger text, more spacing
 * - Desktop: Maximum impact with large typography
 *
 * Accessibility:
 * - Semantic HTML (section, h1, p)
 * - ARIA labels for icon-only links
 * - Keyboard navigable buttons
 * - Sufficient color contrast on gradient
 * - Skip to content link (future enhancement)
 */
export function Hero() {
  return (
    <section
      id="home"
      className="from-background via-background to-secondary/20 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={staggerItem}
            className="text-muted-foreground mb-4 text-sm font-medium sm:text-base"
          >
            Hi there! 👋 I&apos;m
          </motion.p>

          {/* Main Headline with Animated Text */}
          <motion.div variants={staggerItem} className="mb-6">
            <AnimatedText
              text="Sourav Das"
              className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              gradient
            />
            <h2 className="text-muted-foreground text-2xl font-semibold sm:text-3xl md:text-4xl">
              Full Stack Developer
            </h2>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl"
          >
            Building exceptional digital experiences with modern web
            technologies. Passionate about creating scalable, accessible, and
            user-friendly applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="mb-12 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="bg-primary/20 absolute inset-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={staggerItem} className="mb-16 flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Send email"
              className="hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
