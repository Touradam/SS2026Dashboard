# LLM Project Presentation Guide
## Two-Page Roadmap Website Template

### Overview
This guide provides a complete specification for transforming any project into a sophisticated two-page presentation website with interactive roadmap, flip cards, countdown timer, and detail view. Use this prompt to reorganize project content into an engaging, professional presentation.

---

## Design Philosophy: "Midnight Champagne"

### Visual Identity
- **Color Scheme**: Dark sophisticated background with elegant gold accents
- **Typography**: Display font (Outfit) for headings, clean sans-serif (DM Sans) for body
- **Atmosphere**: Premium, modern, tech-forward with subtle luxury touches
- **Interactivity**: Smooth animations, 3D card flips, tilt effects, particle systems

### Core Color Palette
```css
--gold: #c4a35a;
--gold-light: #e2c887;
--gold-dark: #9a7b3c;
--ink: #0c0c0f;
--surface: #18181f;
--text: #eceae4;
--text-muted: #9c9a94;
```

---

## Page 1: Interactive Roadmap Landing

### Purpose
High-level overview that engages users immediately with interactive elements and creates urgency through countdown timer.

### Key Sections

#### 1. Hero Header
**Content Structure:**
```
- Eyebrow text (category/program type)
- Main headline (project title)
- Subtitle (one-line value proposition)
- Important date banner with countdown timer
- Stats pill (2-column mini card with key metrics)
```

**Visual Treatment:**
- Radial gradient background with gold glow
- Floating particle effects
- Optional: Physics equations or themed symbols drifting in background
- Spotlight effect following mouse movement

**Countdown Timer:**
- Displays time until the most important upcoming event
- Format: Days | Hours | Minutes | Seconds with labels
- Golden border, glowing background
- Automatically hides when event passes

#### 2. Phase Navigation
**Desktop Experience:**
- Pill-shaped buttons for each phase
- Shows phase number in circle + phase name
- Active state: gold background, glow effect
- Clicking highlights corresponding card on SVG roadmap

**Mobile Experience:**
- Same pill buttons at top
- Clicking expands detail panel below navigation
- Smooth collapse/expand animation

#### 3. Visual Roadmap
**Desktop (901px+):**
- Central SVG illustration showing project phases as a journey
- Invisible hotspot overlays on each phase card in SVG
- Clicking phase opens flip-card overlay on the SVG
- Flip card shows:
  - FRONT: Phase number, title, tagline, brief description
  - BACK: Detailed sessions/milestones, outcomes, timeline

**Mobile (≤900px):**
- SVG hidden
- Stack of interactive flip cards
- Each card flippable on click/tap
- Same front/back structure as desktop overlays

#### 4. Quick Info Bar
- Schedule summary
- Tools/technologies required
- Formatted as horizontal pill with multiple info segments

#### 5. Call-to-Action Section
- Primary action button (Join, Sign Up, Get Started)
- Secondary button (Learn More, Get Ready, Details)
- Centered layout

### Interaction Patterns

**Card Flip Animation:**
```css
perspective: 1000px
transform-style: preserve-3d
transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)
Front: rotateY(0deg)
Back: rotateY(180deg)
```

**Tilt Effect (3D hover):**
- Cards tilt slightly based on mouse position
- Creates depth and engagement
- Applied to stat cards, phase cards

**Reveal Animations:**
- Elements fade up on scroll
- Staggered timing for lists of items
- Respects prefers-reduced-motion

---

## Page 2: Detailed Information

### Purpose
Comprehensive details for users ready to commit or learn more. Less interactive, more informational.

### Key Sections

#### 1. Page Hero
```
- Page title
- Lead paragraph (2-3 sentences)
- Optional: breadcrumb or back link
```

#### 2. Requirements Section
- Checklist format with checkmark icons
- Each item: icon + text description
- Emphasis on important items (bold inline text)
- Clear, honest expectations

#### 3. What to Expect
- Narrative format
- Callout box with key philosophy
- Sets realistic expectations
- Explains level of commitment required

#### 4. Instructor/Team Profile
**Interactive Flip Card:**
- FRONT:
  - Photo
  - Name
  - Role/title
  - Organization
  - "Click to learn more" hint
- BACK:
  - Full bio (multiple paragraphs)
  - Highlighted achievements (bordered list items)
  - Close button (×)

#### 5. Outcomes/Results
- What users will achieve by the end
- Arrow-style list format
- Concrete, measurable outcomes
- Grouped by category if needed

