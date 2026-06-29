/* js/render.js — DOM builders for each section */

/* ── Scores ─────────────────────────────────────── */
function renderScores() {
  const grid = document.getElementById('scoresGrid');
  grid.innerHTML = '';

  SCORES.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.style.transitionDelay = `${i * 50}ms`;

    card.innerHTML = `
      <div class="match-card__status">${m.date} &middot; Full Time</div>
      <div class="match-card__teams">
        <div class="match-card__team">
          <span class="match-card__flag">${FLAGS[m.home] || '🏳'}</span>
          <span class="match-card__abbr">${m.home}</span>
        </div>
        <div class="match-card__scoreline">
          <span class="match-card__score">${m.scoreH}</span>
          <span class="match-card__sep">–</span>
          <span class="match-card__score">${m.scoreA}</span>
        </div>
        <div class="match-card__team">
          <span class="match-card__flag">${FLAGS[m.away] || '🏳'}</span>
          <span class="match-card__abbr">${m.away}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── Groups ──────────────────────────────────────── */
let activeGroup = 'A';

function renderGroupTabs() {
  const tabs = document.getElementById('groupTabs');
  tabs.innerHTML = '';

  Object.keys(GROUPS).forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'group-tab' + (letter === activeGroup ? ' active' : '');
    btn.textContent = letter;
    btn.addEventListener('click', () => {
      activeGroup = letter;
      document.querySelectorAll('.group-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderGroupPanel();
    });
    tabs.appendChild(btn);
  });
}

function renderGroupPanel() {
  const panel = document.getElementById('groupPanel');
  const teams = GROUPS[activeGroup];

  const wrap = document.createElement('div');
  wrap.className = 'group-table-wrap';

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

  wrap.innerHTML = `
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

  panel.innerHTML = '';
  panel.appendChild(wrap);
}

/* ── Fixtures ────────────────────────────────────── */
function renderFixtures() {
  const list = document.getElementById('fixturesList');
  list.innerHTML = '';

  FIXTURES.forEach((f, i) => {
    const row = document.createElement('div');
    row.className = 'fixture-row';
    row.style.transitionDelay = `${i * 40}ms`;

    const homeWidth = Math.round(f.probH);

    row.innerHTML = `
      <div class="fixture-team">
        <span class="fixture-flag">${FLAGS[f.home] || '🏳'}</span>
        <span class="fixture-name">${NAMES[f.home] || f.home}</span>
      </div>
      <div class="fixture-center">
        <span class="fixture-vs">vs</span>
        <span class="fixture-time">${f.time}</span>
        <div class="fixture-prob">
          <div class="fixture-prob__home" style="width:${homeWidth}%"></div>
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

/* ── Boot ────────────────────────────────────────── */
renderScores();
renderGroupTabs();
renderGroupPanel();
renderFixtures();

