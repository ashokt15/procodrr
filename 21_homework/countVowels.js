let input = prompt("Enter a string to count vowels:");
let vowelCount = 0;

for (let i = 0; i < input.length; i++) {
    let ch = input[i].toLowerCase();
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        vowelCount++;
    }
}

alert("Number of vowels in the string: " + vowelCount);
