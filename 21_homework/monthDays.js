let month = prompt("Enter month number (1-12):");
month = Number(month);

switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
        alert("31 days");
        break;

    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
        alert("30 days");
        break;

    case 2: // February
        alert("28 or 29 days (depending on leap year)");
        break;

    default:
        alert("Invalid month number. Please enter a number from 1 to 12.");
}
