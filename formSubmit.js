const form = document.getElementById('contact-form'); // Ensure your form has this ID

    const button = document.getElementById("submitButton");
    const buttonText = button.querySelector(".button-text");
    const loadingIcon = button.querySelector(".loading-icon");

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
    // Show the loading icon and hide the button text
    buttonText.style.display = "none";
    loadingIcon.style.display = "inline-block";

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  fetch('https://script.google.com/macros/s/AKfycbyb69C4afPa7584C6Clko3sMllqNIVJ6TPavNmLRqoapwO_T_pDhgipaiWCKFzLS3qzBw/exec', {
    method: 'POST',
    mode: 'no-cors', // Bypass CORS issues
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((response) => {
        loadingIcon.style.display = "none";
        buttonText.style.display = "inline-block";
        console.log('Form submitted successfully:', response);
        alert('Message sent! Thank you for contacting me.');
        form.reset(); // Clear the form after submission
    })
    .catch((error) => {
      console.error('Error submitting the form:', error);
      alert('Failed to send the message. Please try again.');
    });
});
