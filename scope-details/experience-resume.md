# Scope: Experience & Resume - Professional Background

**Phase**: 4
**Duration**: Week 7
**Status**: Not Started

---

## Overview

Showcase professional work experience, education, certifications, and provide downloadable resume. This section establishes credibility and demonstrates career progression.

---

## Objectives

- Display work history in an engaging timeline format
- Highlight key achievements and responsibilities
- Showcase education and certifications
- Provide downloadable resume in multiple formats
- Create testimonials/recommendations section
- Make experience easy to scan and understand

---

## Tasks

### 1. Experience Timeline Component

- [ ] Design vertical timeline layout
- [ ] Create timeline item component
- [ ] Add company logos
- [ ] Display job titles and durations
- [ ] Include key responsibilities (bullet points)
- [ ] Add achievements/metrics
- [ ] Implement scroll animations for timeline
- [ ] Add "View Details" expand/collapse functionality
- [ ] Make timeline responsive for mobile
- [ ] Add timeline connector line with animation

**Components to Create:**

- `components/sections/experience.tsx`
- `components/common/experience-timeline.tsx`
- `components/common/experience-item.tsx`
- `components/common/timeline-connector.tsx`

### 2. Experience Data Structure

- [ ] Create TypeScript interfaces
- [ ] Set up experience data file
- [ ] Add work experience entries
- [ ] Include education entries
- [ ] Add volunteer/side projects (optional)
- [ ] Validate data completeness

**Files to Create:**

- `lib/types/experience.ts`
- `lib/data/experience.ts`

### 3. Company/Education Cards

- [ ] Create company card component
- [ ] Add company logos and branding
- [ ] Display job title and duration
- [ ] Show employment type (Full-time, Contract, etc.)
- [ ] Add location information
- [ ] Include tech stack used
- [ ] Add hover effects
- [ ] Make cards clickable for more details

**Components to Create:**

- `components/common/company-card.tsx`
- `components/common/job-details.tsx`

### 4. Resume Download Feature

- [ ] Create downloadable PDF resume
- [ ] Add download button component
- [ ] Implement download tracking (analytics)
- [ ] Create alternative format options (PDF, DOCX)
- [ ] Add "View Online" option
- [ ] Show last updated date
- [ ] Add version number to resume
- [ ] Optimize PDF for ATS (Applicant Tracking Systems)

**Components to Create:**

- `components/common/resume-download.tsx`
- `components/common/download-button.tsx`

**Files to Create:**

- `public/resume/resume.pdf`
- `public/resume/resume-docx.docx` (optional)

### 5. Certifications & Awards

- [ ] Create certifications section
- [ ] Display certification badges/logos
- [ ] Add issue date and expiry (if applicable)
- [ ] Include verification links
- [ ] Show award details
- [ ] Create certificate carousel/grid
- [ ] Add credential IDs

**Components to Create:**

- `components/sections/certifications.tsx`
- `components/common/certification-badge.tsx`
- `components/common/certificate-card.tsx`

### 6. Testimonials/Recommendations (Optional)

- [ ] Create testimonials section
- [ ] Design testimonial card component
- [ ] Add reviewer photo and details
- [ ] Include company/role information
- [ ] Add star ratings (if applicable)
- [ ] Implement carousel for multiple testimonials
- [ ] Add LinkedIn recommendations integration (optional)
- [ ] Include verified badge

**Components to Create:**

- `components/sections/testimonials.tsx`
- `components/common/testimonial-card.tsx`
- `components/common/testimonial-carousel.tsx`

### 7. Skills Growth Section (Optional)

- [ ] Create skills progression visualization
- [ ] Show technology adoption timeline
- [ ] Display learning journey
- [ ] Add interactive chart/graph
- [ ] Highlight continuous learning

### 8. Achievements Highlights

- [ ] Create achievements showcase
- [ ] Display metrics (users impacted, revenue generated, etc.)
- [ ] Add animated counters
- [ ] Highlight key wins
- [ ] Include impact statements

**Components to Create:**

- `components/common/achievement-card.tsx`
- `components/common/animated-counter.tsx`

---

## Data Structures

### Experience Interface

```typescript
interface Experience {
  id: string;
  company: string;
  companyLogo: string;
  companyUrl?: string;
  position: string;
  location: string;
  locationType: "onsite" | "remote" | "hybrid";
  employmentType:
    | "full-time"
    | "part-time"
    | "contract"
    | "freelance"
    | "internship";
  startDate: string; // YYYY-MM format
  endDate?: string; // YYYY-MM or 'present'
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  projects?: string[]; // Links to project IDs
}

interface Education {
  id: string;
  institution: string;
  institutionLogo: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
  activities?: string[];
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  photo: string;
  text: string;
  rating?: number;
  linkedinUrl?: string;
  date: string;
}
```

### Example Experience Entry

```typescript
{
  id: 'exp-01',
  company: 'Tech Corp',
  companyLogo: '/logos/techcorp.png',
  position: 'Senior Frontend Developer',
  location: 'San Francisco, CA',
  locationType: 'hybrid',
  employmentType: 'full-time',
  startDate: '2021-06',
  endDate: 'present',
  current: true,
  description: 'Leading frontend development for enterprise applications',
  responsibilities: [
    'Lead a team of 4 frontend developers',
    'Architect and implement React applications',
    'Mentor junior developers'
  ],
  achievements: [
    'Reduced page load time by 40%',
    'Increased test coverage from 30% to 85%',
    'Migrated legacy codebase to TypeScript'
  ],
  technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  projects: ['project-01', 'project-02']
}
```

