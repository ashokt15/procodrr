let str = prompt("Enter a string to check if it's a palindrome:");
let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let reversedStr = cleanedStr.split("").reverse().join("");
if (cleanedStr === reversedStr) {
    alert("✅ It's a palindrome!");
} else {
    alert("❌ It's not a palindrome.");
}
