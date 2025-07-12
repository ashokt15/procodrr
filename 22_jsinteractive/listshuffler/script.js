const form = document.getElementById("shuffleForm");
const input = document.getElementById("listInput");
const output = document.getElementById("shuffledList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const raw = input.value.trim();
    if (!raw) return;

    const items = raw.split(",").map(item => item.trim()).filter(Boolean);

    // Fisher-Yates Shuffle
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    // Clear previous list
    output.innerHTML = "";

    // Display shuffled list
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        output.appendChild(li);
    });
});
