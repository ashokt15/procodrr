// // // // function myObject() {
// // // //     return {
// // // //         firstName: "Ashok",
// // // //         lastName: "Tirlangi",
// // // //         fullName: function () {
// // // //             return this.firstName + " " + this.lastName;
// // // //         }
// // // //     };
// // // // }

// // // // const obj = myObject();
// // // // console.log(obj.fullName()); // John Doe





// // // const person = {
// // //     firstName: "John",
// // //     lastName: "Doe",
// // //     fullName: function () {
// // //         return this.firstName + " " + this.lastName;
// // //     }
// // // }

// // // // This will return "John Doe":
// // // person.fullName(); 


// // debugger
// // const person = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     fullName: function () {
// //         return this.firstName + " " + this.lastName;
// //     }
// // }

// // const member = {
// //     firstName: "Hege",
// //     lastName: "Nilsen",
// // }

// // let fullName = person.fullName.bind(member);





// const original = {
//     name: "Ashok",
//     address: {
//         city: "Kalpetta"
//     }
// };
// const shallowCopy = { ...original };
// shallowCopy.name = "Dhruv";
// shallowCopy.address.city = "wayanad";
// console.log(original.address.city); 





const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

