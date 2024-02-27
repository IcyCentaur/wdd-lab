document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Reset previous errors
    clearErrors();

    // Validate name
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      nameInput.focus();
      return;
    }

    // Validate email
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Invalid email address";
      emailInput.focus();
      return;
    }

    // Validate password
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    if (passwordInput.value.trim() === "") {
      passwordError.textContent = "Password is required";
      passwordInput.focus();
      return;
    }

    // If all validation passes, submit the form
    alert("Form submitted successfully!");
  });

function clearErrors() {
  var errors = document.querySelectorAll(".error");
  errors.forEach(function (error) {
    error.textContent = "";
  });
}
