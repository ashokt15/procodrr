// function sayHi() {
//     console.log("second bxo clicked")
// }
// function sayBox3() {
//     console.log("box3 clicked")
// }
// const box3 = document.querySelector(".box3");
// box3.onclick = function () {
//     console.log("third buton clicked")
// }
// box3.onclick = function () {
//     console.log("my 3 clicked ah!!!")
// }
// box3.addEventListener('drag', function () {
//     console.log("third buton dragged    ")
// })
// box3.addEventListener('dblclick', function () {
//     console.log("im clicked twice")
// })

// const inputBox = document.querySelector('.username')
// const ptag = document.querySelector('.name')
// inputBox.addEventListener('blur', function (e) {
//     // ptag.innerText = e.target.value;
//     console.log("blur on nae")
// })
// const span = document.querySelector('h1 > span')
// span.addEventListener('click', function () {
//     console.log("heading clicked!!!")
// })
// const myb = document.querySelector('.mybutton')
// let count = 0
// myb.addEventListener('click', function () {
//     count++;
//     console.log("buton clicked@@@", count)
// })
// const mysubmit = document.querySelector('.mysubmit')
// mysubmit.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log("user subiteed form")
// // })

// const greenElement = document.querySelector('.green')
// const pinkElement = document.querySelector('.pink')
// const blueElement = document.querySelector('.blue')

// greenElement.addEventListener('click', function () {
//     console.log("3green clicked")
// })
// pinkElement.addEventListener('click', function (event) {
//     event.stopPropagation()
//     console.log("2pink clicked")
// })
// blueElement.addEventListener('click', function (event) {
//     event.stopPropagation()
//     console.log("1blue clicked")
// })
// const nameInput = document.querySelector('.name')
// const ageInput = document.querySelector('.age')
// const nameDesc = document.querySelector('.name-desc')
// const ageDesc = document.querySelector('.age-desc')

// const existingName = localStorage.getItem('name')
// const existingAge = localStorage.getItem('age')
// nameDesc.innerText = `My name is ${existingName}`
// ageDesc.innerText = `Im ${existingAge} years old`

// nameInput.addEventListener('input', (e) => {
//     nameDesc.innerText = `My name is ${e.target.value}`
//     localStorage.setItem('name', e.target.value)
// });

// ageInput.addEventListener('input', (e) => {
//     ageDesc.innerText = `Im ${e.target.value} years old`
//     localStorage.setItem('age', e.target.value)
// });