// js/interactions.js — cursor, 3D card tilt, countup, hover effects

// ── CUSTOM CURSOR ────────────────────────────────
(function () {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  let cx = -100, cy = -100;
  let tx = -100, ty = -100;

  function lerp(a, b, t) { return a + (b - a) * t; }

  document.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  });

  // Instant dot, lagging ring
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));

  // hover class on interactive elements
  const hoverEls = 'button, a, .card-flip, .fixture-row, .group-tab, .sidenav__dot';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverEls)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverEls)) document.body.classList.remove('cursor-hover');
  });
})();

// ── CARD 3D TILT ─────────────────────────────────
(function () {
  const MAX_TILT = 8; // degrees

  document.addEventListener('mousemove', e => {
    document.querySelectorAll('.card-front').forEach(front => {
      const card = front.closest('.card-flip');
      if (!card || card.classList.contains('flipped')) return;

      const rect = card.getBoundingClientRect();
      const inBounds =
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top  && e.clientY <= rect.bottom;

      if (!inBounds) {
        front.style.transform = 'rotateX(0deg) rotateY(0deg)';
        return;
      }

      const px = (e.clientX - rect.left) / rect.width  - 0.5; // -0.5 to 0.5
      const py = (e.clientY - rect.top)  / rect.height - 0.5;

      const rotY =  px * MAX_TILT;
      const rotX = -py * MAX_TILT;

      front.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
  });

  // Reset tilt when mouse leaves a card
  document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.card-front').forEach(front => {
      front.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }, true);
})();

// ── COUNT-UP ─────────────────────────────────────
function countUp(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';

  const target   = parseInt(el.dataset.countup, 10);
  const duration = 1400; // ms
  const start    = performance.now();

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(easeOutExpo(t) * target);
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }

  requestAnimationFrame(tick);
}

// ── PROBABILITY BAR FILL ─────────────────────────
function fillProbBars(section) {
  section.querySelectorAll('.fixture-prob-fill').forEach(bar => {
    const w = bar.dataset.width || 50;
    // Defer to let element be in DOM/visible
    setTimeout(() => { bar.style.width = w + '%'; }, 100);
  });
}

// Exported so app.js can call after section enters
window.countUp       = countUp;
window.fillProbBars  = fillProbBars;
