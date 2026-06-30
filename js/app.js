// js/data.js — FIFA World Cup 2026 data

const FLAGS = {
  MEX:'🇲🇽', RSA:'🇿🇦', KOR:'🇰🇷', CZE:'🇨🇿', SUI:'🇨🇭', CAN:'🇨🇦', BIH:'🇧🇦', QAT:'🇶🇦',
  BRA:'🇧🇷', MAR:'🇲🇦', SCO:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', HTI:'🇭🇹', USA:'🇺🇸', AUS:'🇦🇺', PAR:'🇵🇾', TUR:'🇹🇷',
  GER:'🇩🇪', CIV:'🇨🇮', ECU:'🇪🇨', CUW:'🇨🇼', NED:'🇳🇱', JPN:'🇯🇵', SWE:'🇸🇪', TUN:'🇹🇳',
  BEL:'🇧🇪', EGY:'🇪🇬', IRN:'🇮🇷', NZL:'🇳🇿', ESP:'🇪🇸', CPV:'🇨🇻', URU:'🇺🇾', KSA:'🇸🇦',
  FRA:'🇫🇷', NOR:'🇳🇴', SEN:'🇸🇳', IRQ:'🇮🇶', ARG:'🇦🇷', AUT:'🇦🇹', DZA:'🇩🇿', JOR:'🇯🇴',
  COL:'🇨🇴', POR:'🇵🇹', COD:'🇨🇩', UZB:'🇺🇿', ENG:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', CRO:'🇭🇷', GHA:'🇬🇭', PAN:'🇵🇦'
};

const NAMES = {
  MEX:'Mexico',     RSA:'South Africa',   KOR:'Korea Republic', CZE:'Czechia',
  SUI:'Switzerland',CAN:'Canada',         BIH:'Bosnia & Herz.', QAT:'Qatar',
  BRA:'Brazil',     MAR:'Morocco',        SCO:'Scotland',        HTI:'Haiti',
  USA:'USA',        AUS:'Australia',      PAR:'Paraguay',        TUR:'Türkiye',
  GER:'Germany',    CIV:'Ivory Coast',    ECU:'Ecuador',         CUW:'Curaçao',
  NED:'Netherlands',JPN:'Japan',          SWE:'Sweden',          TUN:'Tunisia',
  BEL:'Belgium',    EGY:'Egypt',          IRN:'IR Iran',         NZL:'New Zealand',
  ESP:'Spain',      CPV:'Cape Verde',     URU:'Uruguay',         KSA:'Saudi Arabia',
  FRA:'France',     NOR:'Norway',         SEN:'Senegal',         IRQ:'Iraq',
  ARG:'Argentina',  AUT:'Austria',        DZA:'Algeria',         JOR:'Jordan',
  COL:'Colombia',   POR:'Portugal',       COD:'Congo DR',        UZB:'Uzbekistan',
  ENG:'England',    CRO:'Croatia',        GHA:'Ghana',           PAN:'Panama'
};

const SCORES = [
  { home:'CPV', away:'KSA', scoreH:0, scoreA:0, date:'27 Jun', venue:'SoFi Stadium' },
  { home:'NZL', away:'BEL', scoreH:1, scoreA:5, date:'27 Jun', venue:'MetLife Stadium' },
  { home:'EGY', away:'IRN', scoreH:1, scoreA:1, date:'27 Jun', venue:'Levi\'s Stadium' },
  { home:'PAN', away:'ENG', scoreH:0, scoreA:2, date:'28 Jun', venue:'AT&T Stadium' },
  { home:'CRO', away:'GHA', scoreH:2, scoreA:1, date:'28 Jun', venue:'Rose Bowl' },
  { home:'COL', away:'POR', scoreH:0, scoreA:0, date:'28 Jun', venue:'Hard Rock Stadium' },
  { home:'COD', away:'UZB', scoreH:3, scoreA:1, date:'28 Jun', venue:'Gillette Stadium' },
  { home:'JOR', away:'ARG', scoreH:1, scoreA:3, date:'28 Jun', venue:'BC Place' },
  { home:'DZA', away:'AUT', scoreH:3, scoreA:3, date:'28 Jun', venue:'Estadio Azteca' },
  { home:'RSA', away:'CAN', scoreH:0, scoreA:1, date:'29 Jun', venue:'BMO Field' },
];

