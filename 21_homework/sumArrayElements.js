let input = prompt("Enter numbers separated by commas (e.g. 5, 10, 15):");

let numbers = input.split(",").map(num => parseFloat(num.trim()));

if (numbers.length === 0 || numbers.some(isNaN)) {
    alert("❌ Invalid input. Please enter valid numbers separated by commas.");
} else {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    alert("✅ The sum of the array elements is: " + sum);
}
