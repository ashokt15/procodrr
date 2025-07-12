const container = document.querySelector('.card-container')
const newCardButton = document.querySelector('.new')
let count = 0;




newCardButton.addEventListener('click', () => {
    const newCard = document.createElement('div')
    const number = document.createElement('p')
    number.innerText = ++count;
    newCard.appendChild(number)
    newCard.classList.add('card')

    container.appendChild(newCard);
})
container.addEventListener('click', (event) => {
    if (event.target !== container) {
        event.target.remove()
    }
})

const timerId = setInterval(function () {
    newCardButton.click(); //simulation
    if (count >= 10) {
        clearInterval(timerId);
    }
}, 500)