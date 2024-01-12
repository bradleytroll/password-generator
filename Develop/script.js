// Function to create alerst and user-selected prompts to set the parameters of the password. 
function generatePassword() {

  // Creates variable to prompt users to enter a password length
  var length = window.prompt("Choose length of password (between 8 and 128 characters.)")

  // Conditional so that if the user selects a number lower than 8 or higher than 128, they will be prompted to enter a number of the correct length.
  if (length < 8 || length > 128) {
    alert("Please enter a password between 8 and 128 characters!")
  }

  // Conditional so that if anything other than a number is entered, nothing will be returned.
  if (!length) {
    return "";
  }

  // Creates variables that are confirm events, from which the user chooses "Ok" or "Cancel" on window confirmations. Here, users will decide if their password should contain special characters, numerals, uppercase letters, and/or lowercase letters.  
  var special = window.confirm("Would you like to include special characters?")
  var numeric = window.confirm("Would you like to include numeric characters?")
  var lowerCase = window.confirm("Would you like to include lowercase letters?")
  var upperCase = window.confirm("Would you like to include uppercase letters?")

  // Conditional so that if no character types are selected, the user will receive an alert, asking them to choose at least one character type. Then, the generatePassword fucntion will run again from the beginning. 
  if (!special && !numeric && !lowerCase && !upperCase) {
    window.alert("Please choose at least one character type!")
    generatePassword();
  }

  // Declares variables, which are arrays of lowercase letters, uppercase letteres, numerics, and special characters. 
var lowerCaseChars = ["abcdefghijklmnopqrstuvwxyz"]
var upperCaseChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numericChars = ["0123456789"]
var specialChars = ["!@#$%^&*()_+~'|}{)(:[];?><,.-="]

// Declares a variable with an empty string. This variable will take in all the character types the user has selected. 
var includedChars = "";

// Conditionals so that if each of the character types are selected, those types are added to the includedChars sting. 
if(lowerCase) {
  includedChars += lowerCaseChars
}
if(upperCase) {
  includedChars += upperCaseChars
}
if(numeric) {
  includedChars += numericChars
}
if(special) {
  includedChars += specialChars
}

// Declares a password variable as an empty string. This will store the final password once we are done. This will also be appended to the page. 
var password = "";

// Iterates through the included characters and randomly generates adds the selected amount of characters to the password variable, based on a random index selection.
for (var i = 0; i < length; i++) {
  var random = Math.floor(Math.random() * includedChars.length);
  password += includedChars[random];

}
// Sets an alert that the password will be generated and returns the password. 
 window.alert("Thanks. Your new password is coming right up!")
 return password;

}
// Grabs the button object and assigns it to a variable.
var generateBtn = document.querySelector("#generate");

// Function assigns the generatePassword fucntion to the password variable. This funtion is attached to an event listener and will fire when the generateBtn button is clicked. This function grabs the password id and assigns it to a passwordText variable. Then, the value of that text is assigned to the generated password. 
function writePassword() {
  var password = generatePassword() 
 

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds event listener to generate button.
generateBtn.addEventListener("click", writePassword);
