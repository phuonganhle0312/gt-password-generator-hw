//Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
    //prompt for password length
    var passLength = prompt(
        "How many characters would you like to use?", "Insert a number 8-128 characters"
    );
    //failsafe for invalid results
    if(passLength < 8 || passLength > 128) {
        alert ("Invalid Input")
        writePassword();
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  