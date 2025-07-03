let temp = parseFloat(prompt("Enter the temperature in °C:"));
if (temp >= 40) {
    alert("It's very hot today. it's sweating");
}
if (temp >= 30 && temp < 40) {
    alert("It's hot today.");
} else if (temp >= 20) {
    alert("It's a pleasant day, I like it a lot .");
} else if (temp >= 10) {
    alert("It's so cool today, take swasanandam.");
} else {
    alert("It's freezing.");
}
