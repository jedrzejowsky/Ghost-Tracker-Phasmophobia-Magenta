/* Phasmophobia Ghost Tracker - Core Logic */

// State
let currentLang = 'en';
let selectedEvidences = [];
let excludedEvidences = [];
let excludedGhosts = [];
let currentMode = 3; // 3 evidence by default
// Constants
const LONG_PRESS_MS = 600;
const MOVE_THRESHOLD = 10;
const DEFAULT_MODE = 3;
/**
 * Utility to add a long‑press handler for touch devices.
 * @param {HTMLElement} el - Element to attach the handler to.
 * @param {Function} callback - Function to call after a long press.
 */
function addLongPressHandler(el, callback) {
    let pressTimer, startX, startY, isLongPress = false;

    el.ontouchstart = e => {
        isLongPress = false;
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        pressTimer = setTimeout(() => {
            isLongPress = true;
            callback();
            if (window.navigator.vibrate) window.navigator.vibrate(50);
        }, LONG_PRESS_MS);
    };
    el.ontouchend = () => clearTimeout(pressTimer);
    el.ontouchmove = e => {
        const touch = e.touches[0];
        const moveX = Math.abs(touch.clientX - startX);
        const moveY = Math.abs(touch.clientY - startY);
        if (moveX > MOVE_THRESHOLD || moveY > MOVE_THRESHOLD) clearTimeout(pressTimer);
    };
    el.onclick = e => {
        if (isLongPress) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
}
/**
 * Determines if a particular evidence is considered present for a ghost.
 * Handles special cases such as the Mimic’s fake Ghost Orb.
 * @param {Object} ghost - Ghost data object.
 * @param {string} ev - Evidence name.
 * @returns {boolean}
 */
function isEvidenceAllowedForGhost(ghost, ev) {
    if (ghost.name === "The Mimic" && ev === "Ghost Orb") return true;
    return ghost.evidences.includes(ev);
}

// DOM Elements
const ghostGrid = document.getElementById('ghost-grid');
const evidenceGrid = document.getElementById('evidence-grid');
const ghostCountEl = document.getElementById('ghost-count');
const modeSelect = document.getElementById('mode-select');
const resetBtn = document.getElementById('reset-btn');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initEvidenceButtons();
    initGhostList();
    initLanguage();
    updatePossibleEvidences();

    // Mode listener
    modeSelect.addEventListener('change', (e) => {
        currentMode = parseInt(e.target.value);
        checkGhostMatch();
    });

    // Reset listener
    resetBtn.addEventListener('click', resetAll);

    // Initial check for mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('is-mobile');
    }
});

/**
 * Initializes tab navigation.
 */
function initTabs() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`tab-${tabId}`).classList.add('active');

            if (tabId === 'cursed') initCursedItems();
        });
    });
}

/**
 * Creates evidence selection buttons.
 */
function initEvidenceButtons() {
    evidenceGrid.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    EVIDENCES.forEach(ev => {
        const btn = document.createElement('div');
        btn.className = 'btn-evidence';
        btn.textContent = t[ev] || ev;
        btn.dataset.ev = ev;

        // CLICK: Select
        let isLongPress = false;
        btn.addEventListener('click', (e) => {
            if (isLongPress) return;
            toggleSelection(ev, btn);
        });

        // RIGHT CLICK: Exclude
        btn.oncontextmenu = (e) => {
            e.preventDefault();
            toggleExclusion(ev, btn);
        };

        // MOBILE LONG PRESS
        addLongPressHandler(btn, () => toggleExclusion(ev, btn));

        if (selectedEvidences.includes(ev)) btn.classList.add('selected');
        if (excludedEvidences.includes(ev)) btn.classList.add('excluded');

        evidenceGrid.appendChild(btn);
    });
}

/**
 * Handles selection of an evidence button.
 * @param {string} ev - Evidence name.
 * @param {HTMLElement} btn - Button element.
 */
function toggleSelection(ev, btn) {
    if (excludedEvidences.includes(ev)) return; // Cannot select if excluded

    if (selectedEvidences.includes(ev)) {
        selectedEvidences = selectedEvidences.filter(e => e !== ev);
        btn.classList.remove('selected');
    } else {
        // CAP logic: EMF 5 for Mimic exception
        const max = (ev === "Ghost Orb" && selectedEvidences.length >= currentMode) ? 4 : currentMode;
        if (selectedEvidences.length < max) {
            selectedEvidences.push(ev);
            btn.classList.add('selected');
        }
    }
    checkGhostMatch();
}

/**
 * Handles exclusion of an evidence button.
 * @param {string} ev - Evidence name.
 * @param {HTMLElement} btn - Button element.
 */
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
/**
 * Builds the list of ghost cards.
 */