#### 6. Final CTA
- Primary and secondary buttons
- Link back to main page or action

---

## Technical Implementation Guide

### File Structure
```
project-root/
├── index.html              # Landing page with roadmap
├── details.html            # Detailed information page
├── css/
│   └── styles.css         # All styles in one file
├── js/
│   ├── data.js            # Project data configuration
│   ├── layout.js          # Header/footer rendering
│   ├── interactions.js    # Interactive features
│   └── main.js            # Initialization
├── assets/
│   ├── logo.svg
│   ├── roadmap.svg        # Custom SVG roadmap illustration
│   └── photos/
└── README.md
```

### Data Configuration (js/data.js)

#### Required Data Objects

**1. Project Metadata:**
```javascript
const projectMetadata = {
  name: 'Project Name',
  tagline: 'One-line description',
  copyright: 'Organization Name',
  logoPath: 'assets/logo.svg'
};
```

**2. Important Event (for countdown):**
```javascript
const primaryEvent = {
  date: '2026-07-10',           // YYYY-MM-DD
  label: 'Launch Date',
  description: 'Friday, July 10, 2026 · 2:00 PM PST'
};
```

**3. Roadmap Phases (3-6 phases work best):**
```javascript
const roadmapPhases = [
  {
    id: 1,
    tag: 'Phase 1',              // Short label
    title: 'Phase Name',
    lead: 'Brief description',
    icon: '01',                  // Number or icon
    outcome: 'What users gain',
    summary: 'One sentence summary',
    sessions: [                  // Milestones or steps
      'Step 1: Description',
      'Step 2: Description',
      'Step 3: Description'
    ],
    sessionDetails: [            // Full details for flip card back
      {
        label: 'Step 1',
        day: 'Week 1',
        type: 'Category',
        title: 'Step Title',
        description: 'Full description of this step'
      }
      // ... more steps
    ]
  }
  // ... more phases
];
```

**4. Hotspot Coordinates (match your SVG roadmap):**
```javascript
const roadmapHotspots = [
  { phase: 1, x: 5.9, y: 32.7, w: 20, h: 34.4 },  // Percentages
  { phase: 2, x: 28.6, y: 49.1, w: 20, h: 34.4 },
  // ... coordinates for clickable areas on SVG
];
```

**5. Team/Instructor Profile:**
```javascript
const instructorProfile = {
  name: 'Name',
  role: 'Title/Role',
  organization: 'Organization',
  photo: 'assets/photo.jpg',
  tagline: 'Click to learn more',
  bio: [
    'Paragraph 1 of bio',
    'Paragraph 2 of bio',
    // ... more paragraphs
  ],
  highlights: [
    'Achievement 1',
    'Achievement 2'
    // Optional highlighted items
  ]
};
```

**6. Requirements List:**
```javascript
const requirements = [
  'Requirement 1 with <strong>emphasis</strong>',
  'Requirement 2',
  // ... all requirements
];
```

**7. Expected Outcomes:**
```javascript
const outcomes = [
  'Outcome 1',
  'Outcome 2',
  // ... what users will achieve
];
```

### JavaScript Architecture

#### Core Functions to Implement

**1. Countdown Timer:**
```javascript
function initCountdown(targetDate) {
  // Calculate time difference
  // Update DOM every second
  // Format: DD | HH | MM | SS
  // Hide when date passes
}
```

**2. Card Flip Interaction:**
```javascript
function initFlipCards() {
  // Toggle .is-flipped class
  // Handle click, Enter, Space
  // Close button stops propagation
  // Escape key closes
}
```

**3. Tilt Effect:**
```javascript
function initTiltEffect(cardElement) {
  // Track mouse position
  // Calculate rotation angles
  // Apply CSS custom properties
  // Reset on mouse leave
}
```

**4. Phase Navigation:**
```javascript
function initPhaseNav() {
  // Highlight active phase
  // Show/hide detail panel
  // Coordinate with SVG hotspots
  // Handle desktop vs mobile differently
}
```

**5. Scroll Reveal:**
```javascript
function initScrollReveal() {
  // IntersectionObserver
  // Add .is-visible when in viewport
  // Stagger timing for groups
}
```

**6. SVG Hotspots:**
```javascript
function createHotspots() {
  // Generate overlay buttons
  // Position based on percentage coordinates
  // Toggle active state
  // Show flip overlay on click
}
```

### CSS Animation Standards

