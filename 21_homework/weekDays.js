let dayNum = prompt("Enter a number: ");
dayNumber = Number(dayNumber);

switch (dayNumber) {

    case 1:
        alert("Sunday");
        break;
    case 2:
        alert("Monday");
        break;
    case 3:
        alert("Tuesday");
        break;
    case 4:
        alert("Wednesday");
        break;
    case 5:
        alert("Thursday");
        break;
    case 6:
        alert("Friday");
        break;
    case 7:
        alert("Saturday");
        break;

    default:
        alert("Invalid input. Please enter a number between 1 and 7.");
}
