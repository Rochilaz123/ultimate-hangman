//Array of levels, each level is an array of the words for that level.
let numberOfLetters = [
    ["stripe", "bright", "giggle", "puzzle", "jungle", "wisdom", "animal", "cheese", "monkey", "rocket", "charge", "pirate", "garden", "quench", "sphere", "unpack", "yellow", "father", "window", "banana"],
    ["desktop", "adverse", "benefit", "exclude", "edition", "fifteen", "mascara", "generic", "acrylic", "cryptic", "removed", "diamond", "invalid", "ashamed", "steward", "mustard", "leisure", "keynote", "turmoil", "whether"],
    ["absolute", "mountain", "sentence", "children", "although", "analysis", "physical", "remember", "marriage", "consider", "presence", "birthday", "dialogue", "frequent", "register", "universe", "whatever", "scenario", "educator", "discover"],
    ["religious", "operation", "developed", "president", "published", "important", "beautiful", "otherwise", "explained", "confusion", "introduce", "wonderful", "complaint", "marketing", "something", "certainly", "universal", "yesterday", "vegetable", "technique"],
    ["agriculture", "consumption", "theoretical", "imagination", "limitations", "expenditure", "integration", "perspective", "destruction", "probability", "governments", "personality", "wakefulness", "undisturbed", "variational", "ventilating", "terminology", "restriction", "manufacture", "lengthening", "justifiably"]
]

//The index number of the word from the array, randomly generated when user clicks a level button
let wordNumber = ""

// An array of used words so the words aren't repeated
let usedWords = [
    [],
    [],
    [],
    [],
    [],
    [],
]

let currentWord = ""

let gameLevel = ""

let levelIndex = 0;

/**
 * once dom content loaded, the following code will be called
 */
document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByClassName("level-buttons")

    /**
     * When button is clicked, a randon number is generated to choose the number word from the array of words, 
     * and the index of the array numberOfLetters is determined by the variable gameLevel based on the if statement
     */
    for (let button of buttons) {

        button.addEventListener("click", function chooseWord() {
            gameLevel = this.id;
            if (gameLevel === "level1") {
                levelIndex = 0;
            } else if (gameLevel === "level2") {
                levelIndex = 1;
            } else if (gameLevel === "level3") {
                levelIndex = 2;
            } else if (gameLevel === "level4") {
                levelIndex = 3;
            } else if (gameLevel === "level5") {
                levelIndex = 4;
            } else if (gameLevel === "level6") {
                levelIndex = 5;
            }

            wordNumber = Math.floor(Math.random() * 20);

            gameLevel = this.getAttribute("data-type");
            // if the level chosen is 6 letter words, choose a word from that array.


            if (usedWords[levelIndex].length == 19) {
                alert(`Well Done!You have completed level ${levelIndex+1}! Choose a different level to continue.`)
            }
            else {
                currentWord = numberOfLetters[levelIndex][wordNumber];
                runGame();
                while (usedWords[levelIndex].includes(currentWord)) {
                    alert("This is already used.");
                    wordNumber = Math.floor(Math.random() * 20);
                    currentWord = numberOfLetters[levelIndex][wordNumber];

                };

                usedWords[levelIndex].push(currentWord);
                console.log(currentWord);

            }
        })
    }
})


function runGame() {
    //create an array of the letters of the word
    currentWord = currentWord.split("")
    document.getElementById("page1").style.visibility = "hidden"
    let lines = ""
    for(let i = 0; i < currentWord.length; i++){
        lines += '<span class = "letter-box" id = "letter-box-'+(i+1)+'"></span>';
    }
    document.getElementById("hangman-word").innerHTML = lines;
    document.getElementById("page2").style.visibility = "visible"
    document.getElementById("used-letters").innerHTML = "";
    document.getElementsByClassName("letter-box").innerHTML = "";
    document.getElementById("input-letter"),focus();
}


function handleKeyPress(event) {
    let keyPressed = event.key.toLowerCase();

    if (currentWord.includes(keyPressed)) {
        correctLetter(keyPressed);

    } else {
        wrongLetter(keyPressed);
        document.getElementById("input-letter").value = ""
    }
}

let incorrectLetters = ""

//this function should find the index of the letter pressed within the word array, 
//and should push the letter into the same number index of the array of that class in html
function correctLetter(parameter) {
    
    let letterIndex = currentWord.indexOf(parameter);
    while (letterIndex > -1) {
        document.getElementsByClassName("letter-box")[letterIndex].innerHTML = parameter
        // Checking that we are not searching past the length of the word array.
        if (letterIndex + 1 >= currentWord.length) {
            letterIndex = -1
        } else {
            letterIndex = currentWord.indexOf(parameter, letterIndex + 1);
        }
    }
}

/**
 * This code updates the hangman image* @param {*} parameter 
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
    //get current source of hangman image
    let hangmanImageSrc = document.getElementById("hangman-image").getAttribute("src");
    //find html of the current source of hangman image
    let lastHangmanImage = hangmanImageSrcs.indexOf(hangmanImageSrc);
    //update hangman image index to the next one in the array
    let newHangmanImage = lastHangmanImage + 1;
    //Change hangman image source to the one in the array with the updated index number
    document.getElementById("hangman-image").setAttribute("src", hangmanImageSrcs[newHangmanImage]);
    //update incorrect letters
    incorrectLetters = incorrectLetters + "    " + parameter;
    //show updated incorrect letters in used-letters div
    document.getElementById("used-letters").innerHTML = incorrectLetters;


    if (newHangmanImage === 11) {
        alert("Sorry, you lose. Click ok to play again!")
        updateLosses();
        chooseWord()
        hangmanImageSrc = document.getElementById("hangman-image").setAttribute("src", hangmanImageSrcs[0]);
    }
}

/**
 * updates losses and runs new game
 */
function giveUp() {
    console.log("give up working");
    updateLosses();
    currentWord = numberOfLetters[levelIndex][wordNumber];
    runGame()
}

/**
 * When Choose different level button clicked, exits current game and goes back to landing page
 */
document.getElementById("choose-different-level").addEventListener("click", function chooseDifferentLevel() {

    document.getElementById("page1").style.visibility = "visible"
    document.getElementById("page2").style.visibility = "hidden"
    console.log("Choose diff level working")
})

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
function updateLosses() {
    let oldLosses = parseInt(document.getElementById("losses").innerText);
    document.getElementById("losses").innerText = ++oldLosses;
}

//this function should check if the letter is correct.
//if the letter is correct, it will call the correct letter functio
//if the letter is incorrect it will cal the wrong letter function

let inputBox = document.getElementById("input-letter")

inputBox.addEventListener('input', function(){
   setInterval(function () {inputBox.value = ""}, 1000)}
)