document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the page from refreshing
  
    const formData = new FormData(this); // Collect form data
    const data = Object.fromEntries(formData.entries()); // Convert to JSON-friendly format
  
    fetch(this.action, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(result => {
        alert('Message sent successfully!'); // Confirmation alert
        this.reset(); // Clear the form fields
        console.log('Success:', result); // Log the response (for debugging)
      })
      .catch(error => {
        console.error('Error:', error); // Log errors in the console
        alert('Failed to send the message. Please try again.');
      });
  });
