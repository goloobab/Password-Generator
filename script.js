// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

 // prompt user for password length
 var passwordLength = prompt(`Enter password length between 10 - 64`)

 // checks if provided length falls within acceptable range. If the value is
 // valid return True otherwise return False
 function isLengthValid(pwdLength) {
     return pwdLength >= 10 && pwdLength <= 64
 }

 // Enter while loop if length provided is invalid and skip it if it is valid
 while (!isLengthValid(passwordLength)) {
   // prompt for length again
   passwordLength = prompt(`Enter password length between 10 - 64`)
   // if condition is meant exit while loop by calling break;
   if (isLengthValid(passwordLength)) {
     break;
   }
 }

 return parseInt(passwordLength)

}

// This section of the code will only be reached if the password length is within acceptable range

// Function to prompt user for password options
function getPasswordOptions() {

  //Declaring variables to save the users choices
  var passwordLength = getPasswordLength();
  var shouldUseLowercase = confirm('Do you want to have Lower cases in the password ?')
  var shouldUseUppercase = confirm('Do you want to have Upper cases in the password ?')
  var shouldUseNumeric = confirm('Do you want to have Numeric Values in the password ?')
  var shouldUseSpecialChars = confirm('Do you want to have Special Characters in the password ?')
  
  return {
      passwordLength: passwordLength,
      shouldUseLowercase: shouldUseLowercase,
      shouldUseUppercase: shouldUseUppercase,
      shouldUseNumeric: shouldUseNumeric,
      shouldUseSpecialChars: shouldUseSpecialChars
  }
}


/*
  Create an empty array
  Depending on the users choices we add/push the selected options arrays to the new empty array
*/

function getOptionsArray(options) {
  //Declaring the array here means its only available to this function.
  var optionsArray = []
  if (options.shouldUseLowercase) {
    for (var i = 0; i<lowerCasedCharacters.length; i++){
      optionsArray.push(lowerCasedCharacters[i])
    }
  }
  if (options.shouldUseUppercase) {
    for (var i = 0; i<upperCasedCharacters.length; i++){
      optionsArray.push(upperCasedCharacters[i])
    }
  }
  if (options.shouldUseNumeric) {
    for (var i = 0; i<numericCharacters.length; i++){
      optionsArray.push(numericCharacters[i])
    }
  }
  if (options.shouldUseSpecialChars) {
    for (var i = 0; i<specialCharacters.length; i++){
      optionsArray.push(specialCharacters[i])
    }
  }
  return optionsArray
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


// Function to generate password with user input
function generatePassword() {
  var password = '';
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);