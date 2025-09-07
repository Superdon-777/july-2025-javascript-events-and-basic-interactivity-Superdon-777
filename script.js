// Variables and conditional
const userName = "Donie";
if (userName.length > 3) {
  console.log("Welcome " + userName);
} else {
  console.log("Please enter a valid name");
}

// Custom functions
function calculateTotal(price, tax = 0.1) {
  return price + price * tax;
}
function formatMessage(name) {
  return `Hello, ${name}! Ready to master JavaScript?`;
}
console.log(calculateTotal(100));

// Loop examples
[1, 2, 3, 4, 5].forEach(num => console.log(num));

// DOM interactions
const btn = document.getElementById("changeTextBtn");
const msg = document.getElementById("welcomeMsg");
btn.addEventListener("click", () => {
  msg.textContent = formatMessage(userName);
});

// Simple form validation
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  clearErrors();

  let valid = true;

  if (form.fullname.value.trim().length < 3) {
    showError(form.fullname, "Full Name must be at least 3 characters.");
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email.value.trim())) {
    showError(form.email, "Please enter a valid email.");
    valid = false;
  }

  const usernameRegex = /^[a-zA-Z0-9_-]{5,15}$/;
  if (!usernameRegex.test(form.username.value.trim())) {
    showError(form.username, "Username must be 5-15 characters (letters, numbers, _ or -).");
    valid = false;
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(form.password.value)) {
    showError(form.password, "Password must be 8+ chars, with uppercase, lowercase, and number.");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function showError(input, message) {
  const error = document.createElement("div");
  error.className = "error-message";
  error.style.color = "red";
  error.style.fontSize = "0.9rem";
  error.style.marginTop = "0.2rem";
  error.textContent = message;
  input.insertAdjacentElement("afterend", error);
}

function clearErrors() {
  document.querySelectorAll(".error-message").forEach(el => el.remove());
}

console.log("Script loaded and running");
