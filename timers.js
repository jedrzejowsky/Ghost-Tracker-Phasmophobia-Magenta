// TIMELINE & TIMER LOGIC

// Configuration for Timers with Markers
const TIMELINE_CONFIG = {
    hunt: {
        maxScale: 60,
        markers: [
            { seconds: 20, labelKey: "label_obambo", color: "#ff4d4d", id: "obambo" },
            { seconds: 30, labelKey: "label_standard", color: "#fff", id: "std_small" },
            { seconds: 50, labelKey: "label_standard", color: "#fff", id: "std_large" },
            { seconds: 60, labelKey: "label_cursed", color: "#ff4d4d", id: "cursed" }
        ]
    },
    cooldown: {
        maxScale: 30, // Show up to 30s to fit 25s comfortably
        markers: [
            { seconds: 20, labelKey: "label_demon", color: "#ff4d4d", id: "demon" },
            { seconds: 25, labelKey: "label_standard", color: "#fff", id: "std" }
        ]
    },
    smudge: {
        maxScale: 180, // Fit Spirit exactly at end
        markers: [
            { seconds: 60, labelKey: "label_demon", color: "#ff4d4d", id: "demon" },
            { seconds: 90, labelKey: "label_standard", color: "#fff", id: "std" },
            { seconds: 180, labelKey: "label_spirit", color: "#00ffc8", id: "spirit" }
        ]
    },
    paramic: {
        maxScale: 80,
        markers: [
            { seconds: 64, labelKey: "label_myling", color: "#d07fff", id: "myling_min" }
        ]
    }
};

const timers = {}; // Store interval IDs and state

// INIT
document.addEventListener('DOMContentLoaded', () => {
    initTimelines();
});

// Called by script.js updateLanguage()
window.updateTimerHeaders = function () {
    // 1. Update Headers (H3)
    const t = TRANSLATIONS[currentLang];

    const cardHunt = document.querySelector('#card-hunt h3');
    if (cardHunt) cardHunt.textContent = t.timeline_hunt;

    const cardCooldown = document.querySelector('#card-cooldown h3');
    if (cardCooldown) cardCooldown.textContent = t.timeline_cooldown;

    const cardSmudge = document.querySelector('#card-smudge h3');
    if (cardSmudge) cardSmudge.textContent = t.timeline_smudge;

    const cardParamic = document.querySelector('#card-paramic h3');
    if (cardParamic) cardParamic.textContent = t.timeline_paramic;

    // 2. Update Button Text
    document.querySelectorAll('.btn-timer.start').forEach(b => {
        // If active (Stop), don't change to Start
        if (!b.classList.contains('active')) {
            b.textContent = t.btn_start;
        } else {
            b.textContent = t.btn_stop;
        }
    });
    document.querySelectorAll('.btn-timer.reset').forEach(b => b.textContent = t.btn_reset);

    // 3. Re-render Markers (to update labels)
    renderMarkers('hunt');
    renderMarkers('cooldown');
    renderMarkers('smudge');
    renderMarkers('paramic');
}

function initTimelines() {
    ['hunt', 'cooldown', 'smudge', 'paramic'].forEach(id => {
        timers[id] = {
            startTime: 0,
            elapsed: 0,
            interval: null,
            isRunning: false,
            triggeredMarkers: new Set() // Track triggered markers
        };
        renderMarkers(id);
    });
}

function renderMarkers(id) {
    const config = TIMELINE_CONFIG[id];
    const track = document.getElementById(`track-${id}`);
    if (!config || !track) return;

    // Keep the progress bar
    const progress = track.querySelector('.timeline-progress');
    track.innerHTML = ''; // Clear
    track.appendChild(progress); // Restore progress bar

    if (config.markers) {
        config.markers.forEach(m => {
            const marker = document.createElement('div');
            marker.className = 'timeline-marker';

            // Calculate Position %
            // If scale is 180s, and marker is 90s -> 50%
            const pct = (m.seconds / config.maxScale) * 100;
            marker.style.left = `${pct}%`;
            if (m.color) marker.style.backgroundColor = m.color;

            // Label
            const label = document.createElement('div');
            label.className = 'marker-label';

            // Get text from translation
            let text = "Marker";
            if (m.labelKey && typeof TRANSLATIONS !== 'undefined') {
                text = TRANSLATIONS[currentLang][m.labelKey] || m.labelKey;
            }
            // Use innerHTML to stack text and time
            label.innerHTML = `<div>${text}</div><div class="time-label">(${formatTimeShort(m.seconds)})</div>`;

            marker.appendChild(label);
            track.appendChild(marker);
        });
    }

    // (End Marker Removed)

    // Initial UI Update to show "00:00 / MM:SS"
    const display = document.querySelector(`#card-${id} .timer-display`);
    if (display) {
        display.textContent = `${formatTime(0)} / ${formatTime(config.maxScale)}`;
    }
}

