// const myCounterElement = document.querySelector('.counter-value')

// setInterval(function () {
//     myCounterElement.innerText = Math.round(Math.random() * 20);
// }, 1000)

// const counterContainer = document.querySelector('.my-counter');
// const colors = ['pink', 'green', 'blue', 'brown']

// setInterval(function () {
//     const targetColorIndex = Math.round(Math.random() * 4);
//     counterContainer.style.backgroundColor = colors[targetColorIndex]
// }, 1000)

const counterContainer = document.querySelector('.my-counter');

setInterval(() => {
    counterContainer.classList.toggle("my-color")
}, 1000);
let counter = 0;
setInterval(() => {
    document.querySelector(".counter-value").innerText = counter++;
}, 1000);