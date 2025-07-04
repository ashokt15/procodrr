let num = prompt("Enter a number:");
num = Number(num);

let result = num === 0 ? 0 : 1 + ((num - 1) % 9);
alert(`Single digit sum is: ${result}`);
