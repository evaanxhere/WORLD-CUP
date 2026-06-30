// js/app.js — section transitions, reveal system, nav, keyboard

(function () {

  // ── STATE ─────────────────────────────────────
  const ORDER    = ['hero', 'scores', 'groups', 'fixtures'];
  let current    = 0;
  let animating  = false;

  const overlay  = document.getElementById('transitionOverlay');
  const dots     = document.querySelectorAll('.sidenav__dot');

  // ── TRANSITION ────────────────────────────────
  function goTo(targetIdx) {
    if (targetIdx === current || animating) return;
    animating = true;

    const fromId = ORDER[current];
    const toId   = ORDER[targetIdx];
    const dir    = targetIdx > current ? 1 : -1; // 1=forward, -1=back

    const fromSec = document.getElementById(fromId);
    const toSec   = document.getElementById(toId);

    // Step 1: wipe overlay IN (ink covers screen)
    overlay.classList.remove('wipe-out');
    overlay.classList.add('wipe-in');

    setTimeout(() => {
      // Step 2: swap sections while covered
      fromSec.classList.remove('active');
      toSec.classList.add('active');
      toSec.scrollTop = 0;

      // Update dots
      dots.forEach((d, i) => d.classList.toggle('active', i === targetIdx));

      current = targetIdx;

      // Trigger element reveals on the new section
      revealSection(toSec);

    }, 340); // halfway through wipe-in

    setTimeout(() => {
      // Step 3: wipe OUT
      overlay.classList.remove('wipe-in');
      overlay.classList.add('wipe-out');

      setTimeout(() => {
        overlay.classList.remove('wipe-out');
        animating = false;
      }, 440);

    }, 400);
  }

  // ── REVEAL SYSTEM ────────────────────────────
  function revealSection(sec) {
    // [data-anim] elements — stagger by data-delay
    sec.querySelectorAll('[data-anim]').forEach(el => {
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('anim-in'), delay);
    });

    // Cards stagger
    sec.querySelectorAll('.card-flip').forEach((el, i) => {
      setTimeout(() => el.classList.add('anim-in'), 200 + i * 50);
    });

    // Fixture rows stagger
    sec.querySelectorAll('.fixture-row').forEach((el, i) => {
      setTimeout(() => el.classList.add('anim-in'), 200 + i * 55);
    });

    // Countup numbers
    sec.querySelectorAll('[data-countup]').forEach(el => {
      setTimeout(() => countUp(el), 400);
    });

    // Probability bars
    fillProbBars(sec);
  }

  // ── SIDE NAV ─────────────────────────────────
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  // ── CTA BUTTONS ──────────────────────────────
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = ORDER.indexOf(btn.dataset.goto);
      if (target !== -1) goTo(target);
    });
  });

  // ── KEYBOARD ─────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') {
      goTo(Math.min(current + 1, ORDER.length - 1));
    }
    if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
      goTo(Math.max(current - 1, 0));
    }
    // number keys 1-4
    const num = parseInt(e.key) - 1;
    if (num >= 0 && num < ORDER.length) goTo(num);
  });

  // ── MOUSE WHEEL ──────────────────────────────
  let wheelTimer = null;
  document.addEventListener('wheel', e => {
    // Only trigger section change if the current section's scroll is at boundary
    const sec = document.getElementById(ORDER[current]);
    const atBottom = sec.scrollTop + sec.clientHeight >= sec.scrollHeight - 4;
    const atTop    = sec.scrollTop <= 0;

    if (e.deltaY > 30 && atBottom) {
      if (wheelTimer) return;
      goTo(Math.min(current + 1, ORDER.length - 1));
      wheelTimer = setTimeout(() => { wheelTimer = null; }, 1000);
    }
    if (e.deltaY < -30 && atTop) {
      if (wheelTimer) return;
      goTo(Math.max(current - 1, 0));
      wheelTimer = setTimeout(() => { wheelTimer = null; }, 1000);
    }
  }, { passive: true });

  // ── TOUCH SWIPE ──────────────────────────────
  let touchStartY = 0;
  document.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const delta = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) goTo(Math.min(current + 1, ORDER.length - 1));
    else           goTo(Math.max(current - 1, 0));
  }, { passive: true });

  // ── INIT ─────────────────────────────────────
  // Reveal hero on load
  setTimeout(() => {
    const heroSec = document.getElementById('hero');
    revealSection(heroSec);
  }, 150);

})();
