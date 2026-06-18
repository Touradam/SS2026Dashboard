// Solar Sense Pro - Landing Page Minimal & Elegant
// Simplified interactions focused on clarity and elegance

document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initSimpleCountdown();
  generateRoadmapTimeline();
  initMobileToggle();

  // 1. SIMPLE COUNTDOWN (text-based)
  function initSimpleCountdown() {
    const countdownElement = document.getElementById('countdown-simple');
    if (!countdownElement) return;
    
    const launchDate = new Date('2026-07-01T00:00:00');
    
    function updateCountdown() {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        countdownElement.textContent = 'launching now';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      if (days > 0) {
        countdownElement.textContent = `${days} ${days === 1 ? 'day' : 'days'}, ${hours} ${hours === 1 ? 'hour' : 'hours'}`;
      } else {
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        countdownElement.textContent = `${hours} ${hours === 1 ? 'hour' : 'hours'}, ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
      }
    }

    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute (less aggressive)
  }

  // 2. GENERATE ROADMAP TIMELINE (Simple Phase Cards)
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
    `;

    return card;
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
});
