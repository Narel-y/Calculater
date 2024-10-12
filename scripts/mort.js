function calculateMortgage() {
    // Get user input values
    const principal = parseFloat(document.getElementById('amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest').value) / 100;
    const years = parseFloat(document.getElementById('years').value);

    // Calculate monthly interest rate and total number of payments
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = years * 12;

    // Formula to calculate monthly payment
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalInterest = (monthlyPayment * numberOfPayments) - principal;

    // Display the results
    document.getElementById('monthly-payment').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById('total-interest').innerText = `Total Interest: $${totalInterest.toFixed(2)}`;
}
