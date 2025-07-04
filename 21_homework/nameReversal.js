
let name = prompt("Enter your name")
let reversed = ""
for (i = name.length - 1; i >= 0; i--) {
    reversed += name[i]
}
alert("The reversed version of given name is:" + reversed)