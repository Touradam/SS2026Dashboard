# LLM Design Consistency Guide
## Solar Sense Web Presentation Style

**Version:** 1.0  
**Theme:** Midnight Champagne (AdamaWebsiteStyle)  
**Last Updated:** June 18, 2026

---

## Table of Contents

1. [Introduction](#introduction)
2. [Design System Foundation](#design-system-foundation)
3. [Component Library](#component-library)
4. [Layout Patterns](#layout-patterns)
5. [JavaScript Architecture](#javascript-architecture)
6. [Naming Conventions](#naming-conventions)
7. [Responsive Design](#responsive-design)
8. [Accessibility Guidelines](#accessibility-guidelines)
9. [Implementation Examples](#implementation-examples)
10. [Anti-Patterns to Avoid](#anti-patterns-to-avoid)

---

## Introduction

This guide documents the design system, patterns, and conventions used in the Solar Sense China Launch web presentation. Use this as a reference when:

- Adding new features to this webapp
- Building similar enterprise planning/dashboard applications
- Maintaining consistency with the "Midnight Champagne" aesthetic
- Understanding the vanilla JavaScript architecture patterns

### Design Philosophy

- **Dark, premium aesthetic**: Deep blacks with gold accents
- **Enterprise-grade interactions**: Subtle animations, professional feel
- **Accessibility-first**: ARIA attributes, keyboard navigation, reduced motion support
- **Vanilla JavaScript**: No framework dependencies, pure DOM manipulation
- **Progressive enhancement**: Core functionality works without JS

---

## Design System Foundation

### Color Palette

The "Midnight Champagne" theme uses a sophisticated dark palette with warm gold accents.

#### Core Colors

```css
/* Gold palette - Primary brand colors */
--gold: #c4a35a;              /* Main gold accent */
--gold-light: #e2c887;        /* Lighter gold for highlights */
--gold-dark: #9a7b3c;         /* Darker gold for depth */
--gold-glow: rgba(196, 163, 90, 0.35);  /* Glow effects */

/* Surface colors - Dark theme layers */
--ink: #0c0c0f;               /* Darkest background */
--ink-raised: #12121a;        /* Slightly elevated surfaces */
--surface: #18181f;           /* Card backgrounds */
--surface-hover: #1f1f28;     /* Hover states */

/* Text hierarchy */
--text: #eceae4;              /* Primary text (high contrast) */
--text-muted: #9c9a94;        /* Secondary text */
--text-dim: #6b6963;          /* Tertiary text, labels */

/* Borders */
--border: rgba(255, 255, 255, 0.08);      /* Subtle borders */
--border-gold: rgba(196, 163, 90, 0.25);  /* Accent borders */
```

#### Status Colors

For workflow states (Plan → Execution → Resource):

```css
/* Status pipeline - Low saturation for dark theme */
--status-plan: #6b6ea8;       /* Planning phase (purple-blue) */
--status-plan-bg: rgba(107, 110, 168, 0.14);
--status-plan-border: rgba(107, 110, 168, 0.38);

--status-exec: #b8924a;       /* Execution phase (amber) */
--status-exec-bg: rgba(184, 146, 74, 0.14);
--status-exec-border: rgba(184, 146, 74, 0.38);

--status-resource: #5a9a82;   /* Resource/Complete (teal-green) */
--status-resource-bg: rgba(90, 154, 130, 0.14);
--status-resource-border: rgba(90, 154, 130, 0.38);

/* Critical/Error states */
--critical: #c45c5c;
--critical-bg: rgba(196, 92, 92, 0.12);
```

#### Tint Layers

For layering effects and overlays:

```css
--primary-50: rgba(196, 163, 90, 0.08);   /* Subtle backgrounds */
--primary-100: rgba(196, 163, 90, 0.15);  /* Light overlays */
--primary-200: rgba(196, 163, 90, 0.28);  /* Medium overlays */
```

### Typography

#### Font Families

```css
--font-display: 'Outfit', ui-sans-serif, system-ui, sans-serif;  /* Headings, labels */
--font-body: 'DM Sans', ui-sans-serif, system-ui, sans-serif;    /* Body text */
--font-mono: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace;
```

#### Type Scale

```css
/* Headings - Use clamp() for fluid responsive sizing */
h1 { 
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

h2.section-title { 
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 var(--space-md);
}

h3 { 
  font-size: 1.125rem;
  line-height: 1.3;
}

/* Body text */
body { 
  font-size: 1rem;
  line-height: 1.65;
}

.section-intro { 
  font-size: 1.0625rem;
  line-height: 1.7;
}
```

#### Font Weight Guidelines

- **700**: Headings, eyebrows, labels
- **600**: Subheadings, button text
- **500**: Medium emphasis text
- **400**: Body text (default)

### Spacing Scale

Consistent spacing using CSS custom properties:

```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--section-padding: clamp(3rem, 7vw, 5rem);  /* Responsive section spacing */
```

**Usage pattern**: Use `--space-md` (16px) as the baseline grid unit. All spacing should be multiples of this base.

### Border Radius

```css
--radius-sm: 8px;       /* Small elements, buttons */
--radius-md: 12px;      /* Cards, inputs */
--radius-lg: 16px;      /* Large cards */
--radius-xl: 24px;      /* Hero sections */
--radius-full: 9999px;  /* Pills, badges */
```

### Shadows

Layered shadows for depth:

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.35);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.5);
--shadow-gold: 0 0 24px var(--gold-glow);       /* Accent glow */
--shadow-inset: inset 0 1px 0 rgba(255, 255, 255, 0.04);  /* Subtle inner highlight */
```

### Motion & Easing

```css
/* Timing */
--duration-fast: 0.2s;      /* Quick interactions */
--duration-normal: 0.35s;   /* Standard transitions */
--duration-slow: 0.55s;     /* Emphasis animations */

/* Easing curve - Smooth, natural motion */
--ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

**Critical**: Always respect reduced motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0.01ms;
    --duration-normal: 0.01ms;
    --duration-slow: 0.01ms;
  }
}
```

---

## Component Library

### Buttons

#### Primary Button (Gold Gradient)

Used for primary CTAs and important actions.

```html
<button type="button" class="btn btn-primary btn-shine">
  Present Plan
</button>
```

```css
.btn-primary {
  color: var(--ink);
  background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 45%, var(--gold-dark) 100%);
  border-color: var(--gold-dark);
  box-shadow: var(--shadow-sm), 0 0 16px var(--primary-100);
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold-light) 40%, var(--gold) 100%);
  box-shadow: var(--shadow-md), var(--shadow-gold);
}
```

**Key features**:
- Dark text on gold gradient (high contrast)
- Glow effect on hover
- Optional `.btn-shine` for ripple effect

#### Secondary Button (Ghost)

For secondary actions.

```html
<button type="button" class="btn btn-secondary">
  Export
</button>
```

```css
.btn-secondary {
  color: var(--text-muted);
  background: transparent;
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  color: var(--gold-light);
  border-color: var(--border-gold);
  background: var(--primary-50);
}
```

#### Icon Button

Compact button with no text label.

```html
<button type="button" class="btn btn-icon" aria-label="Close">
  <svg width="18" height="18">...</svg>
</button>
```

```css
.btn-icon {
  padding: 0.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
}
```

#### Base Button Styles

All buttons share these base properties:

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5625rem 1.125rem;
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--duration-fast) var(--ease),
    border-color var(--duration-fast) var(--ease),
    color var(--duration-fast) var(--ease);
}

.btn:active {
  transform: scale(0.98);
}
```

### Cards

Standard card container with hover effects.

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm), var(--shadow-inset);
  transition: border-color var(--duration-normal) var(--ease),
    box-shadow var(--duration-normal) var(--ease);
}

.card:hover {
  border-color: var(--border-gold);
  box-shadow: var(--shadow-md), 0 0 20px var(--primary-50);
}
```

### Form Elements

#### Text Input

```html
<input 
  type="text" 
  class="matrix-edit" 
  placeholder="Enter value"
  aria-label="Field name"
>
```

```css
.matrix-edit {
  width: 100%;
  padding: 0.4375rem 0.625rem;
  font-size: 0.875rem;
  color: var(--text);
  background: var(--ink-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: border-color var(--duration-fast) var(--ease);
}

.matrix-edit:focus {
  outline: none;
  border-color: var(--border-gold);
  box-shadow: 0 0 0 3px var(--primary-50);
}
```

#### Textarea

```html
<textarea 
  class="todo-text" 
  rows="2"
  aria-label="Task description"
></textarea>
```

```css
.todo-text {
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: 0.375rem 0.5rem;
  background: transparent;
  resize: vertical;
  min-height: 2.5rem;
  width: 100%;
}

.todo-text:hover {
  border-color: var(--border);
  background: var(--surface);
}

.todo-text:focus {
  outline: none;
  border-color: var(--border-gold);
  background: var(--surface);
  box-shadow: 0 0 0 3px var(--primary-50);
}
```

#### Date Input

```html
<input 
  type="date" 
  class="todo-date"
  value="2026-07-15"
>
```

```css
.todo-date {
  font-size: 0.8125rem;
  padding: 0.375rem 0.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  color-scheme: dark;  /* Dark calendar picker */
}
```

**Key detail**: `color-scheme: dark` ensures the browser's date picker uses dark mode.

### Accordions (Details/Summary)

Native HTML `<details>` elements with custom styling.

```html
<details class="acc-month" open>
  <summary>
    <svg class="acc-chevron">...</svg>
    <span class="acc-title">July 2026</span>
    <span class="acc-meta">
      <span class="acc-progress">5/10 complete</span>
      <span class="acc-progress-bar">
        <span class="acc-progress-fill" style="width:50%"></span>
      </span>
    </span>
  </summary>
  <div class="acc-body">
    <!-- Content -->
  </div>
</details>
```

```css
.acc-month {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.acc-month > summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  font-family: var(--font-display);
  font-weight: 600;
  user-select: none;
}

.acc-chevron {
  width: 18px;
  height: 18px;
  transition: transform var(--duration-normal) var(--ease);
}

details[open] > summary .acc-chevron {
  transform: rotate(90deg);
  color: var(--gold);
}
```

### Status Components

#### Status Pipeline (Desktop)

Three-button status selector for task workflow.

```html
<div class="status-pipeline">
  <span class="status-pipeline-label">Status</span>
  <div class="status-steps" role="group" aria-label="Task status">
    <button type="button" class="status-step active-plan" 
      data-task-id="task-1" data-status="plan" aria-pressed="true">
      Plan
    </button>
    <button type="button" class="status-step" 
      data-task-id="task-1" data-status="execution" aria-pressed="false">
      Execution
    </button>
    <button type="button" class="status-step" 
      data-task-id="task-1" data-status="resource" aria-pressed="false">
      Resource
    </button>
  </div>
</div>
```

```css
.status-steps {
  display: flex;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--ink);
}

.status-step {
  flex: 1;
  font-size: 0.5625rem;
  font-weight: 700;
  padding: 0.4375rem 0.125rem;
  border: none;
  background: transparent;
  color: var(--text-dim);
  cursor: pointer;
  text-transform: uppercase;
}

.status-step.active-plan {
  background: var(--status-plan);
  color: var(--text);
}

.status-step.active-execution {
  background: var(--status-exec);
  color: var(--ink);
}

.status-step.active-resource {
  background: var(--status-resource);
  color: var(--text);
}
```

#### Status Cycle Button (Mobile)

Single button that cycles through states on mobile.

```html
<button type="button" class="status-cycle plan" 
  data-task-id="task-1" data-status="plan">
  Plan
</button>
```

```css
.status-cycle {
  display: none;
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.4375rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .status-pipeline { display: none; }
  .status-cycle { display: block; }
}
```

#### Status Dots

Small status indicators showing task states.

```html
<span class="week-status-dots">
  <span class="week-status-dot plan" title="Program Topic: Plan"></span>
  <span class="week-status-dot execution" title="Technical Track: Execution"></span>
  <span class="week-status-dot resource" title="Relationship Track: Resource"></span>
</span>
```

```css
.week-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.week-status-dot.plan { background: var(--status-plan); }
.week-status-dot.execution { background: var(--status-exec); }
.week-status-dot.resource { background: var(--status-resource); }
```

#### Progress Bar

```html
<span class="acc-progress-bar">
  <span class="acc-progress-fill" style="width:65%"></span>
</span>
```

```css
.acc-progress-bar {
  width: 64px;
  height: 4px;
  background: var(--ink-raised);
  border-radius: 2px;
  overflow: hidden;
}

.acc-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, 
    var(--status-plan), 
    var(--status-exec), 
    var(--status-resource)
  );
  transition: width var(--duration-normal) var(--ease);
}
```

#### Progress Ring

Circular progress indicator (conic gradient).

```html
<div class="deck-progress-ring" style="--pct:65%">
  <span>65%</span>