// TOGGLE (Start/Stop)
window.toggleTimer = function (id) {
    const timer = timers[id];
    const btn = document.querySelector(`#card-${id} .btn-timer.start`);
    const t = TRANSLATIONS[currentLang];

    if (timer.isRunning) {
        // STOP
        clearInterval(timer.interval);
        timer.isRunning = false;
        btn.textContent = t.btn_start;
        btn.classList.remove('active');
    } else {
        // START
        // Resume audio context on user interaction
        if (audioCtx.state === 'suspended') audioCtx.resume();

        timer.startTime = Date.now() - (timer.elapsed * 1000);
        timer.isRunning = true;
        btn.textContent = t.btn_stop;
        btn.classList.add('active');

        timer.interval = setInterval(() => {
            const now = Date.now();
            timer.elapsed = (now - timer.startTime) / 1000;
            updateUI(id);
        }, 100); // 10fps update for smoothness
    }
}

// RESET
window.resetTimer = function (id) {
    const timer = timers[id];
    const btn = document.querySelector(`#card-${id} .btn-timer.start`);
    const t = TRANSLATIONS[currentLang];

    // Stop logic
    if (timer.isRunning) {
        clearInterval(timer.interval);
        timer.isRunning = false;
        btn.textContent = t.btn_start;
        btn.classList.remove('active');
    }

    timer.elapsed = 0;
    timer.triggeredMarkers.clear(); // Reset triggers
    updateUI(id);
}

function updateUI(id) {
    const timer = timers[id];
    const config = TIMELINE_CONFIG[id];

    // 1. Update Text Display
    const display = document.querySelector(`#card-${id} .timer-display`);
    if (display && config) {
        display.textContent = `${formatTime(timer.elapsed)} / ${formatTime(config.maxScale)}`;
    }

    // 2. Update Progress Bar
    const track = document.querySelector(`#track-${id} .timeline-progress`);
    if (track && config) {
        let pct = (timer.elapsed / config.maxScale) * 100;
        if (pct > 100) pct = 100; // Cap visual at 100%
        track.style.width = `${pct}%`;
    }

    // 3. Highlight Reached Markers & Play Sound
    if (config && config.markers) {
        const markerEls = document.querySelectorAll(`#track-${id} .timeline-marker`);
        config.markers.forEach((m, index) => {
            const el = markerEls[index];
            if (!el) return;

            // Check if passed (with 0.5s buffer to feel responsive?)
            if (timer.elapsed >= m.seconds) {
                el.classList.add('active');

                // Play sound if not yet triggered
                // Use ID or unique key. StartTimer resets triggers.
                const markerKey = m.id || `${m.seconds}`;
                if (!timer.triggeredMarkers.has(markerKey)) {
                    playMarkerSound(m);
                    timer.triggeredMarkers.add(markerKey);
                }

            } else {
                el.classList.remove('active');
                // Don't remove from triggeredMarkers (passed means passed).
                // Only reset clears them.
            }
        });
    }
}


// HELPERS
function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function formatTimeShort(seconds) {
    if (seconds >= 60) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        if (s === 0) return `${m}m`;
        return `${m}m ${s}s`;
    }
    return `${seconds}s`;
}

// AUDIO SYSTEM
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playBeep(frequency = 440, type = 'sine', duration = 0.1) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    // Volume envelope
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

// Play a distinct sound for "Important" markers vs Standard
// Standard: High ping
// Curse/Demon: Lower warning tone?
function playMarkerSound(marker) {
    if (marker.color === '#ff4d4d') {
        // Red marker / Danger -> Double beep or lower tone?
        playBeep(300, 'square', 0.2); // Warning beep
    } else if (marker.color === '#00ffc8') {
        // Spirit / Special -> Nice chime
        playBeep(880, 'sine', 0.3);
    } else {
        // Standard
        playBeep(600, 'sine', 0.1);
    }
}
