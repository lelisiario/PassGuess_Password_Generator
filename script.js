// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("Button has been clicked!");
//1. prompt the user for password criteria
    // a. Password length 8 < 128 
    // b. lowercase, uppercase, numbers and special characters

// 2. Validate the input

// 3. Generate password based on criteria

// 4. Display password on the page.




  return "Generated password will go here.";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);