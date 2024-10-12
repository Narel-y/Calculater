function calculatePresentValue() {
    // Get user input values
    const monthlyPayout = parseFloat(document.getElementById('payout').value);
    const annualRate = parseFloat(document.getElementById('annuity-interest-rate').value) / 100;
    const years = parseFloat(document.getElementById('years-annuity').value);

    // Calculate the monthly interest rate and total number of payments
    const monthlyRate = annualRate / 12;
    const numberOfPayments = years * 12;

    // Formula to calculate present value of the annuity
    const presentValue = monthlyPayout * (1 - Math.pow(1 + monthlyRate, -numberOfPayments)) / monthlyRate;

    // Display the results
    document.getElementById('present-value').innerText = `Present Value of the Annuity: $${presentValue.toFixed(2)}`;
}
