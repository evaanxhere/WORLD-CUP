// ════════════════════════════════════════════════
// FIFA World Cup 2026 — app.js
// Tries live data from TheSportsDB free API first.
// Falls back to bundled data below if API is empty/unreachable.
// ════════════════════════════════════════════════

const FLAGS = {
  Mexico:'🇲🇽','South Africa':'🇿🇦','Korea Republic':'🇰🇷',Czechia:'🇨🇿',Switzerland:'🇨🇭',
  Canada:'🇨🇦','Bosnia and Herzegovina':'🇧🇦',Qatar:'🇶🇦',Brazil:'🇧🇷',Morocco:'🇲🇦',
  Scotland:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',Haiti:'🇭🇹',USA:'🇺🇸',Australia:'🇦🇺',Paraguay:'🇵🇾',Türkiye:'🇹🇷',Turkey:'🇹🇷',
  Germany:'🇩🇪','Ivory Coast':'🇨🇮',Ecuador:'🇪🇨',Curaçao:'🇨🇼',Netherlands:'🇳🇱',Japan:'🇯🇵',
  Sweden:'🇸🇪',Tunisia:'🇹🇳',Belgium:'🇧🇪',Egypt:'🇪🇬','IR Iran':'🇮🇷',Iran:'🇮🇷','New Zealand':'🇳🇿',
  Spain:'🇪🇸','Cape Verde':'🇨🇻',Uruguay:'🇺🇾','Saudi Arabia':'🇸🇦',France:'🇫🇷',Norway:'🇳🇴',
  Senegal:'🇸🇳',Iraq:'🇮🇶',Argentina:'🇦🇷',Austria:'🇦🇹',Algeria:'🇩🇿',Jordan:'🇯🇴',Colombia:'🇨🇴',
  Portugal:'🇵🇹','Congo DR':'🇨🇩',Uzbekistan:'🇺🇿',England:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',Croatia:'🇭🇷',Ghana:'🇬🇭',Panama:'🇵🇦'
};
function flagFor(name){ return FLAGS[name] || '🏳'; }
function abbr(name){ return (name || '').slice(0,3).toUpperCase(); }

// ── FALLBACK DATA (used only if live API fails) ──
const FALLBACK_RECENT = [
  { home:'CPV', away:'KSA', sH:0, sA:0, date:'27 Jun' },
  { home:'NZL', away:'BEL', sH:1, sA:5, date:'27 Jun' },
  { home:'EGY', away:'IRN', sH:1, sA:1, date:'27 Jun' },
  { home:'PAN', away:'ENG', sH:0, sA:2, date:'28 Jun' },
  { home:'CRO', away:'GHA', sH:2, sA:1, date:'28 Jun' },
  { home:'COL', away:'POR', sH:0, sA:0, date:'28 Jun' },
  { home:'COD', away:'UZB', sH:3, sA:1, date:'28 Jun' },
  { home:'JOR', away:'ARG', sH:1, sA:3, date:'28 Jun' },
  { home:'DZA', away:'AUT', sH:3, sA:3, date:'28 Jun' },
  { home:'RSA', away:'CAN', sH:0, sA:1, date:'29 Jun' },
];

const FIXTURES = [
  { home:'Brazil', away:'Japan', time:'29 Jun · 10:30 PM IST' },
  { home:'Germany', away:'Paraguay', time:'30 Jun · 2:00 AM IST' },
  { home:'Netherlands', away:'Morocco', time:'30 Jun · 6:30 AM IST' },
  { home:'Ivory Coast', away:'Norway', time:'30 Jun · 10:30 PM IST' },
  { home:'France', away:'Sweden', time:'1 Jul · 2:30 AM IST' },
  { home:'Mexico', away:'Ecuador', time:'1 Jul · 6:30 AM IST' },
  { home:'England', away:'Congo DR', time:'1 Jul · 9:30 PM IST' },
  { home:'Belgium', away:'Senegal', time:'2 Jul · 1:30 AM IST' },
  { home:'USA', away:'Bosnia and Herzegovina', time:'2 Jul · 5:30 AM IST' },
  { home:'Spain', away:'Austria', time:'3 Jul · 12:30 AM IST' },
];

