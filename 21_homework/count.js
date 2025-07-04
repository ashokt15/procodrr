let num = prompt("Enter a number to count the occurrence of each digit:");
let counts = Array(10).fill(0); // Initialize counts for digits 0-9

for (let i = 0; i < num.length; i++) {
    let digit = parseInt(num[i]);
    if (!isNaN(digit)) {
        counts[digit]++;
    }
}

let result = "Digit Occurrences:\n";
for (let i = 0; i <= 9; i++) {
    if (counts[i] > 0) {
        result += i + " → " + counts[i] + " times\n";
    }
}

alert(result);
