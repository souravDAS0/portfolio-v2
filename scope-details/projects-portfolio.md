# Scope: Projects Portfolio - Showcase Work

**Phase**: 3
**Duration**: Week 5-6
**Status**: Not Started

---

## Overview

Create a comprehensive project showcase featuring detailed case studies, live demos, and GitHub integrations. This is the centerpiece of the portfolio where visitors can explore your work in depth.

---

## Objectives

- Build an engaging project gallery with filtering capabilities
- Create detailed project case study pages
- Integrate with GitHub API for live repository stats
- Showcase project screenshots, videos, and demos
- Implement smooth transitions and animations
- Make projects easily discoverable and shareable

---

## Tasks

### 1. Projects Gallery/Grid

- [ ] Design project card layout
- [ ] Create project grid with responsive columns
- [ ] Implement project card component
- [ ] Add hover effects and animations
- [ ] Display project thumbnail/hero image
- [ ] Show tech stack badges on cards
- [ ] Add quick view functionality
- [ ] Implement "Load More" or pagination
- [ ] Add project status indicators (Live, In Progress, Archived)

**Components to Create:**

- `components/sections/projects.tsx`
- `components/common/project-card.tsx`
- `components/common/project-grid.tsx`

### 2. Filtering & Search

- [ ] Create filter buttons by technology
- [ ] Implement category filtering (Web, Mobile, Full-stack, etc.)
- [ ] Add search functionality
- [ ] Show active filter states
- [ ] Implement "Show All" option
- [ ] Add filter animations
- [ ] Display result count
- [ ] Persist filter state in URL

**Components to Create:**

- `components/common/project-filters.tsx`
- `components/common/filter-button.tsx`
- `components/common/search-bar.tsx`

### 3. Project Detail Pages

- [ ] Create dynamic route `/projects/[slug]`
- [ ] Design project detail page layout
- [ ] Add project hero section with title and tagline
- [ ] Display full project description
- [ ] Show problem/solution/outcome sections
- [ ] Add project metrics (duration, team size, role)
- [ ] Include technical architecture section
- [ ] Display key features list
- [ ] Add lessons learned section
- [ ] Create image gallery component
- [ ] Embed demo videos
- [ ] Add related projects section

**Files to Create:**

- `app/projects/[slug]/page.tsx`
- `components/project/project-hero.tsx`
- `components/project/project-details.tsx`
- `components/project/project-gallery.tsx`
- `components/project/related-projects.tsx`

### 4. GitHub Integration

- [ ] Set up GitHub API integration
- [ ] Fetch repository stats (stars, forks, watchers)
- [ ] Display commit activity
- [ ] Show primary language and topics
- [ ] Add "View on GitHub" button
- [ ] Implement error handling for API failures
- [ ] Cache GitHub data to reduce API calls
- [ ] Display last updated date

**Components to Create:**

- `components/common/github-stats.tsx`
- `lib/services/github.ts`
- `lib/hooks/useGitHubStats.ts`

### 5. Project Media Management

- [ ] Create image optimization pipeline
- [ ] Implement project screenshot gallery
- [ ] Add lightbox/modal for full-size images
- [ ] Support video embeds (YouTube, Vimeo)
- [ ] Create demo GIF placeholders
- [ ] Optimize images with next/image
- [ ] Add lazy loading for media
- [ ] Implement image zoom functionality

**Components to Create:**

- `components/common/image-gallery.tsx`
- `components/common/lightbox.tsx`
- `components/common/video-embed.tsx`

### 6. Technology Badges

- [ ] Create tech stack badge component
- [ ] Design badge styles (colored, outlined, minimal)
- [ ] Add technology icons to badges
- [ ] Make badges filterable
- [ ] Implement badge animations
- [ ] Create comprehensive technology list

**Components to Create:**

- `components/common/tech-badge.tsx`
- `lib/data/technologies.ts`

### 7. Project Data Structure

