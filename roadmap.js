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

  // 4. SMOOTH SCROLL TO DASHBOARD
  const dashboardLinks = document.querySelectorAll('a[href="execution.html"]');
  dashboardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Optional: Add analytics or pre-loading logic here
    });
  });
});