// Groups — manually updated, clearly labeled in UI
const GROUPS = {
  A:[{t:'Mexico',w:3,d:0,l:0,pts:9},{t:'South Africa',w:1,d:1,l:1,pts:4},{t:'Korea Republic',w:1,d:0,l:2,pts:3},{t:'Czechia',w:0,d:1,l:2,pts:1}],
  B:[{t:'Switzerland',w:2,d:1,l:0,pts:7},{t:'Canada',w:1,d:1,l:1,pts:4},{t:'Bosnia and Herzegovina',w:1,d:1,l:1,pts:4},{t:'Qatar',w:0,d:1,l:2,pts:1}],
  C:[{t:'Brazil',w:2,d:1,l:0,pts:7},{t:'Morocco',w:2,d:1,l:0,pts:7},{t:'Scotland',w:1,d:0,l:2,pts:3},{t:'Haiti',w:0,d:0,l:3,pts:0}],
  D:[{t:'USA',w:2,d:0,l:1,pts:6},{t:'Australia',w:1,d:1,l:1,pts:4},{t:'Paraguay',w:1,d:1,l:1,pts:4},{t:'Türkiye',w:1,d:0,l:2,pts:3}],
  E:[{t:'Germany',w:2,d:0,l:1,pts:6},{t:'Ivory Coast',w:2,d:0,l:1,pts:6},{t:'Ecuador',w:1,d:1,l:1,pts:4},{t:'Curaçao',w:0,d:1,l:2,pts:1}],
  F:[{t:'Netherlands',w:2,d:1,l:0,pts:7},{t:'Japan',w:1,d:2,l:0,pts:5},{t:'Sweden',w:1,d:1,l:1,pts:4},{t:'Tunisia',w:0,d:0,l:3,pts:0}],
  G:[{t:'Belgium',w:1,d:2,l:0,pts:5},{t:'Egypt',w:1,d:2,l:0,pts:5},{t:'IR Iran',w:0,d:3,l:0,pts:3},{t:'New Zealand',w:0,d:1,l:2,pts:1}],
  H:[{t:'Spain',w:2,d:1,l:0,pts:7},{t:'Cape Verde',w:0,d:3,l:0,pts:3},{t:'Uruguay',w:0,d:2,l:1,pts:2},{t:'Saudi Arabia',w:0,d:2,l:1,pts:2}],
  I:[{t:'France',w:3,d:0,l:0,pts:9},{t:'Norway',w:2,d:0,l:1,pts:6},{t:'Senegal',w:1,d:0,l:2,pts:3},{t:'Iraq',w:0,d:0,l:3,pts:0}],
  J:[{t:'Argentina',w:3,d:0,l:0,pts:9},{t:'Austria',w:1,d:1,l:1,pts:4},{t:'Algeria',w:1,d:1,l:1,pts:4},{t:'Jordan',w:0,d:0,l:3,pts:0}],
  K:[{t:'Colombia',w:2,d:1,l:0,pts:7},{t:'Portugal',w:1,d:2,l:0,pts:5},{t:'Congo DR',w:1,d:1,l:1,pts:4},{t:'Uzbekistan',w:0,d:0,l:3,pts:0}],
  L:[{t:'England',w:2,d:1,l:0,pts:7},{t:'Croatia',w:2,d:0,l:1,pts:6},{t:'Ghana',w:1,d:1,l:1,pts:4},{t:'Panama',w:0,d:0,l:3,pts:0}],
};

// ── LIVE FETCH ──
const API_KEY = '123'; // TheSportsDB free public key
const SOCCER_SPORT = 'Soccer';

function fmtDate(d) {
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
}

async function fetchDay(dateStr) {
  const url = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsday.php?d=${dateStr}&s=${SOCCER_SPORT}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return data.events || [];
  } catch (e) {
    return [];
  }
}

function isWorldCupEvent(ev) {
  const league = (ev.strLeague || '').toLowerCase();
  return league.includes('world cup');
}

async function fetchRecentScores() {
  const today = new Date();
  const days = [];
  for (let i = 0; i < 4; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split('T')[0]);
  }

  const results = await Promise.all(days.map(fetchDay));
  const allEvents = results.flat();
  const wcEvents = allEvents.filter(isWorldCupEvent);

  return wcEvents
    .filter(ev => ev.intHomeScore !== null && ev.intHomeScore !== undefined)
    .map(ev => ({
      home: ev.strHomeTeam,
      away: ev.strAwayTeam,
      sH: ev.intHomeScore,
      sA: ev.intAwayScore,
      date: fmtDate(new Date(ev.dateEvent)),
      status: ev.strStatus || 'Match Finished',
      live: ev.strStatus && !['Match Finished','FT','NS'].includes(ev.strStatus),
    }))
    .slice(0, 10);
}

