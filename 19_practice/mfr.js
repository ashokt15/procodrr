// const fruits = ["apple", "banana", 'grapes', 'orange'];
// // I need all fruit names in uppercase

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i].toUpperCase())
// // }

// // for (const fruit of fruits) {
// //     console.log(fruit.toUpperCase())
// // }

// // const result = fruits.forEach((fruit) => { console.log(fruit); return "jaffa"; })
// // console.log(typeof result, result)

// // map, filter, reduce

// /* create cubes of given numbers
// const numbers = [2,5,6]
// result should be [8, 125, 216]
// */

// // let result = []
// // for (i = 0; i < numbers.length; i++) {
// //     result.push(numbers[i] ** 3)
// // }
// // console.log(result);


// // const numbers = [2, 5, 6]
// // let result = numbers.map(x => x ** 3)
// // console.log(result)

// const users = [
//     { id: 1, name: 'Ashok' },
//     { id: 2, name: 'Ravi' },
//     { id: 3, name: 'Meena' }
// ];

// // output: ['ASHOK', 'RAVI', 'MEENA']

// // let result = []
// // for (i = 0; i < users.length; i++) {
// //     result.push(users[i].name.toUpperCase())

// // }
// // console.log(result)



// const result = users.map(user => user.name.toUpperCase())
// console.log(result)

// const prices = [100, 200, 350, 400]
// [118,236,413,472]

// const result = []
// for (i = 0; i < prices.length; i++) {
//     result.push(prices[i] * 118 / 100)
// }
// console.log(result)

// const result = prices.map(price => price * 118 / 100)
// console.log(result)

// const numbers = [1, 2, 3, 4, 5, 6]
// only even numbers [2,4,6]

// let result = []
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         result.push(numbers[i])
//     }
// }
// console.log(result)

// const result = numbers.filter(x => x % 2 == 0)
// console.log(result)

// const result = numbers.filter(x => x % 2 != 0)
// console.log(result)

// const numbers = [12, 5, 8, 130, 44, 3, 9]
// 12 130 44
// const result = numbers.filter(x => x > 10);
// console.log(result) 


// function greater10(a) {
//     if (a > 10) {
//         return true;
//     }
//     else { return false }

// }
// const result = numbers.filter(a => {
//     if (a > 10) {
//         return true;
//     }
//     else { return false }

// })
// console.log(result)/
// const result = numbers.filter(a => a > 10)
// console.log(result) 

// const numbers = [2, 4, 63, 7, 10] // 0 - 2 -4-3-7
// // let sum = 0;
// // for (let index = 0; index < numbers.length; index++) {
// //     sum += numbers[index];
// // }
// // console.log(sum)

// // const result = numbers.reduce((acc, element) => acc + element, 0)
// // console.log(result)
// for (let i = 0; i < numbers.length; i++) {
//     max = ;

const numbers = [2, 63, 4, 7, 10]
// const result = numbers.reduce((acc, element) =>
//     acc + element, 0)
// console.log(result)



// const highestNumber = numbers.reduce((acc, nextNumber) => Math.max(acc, nextNumber));

// console.log(highestNumber);

// function maxNumber(numbers) {
//     let max = numbers[0]
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }
//     return max;
// }
// console.log(maxNumber(numbers));