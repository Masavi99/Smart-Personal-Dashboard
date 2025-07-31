//import { initClock } from './widgets/clock.js';
function initClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    function updateClock() {
        const now = new Date();

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeStr = `${hours}:${minutes}:${seconds}`;

        const dateStr = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        timeElement.textContent = timeStr;
        dateElement.textContent = dateStr;
    }

    updateClock();
    setInterval(updateClock, 1000);
}

window.addEventListener('DOMContentLoaded', () => {
    initClock();
    // initTodo();
    // initWeather();
    // initCalculator();
    // initNotes();
    // initQuotes();
    // initCurrency();
});