function greet(a, b, c, d, u) {
    console.log(`${this.userName} from ${this.location}`, a, b, c, d, u)
}
const student = {
    userName: "Ashok",
    location: "Yanam"
}
const teacher = {
    userName: "Pushpa",
    location: "kochi"
}
const principal = {
    userName: "kvk principal is from kannur kokzhikode malappuram beach road    ",
    location: "Kalpetta"
}
greet.call(student, 5, "/////////", 6, 7)
greet.apply(teacher, [5, 8, 45634, 3424])

const x = greet.bind(principal, 4, 78)
console.log(typeof x)
x(4, "................", 8, 4564, 675, 34234)