- [ ] Create TypeScript interfaces for projects
- [ ] Set up project data files (JSON or MDX)
- [ ] Implement project slugification
- [ ] Add project metadata (SEO, OG images)
- [ ] Create sample project data
- [ ] Validate data structure

**Files to Create:**

- `lib/types/project.ts`
- `content/projects/` (individual project files)
- `lib/data/projects.ts`
- `lib/utils/project-helpers.ts`

### 8. Call-to-Actions

- [ ] Add "View Live Demo" buttons
- [ ] Implement "View Source Code" links
- [ ] Create "Read Case Study" CTAs
- [ ] Add social share buttons
- [ ] Include "Contact Me About This Project" option

### 9. Animations & Interactions

- [ ] Implement stagger animations for project grid
- [ ] Add smooth page transitions
- [ ] Create parallax effects for project hero
- [ ] Add scroll-based animations
- [ ] Implement smooth filtering transitions
- [ ] Add loading states

---

## Project Data Structure

### TypeScript Interfaces

```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;

  // Media
  thumbnail: string;
  images: string[];
  heroImage?: string;
  demoVideo?: string;

  // Links
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;

  // Metadata
  category: ProjectCategory;
  tags: string[];
  technologies: Technology[];
  featured: boolean;
  status: ProjectStatus;

  // Details
  startDate: string;
  endDate?: string;
  role: string;
  teamSize?: number;

  // Case Study
  problem?: string;
  solution?: string;
  outcome?: string;
  features?: string[];
  challenges?: string[];
  lessonsLearned?: string[];

  // GitHub
  githubStats?: GitHubStats;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
}

type ProjectCategory =
  | "web"
  | "mobile"
  | "fullstack"
  | "frontend"
  | "backend"
  | "opensource"
  | "personal"
  | "client";

type ProjectStatus = "live" | "in-progress" | "archived" | "concept";

interface Technology {
  name: string;
  category: string;
  icon?: string;
  color?: string;
}

interface GitHubStats {
  stars: number;
  forks: number;
  watchers: number;
  language: string;
  topics: string[];
  lastUpdated: string;
}
```

### Example Project Data

```typescript
{
  id: '01',
  slug: 'ecommerce-platform',
  title: 'E-Commerce Platform',
  tagline: 'Full-stack marketplace with real-time features',
  description: 'A modern e-commerce platform built with Next.js...',
  thumbnail: '/projects/ecommerce/thumbnail.jpg',
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/user/repo',
  category: 'fullstack',
  tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
  technologies: [
    { name: 'Next.js', category: 'frontend' },
    { name: 'MongoDB', category: 'database' }
  ],
  featured: true,
  status: 'live'
}
```

---

## Content Requirements

### For Each Project

- **Title**: Clear, descriptive name
- **Tagline**: One-line summary (50-100 characters)
- **Description**: Elevator pitch (100-150 words)
- **Long Description**: Detailed explanation (300-500 words)
- **Screenshots**: 3-5 high-quality images (1920x1080 recommended)
- **Demo Video**: Optional 30-60 second overview
- **Technology Stack**: List of all technologies used
- **Links**: Live demo, GitHub repo, case study
- **Project Metrics**: Timeline, team size, your role
- **Case Study Sections**:
  - Problem/Challenge
  - Solution/Approach
  - Key Features (3-5 items)
  - Outcomes/Results
  - Lessons Learned

### Minimum Projects for Portfolio

- At least 3 featured projects
- 6-12 total projects recommended
- Mix of personal, client, and open-source work
- Variety of technologies showcased

---

## Design Considerations

### Project Cards

- Clear visual hierarchy
- Technology badges prominently displayed
- Hover effects that reveal more info
- "Featured" badge for top projects
- Status indicator (Live, WIP, etc.)

### Project Detail Pages

- Hero section with striking visual
- Clear navigation back to projects
- Scannable content with headings
- Mix of text, images, and media
- Related projects at the bottom
- Social sharing options

