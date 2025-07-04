let n = parseInt(prompt("Enter a number to find all prime numbers up to N:"));
let primes = [];

if (n < 2) {
    alert("There are no prime numbers less than 2.");
} else {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    alert("Prime numbers up to " + n + ":\n" + primes.join(", "));
}
