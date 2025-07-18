class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showDetails() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
}
class Student extends User {
    constructor(name, age, course) {
        super(name, age); // Call the parent class constructor
        this.course = course;
    }

    showDetails() {
        super.showDetails();
        console.log(`Course: ${this.course}`);
    }
}
class Employee extends User {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }

    showDetails() {
        super.showDetails();
        console.log(`Role: ${this.role}`);
    }
}

// ✅ Create instances
const student = new Student("Ashok Tirlangi", "32", "Web Development");
const employee = new Employee("Dhruvi Tirlangi", "4", "Backend Developer");

student.showDetails();
console.log(".............................");
employee.showDetails();