### Gallery Layout

- Responsive grid (1-2-3 columns)
- Masonry layout option
- Consistent card heights or dynamic
- Loading states for filtered results
- Empty state for no results

---

## GitHub API Implementation

### Setup

```typescript
// lib/services/github.ts
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_API = "https://api.github.com";

export async function getRepoStats(owner: string, repo: string) {
  const response = await fetch(`${GITHUB_API}/repos/${owner}/${repo}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub stats");
  }

  const data = await response.json();

  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
    watchers: data.watchers_count,
    language: data.language,
    topics: data.topics,
    lastUpdated: data.updated_at,
  };
}
```

### Environment Variables

- `GITHUB_TOKEN`: Personal access token for API
- `NEXT_PUBLIC_GITHUB_USERNAME`: Your GitHub username

---

## Performance Optimization

- [ ] Use next/image for all project images
- [ ] Implement lazy loading for images
- [ ] Code split project detail pages
- [ ] Optimize GitHub API calls with caching
- [ ] Use ISR (Incremental Static Regeneration)
- [ ] Minimize animation JavaScript
- [ ] Compress images and videos
- [ ] Implement infinite scroll or pagination

---

## SEO Optimization

- [ ] Generate unique meta tags for each project
- [ ] Create Open Graph images for projects
- [ ] Add JSON-LD structured data
- [ ] Generate sitemap with project URLs
- [ ] Implement canonical URLs
- [ ] Add Twitter Card metadata

---

## Accessibility Requirements

- [ ] Alt text for all project images
- [ ] Keyboard navigation for filters
- [ ] ARIA labels for interactive elements
- [ ] Focus management in modals/lightbox
- [ ] Screen reader announcements for filtering
- [ ] Sufficient color contrast on badges

---

## Acceptance Criteria

- ✅ Project gallery displays all projects correctly
- ✅ Filtering works smoothly without page reload
- ✅ Project detail pages load quickly
- ✅ GitHub stats display correctly (or gracefully fail)
- ✅ All images are optimized and lazy-loaded
- ✅ Responsive design works on all devices
- ✅ Animations are smooth and purposeful
- ✅ SEO meta tags are unique per project
- ✅ Lighthouse score 90+ on project pages
- ✅ All CTAs are functional and accessible

---

## Files to Create/Modify

### New Files

- `app/projects/page.tsx`
- `app/projects/[slug]/page.tsx`
- `components/sections/projects.tsx`
- `components/common/project-card.tsx`
- `components/common/project-grid.tsx`
- `components/common/project-filters.tsx`
- `components/common/tech-badge.tsx`
- `components/common/github-stats.tsx`
- `components/common/image-gallery.tsx`
- `components/common/lightbox.tsx`
- `lib/services/github.ts`
- `lib/data/projects.ts`
- `lib/types/project.ts`
- `lib/utils/project-helpers.ts`
- `content/projects/*.mdx` or `*.json`

---

## Dependencies

- **Requires**: Foundation, Core Sections completed
- **Blocks**: None (can work in parallel with other sections)

---

## Testing Checklist

- [ ] Test filtering with various combinations
- [ ] Test GitHub API error states
- [ ] Verify all project links work
- [ ] Test image gallery and lightbox
- [ ] Check responsive layouts
- [ ] Test with JavaScript disabled (progressive enhancement)
- [ ] Verify SEO tags are correct
- [ ] Test load times with slow 3G
- [ ] Check animation performance

---

## Notes

- Consider using MDX for project content if you want rich formatting
- GitHub API has rate limits - implement proper caching
- Featured projects should be your best work
- Keep project descriptions concise but informative
- Use high-quality screenshots - they're the first thing visitors see
- Consider adding a "Work in Progress" section for current projects

---

## References

- [GitHub REST API](https://docs.github.com/en/rest)
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [next/image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Project Portfolio Inspiration](https://brittanychiang.com/)
