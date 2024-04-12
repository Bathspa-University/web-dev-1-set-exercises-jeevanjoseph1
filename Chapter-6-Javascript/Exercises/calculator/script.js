document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the values entered by the user
    var petrolCost = parseFloat(document.getElementById('petrolCost').value);
    var liters = parseFloat(document.getElementById('liters').value);

    // Calculate the total cost
    var totalCost = petrolCost * liters;

    // Display the total cost
    document.getElementById('totalCost').textContent = 'Total Cost: $' + totalCost.toFixed(2);
});
