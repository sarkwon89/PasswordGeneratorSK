
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE
    //Ask user how long password length should be
    var askPwdLength = prompt("How long do you want your password to be? Your password MUST be 8 to 128 characters.");

    //User can't input anything less than 8 and greater than 128 characters long
    if (askPwdLength>=8 && askPwdLength<=128) {
        alert ("Your password will have " + askPwdLength + " characters");
        console.log (askPwdLength);
    } 
    else {
        alert("Your password needs to be 8-128 characters long. Try again.");
        var askPwdLength = prompt("How long do you want your password to be? Your password MUST be 8 to 128 characters.");
    }

    var upperCase = confirm("Do you want uppercase characters in your password?")
    var lowerCase = confirm("Do you want lowercase characters in your password?")
    var special = confirm("Do you want special characters in your password?")
    var number = confirm("Do you want numbers in your password?")
    
    var bankChar = ""
    var password = ""

    if (upperCase) {
        bankChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (lowerCase) {
        bankChar += "abcdefghijklmnopqrstuvwxyz"
    }

    if (special) {
        bankChar += "!#$%&'()*+,-./:;<=>?@_`{|}[]~"
    }

    if(number) {
        bankChar += "0123456789"
    }

    for(i=0;i<askPwdLength;i++){
        console.log("i" + i);
        password += bankChar.charAt(Math.floor(Math.random() * bankChar.length));
        console.log("password" + password)
        console.log("bankChar" + bankChar)
    }
     
    return (password);
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    var password = document.getElementById("password");
    password.select();
    password.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + password.value);

    // BONUS 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER