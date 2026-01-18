// STATE
let selectedEvidences = [];
let excludedEvidences = [];
let currentMode = 3; // 3, 2, 1 (Evidence Count)
let currentLang = 'en'; // 'en' or 'pl'

// DOM ELEMENTS
const evidenceGrid = document.getElementById('evidence-grid');
const ghostGrid = document.getElementById('ghost-grid');
const resetBtn = document.getElementById('reset-btn');
const ghostCountSpan = document.getElementById('ghost-count');
const modeSelect = document.getElementById('mode-select');
const langBtns = document.querySelectorAll('.lang-btn');

// INIT
document.addEventListener('DOMContentLoaded', () => {
    console.log("App Initializing...");
    initLanguage();
    initEvidenceButtons();
    initGhostList();
    initTabs();
    initCursedItems();

    // Listeners
    resetBtn.addEventListener('click', resetAll);
    modeSelect.addEventListener('change', (e) => {
        currentMode = parseInt(e.target.value);
        checkGhostMatch(); // Re-check to update filtering
    });
});

/* --- LANGUAGE & LOCALIZATION --- */
function initLanguage() {
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Updated active class
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Set Lang
            currentLang = btn.getAttribute('data-lang');
            updateLanguage();
        });
    });
    updateLanguage();
}

function updateLanguage() {
    if (typeof TRANSLATIONS === 'undefined') {
        console.error("TRANSLATIONS object missing!");
        return;
    }
    const t = TRANSLATIONS[currentLang];

    // 1. Update Static Text (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // 2. Update Evidence Buttons
    initEvidenceButtons(); // Re-render to update names

    // 3. Update Ghost List (Descriptions)
    initGhostList();
    checkGhostMatch(); // Restore filtering state

    // 4. Update Cursed Items
    initCursedItems();

    // 5. Update Timers Headers (Manual update since they are inside timer-card)
    updateTimerHeaders();
}

function updateTimerHeaders() {
    if (typeof TRANSLATIONS === 'undefined') return;
    const t = TRANSLATIONS[currentLang];

    const timerCards = document.querySelectorAll('.timer-card');
    if (timerCards.length >= 5) {
        timerCards[0].querySelector('h3').textContent = t.timer_smudge_normal;
        timerCards[1].querySelector('h3').textContent = t.timer_smudge_spirit;
        timerCards[2].querySelector('h3').textContent = t.timer_smudge_demon;
        timerCards[3].querySelector('h3').textContent = t.timer_hunt_cooldown;
        timerCards[4].querySelector('h3').textContent = t.timer_demon_cooldown;

        document.querySelectorAll('.btn-timer.start').forEach(b => b.textContent = t.btn_start);
        document.querySelectorAll('.btn-timer.reset').forEach(b => b.textContent = t.btn_reset);
    }
}


/* --- TABS --- */
function initTabs() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.tab-content');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Set active
            btn.classList.add('active');
            const tabId = `tab-${btn.dataset.tab}`;
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/* --- EVIDENCE LOGIC --- */
function initEvidenceButtons() {
    evidenceGrid.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    EVIDENCES.forEach(ev => {
        const btn = document.createElement('div');
        btn.className = 'btn-evidence';
        btn.textContent = t[ev] || ev; // Translate or fallback
        btn.dataset.ev = ev; // Keep internal ID

        // Restore State
        if (selectedEvidences.includes(ev)) btn.classList.add('selected');
        if (excludedEvidences.includes(ev)) btn.classList.add('excluded');

        // Click (Left = Select)
        btn.addEventListener('click', () => toggleSelection(ev, btn));

        // Right Click (Exclude)
        btn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            toggleExclusion(ev, btn);
        });

        evidenceGrid.appendChild(btn);
    });
}

function toggleSelection(ev, btn) {
    if (excludedEvidences.includes(ev)) {
        excludedEvidences = excludedEvidences.filter(e => e !== ev);
        btn.classList.remove('excluded');
    }

    if (selectedEvidences.includes(ev)) {
        selectedEvidences = selectedEvidences.filter(e => e !== ev);
        btn.classList.remove('selected');
    } else {
        selectedEvidences.push(ev);
        btn.classList.add('selected');
    }
    checkGhostMatch();
}

function toggleExclusion(ev, btn) {
    if (selectedEvidences.includes(ev)) {
        selectedEvidences = selectedEvidences.filter(e => e !== ev);
        btn.classList.remove('selected');
    }

    if (excludedEvidences.includes(ev)) {
        excludedEvidences = excludedEvidences.filter(e => e !== ev);
        btn.classList.remove('excluded');
    } else {
        excludedEvidences.push(ev);
        btn.classList.add('excluded');
    }
    checkGhostMatch();
}

/* --- GHOST LOGIC --- */
function initGhostList() {
    ghostGrid.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    GHOSTS.forEach(ghost => {
        const card = document.createElement('div');
        card.className = 'ghost-card';
        card.dataset.name = ghost.name; // For filtering

        // localized fields
        const shortDescText = ghost.shortDesc[currentLang];
        // stats can be valid text or objects. If simple string, display. If obj, pick lang
        const speedText = (typeof ghost.speed === 'object') ? ghost.speed[currentLang] : ghost.speed;
        const sanityText = (typeof ghost.huntSanity === 'object') ? ghost.huntSanity[currentLang] : ghost.huntSanity;

        // EVIDENCE BADGES (Translate codes)
        const evIcons = document.createElement('div');
        evIcons.className = 'ev-icons';
        ghost.evidences.forEach(ev => {
            const badge = document.createElement('span');
            badge.className = 'ev-badge';
            badge.textContent = t[`code_${ev}`] || ev.substring(0, 3);
            evIcons.appendChild(badge);
        });

        const header = document.createElement('div');
        header.className = 'card-header';

        const titleRow = document.createElement('div');
        titleRow.className = 'title-row';
        const title = document.createElement('h3');
        title.textContent = ghost.name;

        titleRow.appendChild(title);
        titleRow.appendChild(evIcons);
        header.appendChild(titleRow);

        // STATS ROW
        const statsRow = document.createElement('div');
        statsRow.className = 'stats-row';

        // Sanity
        const sanityStat = document.createElement('div');
        sanityStat.className = 'stat-item';
        sanityStat.innerHTML = `
            <span class="stat-icon" title="${t.sanity_threshold}">🧠</span>
            <span class="stat-value">${sanityText}</span>
        `;

        // Speed
        const speedStat = document.createElement('div');
        speedStat.className = 'stat-item';
        speedStat.innerHTML = `
            <span class="stat-icon" title="${t.ghost_speed}">👞</span>
            <span class="stat-value">${speedText}</span>
        `;

        statsRow.appendChild(sanityStat);
        statsRow.appendChild(speedStat);
        header.appendChild(statsRow);

        // Short Description
        const shortDesc = document.createElement('p');
        shortDesc.className = 'ghost-short-desc';
        shortDesc.textContent = shortDescText;
        header.appendChild(shortDesc);

        // Long Description (Accordion)
        const longDescContainer = document.createElement('div');
        longDescContainer.className = 'long-desc-container';
        longDescContainer.innerHTML = ghost.longDesc[currentLang]; // Inject HTML

        const readMoreBtn = document.createElement('button');
        readMoreBtn.className = 'read-more-btn';
        readMoreBtn.textContent = t.read_more;
        readMoreBtn.onclick = () => {
            const isOpen = longDescContainer.classList.toggle('open');
            readMoreBtn.textContent = isOpen ? t.show_less : t.read_more;
        };

        card.appendChild(header);
        card.appendChild(readMoreBtn);
        card.appendChild(longDescContainer);

        // Right Click Manual Exclusion Listener
        card.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            card.classList.toggle('manually-excluded');
        });

        ghostGrid.appendChild(card);
    });
}

function checkGhostMatch() {
    let possibleCount = 0;
    const ghostCards = document.querySelectorAll('.ghost-card');

    ghostCards.forEach(card => {
        const ghostName = card.dataset.name;
        const ghost = GHOSTS.find(g => g.name === ghostName);

        let possible = true;

        // 1. Must have ALL selected evidences
        for (let ev of selectedEvidences) {
            if (!ghost.evidences.includes(ev)) {
                possible = false;
                break;
            }
        }

        // 2. Must NOT have ANY excluded evidences
        if (possible) {
            for (let ev of excludedEvidences) {
                if (ghost.evidences.includes(ev)) {
                    possible = false;
                    break;
                }
            }
        }

        // 3. Difficulty Mode Logic (Nightmare/Insanity)
        // If possible so far, check if we violated "Guaranteed Evidence" logic
        // 3. Difficulty Mode Logic (Nightmare/Insanity)
        if (possible && currentMode < 3) {
            // Rule A: Max Visible Evidence Count
            // Standard ghosts can only show 'currentMode' amount of evidences.
            // The Mimic can show 'currentMode' + 1 (Fake Orb).
            const isMimic = (ghost.name === 'The Mimic');
            const maxVisible = isMimic ? (currentMode + 1) : currentMode;

            if (selectedEvidences.length > maxVisible) {
                possible = false;
            }

            // Rule B: Guaranteed Evidence (if not already ruled out)
            if (possible && ghost.guaranteed) {
                const realEvidencesSelected = selectedEvidences.filter(e => e !== 'Ghost Orb').length;
                if (realEvidencesSelected >= currentMode) {
                    const hasGuaranteed = selectedEvidences.includes(ghost.guaranteed);
                    if (!hasGuaranteed) {
                        possible = false;
                    }
                }
            }
        }

        if (possible) {
            card.classList.remove('hidden');
            possibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    ghostCountSpan.textContent = possibleCount;

    // SMART EVIDENCE FILTERING
    updatePossibleEvidences(ghostCards);
}

function updatePossibleEvidences(ghostCards) {
    // 1. Collect all possible evidences from currently visible ghosts
    const possibleEvidences = new Set();

    ghostCards.forEach(card => {
        if (!card.classList.contains('hidden') && !card.classList.contains('manually-excluded')) {
            const ghost = GHOSTS.find(g => g.name === card.dataset.name);
            ghost.evidences.forEach(ev => possibleEvidences.add(ev));
        }
    });

    // 2. Calculate Counts for Game Mode Logic (CAP LOGIC)
    const realEvidencesCount = selectedEvidences.filter(e => e !== 'Ghost Orb').length;
    const maxRealEvidences = currentMode;

    // 3. Update buttons UI
    document.querySelectorAll('.btn-evidence').forEach(btn => {
        const ev = btn.dataset.ev;
        const isSelected = selectedEvidences.includes(ev);
        const isRealEvidence = (ev !== 'Ghost Orb');

        let shouldDisable = false;

        // Condition A: Mathematically impossible for any remaining ghost
        if (!possibleEvidences.has(ev)) {
            shouldDisable = true;
        }

        // Condition B: Game Mode Cap Reached
        // (Prevent selecting more than allowed)
        if (!isSelected) {
            // If I am a real evidence, and we already have max real evidences selected -> disable me
            if (isRealEvidence && realEvidencesCount >= maxRealEvidences) {
                shouldDisable = true;
            }
        }

        // Apply State
        if (shouldDisable && !isSelected) {
            btn.classList.add('impossible');
        } else {
            btn.classList.remove('impossible');
        }
    });
}

function resetAll() {
    selectedEvidences = [];
    excludedEvidences = [];

    // Reset buttons UI
    document.querySelectorAll('.btn-evidence').forEach(btn => {
        btn.classList.remove('selected', 'excluded');
    });

    // Reset exclusions
    document.querySelectorAll('.ghost-card').forEach(card => card.classList.remove('manually-excluded'));

    checkGhostMatch();
}

/* --- CURSED ITEMS LOGIC --- */
function initCursedItems() {
    const list = document.querySelector('.cursed-list');
    list.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    CURSED_ITEMS_DATA.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cursed-item';

        const nameText = item.name[currentLang];
        const descText = item.description[currentLang];

        itemEl.innerHTML = `
            <div class="cursed-header">
                <img src="${item.image}" alt="${nameText}" class="cursed-icon" onerror="this.style.display='none'">
                <h3>${nameText}</h3>
                <span class="arrow">▼</span>
            </div>
            <div class="cursed-content">
                ${descText}
            </div>
        `;

        itemEl.querySelector('.cursed-header').addEventListener('click', () => {
            itemEl.classList.toggle('open');
        });

        list.appendChild(itemEl);
    });
}
