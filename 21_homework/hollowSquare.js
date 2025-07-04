let n = parseInt(prompt("Enter the size of the hollow square:"));
let pattern = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    pattern += "\n";
}

alert("Hollow square of size " + n + ":\n\n" + pattern);
