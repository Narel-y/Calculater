function calculateCompoundInterest() {
    // Get user input values
    const principal = parseFloat(document.getElementById('deposit').value);
    const annualRate = parseFloat(document.getElementById('compound-interest-rate').value) / 100;
    const years = parseFloat(document.getElementById('years-compound').value);
    const timesCompounded = parseInt(document.getElementById('times-compounded').value);

    // Formula to calculate future value with compound interest
    const futureValue = principal * Math.pow(1 + (annualRate / timesCompounded), timesCompounded * years);
    const totalInterest = futureValue - principal;

    // Display the results
    document.getElementById('future-value').innerText = `Future Value: $${futureValue.toFixed(2)}`;
    document.getElementById('total-compound-interest').innerText = `Total Interest Earned: $${totalInterest.toFixed(2)}`;
}


