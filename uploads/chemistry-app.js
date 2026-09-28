/* ============ STATE ============ */
const state = {
  you: null,            // archetype key
  member: null,         // member id
  navOpen: false
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ============ NAV ============ */
function showNavSelector(show) {
  $('#nav-selector').hidden = !show;
}

function setNavPill(you) {
  const a = ARCHETYPES[you];
  const pill = $('#nav-selector-pill');
  pill.className = 'nav-selector-pill ' + a.code;
  pill.textContent = a.name;
}

function renderNavMenu() {
  const menu = $('#nav-selector-menu');
  menu.innerHTML = KEYS.map(k => {
    const a = ARCHETYPES[k];
    const isCurrent = state.you === k;
    return `
      <button class="nav-selector-item ${isCurrent ? 'current' : ''}" data-key="${k}" role="option" aria-selected="${isCurrent}">
        <div class="avatar avatar-sm ${a.code}">${a.name[0]}</div>
        <div>
          <div class="nav-selector-item-name">${a.name}</div>
          <div class="nav-selector-item-tag">${a.tagline}</div>
        </div>
        <span class="nav-selector-item-check">✓</span>
      </button>`;
  }).join('');
  menu.querySelectorAll('.nav-selector-item').forEach(el => {
    el.addEventListener('click', () => {
      const k = el.dataset.key;
      if (k !== state.you) {
        state.you = k;
        setNavPill(k);
        renderNavMenu();
        // If currently on profile, re-render to reflect new YOU
        if ($('#screen-4').classList.contains('active')) {
          renderProfile();
        }
      }
      closeNav();
    });
  });
}

function openNav() {
  state.navOpen = true;
  $('#nav-selector').classList.add('open');
  $('#nav-selector-trigger').setAttribute('aria-expanded', 'true');
}
function closeNav() {
  state.navOpen = false;
  $('#nav-selector').classList.remove('open');
  $('#nav-selector-trigger').setAttribute('aria-expanded', 'false');
}
function toggleNav() { state.navOpen ? closeNav() : openNav(); }

$('#nav-selector-trigger').addEventListener('click', (e) => {
  e.stopPropagation();
  toggleNav();
});
document.addEventListener('click', (e) => {
  if (state.navOpen && !e.target.closest('#nav-selector')) closeNav();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.navOpen) closeNav();
});

/* ============ NAVIGATION ============ */
function goToScreen(n) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $('#screen-' + n).classList.add('active');
  showNavSelector(!!state.you && n !== 1);
  if (n === 3) renderTeam();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.goToScreen = goToScreen;

/* Wire hero cards */
$$('.hero-card').forEach(card => {
  card.addEventListener('click', () => {
    state.you = card.dataset.archetype;
    setNavPill(state.you);
    renderNavMenu();
    showNavSelector(true);
    goToScreen(3);
  });
});

/* ============ TEAM ============ */
function renderTeam() {
  const list = $('#team-list');
  list.innerHTML = TEAM.map(m => {
    const a = ARCHETYPES[m.archetype];
    return `
      <button class="team-row" data-member="${m.id}">
        <div class="avatar avatar-sm ${a.code}">${m.initials}</div>
        <div class="team-info">
          <div class="team-name">${m.name}</div>
          <div class="team-meta">${a.name} · ${a.tagline.toLowerCase()}</div>
        </div>
        <div class="team-arrow">→</div>
      </button>`;
  }).join('');
  list.querySelectorAll('.team-row').forEach(row => {
    row.addEventListener('click', () => {
      state.member = row.dataset.member;
      renderProfile();
      goToScreen(4);
    });
  });
}

/* ============ PROFILE ============ */
/* Helper: jitter base scores by member seed for personalization */
function getScores(member) {
  const base = BASE_SCORES[member.archetype];
  const seed = member.varSeed || 0;
  const out = {};
  KEYS.forEach((k, i) => {
    // deterministic small jitter -5..+5
    const j = ((seed * 7 + i * 13) % 11) - 5;
    out[k] = Math.max(15, Math.min(85, base[k] + j));
  });
  return out;
}

/* Bar of glossy dots — 10 dots, filled proportionally */
function renderBars(scores, primaryKey) {
  // Order: primary first, then the rest in descending score
  const order = [primaryKey, ...KEYS.filter(k => k !== primaryKey).sort((a,b) => scores[b] - scores[a])];
  return order.map(k => {
    const a = ARCHETYPES[k];
    const pct = scores[k];
    const filled = Math.round((pct / 100) * 10);
    let dots = '';
    for (let i = 0; i < 10; i++) {
      dots += `<span class="bar-dot ${i < filled ? a.code : 'dim'}"></span>`;
    }
    return `
      <div class="bar-label">${a.name}</div>
      <div class="bar-track">${dots}</div>
      <div class="bar-pct">${pct}%</div>`;
  }).join('');
}

