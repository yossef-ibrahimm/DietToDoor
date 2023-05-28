/* function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usernameError = document.getElementById("user-error");
  const passwordError = document.getElementById("pass-error");

  if (username == "") {
    usernameError.style.display = "block";
    return false;
  } else {
    usernameError.style.display = "none";
    return true;
  }
}
 */ const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("user-error");
const passwordError = document.getElementById("pass-error");

function validateUsername() {
  const usernameValue = usernameInput.value.trim();
  if (usernameValue === "") {
    usernameError.textContent = "UserName can't be empty";
    usernameError.style.display = "block";
    return false;
  } else {
    usernameError.style.display = "none";
    return true;
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  /*  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; */
  if (/* !regex.test(passwordValue) */ passwordValue === "") {
    passwordError.textContent = "Your password can't be empty ";
    passwordError.style.display = "block";
    return false;
  } else {
    passwordError.style.display = "none";
    return true;
  }
}
/*
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePasswordButton.textContent = "Show";
  }
} */

function validateForm() {
  const isUsernameValid = validateUsername();
  const isPasswordValid = validatePassword();
  return isUsernameValid && isPasswordValid;
}

usernameInput.addEventListener("blur", validateUsername);
passwordInput.addEventListener("blur", validatePassword);
/* togglePasswordButton.addEventListener("click", togglePassword);
 */document.querySelector("form").addEventListener("submit", (event) => {
  if (!validateForm()) {

    event.preventDefault();

  }
});
