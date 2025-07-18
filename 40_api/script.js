// const users = [
// {
//     id: 123,
//     name: 'abbas',
//     profession: 'actor'
// },
//     {
//         id: 456,
//         name: 'anitha',
//         profession: 'doctor'
//     },
// ]

// const container = document.querySelector('.container');
// let usersText = ''
// users.forEach((user) => {
//     usersText += `
//     <div>
//     <p>${user.id}</p>
//     <p>${user.name}</p>
//     <p>${user.profession}</p>
//     </div>
//     `
// })
// container.innerHTML = usersText;

// const data = fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// console.log(data)

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())
//     .then((data) => {
//         const imageElement = document.querySelector("#dogpic")
//         imageElement.src = data.message
//     });

// const myb = document.querySelector("#mybutton")
// myb.addEventListener('click', function () {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then((response) => response.json())
//         .then((data) => {
//             const imageElement = document.querySelector("#dogpic")
//             imageElement.src = data.message
//         });
// })

// console.log("im starting")
// function makeRequest(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener('load', function () {
//         console.log("load event triggered")
//         callback(JSON.parse(xhr.response))
//     })
//     xhr.open('GET', url);
//     xhr.send();
// }
// makeRequest('https://jsonplaceholder.typicode.com/users', (users) => {
//     console.log("******")
//     const firstUser = users[0];
//     makeRequest(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`, (posts) => {
//         const secondPost = posts[1]
//         makeRequest(`https://jsonplaceholder.typicode.com/posts/${secondPost.id}/comments`, (comments) => {
//             console.log(comments);
//         })
//     })
// })
// console.log("hi hello, Im the end here")

// const myPromise = new Promise(function (resolve, reject) {
//     reject("netrowk issue");
// });
// myPromise.then((a) => {
//     console.log("promise resolved", a)
// }).catch((e) => {
//     console.log("im incatch", e)
// }).finally(() => {
//     console.log("im in final state haha")
// })

// function makeRequest(url, callback) {
//     const xhr = new XMLHttpRequest();
//     const responsePromise = new Promise(function (resolve, reject) {
//         xhr.addEventListener('load', function () {
//             console.log("response loaded for ", url)
//             resolve(JSON.parse(xhr.response))
//         })
//     });
//     xhr.open('GET', url);
//     xhr.send();
//     return responsePromise;
// }
// makeRequest('https://jsonplaceholder.typicode.com/users')
//     .then((users) => {
//         const firstUser = users[0];
//         return makeRequest(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`)
//     })
//     .then((posts) => {
//         const secondPost = posts[1]
//         return makeRequest(`https://jsonplaceholder.typicode.com/posts/${secondPost.id}/comments`)
//     })
//     .then((comments) => {
//         console.log(comments);
//     });

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// }).then((response) => response.json())
//     .then((json) => console.log(json));

console.log("progra started")
// setTimeout(() => {
//     console.log("Im from timeout")
// }, 5000)
// const startTime = Date.now();
// let currentTime = startTime;
// while (startTime + 5000 > currentTime) {
//     currentTime = Date.now()
// }
// const promise1 = new Promise((resolve, reject) => {
//     resolve(45)
// })
// const promise2 = new Promise((resolve, reject) => {
//     // reject("im rejected from promise2")
//     resolve(65)
// })
// const promise3 = new Promise((resolve, reject) => {
//     resolve(12)
// })
// Promise.all([promise3, promise2, promise3]).then((res) => console.log("all are resolved", res)).catch((err) => console.log(err))

// debugger
// async function sayHi() {
//     const resp = fetch('https://fakeresponder.com/?sleep=5000')
//     console.log("appala subbi")
//     console.log("sdfd subbi")
//     console.log("asdf subbi")
// }
// const promiseReturn = sayHi()
// // console.log(promiseReturn)
// console.log("bagunnava")
// console.log("asdfd")
// console.log("9yoiu")

// console.log("first")
// function sayHello() {
//     try {
//         console.log(67)
//         console.log("geek")
//     }
//     catch (err) {
//         console.log("error is catught, now obsdfeva sashk", err)
//     } finally {
//         console.log("mim in my final")
//     }
//     console.log("say hello ended")
// }
// sayHello()
// console.log("outside hello")
// console.log("end")

const user = {
    name: 'asdhfo',
    age: 89,
    address: {
        city: "kalpeta",
    },
    getFullName: () => console.log("im full name")
}
console.log(user.getFullName && user.getFullName())
console.log(user.getFullName?.())