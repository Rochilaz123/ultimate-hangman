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
let usedWords = []

let currentWord = ""

let gameLevel

let levelIndex = 0;

/**
 * once dom content loaded, the following code will be called
 */
document.addEventListener("DOMContentLoaded", function (){

    let buttons = document.getElementsByTagName("button")

    /**
     * When button is clicked, a randon number is generated to choose the number word from the array of words, 
     * and the index of the array numberOfLetters is determined by the variable gameLevel based on the if statement
     */
    for (let button of buttons) {

        button.addEventListener("click", function chooseWord(){
            if (gameLevel === "6 letter words") {
                        levelIndex = 0;
            } else if (gameLevel === "7 letter words") {
                        levelIndex = 1;
            } else if (gameLevel === "8 letter words") {
                        levelIndex = 2;
            } else if (gameLevel === "9 letter words") {
                        levelIndex = 3;
            } else if (gameLevel === "10 letter words") {
                        levelIndex = 4;
            }

            wordNumber = Math.floor(Math.random() * 20);
            
            gameLevel = this.getAttribute("data-type");
            // if the level chosen is 6 letter words, choose a word from that array.

            
                if (usedWords.length == 19) {
                    alert("Well Done!You have completed Level 1! Choose a different level to continue.")
                }
                else{
               currentWord = numberOfLetters[levelIndex][wordNumber];
               runGame();
                   while(usedWords.includes(currentWord)){
                        alert("This is already used.");                       
                        wordNumber = Math.floor(Math.random() * 20);
                        currentWord = numberOfLetters[levelIndex][wordNumber];
                        
                        };
           
                   usedWords.push(currentWord);
                   console.log(currentWord);
                   
               }


            
        }) 
    }
})


function runGame() {
    //create an array of the letters of the word
    currentWord = currentWord.split("")
    document.getElementById("page1").style.visibility="hidden"
    document.getElementById("page2").style.visibility="visible"
// i am not sure how to make this function. i have an array of the letters of the word.
//i have an event listener below for key presses, but i don't think it works.
//I need to say on event of key pressed: if the key is in the wordArray, get index number
//maybe i can make an array of spans to put the letters into on the dom and i can use that index number to push it to the correct number span
//(maybe by using class, not id?)
//if it's not correct i need to push the letter to the div used-letters and call wrongLetter() to change image
    
    
}


function handleKeyPress (event){
    let keyPressed = event.key.toLowerCase();

    if (currentWord.includes(keyPressed)){
      correctLetter();
    } else {
      wrongLetter(keyPressed);
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

    let hangmanImageSrc = document.getElementById("hangman-image").getAttribute("src");

    let lastHangmanImage = hangmanImageSrcs.indexOf(hangmanImageSrc);

    let newHangmanImage = lastHangmanImage + 1;
    
    document.getElementById("hangman-image").setAttribute("src", hangmanImageSrcs[newHangmanImage]);

    console.log(`Sorry...${parameter} is not in the word`);

    if(newHangmanImage === "assets/images/hangman/10.jpg" ) {
        updateLosses();
        //run new game
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
 * When Choose different level button clicked, exits current game and goes back to landing page and adds one to losses.
 */
document.getElementById("choose-different-level").addEventListener("click", function chooseDifferentLevel() {
    
    updateLosses();
    document.getElementById("page1").style.visibility="visible"
    document.getElementById("page2").style.visibility="hidden"
    console.log("Choose diff level working")
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

}

function correctLetter() {
    
}