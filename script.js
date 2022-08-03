const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; 
let possibleCharacters = [] 
let firstPassword = ""
let secondPassword = ""
let generatorIsActive = false
let passwordLength = 15
let renderFirstPassword = document.getElementById("password-1-render"); 
let renderSecondPassword = document.getElementById("password-2-render"); 
let includeNumbersCheckbox = document.getElementById("include-numbers-checkbox")
let includeSpecialCharactersCheckbox = document.getElementById("include-special-characters-checkbox")

includeNumbersCheckbox.checked = true;
includeSpecialCharactersCheckbox.checked = true;
document.getElementById("copy-button-1").style.visibility = "hidden";
document.getElementById("copy-button-2").style.visibility = "hidden";


function createArray() {
    if (includeNumbersCheckbox.checked && includeSpecialCharactersCheckbox.checked) {
     possibleCharacters = possibleCharacters.concat(letters, numbers, specialCharacters)
    } else if (includeSpecialCharactersCheckbox.checked) {
        possibleCharacters = possibleCharacters.concat(letters, specialCharacters)
    } else if (includeNumbersCheckbox.checked) {
        possibleCharacters = possibleCharacters.concat(letters, numbers)
    } else {
    possibleCharacters = possibleCharacters.concat(letters)
    }}

function setPasswordLength() {
    if (document.getElementById("password-length-selector").value != "") {
    passwordLength = document.getElementById("password-length-selector").value
} else passwordLength = 15 
}

function randomCharacterSelector() {
    return possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
}

function generatePasswords() {
    if (generatorIsActive === false) {
        for (let i = 0; i < passwordLength; i++) {
                 createArray()
                 firstPassword += randomCharacterSelector();
                 secondPassword += randomCharacterSelector();
                 renderFirstPassword.textContent = firstPassword
                 renderSecondPassword.textContent = secondPassword
                 generatorIsActive = true
                 possibleCharacters = []  
            }} else {
                firstPassword = ""
                secondPassword = ""
                generatorIsActive = false
                generatePasswords()
            }
            document.getElementById("copy-button-1").style.visibility = "visible";
            document.getElementById("copy-button-2").style.visibility = "visible";
}

function copyPassword1() {
    navigator.clipboard.writeText(firstPassword);
}

function copyPassword2() {
    navigator.clipboard.writeText(secondPassword);
}