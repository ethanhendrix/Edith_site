document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop default form submission

      grecaptcha.ready(function() {
        grecaptcha.execute("6LfAeMYqAAAAAPrUMNjC0Fh9soYd7By2rYTac3G2", { action: "submit" })
          .then(onSubmit); // Calls onSubmit() with the token
      });
    });
  }
});

// Function to handle reCAPTCHA response and form submission
function onSubmit(token) {
  // Set the token value in the hidden input field
  document.getElementById("recaptchaResponse").value = token;

  // Submit the form
  document.getElementById("contact-form").submit();
}
