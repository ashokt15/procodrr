function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12

    const displayTime = [hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')].join(':') + ' ' + ampm;

    document.getElementById('clock').textContent = displayTime;
}

setInterval(updateClock, 1000);
updateClock(); 