// Function to convert CAD to USD
function convertToUSD() {
    // Get input value
    var cadAmount = document.getElementById('cadInput').value;

    // Validate input
    if (isNaN(cadAmount) || cadAmount <= 0) {
        alert('Please enter a valid positive number for CAD.');
        return;
    }

    // Hardcoded exchange rate
    var exchangeRate = 0.78;

    // Convert CAD to USD
    var usdAmount = cadAmount * exchangeRate;

    // Display result
    document.getElementById('usdResult').innerHTML = `USD: ${usdAmount.toFixed(3)}`;
}

// Function to convert USD to CAD
function convertToCAD() {
    // Get input value
    var usdAmount = document.getElementById('usdInput').value;

    // Validate input
    if (isNaN(usdAmount) || usdAmount <= 0) {
        alert('Please enter a valid positive number for USD.');
        return;
    }

    // Hardcoded exchange rate
    var exchangeRate = 1.28;

    // Convert USD to CAD
    var cadAmount = usdAmount * exchangeRate;

    // Display result
    document.getElementById('cadResult').innerHTML = `CAD: ${cadAmount.toFixed(3)}`;
}
