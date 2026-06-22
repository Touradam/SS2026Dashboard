/**
 * Midnight Champagne — shared motion & interaction layer
 * Respects prefers-reduced-motion throughout.
 */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initSpotlight();
    initParticles();
    initScrollReveal();
    initTilt();
    initFocusTrap();
    initPhaseCountdown();
  });

  /* ── Mobile nav ── */
  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.focus();
      }
    });
  }

  /* ── Hero spotlight follows cursor ── */
  function initSpotlight() {
    const heroes = document.querySelectorAll('[data-spotlight]');
    if (!heroes.length || prefersReducedMotion) return;

    heroes.forEach((hero) => {
      const glow = hero.querySelector('.hero-spotlight');
      if (!glow) return;

      let raf = null;
      let targetX = 50;
      let targetY = 40;
      let currentX = 50;
      let currentY = 40;

      const move = (e) => {
        const rect = hero.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width) * 100;
        targetY = ((e.clientY - rect.top) / rect.height) * 100;
        if (!raf) raf = requestAnimationFrame(tick);
      };

      const tick = () => {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
        glow.style.setProperty('--spot-x', `${currentX}%`);
        glow.style.setProperty('--spot-y', `${currentY}%`);
        raf = Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1
          ? requestAnimationFrame(tick)
          : null;
      };

      hero.addEventListener('mousemove', move);
      hero.addEventListener('mouseleave', () => {
        targetX = 50;
        targetY = 35;
        if (!raf) raf = requestAnimationFrame(tick);
      });
    });
  }

  /* ── Subtle floating particles ── */
  function initParticles() {
    const containers = document.querySelectorAll('[data-particles]');
    if (!containers.length || prefersReducedMotion) return;

    containers.forEach((container) => {
      const count = window.innerWidth < 640 ? 8 : 16;
      for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        p.style.setProperty('--x', `${Math.random() * 100}%`);
        p.style.setProperty('--y', `${Math.random() * 100}%`);
        p.style.setProperty('--size', `${1 + Math.random() * 2}px`);
        p.style.setProperty('--duration', `${12 + Math.random() * 18}s`);
        p.style.setProperty('--delay', `${Math.random() * -20}s`);
        p.style.setProperty('--drift', `${-20 + Math.random() * 40}px`);
        container.appendChild(p);
      }
    });
  }

  let revealObserver = null;

  function initScrollReveal() {
    if (revealObserver) revealObserver.disconnect();

    const targets = document.querySelectorAll('[data-reveal]:not(.is-revealed)');

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const group = el.closest('[data-reveal-group]');
          if (group) {
            const siblings = [...group.querySelectorAll('[data-reveal]')];
            const idx = siblings.indexOf(el);
            el.style.transitionDelay = `${idx * 80}ms`;
          }
          el.classList.add('is-revealed');
          revealObserver.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    targets.forEach((el) => revealObserver.observe(el));
  }

  window.MidnightMotion = { refreshScrollReveal: initScrollReveal };

  /* ── 3D tilt on hover ── */
  function initTilt() {
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ── Modal focus trap helper ── */
  function initFocusTrap() {
    const modal = document.getElementById('week-modal');
    if (!modal) return;

    modal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !modal.classList.contains('active')) return;
      const focusable = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ── Next phase deadline countdown ── */
  function initPhaseCountdown() {
    const tag = document.getElementById('pc-tag');
    const title = document.getElementById('pc-title');
    const month = document.getElementById('pc-month');
    const daysEl = document.getElementById('pc-days');
    const hoursEl = document.getElementById('pc-hours');
    const minutesEl = document.getElementById('pc-minutes');
    const dueEl = document.getElementById('pc-due');
    const timerEl = document.getElementById('pc-timer');

    if (!tag || typeof executionPlan === 'undefined' || !executionPlan.roadmapPhases) return;

    function parseEndDate(dateStr) {
      const [y, m, d] = dateStr.split('-').map(Number);
      return new Date(y, m - 1, d, 23, 59, 59, 999);
    }

    function getNextPhase() {
      const now = new Date();
      for (const phase of executionPlan.roadmapPhases) {
        if (parseEndDate(phase.endDate) >= now) return phase;
      }
      return null;
    }

    function formatDueDate(dateStr) {
      const [y, m, d] = dateStr.split('-').map(Number);
      return new Date(y, m - 1, d).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }

    function pad(n) {
      return String(n).padStart(2, '0');
    }

    function update() {
      const phase = getNextPhase();

      if (!phase) {
        tag.textContent = 'Complete';
        title.textContent = 'All Phases Complete';
        month.textContent = '';
        daysEl.textContent = '0';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        dueEl.textContent = 'Program timeline finished';
        timerEl?.classList.add('is-complete');
        return;
      }

      timerEl?.classList.remove('is-complete');
      const diff = parseEndDate(phase.endDate) - new Date();

      tag.textContent = phase.tag;
      title.textContent = phase.title;
      month.textContent = phase.month;
      dueEl.textContent = `Due ${formatDueDate(phase.endDate)}`;

      if (diff <= 0) {
        daysEl.textContent = '0';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        return;
      }

      daysEl.textContent = Math.floor(diff / 86400000);
      hoursEl.textContent = pad(Math.floor((diff % 86400000) / 3600000));
      minutesEl.textContent = pad(Math.floor((diff % 3600000) / 60000));
    }

    update();
    setInterval(update, 60000);
  }
})();
