let n = parseInt(prompt("Enter the number of terms for the Fibonacci series:"));
let fib = [];

if (n <= 0) {
    alert("Please enter a positive number greater than 0.");
} else {
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        } else if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    alert("Fibonacci series up to " + n + " terms:\n" + fib.join(", "));
}
