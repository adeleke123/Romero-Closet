document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Here you would typically send the form data to the server
  // For demonstration purposes, we'll just show a confirmation message

  document.getElementById('contactForm').reset(); // Reset the form
  document.getElementById('confirmation').classList.remove('hidden'); // Show confirmation message
});

