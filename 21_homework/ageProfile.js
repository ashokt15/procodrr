let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter age:"));

alert("User Name: " + name);
debugger
if (age >= 0 && age <= 6) {
    alert(`Hey ${name}  You are a Kid, don't eat chocolates`);
} else if (age >= 7 && age <= 15) {
    alert("Hey" + name + "You are a school Student , Happy leaning");
} else if (age >= 16 && age <= 20) {
    alert("Hey " + name + " You are a College Student , Happy practicing");
} else if (age >= 21 && age <= 25) {
    alert("Hey " + name + " You are a New Joinee , Happy earning");
} else if (age > 25 && age <= 60) {
    alert("Hey" + name + "You are an Employee, Save for future");
} else if (age > 60) {
    alert("Hey" + name + "You are a Retired Person, Relax and Enjoy your life");
} else {

    alert("Invalid age entered!");
}
