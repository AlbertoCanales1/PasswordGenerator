function generate() { // generates the function

  let password = (""); // assigning password to an empty string

  let length = +document.getElementById("length").value;      

  let lowerCase = document.getElementById("lowercase").checked;
  let upperCase = document.getElementById("uppercase").checked;
  let symbol = document.getElementById("symbols").checked;
  let number = document.getElementById("numbers").checked;



  ///Password Generate
  if (lowerCase + upperCase + symbol + number <= 0) //if statement checks if checkboxes are unchecked 
      return;

  for (let i = 0; i < length; i++) { // password generator

      const r = generater(0, 3);
      if (lowerCase && r === 0) {
          password += generateRandomLowerCase();
      } else if (upperCase && r === 1) {
          password += generateRandomUpperCase();
      } else if (symbol && r === 2) {
          password += generateRandomSymbol();
      } else if (number && r === 3) {
          password += generater(0, 9);
      } else {
          i--;
      }

  }

  document.getElementById("result").textContent = password;

}

generate();


//Generator Functions
function generateRandomLowerCase() {             
  return String.fromCharCode(generater(97, 122));
}

function generateRandomUpperCase() {
  return String.fromCharCode(generater(65, 90));
}

function generateRandomSymbol() {
  const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
  return symbols[generater(0, symbols.length - 1)];
}

function generater(min = 0, max = 1) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}