function initGhostList() {
    ghostGrid.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    GHOSTS.forEach(ghost => {
        const card = document.createElement('div');
        card.className = 'ghost-card';
        card.dataset.ghost = ghost.name;

        // RIGHT CLICK TO EXCLUDE GHOST
        card.oncontextmenu = (e) => {
            e.preventDefault();
            toggleGhostExclusion(ghost.name, card);
        };

        // MOBILE LONG PRESS
        addLongPressHandler(card, () => toggleGhostExclusion(ghost.name, card));
        card.onclick = (e) => {
            if (isLongPress) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        const translatedName = t[ghost.name] || ghost.name;

        card.innerHTML = `
            <div class="card-header">
                <div class="title-row">
                    <h3>${translatedName}</h3>
                    <div class="ev-icons">
                        ${ghost.evidences.map(ev => {
            const isGuaranteed = ghost.guaranteed === ev;
            return `<span class="ev-badge ${isGuaranteed ? 'guaranteed' : ''}" title="${ev}">${t["code_" + ev] || ev}</span>`;
        }).join('')}
                    </div>
                </div>
                <div class="stats-row">
                    <div class="stat-item">
                        <span class="stat-icon" title="${t.sanity_threshold}">🧠</span>
                        <span class="stat-value">${typeof ghost.huntSanity === 'object' ? ghost.huntSanity[currentLang] || ghost.huntSanity.en : ghost.huntSanity}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon" title="${t.ghost_speed}">🏃</span>
                        <span class="stat-value">${typeof ghost.speed === 'object' ? ghost.speed[currentLang] || ghost.speed.en : ghost.speed}</span>
                    </div>
                </div>
            </div>
            <p class="ghost-short-desc">${ghost.shortDesc[currentLang] || ghost.shortDesc.en}</p>
            
            <button class="read-more-btn">${t.read_more}</button>
            <div class="long-desc-container">
                <div class="long-desc-content">
                    ${ghost.longDesc[currentLang] || ghost.longDesc.en}
                </div>
            </div>
        `;

        const btn = card.querySelector('.read-more-btn');
        const container = card.querySelector('.long-desc-container');
        btn.addEventListener('click', () => {
            const isOpen = container.classList.toggle('open');
            btn.textContent = isOpen ? t.show_less : t.read_more;
        });

        if (excludedGhosts.includes(ghost.name)) {
            card.classList.add('manually-excluded');
        }

        ghostGrid.appendChild(card);
    });
    checkGhostMatch();
}

/**
 * Handles exclusion of a ghost card.
 * @param {string} name - Ghost name.
 * @param {HTMLElement} card - Card element.
 */
function toggleGhostExclusion(name, card) {
    if (excludedGhosts.includes(name)) {
        excludedGhosts = excludedGhosts.filter(g => g !== name);
    } else {
        excludedGhosts.push(name);
    }
    checkGhostMatch();
}

/**
 * Re‑evaluates which ghosts match the current evidence selection.
 * Updates visibility and counts.
 */
function checkGhostMatch() {
    let visibleCount = 0;
    const ghostCards = document.querySelectorAll('.ghost-card');

    ghostCards.forEach(card => {
        const name = card.dataset.ghost;
        const ghost = GHOSTS.find(g => g.name === name);

        let match = true;

        // 1. Must have all selected evidences
        for (const ev of selectedEvidences) {
            if (!isEvidenceAllowedForGhost(ghost, ev)) {
                match = false;
                break;
            }
        }

        // 2. Must not have any excluded evidences
        if (match) {
            for (const ev of excludedEvidences) {
                if (ghost.evidences.includes(ev)) {
                    match = false;
                    break;
                }
            }
        }

        // 3. User manually excluded this ghost
        if (excludedGhosts.includes(name)) {
            card.classList.add('manually-excluded');
        } else {
            card.classList.remove('manually-excluded');
        }

        // 4. Guaranteed Evidence Check (Nightmare / Insanity)
        if (match && currentMode < 3 && ghost.guaranteed) {
            const limit = (name === "The Mimic") ? currentMode + 1 : currentMode;
            if (selectedEvidences.length >= limit) {
                if (!selectedEvidences.includes(ghost.guaranteed)) {
                    match = false;
                }
            }
        }

        if (match) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    ghostCountEl.textContent = visibleCount;
    updatePossibleEvidences();
}

/**
 * Highlights evidence buttons that are impossible given the current visible ghosts.
 */
function updatePossibleEvidences() {
    const t = TRANSLATIONS[currentLang];
    const ghostCards = Array.from(document.querySelectorAll('.ghost-card')).filter(c => !c.classList.contains('hidden') && !c.classList.contains('manually-excluded'));

    const possibleGhostData = ghostCards.map(c => GHOSTS.find(g => g.name === c.dataset.ghost));
    const allPossibleEvs = new Set();
    possibleGhostData.forEach(g => {
        g.evidences.forEach(e => allPossibleEvs.add(e));
    });

    const evButtons = document.querySelectorAll('.btn-evidence');
    evButtons.forEach(btn => {
        const ev = btn.dataset.ev;
        if (allPossibleEvs.has(ev)) {
            btn.classList.remove('impossible');
        } else {
            btn.classList.add('impossible');
        }
    });
}

// --- LANGUAGE ---
function initLanguage() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateLanguage();
        });
    });
    updateLanguage();
}

/**
 * Updates all UI text to the currently selected language.
 */
function updateLanguage() {
    const t = TRANSLATIONS[currentLang];

    // 1. Update Static Text (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // 2. Refresh dynamic parts
    initEvidenceButtons();
    initGhostList();
    if (document.getElementById('tab-cursed').classList.contains('active')) {
        initCursedItems();
    }

    // Update Tip based on device
    const mainTip = document.getElementById('main-tip');
    if (mainTip) {
        const isMobile = 'ontouchstart' in window;
        mainTip.querySelector('span').textContent = isMobile ? t.tip_mobile_controls : t.tip_pc_controls;
    }

    // Update markers in timers
    if (typeof initTimelines === 'function') {
        initTimelines();
    }
    if (typeof window.updateTimerHeaders === 'function') {
        window.updateTimerHeaders();
    }
}

/**
 * Resets all selections, exclusions and UI state.
 */
function resetAll() {
    selectedEvidences = [];
    excludedEvidences = [];
    excludedGhosts = [];
    document.querySelectorAll('.btn-evidence').forEach(b => {
        b.classList.remove('selected', 'excluded', 'impossible');
    });
    // Reset read-more/read-less state
    document.querySelectorAll('.long-desc-container').forEach(container => {
        container.classList.remove('open');
    });
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        const t = TRANSLATIONS[currentLang];
        btn.textContent = t.read_more;
    });
    checkGhostMatch();
}
