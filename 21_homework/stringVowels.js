let str = prompt("Enter a string:");

// Convert the string to lowercase for easy checking
let lowerStr = str.toLowerCase();

if (
    lowerStr.includes("a") ||
    lowerStr.includes("e") ||
    lowerStr.includes("i") ||
    lowerStr.includes("o") ||
    lowerStr.includes("u")
) {
    alert("The string contains at least one vowel.");
} else {
    alert("The string has no vowels.");
}
