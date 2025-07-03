let num = parseInt(prompt("Enter a number:"));

// Use absolute value to handle negative numbers
let absNum = Math.abs(num);

if (absNum >= 10 && absNum <= 99) {
    alert(num + " is a two-digit number.");
} else {
    alert(num + " is NOT a two-digit number.");
}
