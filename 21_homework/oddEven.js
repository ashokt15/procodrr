let number = parseInt(prompt("Enter a total number"))
let odd = []
let even = []
for (i = 0; i < number; i++) {
    let number = prompt(`Enter the numbers one by one ${i + 1}: `)
    if (number % 2 == 0) {
        even.push(number)
    }
    else {
        odd.push(number)
    }
}
alert("The odd nubers in your list are: " + odd.join(" , ") + " The even numbers in your list are :" + even.join(", "));
