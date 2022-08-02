const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let renderFirstPassword = document.getElementById("password-1-render"); 
let renderSecondPassword = document.getElementById("password-2-render"); 

let firstPassword = ""
let secondPassword = ""

let generatorIsActive = false

let passwordLength = 15

document.getElementById("copy-button-1").style.visibility = "hidden";
document.getElementById("copy-button-2").style.visibility = "hidden";



function setPasswordLength() {
    if (document.getElementById("password-length-selector").value != "") {
    passwordLength = document.getElementById("password-length-selector").value
} else passwordLength = 15 
}


function randomCharacterSelector() {
    return characters[Math.floor(Math.random() * characters.length)]
}

function generatePasswords() {
    if (generatorIsActive === false) {
        for (let i = 0; i < passwordLength; i++) {
                 firstPassword += randomCharacterSelector();
                 secondPassword += randomCharacterSelector();
                 renderFirstPassword.textContent = firstPassword
                 renderSecondPassword.textContent = secondPassword
                 generatorIsActive = true
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