---

## Content Requirements

### For Each Experience Entry

- **Company Name**: Full legal name or commonly used name
- **Company Logo**: High-res PNG or SVG (200x200px minimum)
- **Position/Title**: Official job title
- **Duration**: Start and end dates (Month/Year)
- **Location**: City, State/Country
- **Description**: 2-3 sentence overview
- **Responsibilities**: 3-5 bullet points
- **Achievements**: 2-4 quantifiable results
- **Technologies**: All relevant tech stack items

### For Education

- **Institution Name and Logo**
- **Degree and Field of Study**
- **Graduation Date**
- **GPA** (if noteworthy, e.g., >3.5)
- **Honors/Awards**
- **Relevant Coursework** (3-5 courses)

### For Certifications

- **Certification Name**
- **Issuing Organization**
- **Issue Date**
- **Credential ID/URL** (for verification)
- **Badge Image**

### Resume File

- **PDF Format**: ATS-friendly, single column
- **File Size**: < 1MB
- **Format**: Professional template
- **Content**: 1-2 pages maximum
- **Sections**: Contact, Summary, Experience, Education, Skills

---

## Design Considerations

### Timeline Design

- Use vertical timeline for chronological order
- Latest/current position at the top
- Clear visual separation between entries
- Animated connector line on scroll
- Responsive: collapse to simple list on mobile

### Company Cards

- Professional, clean design
- Prominent company logos
- Clear visual hierarchy
- Technology badges for quick scanning
- Subtle hover effects

### Resume Download

- Prominent placement (hero section or about)
- Clear labeling ("Download Resume" or "Get My CV")
- Show file size and format
- Add icon (download arrow)
- Provide multiple format options

---

## Resume PDF Requirements

### Content Sections

1. **Header**: Name, title, contact info
2. **Professional Summary**: 2-3 sentences
3. **Experience**: Reverse chronological order
4. **Education**: Degrees and certifications
5. **Skills**: Categorized list
6. **Projects**: Optional, 2-3 key projects

### Formatting

- **Font**: Professional serif or sans-serif (Arial, Calibri, Times New Roman)
- **Font Size**: 10-12pt body, 14-16pt headings
- **Margins**: 0.5-1 inch all sides
- **Length**: 1 page preferred, 2 pages max
- **Color**: Minimal, professional (black text, accent color for headings)

### ATS Optimization

- Use standard section headings
- Avoid tables and columns
- Use simple bullet points
- Include keywords from job descriptions
- Save as PDF (but test .docx version too)

---

## Accessibility Requirements

- [ ] Semantic HTML for timeline
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation support
- [ ] Screen reader friendly structure
- [ ] High contrast for text
- [ ] Focus indicators on cards

---

## Performance Optimization

- [ ] Lazy load company logos
- [ ] Optimize resume PDF size
- [ ] Code split section components
- [ ] Use next/image for logos
- [ ] Minimize animation JavaScript

---

## SEO Considerations

- [ ] Add structured data (JSON-LD) for job postings
- [ ] Include keywords in descriptions
- [ ] Optimize page title and meta description
- [ ] Use semantic HTML headings

---

## Acceptance Criteria

- ✅ Experience timeline displays all entries correctly
- ✅ Timeline animations are smooth
- ✅ Company logos load and display properly
- ✅ Resume download works on all devices
- ✅ PDF resume is ATS-friendly
- ✅ Certifications display with verification links
- ✅ Testimonials carousel works smoothly (if included)
- ✅ Section is fully responsive
- ✅ Accessibility score 95+ on Lighthouse
- ✅ All dates are formatted consistently

---

## Files to Create/Modify

### New Files

- `components/sections/experience.tsx`
- `components/sections/certifications.tsx`
- `components/sections/testimonials.tsx`
- `components/common/experience-timeline.tsx`
- `components/common/experience-item.tsx`
- `components/common/company-card.tsx`
- `components/common/certification-badge.tsx`
- `components/common/testimonial-card.tsx`
- `components/common/resume-download.tsx`
- `components/common/animated-counter.tsx`
- `lib/data/experience.ts`
- `lib/data/education.ts`
- `lib/data/certifications.ts`
- `lib/data/testimonials.ts`
- `lib/types/experience.ts`
- `public/resume/resume.pdf`
- `public/logos/companies/` (company logos)

---

## Dependencies

- **Requires**: Foundation, Core Sections completed
- **Blocks**: None

---

## Testing Checklist

- [ ] Test timeline on all screen sizes
- [ ] Verify resume PDF downloads correctly
- [ ] Test PDF in ATS systems (if possible)
- [ ] Check all external links work
- [ ] Verify animations don't impact performance
- [ ] Test with keyboard navigation
- [ ] Check screen reader compatibility
- [ ] Verify company logos load

---

## Notes

- Keep achievement statements quantifiable when possible (numbers, percentages)
- Tailor resume content to target audience (frontend dev roles)
- Consider creating different resume versions for different job types
- Update resume regularly (set reminder quarterly)
- Add analytics tracking for resume downloads
- Consider adding a "Request Reference" button
- LinkedIn recommendations can be powerful social proof

---

## References

- [JSON-LD for Job Postings](https://developers.google.com/search/docs/appearance/structured-data/job-posting)
- [ATS-Friendly Resume Tips](https://www.jobscan.co/blog/ats-resume/)
- [Timeline Component Examples](https://ui.aceternity.com/)