const GROUPS = {
  A:[
    {t:'MEX',w:3,d:0,l:0,gf:7,ga:2,pts:9},
    {t:'RSA',w:1,d:1,l:1,gf:3,ga:4,pts:4},
    {t:'KOR',w:1,d:0,l:2,gf:3,ga:5,pts:3},
    {t:'CZE',w:0,d:1,l:2,gf:2,ga:4,pts:1},
  ],
  B:[
    {t:'SUI',w:2,d:1,l:0,gf:5,ga:2,pts:7},
    {t:'CAN',w:1,d:1,l:1,gf:3,ga:3,pts:4},
    {t:'BIH',w:1,d:1,l:1,gf:4,ga:4,pts:4},
    {t:'QAT',w:0,d:1,l:2,gf:1,ga:4,pts:1},
  ],
  C:[
    {t:'BRA',w:2,d:1,l:0,gf:6,ga:2,pts:7},
    {t:'MAR',w:2,d:1,l:0,gf:5,ga:2,pts:7},
    {t:'SCO',w:1,d:0,l:2,gf:3,ga:5,pts:3},
    {t:'HTI',w:0,d:0,l:3,gf:1,ga:6,pts:0},
  ],
  D:[
    {t:'USA',w:2,d:0,l:1,gf:5,ga:3,pts:6},
    {t:'AUS',w:1,d:1,l:1,gf:3,ga:3,pts:4},
    {t:'PAR',w:1,d:1,l:1,gf:3,ga:4,pts:4},
    {t:'TUR',w:1,d:0,l:2,gf:3,ga:4,pts:3},
  ],
  E:[
    {t:'GER',w:2,d:0,l:1,gf:7,ga:4,pts:6},
    {t:'CIV',w:2,d:0,l:1,gf:5,ga:3,pts:6},
    {t:'ECU',w:1,d:1,l:1,gf:4,ga:4,pts:4},
    {t:'CUW',w:0,d:1,l:2,gf:1,ga:6,pts:1},
  ],
  F:[
    {t:'NED',w:2,d:1,l:0,gf:6,ga:3,pts:7},
    {t:'JPN',w:1,d:2,l:0,gf:4,ga:3,pts:5},
    {t:'SWE',w:1,d:1,l:1,gf:4,ga:4,pts:4},
    {t:'TUN',w:0,d:0,l:3,gf:1,ga:5,pts:0},
  ],
  G:[
    {t:'BEL',w:1,d:2,l:0,gf:7,ga:4,pts:5},
    {t:'EGY',w:1,d:2,l:0,gf:3,ga:2,pts:5},
    {t:'IRN',w:0,d:3,l:0,gf:3,ga:3,pts:3},
    {t:'NZL',w:0,d:1,l:2,gf:2,ga:5,pts:1},
  ],
  H:[
    {t:'ESP',w:2,d:1,l:0,gf:8,ga:3,pts:7},
    {t:'CPV',w:0,d:3,l:0,gf:2,ga:2,pts:3},
    {t:'URU',w:0,d:2,l:1,gf:2,ga:4,pts:2},
    {t:'KSA',w:0,d:2,l:1,gf:2,ga:5,pts:2},
  ],
  I:[
    {t:'FRA',w:3,d:0,l:0,gf:9,ga:2,pts:9},
    {t:'NOR',w:2,d:0,l:1,gf:6,ga:4,pts:6},
    {t:'SEN',w:1,d:0,l:2,gf:4,ga:6,pts:3},
    {t:'IRQ',w:0,d:0,l:3,gf:1,ga:8,pts:0},
  ],
  J:[
    {t:'ARG',w:3,d:0,l:0,gf:8,ga:3,pts:9},
    {t:'AUT',w:1,d:1,l:1,gf:6,ga:6,pts:4},
    {t:'DZA',w:1,d:1,l:1,gf:5,ga:5,pts:4},
    {t:'JOR',w:0,d:0,l:3,gf:2,ga:7,pts:0},
  ],
  K:[
    {t:'COL',w:2,d:1,l:0,gf:5,ga:1,pts:7},
    {t:'POR',w:1,d:2,l:0,gf:5,ga:3,pts:5},
    {t:'COD',w:1,d:1,l:1,gf:5,ga:4,pts:4},
    {t:'UZB',w:0,d:0,l:3,gf:2,ga:9,pts:0},
  ],
  L:[
    {t:'ENG',w:2,d:1,l:0,gf:5,ga:2,pts:7},
    {t:'CRO',w:2,d:0,l:1,gf:5,ga:4,pts:6},
    {t:'GHA',w:1,d:1,l:1,gf:4,ga:4,pts:4},
    {t:'PAN',w:0,d:0,l:3,gf:1,ga:5,pts:0},
  ],
};

