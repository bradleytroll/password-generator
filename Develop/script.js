function generatePassword() {
  var passLength = window.prompt("Choose length of password (between 8 and 128 characters.)")
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a password between 8 and 128 characters!")
  }
  var special = window.confirm("Would you like to include special characters?")





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