// Solar Sense Pro - Landing Page Roadmap
// 6-phase flip cards + next-phase countdown

document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  generateRoadmapTimeline();
  setupFlipCardEscape();
});

// Hero launch countdown (program start)
function initCountdownTimer() {
  const el = document.getElementById('countdown-simple');
  if (!el) return;

  const launchDate = new Date('2026-07-01T00:00:00');

  function update() {
    const diff = launchDate - new Date();
    if (diff <= 0) {
      el.textContent = 'now';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    if (days > 0) {
      el.textContent = `${days} ${days === 1 ? 'day' : 'days'}, ${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else {
      const minutes = Math.floor((diff % 3600000) / 60000);
      el.textContent = `${hours} ${hours === 1 ? 'hour' : 'hours'}, ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    }
  }

  update();
  setInterval(update, 60000);
}

function generateRoadmapTimeline() {
  const container = document.getElementById('roadmap-timeline');
  if (!container || !executionPlan.roadmapPhases) return;

  executionPlan.roadmapPhases.forEach((phase) => {
    container.appendChild(createFlipCard(phase));
  });

  if (window.MidnightMotion?.refreshScrollReveal) {
    window.MidnightMotion.refreshScrollReveal();
  }
}

function createFlipCard(phase) {
  const card = document.createElement('div');
  card.className = 'flip-card';
  card.setAttribute('data-phase', phase.id);
  card.setAttribute('data-reveal', '');
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-expanded', 'false');
  card.setAttribute('aria-label', `${phase.tag}: ${phase.title}. Click to reveal details.`);

  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-face flip-card-front">
        <div class="flip-card-header">
          <span class="flip-card-number">${phase.id}</span>
          <span class="flip-card-tag">${phase.tag}</span>
        </div>
        <span class="flip-card-month">${phase.month}</span>
        <h3 class="flip-card-title">${phase.title}</h3>
        <p class="flip-card-lead">${phase.lead}</p>
        <div class="flip-card-outcome">
          <span class="flip-card-outcome-label">Key Outcome</span>
          <span class="flip-card-outcome-text">${phase.outcome}</span>
        </div>
        <div class="flip-card-prompt">
          <span class="flip-icon" aria-hidden="true">↻</span>
          <span>Click to reveal details</span>
        </div>
      </div>
      <div class="flip-card-face flip-card-back">
        ${createBackFace(phase)}
      </div>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (e.target.closest('.flip-close-btn')) return;
    toggleFlip(card);
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (e.target.closest('.flip-close-btn')) return;
      toggleFlip(card);
    }
  });

  const closeBtn = card.querySelector('.flip-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      unflipCard(card);
    });
    closeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.stopPropagation();
        e.preventDefault();
        unflipCard(card);
      }
    });
  }

  return card;
}

function createBackFace(phase) {
  const [startWeek, endWeek] = phase.weekRange.split('-').map(Number);
  const phaseWeeks = executionPlan.weeks.filter(
    (w) => w.weekNumber >= startWeek && w.weekNumber <= endWeek
  );

  const activitiesHtml = (phase.keyActivities || [])
    .map((a) => `<li>${a}</li>`)
    .join('');

  const deliverablesHtml = (phase.deliverables || [])
    .map((d) => `<li>${d}</li>`)
    .join('');

  const weeksHtml = phaseWeeks
    .map(
      (week) => `
      <div class="flip-week-item">
        <div class="flip-week-header">
          <span class="flip-week-badge">Week ${week.weekNumber}</span>
          <span class="flip-week-priority ${week.priority.toLowerCase()}">${week.priority}</span>
        </div>
        <p class="flip-week-topic">${week.topic}</p>
        <span class="flip-week-dates">${week.dates}</span>
        ${
          week.deliverables && week.deliverables.length
            ? `<ul class="flip-week-deliverables">${week.deliverables
                .slice(0, 2)
                .map((d) => `<li>${d}</li>`)
                .join('')}</ul>`
            : ''
        }
      </div>
    `
    )
    .join('');

  return `
    <div class="flip-card-back-header">
      <div>
        <span class="flip-card-back-month">${phase.month} · ${phase.tag}</span>
        <h3 class="flip-card-back-title">${phase.title}</h3>
      </div>
      <button type="button" class="flip-close-btn" aria-label="Close details">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="2" y1="2" x2="14" y2="14"/>
          <line x1="14" y1="2" x2="2" y2="14"/>
        </svg>
      </button>
    </div>
    <div class="flip-card-back-scroll">
      <div class="flip-card-back-section">
        <h4 class="flip-section-title">Key Activities</h4>
        <ul class="flip-card-list">${activitiesHtml}</ul>
      </div>
      <div class="flip-card-back-section">
        <h4 class="flip-section-title">Deliverables</h4>
        <ul class="flip-card-list">${deliverablesHtml}</ul>
      </div>
      ${
        phase.criticalMilestone
          ? `<div class="flip-card-milestone">${phase.criticalMilestone}</div>`
          : ''
      }
      <div class="flip-card-back-section">
        <h4 class="flip-section-title">Weekly Activities</h4>
        <div class="flip-weeks-list">${weeksHtml}</div>
      </div>
    </div>
  `;
}

function toggleFlip(card) {
  const isFlipped = card.classList.contains('is-flipped');
  if (isFlipped) {
    unflipCard(card);
  } else {
    document.querySelectorAll('.flip-card.is-flipped').forEach(unflipCard);
    card.classList.add('is-flipped');
    card.setAttribute('aria-expanded', 'true');
  }
}

function unflipCard(card) {
  card.classList.remove('is-flipped');
  card.setAttribute('aria-expanded', 'false');
}

function setupFlipCardEscape() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const flipped = document.querySelector('.flip-card.is-flipped');
    if (flipped) {
      unflipCard(flipped);
      flipped.focus();
    }
  });
}
