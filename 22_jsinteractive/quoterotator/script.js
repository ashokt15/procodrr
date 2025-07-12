const quotes = [
    "aikamatyame mahabalam. – Peter Drucker",
    "Do or Die -Mahatma Gandhi",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The harder you work for something, the greater you’ll feel when you achieve it."
];

let index = 0;

function showNextQuote() {
    const quoteBox = document.getElementById("quote-box");
    quoteBox.textContent = quotes[index];
    index = (index + 1) % quotes.length;
}

// Show the first quote immediately
showNextQuote();

// Rotate every 5 seconds
setInterval(showNextQuote, 5000);
