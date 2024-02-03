const nameForm = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

form.addEventListener("submit", (e) => {
  let messagesEmail = [];
  let messagesPassword = [];

  if (nameForm.value.trim() === "") {
    messagesEmail.push("Email is required");
  }

  if (password.value.length <= 6) {
    messagesPassword.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messagesPassword.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messagesPassword.push("Password can't be 'password'");
  }

  if (messagesEmail.length > 0) {
    e.preventDefault();
    errorEmail.innerText = messagesEmail;
  } else {
    // Clear error messages if there are no validation issues
    errorEmail.innerText = "";
  }
  if (messagesPassword.length > 0) {
    e.preventDefault();
    errorPassword.innerText = messagesPassword;
  } else {
    // Clear error messages if there are no validation issues
    errorPassword.innerText = "";
  }
});
