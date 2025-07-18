
const User = {
    init(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    },
    showDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`);
    }
};
const Student = Object.create(User);
Student.initStudent = function (name, email, age, course) {
    this.init(name, email, age);
    this.course = course;
};
Student.showDetails = function () {
    User.showDetails.call(this);
    console.log(`Course: ${this.course}`);
};

// 🔹 Step 3: Create Employee that inherits from User
const Employee = Object.create(User);
Employee.initEmployee = function (name, email, age, role) {
    this.init(name, email, age);
    this.role = role;
};
Employee.showDetails = function () {
    User.showDetails.call(this);
    console.log(`Role: ${this.role}`);
};

// 🔹 Step 4: Create instances
const student1 = Object.create(Student);
student1.initStudent("Ashok", "ashok@example.com", "32", "JavaScript");

const employee1 = Object.create(Employee);
employee1.initEmployee("Dhruvi", "dhruvi@example.com", "21", "Frontend Developer");

// 🔹 Output
student1.showDetails();
console.log("......--------.....");
employee1.showDetails();
