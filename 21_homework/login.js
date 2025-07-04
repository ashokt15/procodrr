let role = prompt("Enter your role (admin, editor, viewer):").toLowerCase();

switch (role) {
    case "admin":
        alert("Full access: Can view, edit, delete, and manage users.");
        break;
    case "editor":
        alert("Can view and edit content.");
        break;
    case "viewer":
        alert("Can only view content.");
        break;
    default:
        alert("Invalid role. Please enter admin, editor, or viewer.");
}
