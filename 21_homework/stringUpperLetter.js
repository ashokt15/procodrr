let str = prompt("Enter a string:");

if (str.length > 0 && str[0] >= 'A' && str[0] <= 'Z') {
    alert("The string starts with an uppercase letter.");
} else {
    alert("The string does not start with an uppercase letter.");
}
