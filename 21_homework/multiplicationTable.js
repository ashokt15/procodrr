let num = parseInt(prompt("Enter a number to print its multiplication table:"));
let table = "Multiplication Table of " + num + ":\n\n";

for (let i = 1; i <= 10; i++) {
    table += num + " × " + i + " = " + (num * i) + "\n";
}

alert(table);
