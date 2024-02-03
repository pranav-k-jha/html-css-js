const nameForm = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (nameForm.value.trim() === "") {
    messages.push("Email is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password can't be 'password'");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  } else {
    // Clear error messages if there are no validation issues
    errorElement.innerText = "";
  }
});
