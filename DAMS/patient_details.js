document.getElementById('patientDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var address = document.getElementById('address').value;
    var symptoms = document.getElementById('symptoms').value;
    var diseaseHistory = document.getElementById('diseaseHistory').value;
  
    // Submit patient details to the server
    // Redirect to appointment booking page on successful submission
    window.location.href = 'appointment_booking.html';
  });
  