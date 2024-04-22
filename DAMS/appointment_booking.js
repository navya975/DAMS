document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Submit appointment details to the server
    // Redirect to payment page on successful booking
    window.location.href = 'payment.html';
  });
  