</div>
```

```css
.deck-progress-ring {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(
    var(--gold) var(--pct, 0%), 
    var(--surface-hover) 0
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

.deck-progress-ring::before {
  content: '';
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--surface);
  position: absolute;
}

.deck-progress-ring span {
  position: relative;
  z-index: 1;
}
```

### Navigation

#### Sticky Header

```html
<header class="site-header" role="banner">
  <div class="container site-header-inner">
    <button type="button" class="btn btn-icon nav-hamburger" 
      id="menuToggle" aria-label="Open menu">
      <svg>...</svg>
    </button>
    <a href="#hero" class="nav-logo">
      <img src="logo.png" alt="Solar Sense">
      <span class="nav-logo-text">Solar Sense Pro</span>
    </a>
    <nav class="nav-desktop" aria-label="Section navigation">
      <a href="#overview" data-section="overview">Overview</a>
      <a href="#execution" data-section="execution">Execution</a>
    </nav>
    <div class="nav-actions">
      <button class="btn btn-primary">Present</button>
    </div>
  </div>
</header>
```

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 200;
  height: var(--nav-h);  /* 60px */
  background: rgba(12, 12, 15, 0.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}
```

#### Sidebar

Collapsible sidebar with table of contents.

```html
<aside class="sidebar" id="sidebar" aria-label="Table of contents">
  <div class="toc-label">Contents</div>
  <nav class="toc-section" id="tocSections">
    <a href="#overview">Overview</a>
    <a href="#execution" class="active">Execution</a>
  </nav>
</aside>
```

```css
.sidebar {
  position: fixed;
  top: var(--nav-h);
  left: 0;
  z-index: 160;
  width: var(--sidebar-w);  /* 260px */
  height: calc(100vh - var(--nav-h));
  padding: var(--space-lg) var(--space-md);
  background: var(--ink-raised);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform var(--duration-normal) var(--ease);
}

.sidebar.open {
  transform: translateX(0);
}

@media (min-width: 1024px) {
  .sidebar {
    position: sticky;
    transform: none;
  }
}
```

### Badges & Chips

#### Eyebrow Label

Small uppercase label above headings.

```html
<span class="section-eyebrow">Executive Overview</span>
<h2 class="section-title">Launch Window</h2>
```

```css
.section-eyebrow {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 var(--space-sm);
}
```

#### Status Badge

```html
<span class="deck-badge">Draft 1</span>
```

```css
.deck-badge {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  background: var(--primary-100);
  color: var(--gold-light);
  border: 1px solid var(--border-gold);
}
```

#### Status Chip

```html
<span class="deck-chip execution">In Progress</span>
```

```css
.deck-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.deck-chip.plan {
  background: var(--status-plan-bg);
  color: var(--status-plan);
}
```

---

## Layout Patterns

### Page Structure

Standard page layout with header, sidebar, and main content.

```html
<body>
  <div id="header-mount"></div>
  
  <div class="sidebar-overlay" id="sidebarOverlay"></div>
  
  <div class="layout">
    <aside class="sidebar" id="sidebar">
      <!-- TOC -->
    </aside>
    <main class="main" id="main">
      <!-- Content -->
    </main>
  </div>
  
  <div id="footer-mount"></div>
</body>
```

```css
.layout {
  display: flex;
  min-height: calc(100vh - var(--nav-h));
}

.main {
  flex: 1;
  min-width: 0;
  padding: 0 var(--space-xl) var(--space-3xl);
}
```

### Section Pattern

Standard content section structure.

```html
<section class="section section-white reveal-on-scroll" id="overview">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Executive Overview</span>
      <h2 class="section-title">Launch Window at a Glance</h2>
      <p class="section-intro">Six months of focused execution...</p>
    </div>
    
    <!-- Section content -->
  </div>
</section>
```

#### Section Variants

```css
.section { padding: var(--section-padding) 0; }

.section-white { background: var(--ink); }
.section-gray { background: var(--ink-raised); }

.section-primary {
  background: linear-gradient(180deg, 
    var(--ink-raised) 0%, 
    rgba(196, 163, 90, 0.06) 50%, 
    var(--ink-raised) 100%
  );
  border-top: 1px solid var(--border-gold);
  border-bottom: 1px solid var(--border-gold);
}
```

### Hero Section

Large banner section with ambient effects.

```html
<section class="roadmap-hero" id="hero">
  <div class="roadmap-bg" aria-hidden="true">
    <div class="roadmap-spotlight" id="roadmap-spotlight"></div>
    <div class="roadmap-particles" id="roadmap-particles"></div>
  </div>
  <div class="container roadmap-header text-center max-w-4xl">
    <img class="hero-logo" src="logo.png" alt="Solar Sense">
    <p class="roadmap-eyebrow">Internal Strategy Memo</p>
    <h1>China Launch Execution Plan</h1>
    <p class="roadmap-subtitle">July 2026 – January 2027</p>
    <div class="btn-group">
      <button class="btn btn-primary">Start Presenting</button>
    </div>
  </div>
</section>
```

```css
.roadmap-hero {
  position: relative;
  min-height: clamp(14rem, 38vh, 20rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--nav-h) + var(--space-xl)) var(--space-lg) var(--space-xl);
  overflow: hidden;
}

.roadmap-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 70% 50% at 50% 0%, 
    var(--primary-100), 
    transparent 70%
  );
}
```

### Grid Systems

#### Stats Grid

Responsive card grid for metrics.

```html
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-value">Jul–Dec 2026</div>
    <div class="stat-label">Time Horizon</div>
  </div>
  <!-- More stat cards -->
</div>
```

```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
}
```

#### Card Grid

Generic responsive grid for cards.

```html
<div class="roadmap-week-grid">
  <a href="#week-1" class="roadmap-week-card card">
    <!-- Card content -->
  </a>
  <!-- More cards -->
</div>
```

```css
.roadmap-week-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-md);
}

@media (min-width: 768px) {
  .roadmap-week-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .roadmap-week-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Container Widths

```css
.container {
  width: 100%;
  max-width: var(--max-width);  /* 1200px */
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.max-w-3xl { max-width: 48rem; }  /* 768px */
.max-w-4xl { max-width: 56rem; }  /* 896px */
```

---

## JavaScript Architecture

### Module Pattern

The app uses a vanilla JavaScript architecture without frameworks. Code is organized into functional modules loaded in sequence.

#### File Loading Order

```html
<!-- In index.html -->
<script src="js/data.js"></script>       <!-- Constants -->
<script src="js/config.js"></script>     <!-- Config -->
<script src="js/layout.js"></script>     <!-- Header/footer -->
<script src="js/parser.js"></script>     <!-- Markdown parser -->
<script src="js/state.js"></script>      <!-- State management -->
<script src="js/notion.js"></script>     <!-- API sync -->
<script src="js/board.js"></script>      <!-- Board rendering -->
<script src="js/roadmap.js"></script>    <!-- Roadmap section -->
<script src="js/deck.js"></script>       <!-- Presentation mode -->
<script src="js/interactions.js"></script> <!-- Animations -->
<script src="js/main.js"></script>       <!-- Bootstrap -->
```

### Global State Object

All application state lives in a single global object:

```javascript
const ChinaPlan = {
  planData: null,           // Parsed markdown plan
  taskState: {},            // Task state (from localStorage/API)
  uiState: {                // UI state
    openMonths: [],
    openWeeks: []
  },
  searchQuery: '',          // Current search query
  presentMode: false,       // Presentation mode active
  deckSlides: [],          // Presentation slides
  deckIndex: 0,            // Current slide index
  activePhaseId: 'jul-2026' // Active roadmap phase
};
```

### Render Functions

Components are generated using template literal render functions:

```javascript
function renderTodo(taskId, trackLabel, defaultText, defaultDate, isObjective) {
  const t = getTask(taskId, { text: defaultText, date: defaultDate, status: 'plan' });
  
  return `
    <div class="todo-item status-${t.status}" 
      data-task-id="${esc(taskId)}" 
      data-searchable="${esc((t.text || defaultText) + ' ' + trackLabel)}">
      
      <div class="todo-track">${esc(trackLabel)}</div>
      
      <textarea class="todo-text" 
        rows="2" 
        data-task-id="${esc(taskId)}">${esc(t.text || defaultText)}</textarea>
      
      <input type="date" 
        class="todo-date" 
        data-task-id="${esc(taskId)}" 
        value="${esc(t.date || '')}">
      
      ${renderStatusPipeline(taskId, t.status)}
    </div>`;
}
```

**Key principles**:
- Always escape user content with `esc()` function
- Use data attributes for storing IDs and metadata
- Return HTML strings (not DOM nodes)
- Compose larger components from smaller render functions

### State Management

#### Loading State

State is loaded from localStorage on init:

```javascript
function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(TASKS_KEY)) || {};
  } catch {
    return {};
  }
}

