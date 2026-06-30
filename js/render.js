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
