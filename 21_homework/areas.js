let choice = prompt("Choose a shape to find area:\nr - rectangle\nc - circle\nt - triangle\ns - square");

choice = choice.toLowerCase(); // make case-insensitive
let area;

if (choice === "r") {
    let length = parseFloat(prompt("Enter length:"));
    let width = parseFloat(prompt("Enter width:"));
    area = length * width;
    alert("Area of rectangle = " + area.toFixed(2));

} else if (choice === "c") {
    let radius = parseFloat(prompt("Enter radius:"));
    area = Math.PI * radius * radius;
    alert("Area of circle = " + area.toFixed(2));

} else if (choice === "t") {
    let base = parseFloat(prompt("Enter base:"));
    let height = parseFloat(prompt("Enter height:"));
    area = 0.5 * base * height;
    alert("Area of triangle = " + area.toFixed(2));

} else if (choice === "s") {
    let side = parseFloat(prompt("Enter side length:"));
    area = side * side;
    alert("Area of square = " + area.toFixed(2));

} else {
    alert("Invalid choice! Please enter r, c, t, or s.");
}
