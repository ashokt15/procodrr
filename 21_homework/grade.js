let marks = parseFloat(prompt("Enter your marks (0 to 100):"));

if (marks >= 90 && marks <= 100) {
    alert("Grade: A");
} else if (marks >= 75 && marks < 90) {
    alert("Grade: B");
} else if (marks >= 60 && marks < 75) {
    alert("Grade: C");
} else if (marks >= 50 && marks < 60) {
    alert("Grade: D");
} else if (marks >= 35 && marks < 50) {
    alert("Grade: E");
} else if (marks >= 0 && marks < 35) {
    alert("Grade: F (Fail)");
} else {
    alert("Please enter valid marks between 0 and 100.");
}
