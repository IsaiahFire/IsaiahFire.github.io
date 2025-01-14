const form = document.getElementById('contact-form'); // Ensure your form has this ID
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const button = document.getElementById("submitButton");
    const buttonText = button.querySelector(".button-text");
    const loadingIcon = button.querySelector(".loading-icon");

    // Show the loading icon and hide the button text
    buttonText.style.display = "none";
    loadingIcon.style.display = "inline-block";

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  fetch('https://script.google.com/macros/s/AKfycbz1-PoP4bvKDS9l2hUdOAZiGqWA5GnB10JL97pRIBtBpOERZwcZmuieRDEaoSDSbWC_aA/exec', {
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
