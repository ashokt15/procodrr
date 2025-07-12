let input = prompt("Enter numbers separated by commas (e.g. 10, 25, 7, 88):");

let numbers = input.split(",").map(function (num) {
    return parseFloat(num.trim());
});

if (numbers.length === 0 || numbers.some(isNaN)) {
    alert("❌ Invalid input. Please enter valid numbers separated by commas.");
} else {
    let max = Math.max(...numbers);
    alert("✅ The maximum number is: " + max);
}
