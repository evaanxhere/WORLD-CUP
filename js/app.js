/* js/app.js — interactions, scroll tracking, animations */

/* ── COUNT-UP ────────────────────────────────────── */
function countUp(el) {
  const target = parseInt(el.dataset.countup, 10);
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease out expo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ── SNAP SCROLL + SIDE NAV ──────────────────────── */
const container   = document.getElementById('snapContainer');
const sections    = Array.from(document.querySelectorAll('.snap-section'));
const navDots     = Array.from(document.querySelectorAll('.sidenav__dot'));
const sectionH    = () => container.clientHeight;
let   currentIdx  = 0;
let   ticking     = false;

function activateSection(idx) {
  // update dots
  navDots.forEach((d, i) => d.classList.toggle('active', i === idx));
  currentIdx = idx;

  // trigger reveals inside the active section
  const sec = sections[idx];
  sec.querySelectorAll('[data-reveal]').forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), i * 100);
  });

  // stagger cards / rows
  sec.querySelectorAll('.match-card, .fixture-row').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 50);
  });

  // countup numbers
  sec.querySelectorAll('[data-countup]').forEach(el => {
    if (!el.dataset.counted) {
      el.dataset.counted = '1';
      countUp(el);
    }
  });
}

// Read which section is in view via scroll position
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollTop = container.scrollTop;
      const h = sectionH();
      const idx = Math.round(scrollTop / h);
      const clamped = Math.max(0, Math.min(idx, sections.length - 1));
      if (clamped !== currentIdx) activateSection(clamped);
      ticking = false;
    });
    ticking = true;
  }
}

container.addEventListener('scroll', onScroll, { passive: true });

// Dot clicks
navDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    container.scrollTo({ top: i * sectionH(), behavior: 'smooth' });
  });
});

/* ── SECTION LABEL REVEAL via IntersectionObserver ─ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.15, root: container });

document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

/* ── KEYBOARD NAV ────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    const next = Math.min(currentIdx + 1, sections.length - 1);
    container.scrollTo({ top: next * sectionH(), behavior: 'smooth' });
  }
  if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    const prev = Math.max(currentIdx - 1, 0);
    container.scrollTo({ top: prev * sectionH(), behavior: 'smooth' });
  }
});

/* ── INIT ────────────────────────────────────────── */
// Activate hero on load
setTimeout(() => activateSection(0), 100);
