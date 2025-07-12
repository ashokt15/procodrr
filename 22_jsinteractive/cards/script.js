const container = document.querySelector('.card-container');

for (let index = 1; index < 10; index++) {
    const card = document.createElement('div')
    card.classList.add('card')
    container.appendChild(card)
}