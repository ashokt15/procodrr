let costPrice = parseFloat(prompt("Enter the cost price:"));
let sellingPrice = parseFloat(prompt("Enter the selling price:"));

if (costPrice > 0 && sellingPrice > 0) {
    if (sellingPrice > costPrice) {
        let profit = sellingPrice - costPrice;
        let profitPercent = (profit / costPrice) * 100;
        alert(
            `You made a profit of ₹${profit.toFixed(2)} which is ${profitPercent.toFixed(2)}%`
        );
    } else if (costPrice > sellingPrice) {
        let loss = costPrice - sellingPrice;
        let lossPercent = (loss / costPrice) * 100;
        alert(
            `You incurred a loss of ₹${loss.toFixed(2)} which is ${lossPercent.toFixed(2)}%`
        );
    } else {
        alert("No profit, no loss.");
    }
} else {
    alert("Please enter valid positive numbers for prices.");
}
