let num = parseInt(prompt("Enter a number to print its multiplication table:"));
let table = "Multiplication Table of " + num + ":\n\n";

for (let i = 1; i <= 10; i++) {
    table += num + " x " + i + " = " + (num * i) + "\n";
}

alert(table);

// function mathTable(number) {
//     let table = ""
//     for (i = 1; i <= 10; i++) {
//         table += `${number} x ${i} = ${number * i}\n`;
//     }
//     alert(table)
// }

// let number = parseInt(prompt("Enter a number to print its table"));
// mathTable(number)
// console.log("End of table");