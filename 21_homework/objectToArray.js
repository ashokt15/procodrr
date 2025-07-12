let jsonString = prompt('Enter an object in JSON format (e.g. {"a":1, "b":2}):');

try {
    let obj = JSON.parse(jsonString);

    // Convert object to array of [key, value] pairs
    let arr = Object.entries(obj);

    alert("Converted Array:\n" + JSON.stringify(arr, null, 2));
} catch (error) {
    alert("❌ Invalid JSON input. Please enter a valid object.");
}
