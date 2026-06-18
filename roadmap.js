// Solar Sense Pro - Landing Page Interactive Roadmap
// Handles countdown timer, flip cards, phase navigation, and SVG hotspots

document.addEventListener('DOMContentLoaded', () => {
  // State
  let activePhase = null;
  let countdownInterval = null;

  // Initialize all components
  initCountdownTimer();
  generateFlipCards();
  initPhaseNavigation();
  initSVGHotspots();
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
        clearInterval(countdownInterval);
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
    countdownInterval = setInterval(updateCountdown, 1000);
  }

  // 2. FLIP CARDS GENERATION
  function generateFlipCards() {
    const container = document.getElementById('flip-cards-grid');
    if (!container || !executionPlan.roadmapPhases) return;

    executionPlan.roadmapPhases.forEach((phase) => {
      const card = createFlipCard(phase);
      container.appendChild(card);
    });
  }

  function createFlipCard(phase) {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.setAttribute('data-phase', phase.id);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${phase.month} phase: ${phase.title}. Click to flip and view details.`);

    const inner = document.createElement('div');
    inner.className = 'flip-card-inner';

    // Front Face
    const front = document.createElement('div');
    front.className = 'flip-card-face flip-card-front';
    front.innerHTML = `
      <div class="flip-card-header">
        <span class="flip-card-tag">${phase.tag}</span>
        <span class="flip-card-month">${phase.month}</span>
      </div>
      <h3 class="flip-card-title">${phase.title}</h3>
      <p class="flip-card-lead">${phase.lead}</p>
      <div class="flip-card-outcome">
        <div class="flip-card-outcome-label">Key Outcome</div>
        <div class="flip-card-outcome-text">${phase.outcome}</div>
      </div>
      <div class="flip-card-weeks">Weeks ${phase.weekRange}</div>
      <div class="flip-card-prompt">
        <span class="flip-icon">↻</span>
        <span>Click to view details</span>
      </div>
    `;

    // Back Face
    const back = document.createElement('div');
    back.className = 'flip-card-face flip-card-back';
    
    const deliverablesHTML = phase.deliverables
      .map(d => `<li>${d}</li>`)
      .join('');
    
    const activitiesHTML = phase.keyActivities
      .map(a => `<li>${a}</li>`)
      .join('');

    back.innerHTML = `
      <div class="flip-card-back-header">
        <span class="flip-card-back-month">${phase.month} 2026</span>
        <span class="flip-card-back-weeks">Weeks ${phase.weekRange}</span>
      </div>
      <div class="flip-card-back-section">
        <h4 class="flip-card-back-title">Key Deliverables</h4>
        <ul class="flip-card-list">${deliverablesHTML}</ul>
      </div>
      <div class="flip-card-back-section">
        <h4 class="flip-card-back-title">Critical Milestone</h4>
        <p class="flip-card-milestone">${phase.criticalMilestone}</p>
      </div>
      <div class="flip-card-prompt">
        <span class="flip-icon">↻</span>
        <span>Click to flip back</span>
      </div>
    `;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Add click and keyboard handlers
    card.addEventListener('click', () => toggleFlipCard(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFlipCard(card);
      } else if (e.key === 'Escape') {
        unflipCard(card);
      }
    });

    return card;
  }

  function toggleFlipCard(card) {
    const isFlipped = card.classList.contains('is-flipped');
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      card.style.transition = 'none';
    }

    if (isFlipped) {
      card.classList.remove('is-flipped');
      card.setAttribute('aria-label', card.getAttribute('aria-label').replace('Flip back', 'Click to flip and view details'));
    } else {
      card.classList.add('is-flipped');
      card.setAttribute('aria-label', card.getAttribute('aria-label').replace('Click to flip and view details', 'Flip back'));
      
      // Announce to screen readers
      announceToScreenReader(`Showing details for ${card.querySelector('.flip-card-month').textContent} phase`);
    }
  }

  function unflipCard(card) {
    if (card.classList.contains('is-flipped')) {
      card.classList.remove('is-flipped');
      announceToScreenReader('Card flipped back');
    }
  }

  // 3. PHASE NAVIGATION
  function initPhaseNavigation() {
    const pills = document.querySelectorAll('.phase-nav-pill');
    const hotspots = document.querySelectorAll('.roadmap-hotspot');

    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const phaseId = pill.getAttribute('data-phase');
        selectPhase(phaseId);
      });

      pill.addEventListener('keydown', (e) => {
        handlePillKeyboard(e, pill);
      });
    });

    hotspots.forEach((hotspot) => {
      hotspot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          hotspot.click();
        }
      });
    });
  }

  function selectPhase(phaseId) {
    // Update active phase
    activePhase = phaseId;

    // Update pill states
    const pills = document.querySelectorAll('.phase-nav-pill');
    pills.forEach((pill) => {
      const isActive = pill.getAttribute('data-phase') === phaseId;
      pill.classList.toggle('active', isActive);
      pill.setAttribute('aria-selected', isActive);
      pill.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    // Highlight corresponding flip card
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach((card) => {
      const isMatch = card.getAttribute('data-phase') === phaseId;
      card.classList.toggle('highlighted', isMatch);
      
      if (isMatch) {
        // Scroll card into view on mobile
        if (window.innerWidth <= 900) {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });

    announceToScreenReader(`Phase ${phaseId} selected`);
  }

  function handlePillKeyboard(e, currentPill) {
    const pills = Array.from(document.querySelectorAll('.phase-nav-pill'));
    const currentIndex = pills.indexOf(currentPill);

    let targetIndex;
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        targetIndex = currentIndex > 0 ? currentIndex - 1 : pills.length - 1;
        pills[targetIndex].focus();
        break;
      case 'ArrowRight':
        e.preventDefault();
        targetIndex = currentIndex < pills.length - 1 ? currentIndex + 1 : 0;
        pills[targetIndex].focus();
        break;
      case 'Home':
        e.preventDefault();
        pills[0].focus();
        break;
      case 'End':
        e.preventDefault();
        pills[pills.length - 1].focus();
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        currentPill.click();
        break;
    }
  }

  // 4. SVG HOTSPOTS
  function initSVGHotspots() {
    const hotspots = document.querySelectorAll('.roadmap-hotspot');

    hotspots.forEach((hotspot) => {
      hotspot.addEventListener('click', () => {
        const phaseId = hotspot.getAttribute('data-phase');
        handleHotspotClick(phaseId);
      });

      hotspot.addEventListener('mouseenter', () => {
        hotspot.style.backgroundColor = 'rgba(196, 163, 90, 0.15)';
        hotspot.style.border = '2px solid rgba(196, 163, 90, 0.5)';
      });

      hotspot.addEventListener('mouseleave', () => {
        hotspot.style.backgroundColor = 'transparent';
        hotspot.style.border = 'none';
      });
    });
  }

  function handleHotspotClick(phaseId) {
    // Select the phase
    selectPhase(phaseId);

    // Scroll to flip cards section
    const flipCardsSection = document.querySelector('.flip-cards-section');
    if (flipCardsSection) {
      flipCardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Auto-flip the corresponding card after scroll
    setTimeout(() => {
      const targetCard = document.querySelector(`.flip-card[data-phase="${phaseId}"]`);
      if (targetCard && !targetCard.classList.contains('is-flipped')) {
        toggleFlipCard(targetCard);
      }
    }, 600);
  }

  // 5. MOBILE NAV TOGGLE
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

  // 6. DOWNLOAD PLAN
  const downloadBtn = document.getElementById('download-plan-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      alert('Download functionality will export the plan as PDF. Feature coming soon!');
    });
  }

  // 7. UTILITY: Screen Reader Announcements
  function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // 8. WINDOW RESIZE HANDLER
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Remove highlights on resize to avoid confusion
      if (activePhase) {
        selectPhase(activePhase);
      }
    }, 250);
  });
});
