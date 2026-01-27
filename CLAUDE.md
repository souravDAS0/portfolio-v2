# CLAUDE.md - Project Guide for AI Assistance

**Project**: Modern Developer Portfolio v2
**Last Updated**: 2025-01-17
**Status**: Planning Complete / Development Ready

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Technology Stack](#technology-stack)
4. [Development Workflow](#development-workflow)
5. [Custom Commands](#custom-commands)
6. [Specialized Subagents](#specialized-subagents)
7. [Scope-Based Development](#scope-based-development)
8. [Key Guidelines](#key-guidelines)
9. [Reference Documents](#reference-documents)
10. [Quick Start](#quick-start)

---

## Project Overview

### Purpose

A modern, visually stunning, and performant portfolio website showcasing a software developer's skills, projects, and professional experience.

### Goals

- Build a memorable, professional online presence
- Showcase technical skills and project work
- Demonstrate proficiency in modern web technologies
- Create an engaging UX with smooth animations
- Optimize for performance, accessibility, and SEO

### Target Audience

- Potential employers and recruiters
- Prospective clients for freelance work
- Fellow developers and technical community
- Open-source collaborators

---

## Project Structure

```
portfolio-v2/
├── .claude/
│   └── commands/
│       ├── scope.md          # /scope command definition
│       ├── designer.md       # /designer subagent (UI/UX)
│       ├── engineer.md       # /engineer subagent (Frontend)
│       └── qa.md             # /qa subagent (Testing)
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── projects/            # Projects pages
│   ├── blog/               # Blog pages (optional)
│   └── api/                # API routes
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── sections/           # Page sections (Hero, About, etc.)
│   ├── common/             # Shared components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── forms/              # Form components
│   └── animations/         # Animation components
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── constants.ts        # Constants
│   ├── data/              # Data files
│   ├── services/          # Service integrations
│   ├── hooks/             # Custom hooks
│   └── types/             # TypeScript types
├── content/
│   ├── projects/          # Project content (MDX/JSON)
│   └── blog/              # Blog posts (MDX)
├── public/
│   ├── images/            # Images
│   ├── logos/             # Technology/company logos
│   └── resume/            # Resume files
├── scope-details/         # Detailed scope documents
│   ├── foundation.md
│   ├── core-sections.md
│   ├── projects-portfolio.md
│   ├── experience-resume.md
│   ├── contact-integration.md
│   ├── blog.md
│   ├── polish-optimization.md
│   └── testing-deployment.md
├── current-scope.md       # Active scope (loaded via /scope command)
├── Research.md            # React ecosystem research
├── SOW.md                # Statement of Work
├── CLAUDE.md             # This file
└── README.md             # Project documentation
```

---

## Technology Stack

### Core Framework

- **Next.js 14+**: React framework with App Router
- **React 18+**: UI library with Server Components
- **TypeScript**: Type-safe development

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Headless component library
- **Aceternity UI**: Animated component collection
- **Radix UI**: Unstyled accessible primitives

### Animation

- **Framer Motion**: Declarative animations
- **GSAP** (optional): Complex timeline animations

### State Management

- **Zustand**: Lightweight state management (if needed)
- **React Context**: Theme management

### Forms & Validation

- **React Hook Form**: Form handling
- **Zod**: Schema validation

### Content

- **MDX**: Markdown with JSX for blog (optional)

### Code Quality

- **ESLint**: Linting
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Husky**: Git hooks

### Testing

- **Vitest**: Unit testing
- **React Testing Library**: Component testing
- **Playwright**: E2E testing

### Deployment

- **Vercel**: Hosting and CI/CD
- **GitHub**: Version control

### Integrations

- **Resend**: Email service
- **GitHub API**: Repository stats
- **Analytics**: Google Analytics or Plausible
- **Sentry**: Error tracking

---

## Development Workflow

### Phase-Based Approach

This project follows an 8-phase development approach:

1. **Foundation** (Week 1-2): Setup, tooling, design system
2. **Core Sections** (Week 3-4): Hero, About, Skills, Navigation
3. **Projects Portfolio** (Week 5-6): Project showcase and filtering
4. **Experience & Resume** (Week 7): Work history and CV
5. **Contact & Integration** (Week 8): Contact form, analytics
6. **Blog** (Week 9-10): Content platform (optional)
7. **Polish & Optimization** (Week 11-12): Animations, performance, SEO
8. **Testing & Deployment** (Week 13): QA and launch

### Development Best Practices

1. **Always check `current-scope.md`** before starting work on a feature
2. Use the `/scope` command to load the relevant scope
3. Follow the tasks outlined in the scope document
4. Test components as you build them
5. Ensure accessibility from the start
6. Optimize for performance continuously
7. Keep animations subtle and purposeful
8. Maintain consistent code style

---

## Custom Commands

### /scope Command

**Purpose**: Load a specific scope file into `current-scope.md` for focused development work.

**Usage**:

```
/scope foundation
/scope core-sections
/scope projects-portfolio
/scope experience-resume
/scope contact-integration
/scope blog
/scope polish-optimization
/scope testing-deployment
```

**What it does**:

1. Reads the specified scope file from `scope-details/`
2. Writes the content to `current-scope.md`
3. Makes the detailed scope available for reference during development

**When to use**:

- Before starting work on a new phase
- When switching between different areas of the project
- When you need detailed task lists and requirements
- When you're unsure what to work on next

---

## Specialized Subagents

This project includes three specialized AI subagents designed to work on different aspects of development. Each subagent automatically references `current-scope.md` to understand the current phase and tasks.

### Workflow

1. **Load a scope** first using `/scope <scope-name>`
2. **Invoke a subagent** based on what you need to work on
3. **The subagent works autonomously** following `current-scope.md`

### Available Subagents

#### 1. `/designer` - UI/UX Designer Agent

**Focus**: Design implementation, styling, theming, and user experience

**Responsibilities**:

- Design system implementation (colors, typography, spacing)
- Component styling with Tailwind CSS and Shadcn UI
- Dark/light theme implementation
- Responsive design (mobile-first)
- Accessibility (WCAG 2.1 Level AA)
- Micro-interactions and animations
- Visual consistency and brand alignment

**When to use**:

- Need to style components
- Implementing design system
- Working on theme/dark mode
- Creating responsive layouts
- Ensuring visual consistency
- Designing user interactions

**Example**:

```
/scope foundation
/designer
```

---

#### 2. `/engineer` - Frontend Engineer Agent

**Focus**: Technical implementation, functionality, and architecture

**Responsibilities**:

- React component development
- TypeScript implementation (strict typing)
- Component logic and state management
- API integrations and data fetching
- Performance optimization
- Error handling and edge cases
- Next.js best practices (Server/Client Components)

**When to use**:

- Building component functionality
- Implementing business logic
- Working with TypeScript types
- Integrating with APIs
- Optimizing performance
- Handling errors and loading states

**Example**:

```
/scope foundation
/engineer
```

---

#### 3. `/qa` - QA Tester Agent

**Focus**: Testing, quality assurance, and validation

**Responsibilities**:

- Functional testing (user interactions, forms, navigation)
- Accessibility testing (keyboard nav, screen readers, ARIA)
- Performance testing (Lighthouse, Core Web Vitals)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Visual testing (responsive, themes, animations)
- Code quality review (TypeScript, ESLint)
- Acceptance criteria validation

**When to use**:

- After implementing features
- Validating acceptance criteria
- Running comprehensive tests
- Checking accessibility compliance
- Performance validation
- Before completing a scope phase

**Example**:

```
/scope foundation
/qa
```

---

### Subagent Best Practices

#### Sequential Workflow (Recommended)

For complete feature development, use subagents in sequence:

```bash
# 1. Load the scope
/scope foundation

# 2. Design the feature
/designer

# 3. Implement the functionality
/engineer

# 4. Test and validate
/qa
```

#### Parallel Workflow (Advanced)

For specific tasks, invoke only the needed subagent:

```bash
# Just need styling work
/scope core-sections
/designer

# Just need functionality
/scope projects-portfolio
/engineer

# Just need testing
/scope contact-integration
/qa
```

#### How Subagents Work

1. **Automatic Context**: Each subagent automatically reads `current-scope.md`
2. **Task Identification**: Subagent identifies relevant tasks from the scope
3. **Specialized Work**: Focuses only on their area of expertise
4. **Scope Compliance**: Follows requirements and acceptance criteria
5. **Quality Standards**: Adheres to project guidelines and standards

#### Subagent + Scope Integration

**Key Benefits**:

- 🎯 Focused expertise on specific development areas
- 📋 Automatic alignment with current scope tasks
- ✅ Systematic task completion
- 🔄 Clear separation of concerns
- 📈 Improved code quality and consistency

**Important Notes**:

- Always load a scope BEFORE using a subagent
- Subagents reference `current-scope.md` automatically
- Each subagent has specialized knowledge and focus
- Subagents work independently but can be used in sequence
- All subagents follow project standards from CLAUDE.md

---

## Scope-Based Development

### How to Use Scopes

1. **Load the scope** you want to work on:

   ```
   /scope foundation
   ```

2. **Read `current-scope.md`** to understand:
   - Objectives for this phase
   - Detailed task list
   - Technical requirements
   - Acceptance criteria
   - Files to create/modify

3. **Work through the tasks** systematically:
   - Check off tasks as you complete them
   - Refer to code examples in the scope
   - Follow the design considerations
   - Test as you go

4. **Reference the scope** throughout development:
   - When you're unsure about implementation details
   - When you need data structure examples
   - When you want to verify requirements
   - When you're checking acceptance criteria

### Available Scopes

| Scope                 | Phase | Focus Area                                       |
| --------------------- | ----- | ------------------------------------------------ |
| `foundation`          | 1     | Project setup, tooling, design system            |
| `core-sections`       | 2     | Hero, About, Skills, Navigation, Footer          |
| `projects-portfolio`  | 3     | Project showcase, filtering, GitHub integration  |
| `experience-resume`   | 4     | Work history, timeline, resume download          |
| `contact-integration` | 5     | Contact form, email, analytics, social links     |
| `blog`                | 6     | MDX blog, search, syntax highlighting (optional) |
| `polish-optimization` | 7     | Animations, performance, SEO, accessibility      |
| `testing-deployment`  | 8     | Testing, CI/CD, production deployment            |

---

## Key Guidelines

### CRITICAL: Always Refer to `current-scope.md`

**Before working on ANY feature**:

1. ✅ Load the appropriate scope using `/scope <scope-name>`
2. ✅ Read through `current-scope.md` completely
3. ✅ Understand the objectives and requirements
4. ✅ Follow the task list systematically
5. ✅ Refer back to the scope document frequently

**Why this matters**:

- Ensures you don't miss important tasks
- Provides implementation guidance and examples
- Keeps work aligned with project goals
- Helps maintain consistency across the project
- Reduces back-and-forth and rework

### Code Quality Standards

- **TypeScript**: Use strict mode, no `any` types
- **Components**: Small, focused, single-responsibility
- **Props**: Always define interfaces
- **Naming**: Clear, descriptive, consistent
- **Comments**: Explain "why", not "what"
- **Testing**: Write tests for critical paths
- **Accessibility**: WCAG 2.1 Level AA compliance

### Performance Standards

- **Lighthouse**: 90+ in all categories
- **Core Web Vitals**:
  - LCP < 2.5s
  - FID/INP < 100ms
  - CLS < 0.1
- **Bundle Size**:
  - First Load < 150 KB
  - Per Route < 50 KB
- **Images**: Optimized, lazy-loaded, responsive

### Accessibility Standards

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast (4.5:1)
- Respect `prefers-reduced-motion`
- Focus indicators visible

### Animation Guidelines

- Keep animations under 300ms for interactions
- Use 600ms+ for state transitions
- Use GPU-accelerated properties (transform, opacity)
- Avoid animating layout properties
- Respect `prefers-reduced-motion`
- Make animations purposeful, not gratuitous

---

## Reference Documents

### Primary Documents

1. **Research.md**: Comprehensive React ecosystem research (2025)
   - UI component libraries
   - Animation libraries
   - State management solutions
   - Designer component websites
   - Recommended tech stack

2. **SOW.md**: Statement of Work
   - Project objectives and scope
   - Technical requirements
   - Deliverables
   - Timeline and phases
   - Success criteria

3. **scope-details/**: Detailed phase documentation
   - Task breakdowns
   - Technical specifications
   - Code examples
   - Acceptance criteria

4. **current-scope.md**: Active scope document
   - Loaded via `/scope` command
   - Your primary reference during development

### Supporting Documents

- **README.md**: Project overview and setup instructions
- **package.json**: Dependencies and scripts
- **tsconfig.json**: TypeScript configuration
- **tailwind.config.ts**: Tailwind customization
- **.env.example**: Required environment variables

---

## Quick Start

### For Development (Recommended Workflow)

1. **Load a scope**:

   ```
   /scope foundation
   ```

2. **Use specialized subagents** to work on different aspects:

   ```bash
   # Design and styling
   /designer

   # Implementation and functionality
   /engineer

   # Testing and validation
   /qa
   ```

3. **Or work manually** by reading `current-scope.md` and implementing tasks yourself

4. **Reference the scope** whenever you need:
   - Task details
   - Code examples
   - Data structures
   - Acceptance criteria

### Quick Development Pattern

**Sequential approach** (recommended for complete features):

```bash
/scope foundation        # Load the scope
/designer               # Design & style components
/engineer               # Implement functionality
/qa                     # Test and validate
```

**Targeted approach** (for specific tasks):

```bash
/scope foundation        # Load the scope
/engineer               # Just implement functionality
```

### For New Features

1. Identify which scope the feature belongs to
2. Load that scope: `/scope <scope-name>`
3. Read the relevant section in `current-scope.md`
4. Follow the implementation guidelines
5. Test the feature
6. Update the task checklist

### For Bug Fixes

1. Identify which area the bug is in
2. Load the relevant scope
3. Review the requirements and acceptance criteria
4. Fix the bug
5. Add a test to prevent regression

---

## Important Notes

### Do's ✅

- **ALWAYS** check `current-scope.md` before starting work
- Use the `/scope` command to switch contexts
- Follow the phase order for systematic development
- Write tests for critical functionality
- Optimize images and assets
- Ensure accessibility from the start
- Keep animations subtle and performant
- Document complex logic
- Commit frequently with clear messages

### Don'ts ❌

- Don't skip reading the scope document
- Don't work on features outside the current scope
- Don't use `any` type in TypeScript
- Don't add dependencies without consideration
- Don't skip accessibility features
- Don't over-animate (subtlety is key)
- Don't ignore performance budgets
- Don't commit console.logs or debug code
- Don't deploy without testing

---

## Environment Variables

### Required for Production

```bash
# Email Service (Resend)
RESEND_API_KEY=
CONTACT_EMAIL=
FROM_EMAIL=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# Error Tracking (Sentry)
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=

# GitHub Integration
GITHUB_TOKEN=
NEXT_PUBLIC_GITHUB_USERNAME=

# Site Configuration
NEXT_PUBLIC_SITE_URL=
```

See `.env.example` for complete list.

---

## Getting Help

### When Stuck

1. **Re-read** the current scope document
2. **Check** the Research.md for library documentation links
3. **Review** the SOW.md for project requirements
4. **Look at** code examples in scope documents
5. **Search** the codebase for similar patterns

### For Complex Tasks

1. Load the appropriate scope
2. Break down the task into smaller steps
3. Reference the scope's task list
4. Follow the code examples provided
5. Test incrementally

---

## Success Metrics

### Development

- All scope tasks completed
- All tests passing
- No TypeScript errors
- No ESLint warnings
- Code coverage > 80%

### Performance

- Lighthouse score > 90 (all categories)
- Core Web Vitals passing
- Bundle size within budget
- Load time < 2s on 3G

### Quality

- Accessibility score 100
- No console errors
- Responsive on all devices
- Cross-browser compatible
- SEO optimized

---

## Version Control

### Branch Strategy

- `main`: Production-ready code
- `develop`: Development branch
- Feature branches: `feature/scope-name`

### Commit Messages

- Format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Example: `feat(foundation): add theme provider and dark mode toggle`

---

## Deployment

### Environments

- **Development**: `localhost:3000`
- **Preview**: `*.vercel.app` (automatic on PR)
- **Production**: `yourdomain.com`

### Deployment Process

1. Complete all scope tasks
2. Run full test suite
3. Pass Lighthouse audit
4. Merge to main branch
5. Automatic deployment via Vercel
6. Verify production deployment

---

## Final Reminders

🎯 **Always load and reference `current-scope.md` while working**

📋 **Use `/scope <scope-name>` to switch between project areas**

✅ **Follow the scope's task list systematically**

🧪 **Test as you build, don't leave it for later**

⚡ **Optimize for performance from the start**

♿ **Accessibility is not optional**

🎨 **Subtlety wins over flashiness in animations**

📱 **Mobile-first, always**

---

**Remember**: The scope documents are your blueprint. Use them!
