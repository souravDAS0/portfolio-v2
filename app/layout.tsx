import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

/**
 * Font Configuration
 * Using Geist font family for modern, clean typography
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

/**
 * Site Metadata
 * SEO configuration for the portfolio
 */
export const metadata: Metadata = {
  title: {
    default: "Sourav Das - Full Stack Developer",
    template: "%s | Sourav Das",
  },
  description:
    "Portfolio of Sourav Das - A passionate full-stack developer specializing in modern web technologies, React, Next.js, and TypeScript.",
  keywords: [
    "Sourav Das",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Sourav Das" }],
  creator: "Sourav Das",
  metadataBase: new URL("https://yourdomain.com"), // Update with actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Sourav Das - Full Stack Developer",
    description:
      "Portfolio of Sourav Das - A passionate full-stack developer specializing in modern web technologies.",
    siteName: "Sourav Das Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Das - Full Stack Developer",
    description:
      "Portfolio of Sourav Das - A passionate full-stack developer specializing in modern web technologies.",
    creator: "@yourusername", // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Root Layout Component
 *
 * The foundational layout for the entire application
 *
 * Features:
 * - Theme provider for dark/light mode
 * - Optimized font loading with display swap
 * - SEO-friendly metadata
 * - Proper semantic HTML structure
 * - Accessibility attributes
 *
 * Design considerations:
 * - suppressHydrationWarning prevents theme flash
 * - Font variables applied at body level for cascading
 * - Theme attribute on html for CSS variable scoping
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
