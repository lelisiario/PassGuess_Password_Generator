// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbols = "!@#$%^&*"; 
var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
function generatePassword () {
console.log ("Button has been clicked!");

// Code for window alerts
var pwLength = prompt("How long would you likethe password to be? Must be between 8 and 128");
  if (pwLength < 8 || pwLength > 128) {
    alert ("Oops, your choice is the wrong number!");
    return "";
  }  
var hasSymbols = confirm("Click confirm to include symbols");
var hasNumbers = confirm("Click confirm to include numbers");
var hasUppercase = confirm("Click confirm to include uppercase");
var hasLowercase = confirm("Click confirm to include lowercase");
  if (!hasSymbols && !hasNumbers && !hasLowercase && !hasUppercase) {
    alert ("You must pick at least one option!");
    return "";
  }
//1. prompt the user for password criteria
    // a. Password length 8 < 128 
    // b. Lowercase
    // c. Uppercase
    // d. Numbers
    // e. special characters
let characters = '';
    if(hasSymbols) {
      characters += symbols
    }
    if(hasNumbers) {
      characters += numbers
    }
    if(hasUppercase) {
      characters += uppercase
    }
    if(hasLowercase) {
      characters += lowercase
    }

    let password = "";

    while(password.length < pwLength) {
    let character = characters.charAt (Math.floor(Math.random() * characters.length));

      password += character
    }
    return password
// 2. Validate the input
  }
// 3. Generate password based on criteria

// 4. Display password on the page 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

