document.addEventListener('DOMContentLoaded', () => {
    const evidenceGrid = document.getElementById('evidence-grid');
    const ghostGrid = document.getElementById('ghost-grid');
    const modeSelect = document.getElementById('mode-select');

    // Tabs
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // State
    let selectedEvidences = new Set();
    let excludedEvidences = new Set();
    let currentMode = 3;

    // Initialize UI
    initTabs();
    initEvidenceButtons();
    initGhostList();
    initCursedItems();
    updateGhostList();

    // Tab Logic
    function initTabs() {
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.tab;

                // Active class for buttons
                navButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Active class for content
                tabContents.forEach(c => c.classList.remove('active'));
                document.getElementById(`tab-${target}`).classList.add('active');
            });
        });
    }

    // Cursed Items
    function initCursedItems() {
        const container = document.querySelector('.cursed-list');
        if (!container || typeof CURSED_ITEMS === 'undefined') return;

        container.innerHTML = ''; // Clear existing

        CURSED_ITEMS.forEach(item => {
            const el = document.createElement('div');
            el.className = 'cursed-item';
            el.innerHTML = `
                <div class="cursed-header">
                    <img src="${item.image}" alt="${item.name}" class="cursed-icon">
                    <h3>${item.name}</h3>
                    <span class="arrow">▼</span>
                </div>
                <div class="cursed-content">
                    ${item.description}
                </div>
            `;

            el.querySelector('.cursed-header').addEventListener('click', () => {
                el.classList.toggle('open');
            });

            container.appendChild(el);
        });
    }

    // Mode Selector Event
    modeSelect.addEventListener('change', (e) => {
        currentMode = parseInt(e.target.value);
        updateGhostList();
    });

    function initEvidenceButtons() {
        evidenceGrid.innerHTML = '';
        EVIDENCES.forEach(evidence => {
            const btn = document.createElement('button');
            btn.className = 'btn-evidence';
            btn.textContent = evidence;

            // Left click: Toggle Select
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleEvidence(evidence, 'select');
            });

            // Right click: Toggle Exclude
            btn.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                toggleEvidence(evidence, 'exclude');
            });

            evidenceGrid.appendChild(btn);
        });
    }

    function initGhostList() {
        ghostGrid.innerHTML = '';
        GHOSTS.sort((a, b) => a.name.localeCompare(b.name));

        GHOSTS.forEach(ghost => {
            const card = document.createElement('div');
            card.className = 'ghost-card';
            card.dataset.name = ghost.name;

            // Manual Exclusion (Right Click)
            card.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                card.classList.toggle('manually-excluded');
            });

            const header = document.createElement('div');
            header.className = 'card-header';

            const titleRow = document.createElement('div');
            titleRow.className = 'title-row';

            const title = document.createElement('h3');
            title.textContent = ghost.name;

            // Minimalist Evidence Icons
            const evIcons = document.createElement('div');
            evIcons.className = 'ev-icons';
            const shortCodes = {
                "EMF 5": "EMF",
                "Spirit Box": "BOX",
                "Fingerprints": "FING",
                "Ghost Orb": "ORB",
                "Ghost Writing": "WRIT",
                "Freezing Temperatures": "FREEZ",
                "D.O.T.S Projector": "DOTS"
            };

            ghost.evidences.forEach(ev => {
                const badge = document.createElement('span');
                badge.className = 'ev-badge';
                badge.textContent = shortCodes[ev] || ev;
                evIcons.appendChild(badge);
            });

            titleRow.appendChild(title);
            titleRow.appendChild(evIcons);
            header.appendChild(titleRow);

            // STATS ROW (🧠 / 👞)
            const statsRow = document.createElement('div');
            statsRow.className = 'stats-row';

            // Sanity
            const sanityStat = document.createElement('div');
            sanityStat.className = 'stat-item';
            sanityStat.innerHTML = `
                <span class="stat-icon" title="Hunt Sanity Threshold">🧠</span>
                <span class="stat-value">${ghost.huntSanity || '50%'}</span>
            `;

            // Speed
            const speedStat = document.createElement('div');
            speedStat.className = 'stat-item';
            speedStat.innerHTML = `
                <span class="stat-icon" title="Ghost Speed">👞</span>
                <span class="stat-value">${ghost.speed || '1.7 m/s'}</span>
            `;

            statsRow.appendChild(sanityStat);
            statsRow.appendChild(speedStat);
            header.appendChild(statsRow);

            // Short Description
            const shortDesc = document.createElement('p');
            shortDesc.className = 'ghost-short-desc';
            shortDesc.textContent = ghost.shortDesc;

            // Expandable Long Description
            const readMoreBtn = document.createElement('button');
            readMoreBtn.className = 'read-more-btn';
            readMoreBtn.textContent = 'Read More';

            const longDescContainer = document.createElement('div');
            longDescContainer.className = 'long-desc-container';
            longDescContainer.innerHTML = ghost.longDesc;

            readMoreBtn.addEventListener('click', () => {
                const isOpen = longDescContainer.classList.contains('open');
                longDescContainer.classList.toggle('open');
                readMoreBtn.textContent = isOpen ? 'Read More' : 'Show Less';
            });

            card.appendChild(header);
            card.appendChild(shortDesc);
            card.appendChild(readMoreBtn);
            card.appendChild(longDescContainer);

            ghostGrid.appendChild(card);
        });
    }

    function toggleEvidence(evidence, action) {
        if (action === 'select') {
            if (selectedEvidences.has(evidence)) {
                selectedEvidences.delete(evidence); // Deselect
            } else {
                selectedEvidences.add(evidence);
                excludedEvidences.delete(evidence); // Cannot be excluded if selected
            }
        } else if (action === 'exclude') {
            if (excludedEvidences.has(evidence)) {
                excludedEvidences.delete(evidence); // Un-exclude
            } else {
                excludedEvidences.add(evidence);
                selectedEvidences.delete(evidence); // Cannot be selected if excluded
            }
        }

        renderButtons();
        updateGhostList();
    }

    function renderButtons() {
        const buttons = evidenceGrid.querySelectorAll('.btn-evidence');
        buttons.forEach(btn => {
            const evidence = btn.textContent;
            btn.classList.remove('selected', 'excluded');

            if (selectedEvidences.has(evidence)) {
                btn.classList.add('selected');
            } else if (excludedEvidences.has(evidence)) {
                btn.classList.add('excluded');
            }
        });
    }

    function updateGhostList() {
        const cards = ghostGrid.querySelectorAll('.ghost-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const ghostName = card.dataset.name;
            const ghost = GHOSTS.find(g => g.name === ghostName);

            const isMatch = checkGhostMatch(ghost);

            if (isMatch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        ghostCountSpan.textContent = visibleCount;
    }

    function checkGhostMatch(ghost) {
        // 0 Evidence Mode: Simply don't filter by "missing" evidence, but DO respect exclusions.
        // However, standard logic handles "does ghost have this?" generally.
        // If user selects an evidence in 0 evidence mode, they likely mean "I found this".
        // But in 0 evidence, "ghost has evidence X" is technically true in code, just not visible in game.
        // So standard logic is fine, BUT we must consider the Mimic special case or guaranteed logic if needed.
        // Actually, guaranteed logic is key for 1 and 2 evidence modes.

        // 1. Must have ALL selected evidences (as usual)
        // Note: In 0 evidence mode, if user selects "EMF 5", all ghosts with EMF 5 should show.
        for (let ev of selectedEvidences) {
            if (!ghost.evidences.includes(ev)) {
                return false;
            }
        }

        // 2. Must NOT have any excluded evidences
        for (let ev of excludedEvidences) {
            // Special case: Mimic always has Orbs. If we exclude Orbs, Mimic matches ONLY if we consider Orbs "fake".
            // Logic: If ghost has evidence X, and we excluded X -> fail.
            // Exception: Mimic has Orbs in evidences list (hack). If excluded Orbs, Mimic technically has it.
            // But usually excluding Orbs means "I confirmed no orbs". Mimic HAS ORBS. So excluding Orbs SHOULD kill Mimic.
            if (ghost.evidences.includes(ev)) {
                return false;
            }
        }

        // 3. Guaranteed Evidence Logic (Nightmare = 2, Insanity = 1)
        if ((currentMode === 2 || currentMode === 1) && ghost.guaranteed) {
            // If the ghost has a guaranteed evidence...
            // And we have ruled it out... (Already handled by step 2)

            // Check if it's POSSIBLE to satisfy the guaranteed evidence requirement.
            // If the user has found evidences, and NONE of them are the guaranteed one, AND we have reached the evidence limit...
            // Actually, simply: If valid evidences found so far do NOT include guaranteed, 
            // AND the number of remaining "slots" is less than 1 (meaning we found all available stats and missed the guaranteed one).

            // Wait. 
            // Nightmare (2 evidences). 
            // Goryo (Guaranteed DOTS).
            // Case A: User found EMF 5. (1 slot used). DOTS is still possible. OK.
            // Case B: User found EMF 5 + Fingerprints. (2 slots used). DOTS NOT found. Goryo fails.

            // If number of selected evidences == currentMode
            // AND Selected Evidences does NOT contain ghost.guaranteed
            // THEN Ghost is impossible.

            // Note: Mimic has 3 evidences + Orbs.
            // Its guaranteed is "Ghost Orb".
            // If Mode is 2.
            // User Founds: Spirit Box + Freezing. (2 evidences).
            // Does Mimic show?
            // Mimic always shows Orbs. So technically user sees 3 things.
            // If user selects Spirit Box + Freezing, they haven't selected Orb.
            // The guaranteed logic above would kill Mimic.
            // We need to treat Mimic's 'Ghost Orb' as a special "extra" that doesn't count towards the limit?
            // Or just exempt Mimic from this specific logic block because it's weird?
            // Let's exempt Mimic from strict slot logic if it's complicate, OR better:
            // Mimic's "Guaranteed" is Ghost Orb.
            // If user selects 2 evidences (non-Orbs), Mimic still exists because functionality it fakes 3 evidences.
            // The constraint is: "One of the provided ACTUAL evidences must be the guaranteed one".
            // Mimic is unique. Let's skip Mimic for this specific "Slot" check or handle it carefully.

            if (ghost.name !== "The Mimic") {
                if (selectedEvidences.size >= currentMode) {
                    if (!selectedEvidences.has(ghost.guaranteed)) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    resetBtn.addEventListener('click', () => {
        selectedEvidences.clear();
        excludedEvidences.clear();
        renderButtons();
        updateGhostList();
    });
});
