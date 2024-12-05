// Select the form and submit button
const form = document.querySelector('.form-box')
const submitButton = document.querySelector('#submit')

// Add event listener for form submission
console.log(window.location.origin);
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form action
  submitButton.disabled = true; // Disable the button to prevent multiple submissions
  window.location.href = window.location.origin + '/success.html'   // Redirect to the success page
});