function renderProfile() {
  const member = TEAM.find(m => m.id === state.member);
  if (!member) return;
  const you = state.you;
  const them = member.archetype;
  const youData = ARCHETYPES[you];
  const themData = ARCHETYPES[them];

  $('#profile-eyebrow').textContent = `Step 03 · How ${member.first} reads to you`;

  const scores = getScores(member);

  const voice = VOICE[them];
  const voiceSections = voice.sections.slice();
  voiceSections.push({
    title: voice.pairTitle,
    body: voice.pairBody[you]
  });

  const engageItems = ENGAGE[you][them];
  const loseItems = LOSE[you][them];
  const build = BUILD[you][them];

  const html = `
    <div class="profile-grid">

      <!-- LEFT: Bio + bars + voice -->
      <div class="profile-panel profile-bio">
        <div class="profile-bio-head">
          <div class="avatar avatar-md ${themData.code}">${member.initials}</div>
          <div>
            <div class="profile-bio-name">${member.first}<span class="sep">·</span>${themData.name}</div>
            <div class="profile-bio-tagline">${themData.tagline.toLowerCase()}</div>
          </div>
        </div>

        <div class="bars">
          ${renderBars(scores, them)}
        </div>

        ${voiceSections.map(s => `
          <div class="voice-section">
            <div class="voice-title">${s.title}</div>
            <div class="voice-body">${s.body}</div>
          </div>`).join('')}
      </div>

      <!-- MIDDLE: How to Engage -->
      <div class="profile-panel profile-engage">
        <div class="tip-panel-title">How to engage ${member.first}</div>
        ${engageItems.map(t => `
          <div class="tip-item">
            <div class="tip-head">
              <div class="tip-icon do">✓</div>
              <div class="tip-title">${t.title}</div>
            </div>
            <div class="tip-body">${t.body}</div>
          </div>`).join('')}
      </div>

      <!-- RIGHT: How to Lose -->
      <div class="profile-panel profile-lose">
        <div class="tip-panel-title">How to lose ${member.first}</div>
        ${loseItems.map(t => `
          <div class="tip-item">
            <div class="tip-head">
              <div class="tip-icon dont">✕</div>
              <div class="tip-title">${t.title}</div>
            </div>
            <div class="tip-body">${t.body}</div>
          </div>`).join('')}
      </div>

      <!-- BOTTOM RIGHT: Build their-skills-as-you band -->
      <div class="profile-panel build-panel">
      <div class="build-grid">
        <div class="build-title">Build ${themData.name} skills as a ${youData.name}</div>

        <div class="build-strengths">
          <div class="build-strength-row">
            <span class="build-dot dot-you-${youData.code}"></span>
            <div>
              <div class="build-strength-title">${build.yourStrength.title}</div>
              <div class="build-strength-body">${build.yourStrength.body}</div>
            </div>
          </div>
          <div class="build-strength-row">
            <span class="build-dot dot-you-${youData.code}"></span>
            <div>
              <div class="build-strength-title">${build.theirStrength.title}</div>
              <div class="build-strength-body">${build.theirStrength.body}</div>
            </div>
          </div>
        </div>

        <div class="build-connector">
          <svg width="100%" height="100%" viewBox="0 0 240 160" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="connGrad-${youData.code}-${themData.code}" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="var(--${youData.code})" stop-opacity="0.6"/>
                <stop offset="100%" stop-color="var(--${themData.code})" stop-opacity="0.6"/>
              </linearGradient>
            </defs>
            <path d="M 0 38 C 80 38, 80 80, 220 80" fill="none" stroke="url(#connGrad-${youData.code}-${themData.code})" stroke-width="1.2"/>
            <path d="M 0 122 C 80 122, 80 80, 220 80" fill="none" stroke="url(#connGrad-${youData.code}-${themData.code})" stroke-width="1.2"/>
          </svg>
        </div>

        <div class="build-result">
          <div class="build-strength-row">
            <span class="build-dot dot-them-${themData.code}"></span>
            <div>
              <div class="build-result-title">${build.result.title}</div>
              <div class="build-result-body">${build.result.body}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  `;

  // Inject color overrides for the build dots (you vs them)
  $('#profile-content').innerHTML = html;

  // Apply dot tints
  document.querySelectorAll(`.dot-you-${youData.code}`).forEach(el => {
    el.style.background = `radial-gradient(circle at 30% 25%, var(--${youData.code}-hi) 0%, var(--${youData.code}) 55%, var(--${youData.code}-lo) 100%)`;
  });
  document.querySelectorAll(`.dot-them-${themData.code}`).forEach(el => {
    el.style.background = `radial-gradient(circle at 30% 25%, var(--${themData.code}-hi) 0%, var(--${themData.code}) 55%, var(--${themData.code}-lo) 100%)`;
  });
}

/* ============ INIT ============ */
$('#team-count').textContent = TEAM.length + ' members';
