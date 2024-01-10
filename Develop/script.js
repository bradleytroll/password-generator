function generatePassword() {
  var length = window.prompt("Choose length of password (between 8 and 128 characters.)")
  if (length < 8 || length > 128) {
    alert("Please enter a password between 8 and 128 characters!")
  }
  var special = window.confirm("Would you like to include special characters?")
  var numeric = window.confirm("Would you like to include numeric characters?")
  var lowerCase = window.confirm("Would you like to include lowercase letters?")
  var upperCase = window.confirm("Would you like to include uppercase letters?")
  if (!special && !numeric && !lowerCase && !upperCase) {
    window.alert("Please choose at least one character type!")
    generatePassword();
  }

var lowerCaseChars = ["abcdefghijklmnopqrstuvwxyz"]
var upperCaseChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numericChars = ["0123456789"]
var specialChars = ["!@#$%^&*()_+~'|}{)(:[];?><,.-="]

var includedChars = "";

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

var password = "";

for (var i = 0; i < length; i++) {
  var random = Math.floor(Math.random() * includedChars.length);
  password += includedChars[random];

}

 return password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
 

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// my notes:

// window.prompt("sometext", "defaulttext")

// var person = prompt("Please enter your name")

// console.log(person)

// var con = confirm("Do you like milk?")
// console.log(con)

// above returns true or false

// hint from gabe: loop over an array

// var num = [1, 2]
// var upper = ["A", "Z"]
// var special = ["$", "*"]
// var lower = ["a", "z"]

// var userChoice = []