function loadUI() {
  try {
    return JSON.parse(localStorage.getItem(UI_KEY)) || { 
      openMonths: [], 
      openWeeks: [] 
    };
  } catch {
    return { openMonths: [], openWeeks: [] };
  }
}
```

#### Saving State

State is saved immediately on change:

```javascript
function saveTasks(changedTaskId) {
  // Save to localStorage
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(ChinaPlan.taskState));
  } catch {}
  
  // Optional: queue API sync
  if (changedTaskId && typeof queueTaskSync === 'function') {
    queueTaskSync(changedTaskId);
  }
}
```

#### Getting/Setting Task State

```javascript
function getTask(id, defaults) {
  if (!ChinaPlan.taskState[id]) {
    ChinaPlan.taskState[id] = { ...defaults };
  }
  return ChinaPlan.taskState[id];
}

// Usage:
const task = getTask('week-1-technical', { 
  text: 'Default text', 
  date: '2026-07-01', 
  status: 'plan' 
});
```

### Event Handling

Use event delegation for dynamic content:

```javascript
function initTaskBoard() {
  const app = document.getElementById('app');
  
  // Input events - text changes
  app.addEventListener('input', e => {
    const id = e.target.dataset.taskId;
    if (!id) return;
    
    const t = getTask(id, { text: '', date: '', status: 'plan' });
    
    if (e.target.classList.contains('todo-text')) {
      t.text = e.target.value;
    }
    if (e.target.classList.contains('todo-date')) {
      t.date = e.target.value;
    }
    
    saveTasks(id);
  });
  
  // Change events - checkboxes
  app.addEventListener('change', e => {
    if (e.target.classList.contains('todo-check')) {
      const id = e.target.dataset.taskId;
      const t = getTask(id, { completed: false });
      t.completed = e.target.checked;
      saveTasks(id);
      
      // Update UI
      e.target.closest('.todo-item').classList.toggle('todo-completed', t.completed);
    }
  });
  
  // Click events - buttons
  app.addEventListener('click', e => {
    const btn = e.target.closest('.status-step');
    if (!btn) return;
    
    const id = btn.dataset.taskId;
    const status = btn.dataset.status;
    const t = getTask(id, { status: 'plan' });
    t.status = status;
    saveTasks(id);
    
    // Update UI
    updateTodoItemEl(btn.closest('.todo-item'), status);
  });
}
```

**Pattern**: One delegated listener per event type at the container level.

### Data Flow

```
1. Parse markdown → planData
2. Merge API data → taskState
3. Render HTML from planData + taskState
4. User interacts → Update taskState
5. Save taskState → localStorage + API
6. Update UI elements
```

### Utility Functions

#### HTML Escaping

Always escape user content:

```javascript
function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

