// Ask for the operator
let operator = prompt("Choose an operator: +, -, *, /");

// Ask for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let result;

// Perform calculation
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 === 0) {
        alert("Cannot divide by zero!");
    } else {
        result = num1 / num2;
    }
} else {
    alert("Invalid operator!");
}

// Show result if it's valid
if (result !== undefined) {
    alert(`${num1} ${operator} ${num2} = ${result}`);
}