const FIXTURES = [
  {home:'BRA',away:'JPN',time:'29 Jun · 10:30 PM IST',probH:57,probA:18},
  {home:'GER',away:'PAR',time:'30 Jun · 2:00 AM IST', probH:71,probA:11},
  {home:'NED',away:'MAR',time:'30 Jun · 6:30 AM IST', probH:42,probA:28},
  {home:'CIV',away:'NOR',time:'30 Jun · 10:30 PM IST',probH:26,probA:47},
  {home:'FRA',away:'SWE',time:'1 Jul · 2:30 AM IST',  probH:77,probA:9},
  {home:'MEX',away:'ECU',time:'1 Jul · 6:30 AM IST',  probH:43,probA:25},
  {home:'ENG',away:'COD',time:'1 Jul · 9:30 PM IST',  probH:76,probA:8},
  {home:'BEL',away:'SEN',time:'2 Jul · 1:30 AM IST',  probH:44,probA:27},
  {home:'USA',away:'BIH',time:'2 Jul · 5:30 AM IST',  probH:72,probA:10},
  {home:'ESP',away:'AUT',time:'3 Jul · 12:30 AM IST', probH:74,probA:9},
];
// js/render.js — builds all DOM elements from data

// ── SCORE CARDS ──────────────────────────────────
function renderScores() {
  const grid = document.getElementById('scoresGrid');
  grid.innerHTML = '';

  SCORES.forEach((m, i) => {
    const homeName = NAMES[m.home] || m.home;
    const awayName = NAMES[m.away] || m.away;
    const homeFlag = FLAGS[m.home] || '🏳';
    const awayFlag = FLAGS[m.away] || '🏳';

    let result = 'Draw';
    if (m.scoreH > m.scoreA) result = homeName + ' Win';
    else if (m.scoreA > m.scoreH) result = awayName + ' Win';

    const wrap = document.createElement('div');
    wrap.className = 'card-flip';
    wrap.style.transitionDelay = `${i * 45}ms`;

    wrap.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front" title="Click to flip">
          <div class="card-status">${m.date} · Full Time</div>
          <div class="card-matchup">
            <div class="card-team">
              <span class="card-flag">${homeFlag}</span>
              <span class="card-abbr">${m.home}</span>
            </div>
            <div class="card-score">
              <span class="card-score__num">${m.scoreH}</span>
              <span class="card-score__sep">–</span>
              <span class="card-score__num">${m.scoreA}</span>
            </div>
            <div class="card-team">
              <span class="card-flag">${awayFlag}</span>
              <span class="card-abbr">${m.away}</span>
            </div>
          </div>
          <div class="card-tap-hint">Tap for details →</div>
        </div>
        <div class="card-face card-back">
          <div class="card-back__header">Match Details</div>
          <div class="card-back__score">${homeFlag} ${m.scoreH} – ${m.scoreA} ${awayFlag}</div>
          <div class="card-back__teams">${homeName} vs ${awayName}</div>
          <div class="card-back__footer">${m.venue} · ${m.date} · ${result}</div>
        </div>
      </div>
    `;

    // flip on click
    wrap.addEventListener('click', () => wrap.classList.toggle('flipped'));

    grid.appendChild(wrap);
  });
}

// ── GROUP TABS + TABLE ────────────────────────────
let activeGroup = 'A';

function renderGroupTabs() {
  const tabs = document.getElementById('groupTabs');
  tabs.innerHTML = '';

  Object.keys(GROUPS).forEach((letter, i) => {
    const btn = document.createElement('button');
    btn.className = 'group-tab' + (letter === activeGroup ? ' active' : '');
    btn.innerHTML = `<span>Group ${letter}</span>`;
    btn.style.transitionDelay = `${i * 30}ms`;

    btn.addEventListener('click', () => {
      if (letter === activeGroup) return;
      activeGroup = letter;
      document.querySelectorAll('.group-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      switchGroupPanel();
    });

    tabs.appendChild(btn);
  });
}

function switchGroupPanel() {
  const panel = document.getElementById('groupPanel');
  panel.classList.add('switching');
  setTimeout(() => {
    renderGroupPanel();
    panel.classList.remove('switching');
  }, 200);
}

function renderGroupPanel() {
  const panel = document.getElementById('groupPanel');
  const teams = GROUPS[activeGroup];

  const rows = teams.map((t, i) => `
    <tr class="${i < 2 ? 'qualifies' : ''}">
      <td>
        <div class="td-team">
          <span class="td-flag">${FLAGS[t.t] || '🏳'}</span>
          <span class="td-name">${NAMES[t.t] || t.t}</span>
        </div>
      </td>
      <td>${t.w}</td>
      <td>${t.d}</td>
      <td>${t.l}</td>
      <td>${t.gf}</td>
      <td>${t.ga}</td>
      <td class="td-pts">${t.pts}</td>
    </tr>
  `).join('');

  panel.innerHTML = `
    <table class="group-table">
      <thead>
        <tr>
          <th>Team</th>
          <th>W</th><th>D</th><th>L</th>
          <th>GF</th><th>GA</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

// ── FIXTURES ──────────────────────────────────────
function renderFixtures() {
  const list = document.getElementById('fixturesList');
  list.innerHTML = '';

  FIXTURES.forEach((f, i) => {
    const row = document.createElement('div');
    row.className = 'fixture-row';
    row.style.transitionDelay = `${i * 50}ms`;

    row.innerHTML = `
      <div class="fixture-team">
        <span class="fixture-flag">${FLAGS[f.home] || '🏳'}</span>
        <span class="fixture-name">${NAMES[f.home] || f.home}</span>
      </div>
      <div class="fixture-center">
        <span class="fixture-vs">vs</span>
        <span class="fixture-time">${f.time}</span>
        <div class="fixture-prob-bar">
          <div class="fixture-prob-fill" data-width="${f.probH}"></div>
        </div>
      </div>
      <div class="fixture-team fixture-team--away">
        <span class="fixture-flag">${FLAGS[f.away] || '🏳'}</span>
        <span class="fixture-name">${NAMES[f.away] || f.away}</span>
      </div>
    `;

    list.appendChild(row);
  });
}

// ── BOOT ─────────────────────────────────────────
renderScores();
renderGroupTabs();
renderGroupPanel();
renderFixtures();
// js/parallax.js — mouse-driven parallax on hero layers

(function () {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const layers = hero.querySelectorAll('.parallax-layer');
  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;
  let rafId = null;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    curX = lerp(curX, mouseX, 0.06);
    curY = lerp(curY, mouseY, 0.06);

    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth) || 0;
      const moveX = curX * depth * 28;
      const moveY = curY * depth * 18;
      layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    rafId = requestAnimationFrame(tick);
  }

  function onMouseMove(e) {
    const rect = hero.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    mouseY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
  }

  function start() {
    hero.addEventListener('mousemove', onMouseMove);
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  function stop() {
    hero.removeEventListener('mousemove', onMouseMove);
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    // spring back to zero
    mouseX = 0; mouseY = 0;
  }

  // Only run when hero is active
  const observer = new MutationObserver(() => {
    if (hero.classList.contains('active')) start();
    else stop();
  });
  observer.observe(hero, { attributes: true, attributeFilter: ['class'] });

  // Start if already active
  if (hero.classList.contains('active')) start();
})();
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
    const sec = document.getElementById(ORDER[current]);
    // 2px tolerance for sub-pixel rendering differences
    const atBottom = Math.ceil(sec.scrollTop + sec.clientHeight) >= sec.scrollHeight - 2;
    const atTop    = sec.scrollTop <= 2;

    // Hero has no internal scroll at all — always treat as both top & bottom
    const heroLike = sec.scrollHeight <= sec.clientHeight + 2;

    if (e.deltaY > 15 && (atBottom || heroLike)) {
      if (wheelTimer || animating) return;
      if (current < ORDER.length - 1) {
        e.preventDefault();
        goTo(current + 1);
        wheelTimer = setTimeout(() => { wheelTimer = null; }, 900);
      }
    }
    if (e.deltaY < -15 && (atTop || heroLike)) {
      if (wheelTimer || animating) return;
      if (current > 0) {
        e.preventDefault();
        goTo(current - 1);
        wheelTimer = setTimeout(() => { wheelTimer = null; }, 900);
      }
    }
  }, { passive: false });

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
