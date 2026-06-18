// Solar Sense Pro - Landing Page with Improved UX
// Simplified interactions focused on clarity and information accessibility

document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initCountdownTimer();
  generateRoadmapTimeline();
  initMobileToggle();

  // 1. COUNTDOWN TIMER
  function initCountdownTimer() {
    const launchDate = new Date('2026-07-01T00:00:00');
    
    function updateCountdown() {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        document.getElementById('countdown-days').textContent = '0';
        document.getElementById('countdown-hours').textContent = '0';
        document.getElementById('countdown-minutes').textContent = '0';
        document.getElementById('countdown-seconds').textContent = '0';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('countdown-days').textContent = days;
      document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // 2. GENERATE ROADMAP TIMELINE (At-a-Glance)
  function generateRoadmapTimeline() {
    const container = document.getElementById('roadmap-timeline');
    if (!container || !executionPlan.roadmapPhases) return;

    executionPlan.roadmapPhases.forEach((phase) => {
      const card = createPhaseCard(phase);
      container.appendChild(card);
    });
  }

  function createPhaseCard(phase) {
    const card = document.createElement('div');
    card.className = 'phase-card';
    card.setAttribute('data-phase', phase.id);

    card.innerHTML = `
      <div class="phase-card-ripple"></div>
      <div class="phase-card-content">
        <div class="phase-header">
          <div class="phase-number">${phase.id}</div>
          <div class="phase-month">${phase.month}</div>
        </div>
        <div class="phase-title">${phase.title}</div>
        <p class="phase-description">${phase.lead}</p>
        <div class="phase-outcome">
          <span class="phase-outcome-label">Key Outcome</span>
          <span class="phase-outcome-text">${phase.outcome}</span>
        </div>
      </div>
      <div class="phase-card-expanded">
        ${createExpandedContent(phase)}
      </div>
    `;

    // Add click event listener
    card.addEventListener('click', (e) => {
      // Don't toggle if clicking the close button
      if (e.target.closest('.close-btn')) {
        return;
      }
      
      toggleCardExpansion(card, e);
    });

    return card;
  }

  function createExpandedContent(phase) {
    // Parse week range (e.g., "1-4" -> weeks 1, 2, 3, 4)
    const [startWeek, endWeek] = phase.weekRange.split('-').map(Number);
    
    // Filter weeks from executionPlan that belong to this phase
    const phaseWeeks = executionPlan.weeks.filter(week => 
      week.weekNumber >= startWeek && week.weekNumber <= endWeek
    );

    const weeksHtml = phaseWeeks.map(week => `
      <div class="week-detail-card">
        <div class="week-detail-header">
          <span class="week-number-badge">Week ${week.weekNumber}</span>
          <span class="week-priority-badge ${week.priority.toLowerCase()}">${week.priority}</span>
        </div>
        <h4 class="week-topic">${week.topic}</h4>
        <div class="week-dates">${week.dates}</div>
        
        <div class="week-track">
          <span class="track-label">Technical Track</span>
          <p class="track-content">${week.technicalTrack}</p>
        </div>
        
        <div class="week-track">
          <span class="track-label">Relationship Track</span>
          <p class="track-content">${week.relationshipTrack}</p>
        </div>
        
        <div class="week-track">
          <span class="track-label">Jordan Track</span>
          <p class="track-content">${week.jordanTrack}</p>
        </div>
        
        ${week.deliverables && week.deliverables.length > 0 ? `
          <div class="week-deliverables">
            <div class="deliverables-title">Deliverables</div>
            <ul class="deliverables-list">
              ${week.deliverables.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `).join('');

    return `
      <div class="expanded-header">
        <h3 class="expanded-title">${phase.title} - Detailed Breakdown</h3>
        <button class="close-btn" aria-label="Close expanded view">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="2" y1="2" x2="16" y2="16"/>
            <line x1="16" y1="2" x2="2" y2="16"/>
          </svg>
        </button>
      </div>
      <div class="weeks-container">
        ${weeksHtml}
      </div>
    `;
  }

  function toggleCardExpansion(card, event) {
    const isExpanded = card.classList.contains('expanded');
    
    if (isExpanded) {
      // Collapse the card
      card.classList.remove('expanded');
    } else {
      // Collapse any other expanded cards
      document.querySelectorAll('.phase-card.expanded').forEach(c => {
        c.classList.remove('expanded');
      });
      
      // Expand this card
      card.classList.add('expanded');
      
      // Create ripple effect
      createRipple(card, event);
      
      // Smooth scroll to card
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }

    // Add close button event listener
    const closeBtn = card.querySelector('.close-btn');
    if (closeBtn && !closeBtn.dataset.listenerAdded) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('expanded');
      });
      closeBtn.dataset.listenerAdded = 'true';
    }
  }

  function createRipple(card, event) {
    const rippleContainer = card.querySelector('.phase-card-ripple');
    if (!rippleContainer) return;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-circle';

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '100px';
    ripple.style.height = '100px';

    rippleContainer.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 800);
  }

  // 3. MOBILE NAV TOGGLE
  function initMobileToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
    }
  }

  // 4. SMOOTH SCROLL TO DASHBOARD
  const dashboardLinks = document.querySelectorAll('a[href="execution.html"]');
  dashboardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Optional: Add analytics or pre-loading logic here
    });
  });
});