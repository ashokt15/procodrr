const targetTime = new Date("2025-07-10T18:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetTime - now;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "00:00:00";
        clearInterval(timer);
        return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const formatted = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");

    document.getElementById("countdown").textContent = formatted;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call
