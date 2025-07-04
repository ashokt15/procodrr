let color = prompt("Enter a traffic light color (r:red\n, y:yellow\n, g:green):");
color = color.toLowerCase();

switch (color) {
    case "r":
        alert("Stop and wait until green light comes");
        break;
    case "y":
        alert("Get Ready");
        break;
    case "g":
        alert("Go");
        break;
    default:
        alert("Invalid color. Please enter red, yellow, or green.");
}
