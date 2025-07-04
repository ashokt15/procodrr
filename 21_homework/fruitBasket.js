let fruitCount = parseInt(prompt("Enter total no,of fruits you want to add to the basket"))
let basket = []
for (i = 0; i < fruitCount; i++) {
    let fruit = prompt(`Enter the fruit name ${i + 1}: `)
    basket.push(fruit)
}
alert("The basket has " + basket.join(" , ") + " fruits");
