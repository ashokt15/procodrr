
// const user = {
//     firstName: "ashok",
//     lastName: 'tirlangi',
//     age: 32,
//     getFullName: getFullName
// }
// const user2 = {
//     firstName: "pushpa",
//     lastName: 'dum',
//     age: 32,
//     getFullName: getFullName
// }

// function createUser(firstName, lastName, age) {
//     return {
//         firstName,
//         lastName,
//         age,
//         getBirthYear: createUser.getYear
//     }
// }

// createUser.getYear = function () {
//     return new Date().getFullYear() - this.age
// }

// const user1 = createUser("Ashok", "tirlangi", 32);
// const user2 = createUser("Pushpa", "Dum", 30);

// function sayHi(age) {
//     this.age = age;
//     // this.getYear = sayHi.getBirthYear
// }
// sayHi.prototype.getBirthYear = function () {
//     return new Date().getFullYear() - this.age;
// }
// const hi1 = new sayHi(78);
// const hi2 = new sayHi(32);
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getYear() {
        return new Date().getFullYear() - this.age;
    }
}

const user1 = new User("Ashok", "tirlangi", 32);
const user2 = new User("Pushpa", "Dum", 30);

class Student extends User {
    constructor(firstName, lastName, age, standard) {
        super(firstName, lastName, age)
        this.standard = standard;
    }
}

const student1 = new Student("Ashok", "tirlangi", 32, 12);
const student2 = new Student("Pushpa", "Dum", 30, 10);

class Employee extends User {
    constructor(firstName, lastName, age, company) {
        super(firstName, lastName, age)
        this.company = company;
    }
}

const employee1 = new Employee("Ashok", "tirlangi", 32, "self");
const employee2 = new Employee("Pushpa", "Dum", 30, "kvs");

// class User {
// static species = "Homosapiens";
// static count = 0;
// constructor(firstName, lastName, age) {
// console.log("constructor called ^^^^^")
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         User.count++;
//     }

//     static printNumberOfUsers() {
//         console.log("The total number of users created so far are ", User.count);
//     }

//     getYear() {
//         return new Date().getFullYear() - this.age;
//     }
// }

// const user1 = new User("Ashok", "tirlangi", 32);
// const user2 = new User("Pushpa", "Dumpala", 30);

// class User {
//     #name; // truly private field

//     constructor(name) {
//         this.#name = name;
//     }

//     get name() {
//         return this.#name.toUpperCase();
//     }

//     set name(value) {
//         if (value.length < 3) {
//             console.log("Too short!");
//         } else {
//             this.#name = value;
//         }
//     }
// }

// const user1 = new User("Ashok");
// console.log(user1.name);     // ASHOK
// console.log(user1.#name);       // ❌ SyntaxError: Private field '#name' must be declared in class

// function greetMe(greetWord, salutation) {
//     console.log(`${greetWord}!, How are you ${salutation}.${this.userName}`)
// }

// const myPC = { userName: "Pullarao" }
// const boundedGreetMe = greetMe.bind(myPC)

// debugger
// function outer() {
//     let a = 30
//     console.log(a)
//     function inner() {
//         let b = 20
//         let c = a + b
//         console.log(c)
//     }
//     return inner;
// }
// const myFun = outer()
// myFun()

// function counter() {
//     let count = 0;
//     return function () {
//         return count++;
//     }
// }
// const counter1 = counter();
// counter1();
// const counter2 = counter();
// counter2();

// function counter() {
//     let count = 0
//     function incrementCount() {
//         return count++;
//     }
//     return incrementCount;
// }

// const myCounter = counter()
