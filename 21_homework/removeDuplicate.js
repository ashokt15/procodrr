let input = prompt("Enter array elements separated by commas (e.g. 1, 2, 3, 2, 4, 1):");

let items = input.split(",").map(item => item.trim());

// Remove duplicates using Set
let uniqueItems = [...new Set(items)];

alert("Array without duplicates:\n[" + uniqueItems.join(", ") + "]");
