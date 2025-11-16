# Scope: Blog - Content Platform (Optional)

**Phase**: 6
**Duration**: Week 9-10
**Status**: Not Started
**Priority**: Optional/Future Enhancement

---

## Overview

Create a technical blogging platform to share insights, tutorials, and experiences. This establishes thought leadership and improves SEO through quality content.

---

## Objectives

- Build MDX-powered blog infrastructure
- Create engaging blog post templates
- Implement search and filtering capabilities
- Optimize for SEO and social sharing
- Add syntax highlighting for code blocks
- Enable RSS feed for subscribers

---

## Tasks

### 1. Blog Infrastructure Setup

- [ ] Install and configure MDX
- [ ] Install additional MDX plugins (remark, rehype)
- [ ] Set up content directory structure
- [ ] Configure content collections
- [ ] Create blog post frontmatter schema
- [ ] Set up content validation

**Files to Create:**

- `content/blog/` (blog posts directory)
- `lib/mdx.ts` (MDX utilities)
- `lib/types/blog.ts`

**Dependencies to Install:**

```json
{
  "dependencies": {
    "@next/mdx": "latest",
    "@mdx-js/loader": "latest",
    "@mdx-js/react": "latest",
    "gray-matter": "latest",
    "remark-gfm": "latest",
    "rehype-slug": "latest",
    "rehype-autolink-headings": "latest",
    "rehype-pretty-code": "latest",
    "shiki": "latest"
  }
}
```

### 2. Blog Listing Page

- [ ] Create `/blog` route
- [ ] Design blog card layout
- [ ] Display post thumbnails
- [ ] Show title, excerpt, date, read time
- [ ] Add category/tag badges
- [ ] Implement grid or list view
- [ ] Add pagination or infinite scroll
- [ ] Display featured posts separately
- [ ] Add "Latest Posts" section
- [ ] Implement empty state

**Files to Create:**

- `app/blog/page.tsx`
- `components/sections/blog-list.tsx`
- `components/common/blog-card.tsx`
- `components/common/blog-grid.tsx`

### 3. Blog Post Template

- [ ] Create dynamic route `/blog/[slug]`
- [ ] Design post layout
- [ ] Add post hero section
- [ ] Display post metadata (author, date, read time)
- [ ] Implement table of contents
- [ ] Add progress indicator
- [ ] Create "Share this post" component
- [ ] Add "Related Posts" section
- [ ] Include author bio section
- [ ] Add navigation (previous/next post)

**Files to Create:**

- `app/blog/[slug]/page.tsx`
- `components/blog/blog-post.tsx`
- `components/blog/blog-hero.tsx`
- `components/blog/table-of-contents.tsx`
- `components/blog/reading-progress.tsx`
- `components/blog/share-post.tsx`
- `components/blog/related-posts.tsx`

### 4. MDX Components

- [ ] Create custom heading components
- [ ] Style code blocks with syntax highlighting
- [ ] Create callout/note components
- [ ] Add image component with captions
- [ ] Create video embed component
- [ ] Add tweet embed component
- [ ] Create custom link component
- [ ] Add code playground component (CodeSandbox/StackBlitz)

**Components to Create:**

- `components/mdx/heading.tsx`
- `components/mdx/code-block.tsx`
- `components/mdx/callout.tsx`
- `components/mdx/image.tsx`
- `components/mdx/video.tsx`
- `components/mdx/custom-link.tsx`
- `mdx-components.tsx` (root)

### 5. Search & Filtering

- [ ] Implement blog search functionality
- [ ] Add category filtering
- [ ] Add tag filtering
- [ ] Create search bar component
- [ ] Add filter chips/pills
- [ ] Show search results count
- [ ] Implement search highlighting
- [ ] Add "Clear filters" option

**Components to Create:**

- `components/blog/blog-search.tsx`
- `components/blog/blog-filters.tsx`
- `components/blog/filter-chip.tsx`

### 6. Categories & Tags

- [ ] Create category pages (`/blog/category/[slug]`)
- [ ] Create tag pages (`/blog/tag/[slug]`)
- [ ] Design category/tag archive pages
- [ ] Show post count per category/tag
- [ ] Add category/tag navigation

**Files to Create:**

- `app/blog/category/[slug]/page.tsx`
- `app/blog/tag/[slug]/page.tsx`
- `components/blog/category-list.tsx`
- `components/blog/tag-cloud.tsx`

### 7. Reading Experience Enhancements

- [ ] Calculate and display reading time
- [ ] Add reading progress bar
- [ ] Implement smooth scroll to sections
- [ ] Add copy code button for code blocks
- [ ] Create expandable/collapsible sections
- [ ] Add image zoom functionality
- [ ] Implement dark/light theme for code blocks

**Components to Create:**

- `components/blog/copy-button.tsx`
- `components/blog/expand-section.tsx`
- `lib/utils/reading-time.ts`

### 8. SEO & Social Sharing

- [ ] Generate unique meta tags per post
- [ ] Create Open Graph images
- [ ] Add Twitter Card metadata
- [ ] Implement JSON-LD structured data
- [ ] Add canonical URLs
- [ ] Create sitemap for blog posts
- [ ] Implement RSS feed

**Files to Create:**

- `app/blog/[slug]/opengraph-image.tsx`
- `app/blog/rss.xml/route.ts`
- `lib/utils/generate-og-image.ts`

### 9. Comments System (Optional)

- [ ] Choose comment platform (Giscus, Utterances, Disqus)
- [ ] Integrate comments component
- [ ] Add comment count to blog cards
- [ ] Configure moderation settings

**Components to Create:**

- `components/blog/comments.tsx`

### 10. Blog Analytics

