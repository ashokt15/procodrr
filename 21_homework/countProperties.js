let jsonString = prompt("Enter an object in JSON format (e.g. {\"name\":\"John\", \"age\":30}):");

try {
    let obj = JSON.parse(jsonString);
    let count = Object.keys(obj).length;
    alert("The object has " + count + " properties.");
} catch (error) {
    alert("❌ Invalid JSON input. Please try again.");
}
