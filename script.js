// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() { // prompt for password length
    var passLength = prompt("How many characters would you like to use?", "Insert a number 8-128 characters");
    // failsafe for invalid results
    if (passLength < 8 || passLength > 128) {
        alert("Invalid Input")
        writePassword();
    }

    // generate password function
    function generatePassword() { // check for each input: uppercase, lowercase, numbers, special characters
        var uppers = confirm("Would you like uppercase letters in your password?");
        var lowers = confirm("Would you like lowercase letters in your password?");
        var numbers = confirm("Would you like numbers in your password?");
        var special = confirm("Would you like special characters in your password?");

        // initialize variables
        var userInput = [];
        var uppercase = [
            "A",
            "B",
            "C",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
        ];
        var lowercase = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ];
        var intergers = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0"
        ];
        var symbols = [
            "!",
            "@",
            "#",
            "$",
            "%",
            "^",
            "&",
            "*",
            "(",
            ")",
            "{",
            "}",
            "[",
            "]",
            "=",
            "<",
            ">",
            "/",
            ",",
            "."
        ];

        // add arrays to userInput array if value is true
        if (uppers) {
            userInput.push.apply(userInput, uppercase)
        };
        if (lowers) {
            userInput.push.apply(userInput, lowercase)
        };
        if (numbers) {
            userInput.push.apply(userInput, intergers)
        };
        if (special) {
            userInput.push.apply(userInput, symbols)
        };
        if (userInput === []) {
            alert("Must select atleast one character type")
        }
        // initialize a pass to store password value
        var pass = [];
        // checks your password length and iterates through userInput
        for (var i = 0; i < passLength; i++) {
            var randomize = Math.floor(Math.random() * userInput.length)
            pass.push(userInput[randomize])
        }
        pass = pass.join("");
        return pass
    }
    // the variable password is set to the result of generatePassword()
    var password = generatePassword();
    // passworText equals the element with the id password
    var passwordText = document.querySelector("#password");
    // set value of password
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
