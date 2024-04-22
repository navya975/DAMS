document.getElementById('loginPatient').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  if (validateUsername(username)) {
      window.location.href = 'patient_details.html';
  } else {
      redirectToErrorPage();
  }
});

document.getElementById('loginDoctor').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  if (validateUsername(username)) {
      window.location.href = 'doctor_schedule.html';
  } else {
      redirectToErrorPage();
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (validateUsername(username)) {
      // Perform login authentication here
      window.location.href = 'dashboard.html';
  } else {
      redirectToErrorPage();
  }
});

function validateUsername(username) {
  return username.includes('@');
}

function redirectToErrorPage() {
  window.location.href = 'invalid_login.html'; // Redirect to the invalid login page
}