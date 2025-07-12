let input = prompt("Enter numbers separated by commas (e.g. 1, 2, 3, 4, 5, 6):");

let numbers = input.split(",").map(num => parseInt(num.trim()));

if (numbers.length === 0 || numbers.some(isNaN)) {
    alert("❌ Invalid input. Please enter valid numbers separated by commas.");
} else {
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    alert("✅ Even numbers in the array:\n[" + evenNumbers.join(", ") + "]");
}
