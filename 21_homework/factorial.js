let num = parseInt(prompt("Enter a number to calculate its factorial:"));
let factorial = 1;
let i = 1;

if (num < 0) {
    alert("Factorial is not defined for negative numbers.");
} else {
    do {
        factorial *= i;
        i++;
    } while (i <= num);

    alert("Factorial of " + num + " is: " + factorial);
}
