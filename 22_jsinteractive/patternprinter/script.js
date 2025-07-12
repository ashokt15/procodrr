const form = document.getElementById("patternForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const lines = parseInt(document.getElementById("lines").value);
    let pattern = "";

    for (let i = 1; i <= lines; i++) {
        pattern += "*".repeat(i) + "\n";
    }

    output.textContent = pattern;
});
