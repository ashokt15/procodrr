let weight = parseFloat(prompt("Enter your weight in kilograms (kg):"));
let height = parseFloat(prompt("Enter your height in meters (m):"));

if (weight > 0 && height > 0) {
    let bmi = weight / (height * height);
    alert("Your BMI is: " + bmi.toFixed(2));
} else {
    alert("Please enter valid positive numbers for weight and height.");
}
