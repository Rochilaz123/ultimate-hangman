let numberOfLetters = [
    ["stripe", "bright", "giggle", "puzzle", "jungle", "wisdom", "animal", "cheese", "monkey", "rocket", "charge", "pirate", "garden", "quench", "sphere", "unpack", "yellow", "father", "window", "banana"],
    ["desktop", "adverse", "benefit", "exclude", "edition", "fifteen", "mascara", "generic", "acrylic", "cryptic", "removed", "diamond", "invalid", "ashamed", "steward", "mustard", "leisure", "keynote", "turmoil", "whether"],
    ["absolute", "mountain", "sentence", "children", "although", "analysis", "physical", "remember", "marriage", "consider", "presence", "birthday", "dialogue", "frequent", "register", "universe", "whatever", "scenario", "educator", "discover"],
    ["religious", "operation", "developed", "president", "published", "important", "beautiful", "otherwise", "explained", "confusion", "introduce", "wonderful", "complaint", "marketing", "something", "certainly", "universal", "yesterday", "vegetable", "technique"],
    ["agriculture", "consumption", "theoretical", "imagination", "limitations", "expenditure", "integration", "perspective", "destruction", "probability", "governments", "personality", "wakefulness", "undisturbed", "variational", "ventilating", "terminology", "restriction", "manufacture", "lengthening", "justifiably"]
    ]

let wordNumber = ""

let usedWords = []

document.addEventListener("DOMContentLoaded", function (){

    let buttons = document.getElementsByTagName("button")

    
    for (let button of buttons) {

    
        button.addEventListener("click", function chooseWord(){

            wordNumber = Math.floor(Math.random() * 20)
            
            let gameLevel = this.getAttribute("data-type");

            if (gameLevel === "6 letter words"){
            let word = numberOfLetters[0][wordNumber]
            if (usedWords.includes(word)){                
                console.log(word + " already used")

                if(usedWords.length === 19){
                    alert("Well Done!You have completed Level 1! Choose a different level to continue.")
                }
            } else {
                runGame(word)
                usedWords.push(word)             
            }
            
            } else if (gameLevel === "7 letter words") {
                let word = numberOfLetters[1]
            } else if (gameLevel === "8 letter words") {
                let word = numberOfLetters[2]
            } else if (gameLevel === "9 letter words") {
                let word = numberOfLetters[3]
            } else if (gameLevel === "10 letter words") {
                let word = numberOfLetters[4]
            }
            
        })
    }  
})


function runGame(word) {
   // displayWord(word)

    let wordArray = word.split("")
    let currentWord = document.getElementById("current-word").innerHTML
    currentWord = wordArray
}

function handleKeyDown (event){
    let keyPressed = event.key.toLowerCase()

    if (wordArray.includes(keyPressed)){
      correctLetter()
    } else {
      wrongLetter(keyPressed)
    }
  }

let incorrectLetters = ""
incorrectLetters = incorrectLetters + ""


/**
 * This code updates the hangman image
 * @param {*} parameter 
 */
function wrongLetter(parameter) {
    let hangmanImageSrcs = [
        "assets/images/hangman/0.jpg",
        "assets/images/hangman/1.jpg",
        "assets/images/hangman/2.jpg", 
        "assets/images/hangman/3.jpg",
        "assets/images/hangman/4.jpg",
        "assets/images/hangman/5.jpg",
        "assets/images/hangman/6.jpg",
        "assets/images/hangman/7.jpg",
        "assets/images/hangman/8.jpg",
        "assets/images/hangman/9.jpg",
        "assets/images/hangman/10.jpg",
    ]

    let hangmanImageSrc = document.getElementById("hangman-image").getAttribute("src")

    let lastHangmanImage = hangmanImageSrcs.indexOf(hangmanImageSrc)

    let newHangmanImage = lastHangmanImage + 1
    
    document.getElementById("hangman-image").setAttribute("src", hangmanImageSrcs[newHangmanImage])

    console.log(`Sorry...${parameter} is not in the word`)
    

}

function displayWord(word) {
    alert("word is " + word )
    
}

document.getElementById("give-up").addEventListener("click" , giveUp())
function giveUp() {
    updateScore()
    console.log("give up working")

}

/**
 * When Choose different level button clicked, exits current game and goes back to landing page and adds one to losses.
 */
document.getElementById("choose-different-level").addEventListener("click", function chooseDifferentLevel() {
    
    updateLosses()
    window.location.href = "index.html"

} )


/**
 * Gets the current score and adds 1
 */
function updateScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * get the number of game losses and adds 1
 */
function updateLosses(){
    let oldLosses = parseInt(document.getElementById("losses").innerText);
    document.getElementById("losses").innerText = ++oldLosses;
}

//this function should check if the letter is correct.
//if the letter is correct, it will call the correct letter functio
//if the letter is incorrect it will cal the wrong letter function

function checkLetter() {
    addEventListener
}

function correctLetter() {

}