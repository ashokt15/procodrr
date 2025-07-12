let json1 = prompt("Enter first object in JSON format (e.g. {\"a\":1, \"b\":2}):");
let json2 = prompt("Enter second object in JSON format (e.g. {\"b\":3, \"c\":4}):");

try {
    let obj1 = JSON.parse(json1);
    let obj2 = JSON.parse(json2);

    // Merge using spread operator
    let merged = { ...obj1, ...obj2 };

    alert("Merged Object:\n" + JSON.stringify(merged, null, 2));
} catch (error) {
    alert("❌ Invalid JSON input. Please try again.");
}
