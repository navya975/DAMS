// Sample data for demonstration purpose
var appointments = [
    { date: '2024-04-23', time: '10:00 AM', patientName: 'John Doe', mobileNumber: '1234567890', symptoms: 'Fever', diseaseHistory: 'None' },
    { date: '2024-04-25', time: '2:00 PM', patientName: 'Jane Smith', mobileNumber: '9876543210', symptoms: 'Headache', diseaseHistory: 'Migraine' }
  ];
  
  var tableBody = document.getElementById('appointmentsTable');
  
  // Display appointments in the table
  appointments.forEach(appointment => {
    var row = document.createElement('tr');
    row.innerHTML = `
      <td>${appointment.date}</td>
      <td>${appointment.time}</td>
      <td>${appointment.patientName}</td>
      <td>${appointment.mobileNumber}</td>
      <td>${appointment.symptoms}</td>
      <td>${appointment.diseaseHistory}</td>
    `;
    tableBody.appendChild(row);
  });
  