- [ ] Track post views
- [ ] Track reading time
- [ ] Track scroll depth
- [ ] Track social shares
- [ ] Show view count on posts

---

## Blog Post Structure

### Frontmatter Schema

```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format
  updated?: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  category: string;
  featured: boolean;
  published: boolean;
  coverImage: string;
  coverImageAlt: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  series?: string;
  seriesOrder?: number;
}
```

### Example Blog Post (MDX)

````mdx
---
title: "Building Modern Web Apps with Next.js 14"
description: "A comprehensive guide to building performant web applications using Next.js 14 and the App Router"
date: "2025-01-15"
author:
  name: "Your Name"
  avatar: "/images/avatar.jpg"
tags: ["nextjs", "react", "web-development"]
category: "tutorials"
featured: true
published: true
coverImage: "/blog/nextjs-14/cover.jpg"
coverImageAlt: "Next.js 14 App Router"
---

# Introduction

Next.js 14 introduces powerful features...

## Server Components

React Server Components allow...

\```typescript
// Example code
export default function Page() {
return <div>Hello World</div>
}
\```

<Callout type="info">Remember to use Server Components by default!</Callout>
````

---

## Content Structure

```
content/
└── blog/
    ├── getting-started-with-react/
    │   ├── index.mdx
    │   └── images/
    │       └── cover.jpg
    ├── advanced-typescript-patterns/
    │   ├── index.mdx
    │   └── images/
    └── ...
```

---

## Reading Time Calculation

```typescript
// lib/utils/reading-time.ts
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
```

---

## Syntax Highlighting Configuration

```typescript
// Using rehype-pretty-code with Shiki
const options = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
  onVisitLine(node) {
    // Prevent empty lines from collapsing
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};
```

---

## RSS Feed Generation

```typescript
// app/blog/rss.xml/route.ts
import { getAllPosts } from "@/lib/mdx";

export async function GET() {
  const posts = await getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Your Portfolio Blog</title>
        <link>https://yoursite.com/blog</link>
        <description>Technical blog about web development</description>
        ${posts
          .map(
            (post) => `
          <item>
            <title>${post.title}</title>
            <link>https://yoursite.com/blog/${post.slug}</link>
            <description>${post.description}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>
        `
          )
          .join("")}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
```

---

## SEO Optimization

### Generate Metadata

```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}
```

---

## Design Considerations

### Blog Listing

- Clean, scannable layout
- Engaging thumbnails
- Clear typography hierarchy
- Adequate whitespace
- Visual separation between posts

### Blog Post

- Comfortable reading width (65-75 characters)
- Generous line height (1.6-1.8)
- Sufficient font size (16-18px)
- Clear code block styling
- Sticky table of contents
- Progress indicator for long posts

### Syntax Highlighting

- Theme matches site theme (dark/light)
- Good contrast for readability
- Line numbers for long code blocks
- Copy button easily accessible

---

## Accessibility Requirements

- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text for all images
- [ ] ARIA labels for share buttons
- [ ] Keyboard navigation for TOC
- [ ] Focus indicators on interactive elements
- [ ] Sufficient color contrast

---

## Performance Optimization

- [ ] Code split blog pages
- [ ] Lazy load images
- [ ] Optimize cover images
- [ ] Use ISR for blog posts
- [ ] Minimize JavaScript for MDX
- [ ] Cache blog post data

---

## Acceptance Criteria

- ✅ Blog listing page displays all published posts
- ✅ Individual blog posts render correctly
- ✅ Syntax highlighting works for all languages
- ✅ Search and filtering work smoothly
- ✅ Reading time is accurate
- ✅ Table of contents generates and works
- ✅ Social sharing buttons functional
- ✅ RSS feed validates and works
- ✅ SEO metadata is unique per post
- ✅ Code blocks have copy functionality
- ✅ Responsive on all devices
- ✅ Lighthouse score 90+ on blog pages

---

## Files to Create/Modify

### New Files

- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/blog/category/[slug]/page.tsx`
- `app/blog/tag/[slug]/page.tsx`
- `app/blog/rss.xml/route.ts`
- `components/sections/blog-list.tsx`
- `components/common/blog-card.tsx`
- `components/blog/blog-post.tsx`
- `components/blog/table-of-contents.tsx`
- `components/blog/reading-progress.tsx`
- `components/mdx/*` (all MDX components)
- `mdx-components.tsx`
- `lib/mdx.ts`
- `lib/utils/reading-time.ts`
- `content/blog/` (blog posts)

---

## Dependencies

- **Requires**: Foundation completed
- **Blocks**: None (optional feature)

---

## Testing Checklist

- [ ] Test MDX rendering with various content types
- [ ] Verify code highlighting for different languages
- [ ] Test search functionality
- [ ] Verify filtering works correctly
- [ ] Test RSS feed in feed readers
- [ ] Check Open Graph images on social platforms
- [ ] Test responsive design
- [ ] Verify accessibility with screen reader
- [ ] Test performance with multiple posts

---

## Notes

- Start with 3-5 high-quality posts
- Focus on tutorial-style content
- Include code examples and demos
- Write in clear, accessible language
- Optimize for SEO keywords
- Promote posts on social media
- Consider guest posts or collaborations
- Update posts regularly to keep them current

---

## Content Ideas

- Technology tutorials
- Project case studies (detailed)
- "How I Built..." series
- Best practices and patterns
- Tool comparisons
- Career and learning experiences
- Open source contributions

---

## References

- [MDX Documentation](https://mdxjs.com/)
- [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/)
- [Next.js Blog Starter](https://vercel.com/templates/next.js/blog-starter-kit)
- [Shiki Themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md)