// ── RENDER: LIVE CARDS ──
function renderLiveCards(matches, isLive) {
  const grid = document.getElementById('liveCards');
  const sub = document.getElementById('liveSub');
  grid.innerHTML = '';

  sub.textContent = isLive
    ? `Live data · ${matches.length} recent match${matches.length === 1 ? '' : 'es'}`
    : `Showing recent results (offline data)`;

  matches.forEach((m, i) => {
    const homeName = m.home, awayName = m.away;
    const card = document.createElement('div');
    card.className = 'mcard';
    card.style.transitionDelay = `${i * 40}ms`;

    const statusClass = m.live ? 'live-now' : '';
    const statusLabel = m.live ? (m.status || 'LIVE') : (m.status || 'Full Time');

    card.innerHTML = `
      <div class="mcard__status ${statusClass}">
        <span class="pip"></span>
        ${m.date} · ${statusLabel}
      </div>
      <div class="mcard__row">
        <div class="mcard__team">
          <span class="mcard__flag">${flagFor(homeName)}</span>
          <span class="mcard__abbr">${isLive ? abbr(homeName) : homeName}</span>
        </div>
        <div class="mcard__score">
          <span class="mcard__num">${m.sH}</span>
          <span class="mcard__sep">–</span>
          <span class="mcard__num">${m.sA}</span>
        </div>
        <div class="mcard__team">
          <span class="mcard__flag">${flagFor(awayName)}</span>
          <span class="mcard__abbr">${isLive ? abbr(awayName) : awayName}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
    requestAnimationFrame(() => setTimeout(() => card.classList.add('in'), 20));
  });

  if (matches.length === 0) {
    grid.innerHTML = `<p style="font-family:var(--f-mono);font-size:12px;color:var(--ink-3);padding:20px 0;">No recent matches found.</p>`;
  }
}

// ── RENDER: FIXTURES ──
function renderFixtures() {
  const list = document.getElementById('fixturesList');
  list.innerHTML = '';
  FIXTURES.forEach((f, i) => {
    const row = document.createElement('div');
    row.className = 'frow';
    row.style.transitionDelay = `${i * 40}ms`;
    row.innerHTML = `
      <div class="frow__team">
        <span class="frow__flag">${flagFor(f.home)}</span>
        <span class="frow__name">${f.home}</span>
      </div>
      <div class="frow__center">
        <span class="frow__vs">vs</span>
        <span class="frow__time">${f.time}</span>
      </div>
      <div class="frow__team frow__team--away">
        <span class="frow__flag">${flagFor(f.away)}</span>
        <span class="frow__name">${f.away}</span>
      </div>
    `;
    list.appendChild(row);
    requestAnimationFrame(() => setTimeout(() => row.classList.add('in'), 20));
  });
}

// ── RENDER: GROUPS ──
let activeGroup = 'A';

function renderGroupTabs() {
  const tabs = document.getElementById('groupTabs');
  tabs.innerHTML = '';
  Object.keys(GROUPS).forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'gtab' + (letter === activeGroup ? ' active' : '');
    btn.textContent = letter;
    btn.addEventListener('click', () => {
      activeGroup = letter;
      document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderGroupPanel();
    });
    tabs.appendChild(btn);
  });
}

function renderGroupPanel() {
  const panel = document.getElementById('groupPanel');
  const teams = GROUPS[activeGroup];
  const rows = teams.map((t, i) => `
    <tr class="${i < 2 ? 'qual' : ''}">
      <td><div class="gt-team"><span class="gt-flag">${flagFor(t.t)}</span><span class="gt-name">${t.t}</span></div></td>
      <td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
      <td class="gt-pts">${t.pts}</td>
    </tr>
  `).join('');
  panel.innerHTML = `
    <table class="gtable">
      <thead><tr><th>Team</th><th>W</th><th>D</th><th>L</th><th>Pts</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

// ── BOOT ──
async function boot() {
  renderFixtures();
  renderGroupTabs();
  renderGroupPanel();

  const pip = document.getElementById('statusPip');
  const statusText = document.getElementById('statusText');

  try {
    const live = await fetchRecentScores();
    if (live.length > 0) {
      pip.classList.add('live');
      statusText.textContent = 'Live data connected';
      renderLiveCards(live, true);
    } else {
      throw new Error('No World Cup events returned');
    }
  } catch (e) {
    pip.classList.add('offline');
    statusText.textContent = 'Offline — showing cached data';
    renderLiveCards(FALLBACK_RECENT, false);
  }
}

boot();
