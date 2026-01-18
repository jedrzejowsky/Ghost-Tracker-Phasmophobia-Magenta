
// Timer Logic
window.timers = {};

window.startTimer = function (id, seconds) {
    // Clear existing
    if (window.timers[id]) clearInterval(window.timers[id]);

    const btn = document.querySelector(`button[onclick="startTimer('${id}', ${seconds})"]`);
    const display = btn.parentElement.previousElementSibling;

    let left = seconds;
    updateDisplay(display, left);

    btn.textContent = 'Stop';
    btn.setAttribute('onclick', `stopTimer('${id}', ${seconds})`);
    btn.classList.add('active');

    window.timers[id] = setInterval(() => {
        left--;
        if (left < 0) {
            clearInterval(window.timers[id]);
            playAlarm(display); // Visual alarm
            return;
        }
        updateDisplay(display, left);
    }, 1000);
}

window.stopTimer = function (id, originalSeconds) {
    if (window.timers[id]) clearInterval(window.timers[id]);

    const btn = document.querySelector(`button[onclick="stopTimer('${id}', ${originalSeconds})"]`);
    btn.textContent = 'Start';
    btn.setAttribute('onclick', `startTimer('${id}', ${originalSeconds})`);
    btn.classList.remove('active');
}

window.resetTimer = function (id, seconds) {
    stopTimer(id, seconds); // Ensure stopped
    const btn = document.querySelector(`button[onclick="startTimer('${id}', ${seconds})"]`); // Reselect fresh
    const display = btn.parentElement.previousElementSibling;

    updateDisplay(display, seconds);
    display.classList.remove('alarm-flash');
}

function updateDisplay(element, seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    element.textContent = `${m}:${s}`;
}

function playAlarm(element) {
    element.textContent = "00:00";
    element.classList.add('alarm-flash');
}
