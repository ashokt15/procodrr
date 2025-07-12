let total = parseInt(prompt("Enter no.of words you want to add"))
let values = []
for (i = 0; i < total; i++) {
    let value = prompt("Enter the words one by one")
    values.push(value)
}
let final = ""
if (values.length === 0) {
    alert("Please enter valid number and words")
}
else {
    final = values.slice(0, values.length - 1) + " & " + values[values.length - 1]
}
alert("The final output is :" + final)