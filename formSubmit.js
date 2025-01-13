const form = document.getElementById('contact-form'); // Ensure your form has this ID

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  fetch('https://script.google.com/macros/s/AKfycbwA4z_3FCYbojeIxJHdXR-HDqpRh1I-L4tFh1cT1MXzSW3PyWx2aVah_KvJhPOoYCtaSw/exec', {
    method: 'POST',
    mode: 'no-cors', // Bypass CORS issues
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log('Form submitted successfully:', response);
      alert('Message sent! Thank you for contacting me.');
      form.reset(); // Clear the form after submission
    })
    .catch((error) => {
      console.error('Error submitting the form:', error);
      alert('Failed to send the message. Please try again.');
    });
});
