const form = document.getElementById('contact-form'); // Ensure your form has this ID
const button = document.getElementById("submitButton");
const buttonText = button.querySelector(".button-text");
const loadingIcon = button.querySelector(".loading-icon");
const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]').value;

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation: Prevent empty or whitespace-only messages
    if (message.trim().length === 0) {
        alert("Please enter a message before submitting.");
        return;
    }

    // Show the loading icon and hide the button text
    buttonText.style.display = "none";
    loadingIcon.style.display = "inline-block";

    const formData = {
        name: name,
        email: email,
        message: message,
        turnstileToken: turnstileResponse
    };

    console.log("Submitting form data:", formData);

    fetch('https://script.google.com/macros/s/AKfycbxKm-1RpM-H_0KqZB9RICFlaUEqjBWQVpo3yTtiiJ-LaXrzEmQT7mEisOedLunJ8AD8QA/exec', {
        method: 'POST',
        mode: 'no-cors', // Necessary for Google Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(() => {
        console.log("Form submission successful (no-cors mode, so no response received).");
        loadingIcon.style.display = "none";
        buttonText.style.display = "inline-block";
        alert('Message sent! Thank you for contacting me.');
        form.reset(); // Clear the form after submission
    })
    .catch((error) => {
        console.error('Error submitting the form:', error);
        alert('Failed to send the message. Please try again.');
        loadingIcon.style.display = "none";
        buttonText.style.display = "inline-block";
    });
});
