// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
//generateEl.addEventListener("click",()=>{
  //const length = lengthEl.value;

  //console.log(length);
//})


//DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//Add event listener to generate button
generateEl.addEventListener("click", () => {
  const length = lengthEl.value;

  console.log(length);
});


const RandomFunc = {
  lower: randomLCase,
  upper: randomUCase,
  Number: randomNums,
  Symbol: randomSym,
};




//Function generator---------------------------------------------------------------

///--------------Lower Case

function randomLCase(){             // This function generates random Lower case letters
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(randomLCase()); //This console logs lower case letters


///--------------Upper Case

function randomUCase(){             // This function generates random Upper case letters
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUCase()); //This console logs Upper case letters

///--------------Numbers

function randomNums(){             // This function generates random Numbers
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randomNums()); //This console logs Numbers

///--------------Symbols

function randomSym(){             // This function generates random Symbols
  const symbols = "!@#$%^&*(){}/?.,><"; // This string contains symbols that will be randomly generated
  return symbols[Math.floor(Math.random() * symbols.length)]; //This command is used to communicate how many symbols there are
}
console.log(randomSym()); //This console logs Symbols
