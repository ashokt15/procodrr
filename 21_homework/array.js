
let arraySize = parseInt(prompt("Enter total no. of numbers"));
let array = []
for (i = 0; i < arraySize; i++) {
    let number = parseInt(prompt("Enter numbers one by one"))
    array.push(number)
}

alert("The numbers in your array are: " + array.join(" , "))
let operation = prompt("Choose a-->add\nb-->remove\n c-->find")
switch (operation) {
    case "a":
        let addition = prompt("Enter the number you want to add to the array")
        array.push(addition)
        alert("The numbers in your array are: " + array.join(" , "))
        break;
    case "b":
        array.pop()
        alert("The numbers in your array are: " + array.join(" , "))
        break;
    case "c":
        let search = prompt("Enter the number you want to find in the array")

        if (array.includes(search)) {
            alert("The number you entered is available in the array")
        }
        else {
            alert("The number you entered is not available in the array")
        }
        break;
    default:
        prompt("Enter a valid operation")
}