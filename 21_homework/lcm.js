let a = parseInt(prompt("Enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));

let originalA = a;
let originalB = b;

// Function to calculate GCD using Euclidean Algorithm
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

let gcd = a;
let lcm = (originalA * originalB) / gcd;

alert("GCD of " + originalA + " and " + originalB + " is: " + gcd + "\n" +
    "LCM of " + originalA + " and " + originalB + " is: " + lcm);
