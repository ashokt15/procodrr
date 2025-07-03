
let operator = prompt("Choose a@addition, b@subtraction , c@multiplication ,d@division , e@remainder, f@exponential");
let num1 = parseInt(prompt("Enter firstNumber"));
let num2 = parseInt(prompt("Enter secondNumber"));
let result;

if (operator === 'a') {
    result = num1 + num2;
}
else if (operator === "b") {
    result = num1 - num2;
}
else if (operator === "c") {
    result = num1 * num2;
}
else if (operator === "d") {
    result = num1 / num2;
}
else if (operator === "e") {
    result = num1 % num2;
}

else {
    result = num1 ** num2;
}


alert("The result is : " + result);