**Timing Functions:**
```css
--ease: cubic-bezier(0.4, 0, 0.2, 1);
```

**Standard Animations:**
- Fade up: `opacity 0 → 1, translateY(16px) → 0`
- Card hover: `translateY(-3px)`, increased shadow
- Button hover: `translateY(-2px)`, glow effect
- Flip: `rotateY(0deg) → rotateY(180deg)`, 0.65s
- Tilt: Subtle 3D rotation based on mouse position

**Accessibility:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Content Transformation Workflow

### Step 1: Analyze Source Project
Extract from existing project:
- What are the major phases/stages?
- What is the timeline or sequence?
- What is the most important upcoming date?
- Who is behind the project?
- What requirements must users meet?
- What outcomes will users achieve?

### Step 2: Map to Structure
- **3-6 phases**: Break project into logical phases
- **Each phase needs**:
  - Title (2-4 words)
  - Tagline (3-5 words)
  - Summary (1 sentence)
  - 3-4 key milestones or steps
  - Expected outcome
- **Landing page**: High-level phase overview
- **Details page**: Requirements, expectations, outcomes

### Step 3: Design Custom SVG Roadmap
- Create SVG (1600×900px) showing phases as a visual journey
- Can be: timeline, pathway, steps, interconnected nodes
- Each phase represented as a card/section in the SVG
- Note coordinates for clickable hotspots

### Step 4: Configure Data Files
- Fill in all data objects in `js/data.js`
- Match phase IDs between data and hotspots
- Provide all required text content
- Set countdown date

### Step 5: Customize Theme
Adjust color palette if needed:
- Replace gold with brand color
- Keep dark background or use light theme
- Update fonts if brand requires it
- Maintain contrast ratios (WCAG AA minimum)

### Step 6: Test Interactions
- Card flips on mobile and desktop
- Phase navigation synchronization
- Countdown accuracy
- Hotspot click targets
- Keyboard navigation
- Screen reader compatibility

---

## Responsive Breakpoints

### Mobile (<640px)
- Single column layout
- Stack cards vertically
- Larger touch targets (44px minimum)
- Hide complex SVG, show stacked flip cards
- Simplified navigation

### Tablet (640px-900px)
- Two-column grids where appropriate
- Still use stacked cards
- Larger text sizing

### Desktop (901px+)
- Full SVG roadmap display
- Side-by-side layouts
- Flip overlays on SVG
- Advanced animations and effects

---

## Accessibility Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] ARIA labels on icon buttons
- [ ] Semantic HTML (header, main, section, article)
- [ ] Alt text on images
- [ ] Color contrast minimum 4.5:1
- [ ] Reduced motion preferences respected
- [ ] Screen reader tested
- [ ] Touch targets minimum 44×44px
- [ ] Form labels and error messages

---

## Optional Enhancements

### Background Effects
**Floating Elements:**
- Physics equations (if STEM project)
- Code snippets (if tech project)
- Icons (if business/design project)
- Abstract shapes

**Implementation:**
```javascript
const floatingElements = [
  { content: '<span>Element HTML</span>', x: 10, y: 20, size: 1.2, duration: 25 },
  // ... more elements
];
```

**Particle System:**
- Small glowing dots
- Slow floating animation
- 10-15 particles
- Gold or brand color

**Spotlight Effect:**
- Follows mouse cursor
- Radial gradient glow
- 600px radius
- Subtle opacity

### Modal Dialogs
For sign-up gates, previews, or special messages:
```html
<div class="modal-root" hidden>
  <div class="modal-overlay">
    <div class="modal">
      <button class="modal-dismiss">&times;</button>
      <!-- Modal content -->
    </div>
  </div>
</div>
```

### Confetti Animation
For celebration moments (successful sign-up, completion):
- Spawn colored rectangles from top
- Animate falling with rotation
- Remove after animation

---

## Example Prompt for LLM

Use this prompt structure when asking an LLM to transform a project:

