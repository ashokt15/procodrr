let count = 0;
let step = 1;
const countDisplay = document.getElementById("count")
const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById("decrement")
const resetButton = document.getElementById("reset")
const stepValue = document.getElementById("step")
stepValue.addEventListener('input', (e) => step = parseInt(e.target.value))
incrementButton.addEventListener("click", () => {
    count += step;
    updateDisplay();
});
decrementButton.addEventListener("click", () => {
    count = count < step ? 0 : count - step;
    updateDisplay();
});
resetButton.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});
function updateDisplay() {
    countDisplay.innerText = count;
}
