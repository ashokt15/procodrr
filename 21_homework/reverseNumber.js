let num = prompt("Enter a number to reverse");
let originalNum = num;
let reversed = 0
while (num > 0) {
    let digit = num % 10
    reversed = reversed * 10 + digit
    num = Math.floor(num / 10)
}
alert(`The reversed number of ${originalNum} is ${reversed}`)