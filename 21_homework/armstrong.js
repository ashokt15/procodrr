let num = parseInt(prompt("Enter a number to check if it's an Armstrong number:"));
let originalNum = num;
let sum = 0;

let digits = num.toString().length;

while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits);
    num = Math.floor(num / 10);
}

if (sum === originalNum) {
    alert(originalNum + " is an Armstrong number.");
} else {
    alert(originalNum + " is not an Armstrong number.");
}