```
I have a [PROJECT TYPE] that I want to present as a sophisticated two-page website 
following the "Midnight Champagne" design system.

PROJECT OVERVIEW:
- Name: [Project Name]
- Purpose: [What it does]
- Timeline: [Duration or schedule]
- Target Audience: [Who it's for]

PHASES:
My project has [NUMBER] main phases:
1. [Phase 1 name]: [Brief description]
2. [Phase 2 name]: [Brief description]
[... continue for all phases]

For each phase, include:
- 3-4 key milestones/steps
- Expected outcome
- Timeline/duration

IMPORTANT DATE:
The most important upcoming date is [DATE] when [EVENT DESCRIPTION].

TEAM/LEADER:
[Name and brief bio of person/team leading the project]

REQUIREMENTS:
What users need to participate:
- [Requirement 1]
- [Requirement 2]
[... continue]

EXPECTED OUTCOMES:
What users will achieve:
- [Outcome 1]
- [Outcome 2]
[... continue]

Please create a complete two-page presentation website using the structure from 
LLM_PROJECT_PRESENTATION_PROMPT.md:
1. Landing page with interactive roadmap, flip cards, phase navigation, and countdown
2. Details page with requirements, expectations, team profile, and outcomes
3. Include all HTML, CSS, and JavaScript files
4. Configure data.js with my project information
5. Create a simple SVG roadmap illustration (or specify coordinates for hotspots)
6. Use the "Midnight Champagne" dark theme with gold accents
7. Implement all interactive features: card flips, tilt effects, countdown timer
8. Ensure mobile responsiveness and accessibility
```

---

## Design Principles to Follow

### 1. Progressive Disclosure
- Show high-level info first (landing page)
- Reveal details on interaction (flips, clicks)
- Full details on separate page

### 2. Visual Hierarchy
- Clear heading levels (h1 → h2 → h3)
- Gold for emphasis and calls-to-action
- Muted text for secondary info

### 3. Engagement Through Motion
- Animations create interest
- 3D effects add depth
- Micro-interactions provide feedback

### 4. Premium Feel
- Generous white space
- Smooth animations
- Sophisticated color palette
- High-quality typography

### 5. User-Centric
- Clear navigation
- Obvious next steps
- Honest expectations
- Accessible to all

---

## Common Pitfalls to Avoid

1. **Too Many Phases**: Keep to 3-6 phases maximum
2. **Overwhelming Text**: Each section should be scannable
3. **Slow Animations**: Keep transitions under 0.7s
4. **Missing Mobile View**: Test on small screens
5. **Inaccessible Interactions**: Always provide keyboard alternatives
6. **Auto-Playing Elements**: Let users control interactions
7. **Too Many Effects**: Choose 2-3 signature effects, not all of them
8. **Unclear CTAs**: Make primary action obvious
9. **Broken Countdown**: Test timezone handling and expired states
10. **Uncoordinated Colors**: Stick to the defined palette

---

## Testing Checklist

### Visual Testing
- [ ] Desktop (1920×1080)
- [ ] Laptop (1366×768)
- [ ] Tablet (768×1024)
- [ ] Mobile (375×667)
- [ ] Dark mode rendering (if applicable)

### Functional Testing
- [ ] All flip cards work
- [ ] Phase navigation syncs correctly
- [ ] Countdown updates every second
- [ ] Countdown hides when date passes
- [ ] Hotspots align with SVG
- [ ] Forms submit successfully
- [ ] Modals open/close
- [ ] All links work

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari
- [ ] Mobile Chrome

### Accessibility Testing
- [ ] Keyboard navigation complete
- [ ] Screen reader (NVDA/JAWS) usable
- [ ] Color contrast passes
- [ ] Focus indicators visible
- [ ] No motion sickness triggers

### Performance Testing
- [ ] Page load < 3 seconds
- [ ] Smooth 60fps animations
- [ ] No layout shifts
- [ ] Images optimized
- [ ] CSS/JS minified for production

---

## Maintenance and Updates

### When to Update Landing Page
- New phase starting
- Change in timeline
- Updated outcomes
- New team members
- Revised requirements

### When to Update Details Page
- Policy changes
- Prerequisite changes
- New FAQ items
- Updated bios
- Additional outcomes

### Content Refresh Schedule
- Review countdown date monthly
- Update phase progress weekly
- Refresh testimonials/results quarterly
- Audit all links quarterly

---

## Conclusion

This presentation style works for:
- **Courses & Training Programs**: Perfect fit
- **Product Launches**: Adapt phases to launch stages
- **Project Roadmaps**: Development phases
- **Event Series**: Multi-week/month events
- **Onboarding Flows**: Step-by-step journeys

Key success factors:
1. Clear phase structure (3-6 phases)
2. Important date for countdown urgency
3. Interactive elements that delight
4. Mobile-responsive design
5. Accessible to all users
6. Premium visual treatment

Use this guide to transform any phased project into an engaging, interactive presentation that looks professional and drives user action.
