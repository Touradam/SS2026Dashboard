# Solar Sense Pro - China Launch Dashboard

A comprehensive project management dashboard for tracking the 6-month Solar Sense Pro China market entry execution plan (July - December 2026).

## Overview

This web application provides a complete view of the Plug and Play Cross-Border Acceleration Camp - Nantong Summer Cohort program, including:

- **24-Week Timeline** with interactive week cards
- **Monthly Objectives** with detailed weekly breakdowns
- **Relationship Matrix** for key contacts and partners
- **Launch Readiness Checklist** with 14 critical items across 5 categories
- **Quarterly Milestones** (Q3 & Q4 2026)
- **Key Dates Calendar** with countdown timers
- **Glossary & Quick Reference** for acronyms and contacts

## Features

### Interactive Timeline
- Phase-based color coding for easy navigation
- Current week highlighting based on today's date
- Click any week card to view detailed information
- Priority badges and hour estimates

### Progress Tracking
- Real-time progress calculations
- LocalStorage persistence (your progress is saved automatically)
- Category-based completion tracking
- Visual progress bars with status indicators

### Search & Filter
- Search relationships by name, role, or organization
- Filter key dates by type (Program, Travel, Manufacturing, etc.)
- Search glossary terms

### Responsive Design
- Mobile-first approach
- Works on phones, tablets, and desktops
- Smooth animations and transitions
- Accessible keyboard navigation

## Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks or dependencies
- **LocalStorage** - Client-side data persistence

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build process required!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The dashboard is ready to use.

### File Structure

```
SolarSenseChinaDashboard/
├── index.html              # Landing page with 6-phase roadmap
├── execution.html          # Full execution dashboard
├── styles.css              # All styling and responsive design
├── app.js                  # Dashboard JavaScript functionality
├── roadmap.js              # Landing page roadmap rendering
├── edit-handlers.js        # Inline editing and localStorage
├── data.js                 # Execution plan data (single source of truth)
└── README.md               # This file
```

## Usage

### Navigation

Use the header navigation menu to jump to different sections:
- **Overview** - Dashboard summary and key metrics
- **Timeline** - 24-week visual timeline
- **Monthly** - Month-by-month objectives
- **Relationships** - Contact matrix
- **Readiness** - Launch checklist
- **Milestones** - Q3 & Q4 goals
- **Key Dates** - Important events calendar
- **Glossary** - Acronyms and contacts

### Tracking Progress

1. **Checklist Items**: Check off items as you complete them
2. **Milestone Criteria**: Mark criteria as achieved
3. **Progress is Auto-Saved**: Your selections persist across sessions
4. **Export Progress**: Click "Export Progress" in the footer to download your data

### Resetting Data

Click "Reset All" in the footer to clear all progress and start fresh. This action cannot be undone.

## Design System

### Color Palette
- **Primary**: `#FF6B35` (Solar Orange)
- **Secondary**: `#004E89` (Deep Blue)
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Danger**: `#EF4444` (Red)

### Phase Colors
- **July** (Land & Launch): Blue `#6b6ea8`
- **August** (Market Entry): Green `#5a9a82`
- **September** (Manufacturing Kickoff): Gold `#b8924a`
- **October** (Hardware Ingestion): Purple `#8b7aa8`
- **November** (Field Deployment): Red `#c45c5c`
- **December** (Scale, Showcase & Graduation): Teal `#5a9a82`

## Data Structure

All execution plan data is stored in `data.js` as structured JavaScript objects:

```javascript
executionPlan = {
  timeline: { ... },
  monthlyObjectives: [ ... ],
  weeks: [ ... ],              // 24 weeks of detailed data
  relationships: { ... },      // pnpCore, researchPartners, manufacturing
  readinessChecklist: { ... }, // marketDevelopment, pilotDevelopment, fundraising, manufacturing, strategic
  milestones: { ... },         // Q3 & Q4 milestones
  keyDates: [ ... ],           // Critical program dates
  glossary: { ... },
  contacts: { ... },
  roadmapPhases: [ ... ]       // 6 phase summaries for landing page
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Load Time**: < 1 second (no external dependencies)
- **Interactive**: Instant response to user actions
- **Storage**: ~50KB localStorage usage
- **Bundle Size**: ~130KB total (uncompressed)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader compatible
- Color contrast WCAG AA compliant

## Print Support

The dashboard includes print styles for generating PDF reports:
- Optimized layout for paper
- Removed navigation and interactive elements
- Clear section breaks

## LocalStorage Schema

Progress is saved in localStorage under the key `solarSenseDashboard`:

```javascript
{
  "checklistProgress": {
    "market-1": true,
    "pilot-1": false,
    // ... all 14 items
  },
  "weekCompletions": {
    "week-1": true,
    // ... optional week tracking
  },
  "milestoneProgress": {
    "q3": { "q3-0": true, ... },
    "q4": { "q4-0": false, ... }
  },
  "currentMonth": "July",
  "lastUpdated": "2026-07-15T10:30:00Z"
}
```

## Development

### Making Changes

1. **Update Data**: Edit `data.js` to modify execution plan details
2. **Styling**: Modify `styles.css` (uses CSS custom properties)
3. **Functionality**: Update `app.js` for behavior changes

### Adding New Features

The code is organized into clear sections:
- State Management
- LocalStorage Functions
- Date Utilities
- Progress Calculations
- Render Functions (one per section)
- Event Handlers
- Initialization

## Troubleshooting

### Progress Not Saving
- Check browser console for errors
- Ensure localStorage is enabled
- Try a different browser

### Layout Issues
- Clear browser cache
- Update to latest browser version
- Check console for CSS errors

### Data Not Displaying
- Verify `data.js` is loaded (check Network tab)
- Check browser console for JavaScript errors
- Ensure all files are in the same directory

## Credits

**Project**: Solar Sense Pro - China Launch Execution Plan  
**Program**: Plug and Play Cross-Border Acceleration Camp  
**Location**: Nantong, Jiangsu Province, China  
**Timeline**: July 2026 - December 2026  
**Version**: Draft 1.1  
**Last Updated**: June 22, 2026

## License

This dashboard is built for internal use for the Solar Sense Pro China launch program.

## Support

For questions or issues with this dashboard:
1. Check the troubleshooting section above
2. Contact the program team

---

**Built for Solar Sense Pro's China market entry**
