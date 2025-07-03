let phrase = prompt("Enter a phrase:");
let word = prompt("Enter a word to search:");

if (phrase.includes(word)) {
    alert("The word exists in the phrase.");
} else {
    alert("The word does not exist in the phrase.");
}
