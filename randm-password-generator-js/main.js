// selectors
const app = document.querySelector("#app");
const passwordBox = app.querySelector("#password");
const btn = app.querySelector("#btn");
const copyIcon = app.querySelector(".copy-icon");
const msg = app.querySelector(".msg");
// variables
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";
const allChars = upperCase + lowerCase + numbers + symbols;
let password = "";
let passwordLength = 16;
let includeUpper = true;
let includeLower = true;
let includeNumber = true;
let includeSymbol = true;
// functions

function generatePassword() {
  password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value);
  msg.classList.add("active");
  setTimeout(() => {
    msg.classList.remove("active");
  }, 1500);
}

// event listeners
btn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyPassword);
