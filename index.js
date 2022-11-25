const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let full = false
let passwordElone = document.getElementById("password-el")
let passwordEltwo = document.getElementById("password-el2")

//slider
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


//button
function buttonEl() {
    //let limit = 15
    passwordElone.textContent = ""
    passwordEltwo.textContent = ""
    for (let i = 0; i < slider.value; i++) {
    let randomIndexOne = Math.floor( Math.random() * characters.length )
    let randomIndexTwo = Math.floor( Math.random() * characters.length )
    passwordElone.textContent += characters[randomIndexOne]
    passwordEltwo.textContent += characters[randomIndexTwo]
    }
}


//let randomIndexTwo = Math.floor( Math.random() * characters.length )
//let randomizedTwo = characters[randomIndexTwo]



