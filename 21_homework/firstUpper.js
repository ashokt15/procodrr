let input = prompt("Enter a sentence:");

let words = input.split(" ");
let capitalizedWords = words.map(function (word) {
    if (word.length === 0) return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
});

let result = capitalizedWords.join(" ");

alert("Capitalized Sentence:\n" + result);

