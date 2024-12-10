document.getElementById('tablet-form').onsubmit = async function (e) {
    e.preventDefault(); // Prevent form submission

    const tabletName = document.getElementById('tablet-name').value; // Get tablet name
    const response = await fetch('/search', { // Make POST request to '/search'
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tablet_name: tabletName }), // Send tablet name in JSON format
    });

    const data = await response.json(); // Parse the JSON response

    const resultDiv = document.getElementById('result'); // Get the result div
    if (data.error) {
        resultDiv.innerHTML = data.error; // Display error message
    } else {
        resultDiv.innerHTML = `
            <h3>Tablet Information:</h3>
            <p><strong>Condition:</strong> ${data.condition}</p>
            <p><strong>Dosage:</strong> ${data.dosage}</p>
            <p><strong>Side Effects:</strong> ${data.side_effects}</p>
        `;
    }
};