// Usage:
html += `<p>${esc(userInput)}</p>`;
```

#### Slugify

Convert text to URL-safe slug:

```javascript
function slugify(s) {
  return s.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// "Technical Track" → "technical-track"
```

#### Status Cycling

```javascript
const STATUSES = ['plan', 'execution', 'resource'];

function nextStatus(s) {
  const i = STATUSES.indexOf(s);
  return STATUSES[(i + 1) % STATUSES.length];
}
```

---

## Naming Conventions

### CSS Classes

Use a BEM-like structure with clear semantic naming:

```
block__element--modifier
```

Examples:
- `.acc-month` (block)
- `.acc-month__title` (element) - *rarely used, prefer direct nesting*
- `.acc-month.is-open` (state) - *prefer `:open` pseudo-class*

**Actual pattern used**: Simplified BEM with contextual nesting:

```css
/* Block */
.todo-item { }

/* Elements (direct children named with block prefix) */
.todo-track { }
.todo-text { }
.todo-date { }

/* Modifiers */
.todo-item.todo-completed { }
.todo-item.status-plan { }
```

### JavaScript

- **Variables/Functions**: `camelCase`
  - `renderTodo()`, `getTaskStatus()`, `activePhaseId`
  
- **Constants**: `UPPER_SNAKE_CASE`
  - `STATUSES`, `WEEK_FIELDS`, `TASKS_KEY`
  
- **Global State**: `PascalCase` for object, `camelCase` for properties
  - `ChinaPlan.taskState`, `ChinaPlan.presentMode`

### Data Attributes

Use kebab-case for HTML data attributes:

```html
<div data-task-id="week-1-technical" 
     data-week-num="1"
     data-searchable="technical track">
```

Access in JavaScript:

```javascript
const taskId = element.dataset.taskId;
const weekNum = element.dataset.weekNum;
```

### ID and Slug Patterns

Consistent prefixing for different entity types:

```javascript
// Week tasks
'w-${weekNum}-${slugify(fieldName)}'
// "w-1-technical-track"

// Objectives
'obj-${monthId}-${index}'
// "obj-month-july-0"

// Checklist items
'chk-${index}'
// "chk-0"

// Milestones
'ms-${milestoneIndex}-${itemIndex}'
// "ms-0-1"

// Matrix contacts
'mx-${categoryIndex}-${contactIndex}'
// "mx-0-0"
```

---

## Responsive Design

### Breakpoints

Mobile-first responsive design with these key breakpoints:

```css
/* Small phones: < 640px (default) */

/* Large phones: 640px+ */
@media (min-width: 640px) {
  .nav-logo-text { display: inline; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Tablets: 768px+ */
@media (min-width: 768px) {
  .search-wrap { display: block; }
  .roadmap-week-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Small desktops: 900px+ */
@media (min-width: 900px) {
  .nav-desktop { display: flex; }
}

/* Large desktops: 1024px+ */
@media (min-width: 1024px) {
  .nav-hamburger { display: none; }
  .sidebar { position: sticky; transform: none; }
  .roadmap-week-grid { grid-template-columns: repeat(3, 1fr); }
}
```

### Mobile Patterns

#### Hamburger Menu

```html
<button class="btn btn-icon nav-hamburger" id="menuToggle">
  <svg width="18" height="18">
    <path d="M3 12h18M3 6h18M3 18h18"/>
  </svg>
</button>
```

```javascript
function initMobileNav() {
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  
  const setOpen = (open) => {
    sidebar.classList.toggle('open', open);
    overlay?.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  
  toggle.addEventListener('click', () => 
    setOpen(!sidebar.classList.contains('open'))
  );
  
  overlay?.addEventListener('click', () => setOpen(false));
}
```

#### Status Controls Switch

Desktop shows full pipeline, mobile shows cycle button:

```css
.status-pipeline { display: flex; }
.status-cycle { display: none; }

@media (max-width: 768px) {
  .status-pipeline { display: none; }
  .status-cycle { display: block; }
}
```

#### Grid Collapse

Multi-column grids stack on mobile:

```css
.todo-item {
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  gap: 0.625rem var(--space-md);
}

@media (max-width: 768px) {
  .todo-item {
    grid-template-columns: 1fr;
  }
}
```

### Fluid Typography

Use `clamp()` for responsive text sizing:

```css
/* Scales between min and max based on viewport */
h1 {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
}

.section-padding {
  padding: clamp(3rem, 7vw, 5rem) 0;
}
```

### Touch Targets

Ensure minimum 44×44px touch targets:

```css
.btn {
  min-height: 2.75rem;  /* 44px */
  padding: 0.5625rem 1.125rem;
}

.btn-icon {
  min-width: 2.75rem;
  min-height: 2.75rem;
}
```

---

## Accessibility Guidelines

### ARIA Attributes

#### Landmarks

```html
<header class="site-header" role="banner">
<nav class="nav-desktop" aria-label="Section navigation">
<aside class="sidebar" aria-label="Table of contents">
<main class="main" role="main">
```

#### Interactive Elements

```html
<!-- Buttons -->
<button aria-label="Close" aria-pressed="false">
<button aria-expanded="false">

<!-- Status controls -->
<div role="group" aria-label="Task status">

<!-- Links -->
<a aria-current="page">
```

#### Dynamic Content

```html
<!-- Loading states -->
<div aria-busy="true">Loading...</div>

<!-- Hidden content -->
<div aria-hidden="true">Decorative element</div>
```

### Keyboard Navigation

#### Focus Management

Ensure all interactive elements are keyboard accessible:

```javascript
document.addEventListener('keydown', e => {
  if (!ChinaPlan.presentMode) return;
  
  if (e.key === 'Escape') {
    setPresentMode(false);
    e.preventDefault();
  }
  else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    renderDeckSlide(ChinaPlan.deckIndex + 1);
    e.preventDefault();
  }
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    renderDeckSlide(ChinaPlan.deckIndex - 1);
    e.preventDefault();
  }
});
```

#### Focus Styles

Provide clear focus indicators:

```css
.btn:focus-visible,
.todo-text:focus,
input:focus {
  outline: none;
  border-color: var(--border-gold);
  box-shadow: 0 0 0 3px var(--primary-50);
}
```

### Reduced Motion

Respect user preferences:

```javascript
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-on-scroll');
  
  if (prefersReducedMotion()) {
    // Skip animations
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  
  // Set up Intersection Observer...
}
```

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic HTML

Use proper heading hierarchy:

```html
<!-- Page structure -->
<h1>China Launch Execution Plan</h1>
  <h2>July 2026</h2>
    <h3>Week 1: Evidence Package</h3>
      <h4>Contact Name</h4>
```

Never skip heading levels.

### Screen Reader Support

#### Hidden Labels

```html
<span class="sr-only">Search</span>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
```

#### Descriptive Labels

```html
<input 
  type="search" 
  placeholder="Search tasks…" 
  aria-label="Search tasks"
>

<button aria-label="Mark objective complete">
  <input type="checkbox">
</button>
```

---

## Implementation Examples

### Example 1: Adding a New Status Type

If you need to add a fourth status (e.g., "Blocked"):

1. **Add to constants** (`js/data.js`):
```javascript
const STATUSES = ['plan', 'execution', 'blocked', 'resource'];
const STATUS_LABELS = { 
  plan: 'Plan', 
  execution: 'Execution', 
  blocked: 'Blocked',
  resource: 'Resource' 
};
```

2. **Add CSS variables** (`css/styles.css`):
```css
--status-blocked: #c45c5c;
--status-blocked-bg: rgba(196, 92, 92, 0.14);
--status-blocked-border: rgba(196, 92, 92, 0.38);
```

3. **Add status styles**:
```css
.status-dot.blocked { background: var(--status-blocked); }
.status-step.active-blocked { 
  background: var(--status-blocked); 
  color: var(--text); 
}
.todo-item.status-blocked {
  border-left-color: var(--status-blocked);
}
```

4. **Update render function** (`js/board.js`):
```javascript
function renderStatusPipeline(taskId, status) {
  return `
    <div class="status-pipeline">
      <div class="status-steps">
        ${STATUSES.map(s => `
          <button class="status-step ${status === s ? 'active-' + s : ''}"
            data-task-id="${esc(taskId)}" data-status="${s}">
            ${STATUS_LABELS[s]}
          </button>
        `).join('')}
      </div>
    </div>`;
}
```

### Example 2: Creating a New Card Component

```javascript
function renderContactCard(contact) {
  return `
    <div class="card contact-card">
      <div class="card-header">
        <h4>${esc(contact.name)}</h4>
        <span class="status-badge ${contact.status}">
          ${esc(contact.status)}
        </span>
      </div>
      
      <div class="card-body">
        <p class="text-muted">${esc(contact.organization)}</p>
      </div>
      
      <div class="card-footer">
        <button class="btn btn-secondary btn-sm" 
          data-contact-id="${esc(contact.id)}">
          View Details
        </button>
      </div>
    </div>`;
}
```

```css
.contact-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border);
}

.card-footer {
  display: flex;
  gap: var(--space-sm);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--border);
}
```

### Example 3: Adding Animation

```javascript
function initCardHoverEffect() {
  if (prefersReducedMotion()) return;
  
  const cards = document.querySelectorAll('.contact-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}
```

```css
.contact-card {
  transition: transform var(--duration-normal) var(--ease),
    box-shadow var(--duration-normal) var(--ease);
}

.contact-card:hover {
  box-shadow: var(--shadow-lg);
}
```

### Example 4: Form Validation

```javascript
function validateTaskForm(formData) {
  const errors = [];
  
  if (!formData.text.trim()) {
    errors.push('Task description is required');
  }
  
  if (formData.date && new Date(formData.date) < new Date()) {
    errors.push('Due date cannot be in the past');
  }
  
  if (!STATUSES.includes(formData.status)) {
    errors.push('Invalid status');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// Usage:
function handleTaskSubmit(e) {
  e.preventDefault();
  
  const formData = {
    text: e.target.querySelector('.todo-text').value,
    date: e.target.querySelector('.todo-date').value,
    status: e.target.querySelector('.status-step.active')?.dataset.status
  };
  
  const validation = validateTaskForm(formData);
  
  if (!validation.valid) {
    showToast(validation.errors.join(', '), 'error');
    return;
  }
  
  // Save task...
}
```

---

## Anti-Patterns to Avoid

### 1. Don't Use Inline Styles Except for Dynamic Values

**Bad**:
```javascript
html += `<div style="color: ${userColor}; padding: 16px;">`;
```

**Good**:
```javascript
// For dynamic values only:
html += `<div class="card" style="--pct: ${progress}%">`;

// Use classes for everything else:
html += `<div class="card">`;
```

### 2. Don't Forget to Escape User Content

**Bad**:
```javascript
html += `<p>${task.text}</p>`;  // XSS vulnerability!
```

**Good**:
```javascript
html += `<p>${esc(task.text)}</p>`;
```

### 3. Don't Create New Event Listeners for Each Item

**Bad**:
```javascript
function renderTasks(tasks) {
  tasks.forEach(task => {
    const el = document.createElement('div');
    el.innerHTML = renderTask(task);
    
    // Bad: Creates N listeners
    el.querySelector('.delete-btn').addEventListener('click', () => {
      deleteTask(task.id);
    });
    
    container.appendChild(el);
  });
}
```

**Good**:
```javascript
// Use event delegation (one listener)
container.addEventListener('click', e => {
  const btn = e.target.closest('.delete-btn');
  if (!btn) return;
  
  const taskId = btn.dataset.taskId;
  deleteTask(taskId);
});
```

### 4. Don't Manipulate DOM Directly for State Changes

**Bad**:
```javascript
function markComplete(taskId) {
  const el = document.querySelector(`[data-task-id="${taskId}"]`);
  el.classList.add('completed');
  // State and UI are now out of sync!
}
```

**Good**:
```javascript
function markComplete(taskId) {
  // 1. Update state
  const task = getTask(taskId);
  task.completed = true;
  saveTasks(taskId);
  
  // 2. Update UI
  const el = document.querySelector(`[data-task-id="${taskId}"]`);
  el.classList.add('todo-completed');
}
```

### 5. Don't Hardcode Colors in JavaScript

**Bad**:
```javascript
element.style.backgroundColor = '#c4a35a';
```

**Good**:
```javascript
// Use CSS classes
element.classList.add('status-execution');

// Or CSS custom properties
element.style.setProperty('--status-color', 'var(--status-exec)');
```

### 6. Don't Ignore Reduced Motion

**Bad**:
```javascript
function animateCard(el) {
  el.style.animation = 'slide 0.5s ease';
}
```

**Good**:
```javascript
function animateCard(el) {
  if (prefersReducedMotion()) {
    el.classList.add('is-visible');
    return;
  }
  
  el.style.animation = 'slide 0.5s ease';
}
```

### 7. Don't Use Generic Class Names

**Bad**:
```css
.card { }
.item { }
.container { }
```

**Good**:
```css
.todo-item { }
.roadmap-card { }
.stats-container { }
```

### 8. Don't Mix Data and Presentation

**Bad**:
```javascript
const task = {
  id: '1',
  text: 'Complete design',
  status: 'plan',
  statusLabel: 'Plan',        // Presentation
  statusColor: '#6b6ea8'      // Presentation
};
```

**Good**:
```javascript
// Data only
const task = {
  id: '1',
  text: 'Complete design',
  status: 'plan'
};

// Derive presentation from data
const statusLabel = STATUS_LABELS[task.status];
const statusClass = 'status-' + task.status;
```

### 9. Don't Query the Same Element Multiple Times

**Bad**:
```javascript
function updateTask(id) {
  document.querySelector(`[data-task-id="${id}"] .todo-text`).value = text;
  document.querySelector(`[data-task-id="${id}"] .todo-date`).value = date;
  document.querySelector(`[data-task-id="${id}"] .status-step`).classList.add('active');
}
```

**Good**:
```javascript
function updateTask(id) {
  const item = document.querySelector(`[data-task-id="${id}"]`);
  item.querySelector('.todo-text').value = text;
  item.querySelector('.todo-date').value = date;
  item.querySelector('.status-step').classList.add('active');
}
```

### 10. Don't Break Semantic HTML

**Bad**:
```html
<div class="button" onclick="submit()">Submit</div>
```

**Good**:
```html
<button type="submit" class="btn btn-primary">Submit</button>
```

---

## Quick Reference

### Common Patterns Cheatsheet

```javascript
// Escaping
html += `<p>${esc(userText)}</p>`;

// Task state
const task = getTask(taskId, { text: '', status: 'plan' });
task.status = 'execution';
saveTasks(taskId);

// Event delegation
container.addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  // Handle click
});

// Reduced motion check
if (prefersReducedMotion()) {
  // Skip animations
  return;
}

// Progress calculation
const prog = taskProgress(taskIds);
// Returns: { done: 5, total: 10, pct: 50 }

// Slugify
const slug = slugify('Technical Track');
// Returns: "technical-track"
```

### Color Quick Picks

```css
/* Backgrounds */
--ink: #0c0c0f
--surface: #18181f

/* Accents */
--gold: #c4a35a
--gold-light: #e2c887

/* Text */
--text: #eceae4
--text-muted: #9c9a94

/* Status */
--status-plan: #6b6ea8
--status-exec: #b8924a
--status-resource: #5a9a82
```

### Spacing Quick Picks

```css
--space-sm: 0.5rem    /* 8px - Tight spacing */
--space-md: 1rem      /* 16px - Base unit */
--space-lg: 1.5rem    /* 24px - Comfortable spacing */
--space-xl: 2rem      /* 32px - Section spacing */
```

---

## Conclusion

This guide captures the design system and patterns used in the Solar Sense web presentation. When building new features or similar applications:

1. **Start with the design tokens** - Use CSS custom properties for colors, spacing, typography
2. **Follow the component patterns** - Buttons, cards, forms all have established styles
3. **Use vanilla JavaScript patterns** - Event delegation, state management, render functions
4. **Maintain accessibility** - ARIA attributes, keyboard navigation, reduced motion
5. **Keep it responsive** - Mobile-first, fluid typography, collapsible layouts
6. **Test thoroughly** - Multiple browsers, screen sizes, accessibility tools

For questions or clarifications, refer back to the source files in `css/styles.css` and `js/*.js`.

**Maintenance**: Update this guide when introducing new patterns or making breaking changes to existing ones.
