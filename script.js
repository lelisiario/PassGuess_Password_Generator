// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  let pass = '';
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
}

for (let i = 1; i <=8; i++) {
  let char = Math.floor(math.random() * string.length + 1);
password += string.charAt(char)
}

return {
  password,
}

console.log(generatePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

addEventListener("click")