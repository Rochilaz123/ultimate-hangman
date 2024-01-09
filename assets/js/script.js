document.addEventListener("DOMContentLoaded", function chooseLevelWord(){

    let buttons = document.getElementsByTagName("button")

    
    for (let button of buttons) {

        let numberOfLetters = [
            ["magic", "bright", "giggle", "puzzle", "jungle", "wisdom", "animal", "cheese", "monkey", "rocket", "dolphin", "pirate", "garden", "quench", "sphere", "unpack", "yellow", "father", "window", "banana"],
            ["desktop", "adverse", "benefit", "exclude", "edition", "fifteen", "mascara", "generic", "acrylic", "cryptic", "removed", "diamond", "invalid", "ashamed", "steward", "mustard", "leisure", "keynote", "turmoil", "whether"],
            ["absolute", "mountain", "sentence", "children", "although", "analysis", "physical", "remember", "marriage", "consider", "presence", "birthday", "dialogue", "frequent", "register", "universe", "whatever", "scenario", "educator", "discover"],
            ["religious", "operation", "developed", "president", "published", "important", "beautiful", "otherwise", "explained", "confusion", "introduce", "wonderful", "complaint", "marketing", "something", "certainly", "universal", "yesterday", "vegetable", "technique"],
            ["agriculture", "consumption", "theoretical", "imagination", "limitations", "expenditure", "integration", "perspective", "destruction", "probability", "governments", "personality", "wakefulness", "undisturbed", "variational", "ventilating", "terminology", "restriction", "manufacture", "lengthening", "justifiably"]
            ]

        let wordNumber = ""

        let usedWords = []
    
        button.addEventListener("click", function chooseWord(){

            wordNumber = Math.floor(Math.random() * 20)
            
            let gameLevel = this.getAttribute("data-type");

            if (gameLevel === "6 letter words"){
            let word = numberOfLetters[0][wordNumber]
            if (usedWords.includes(word)){
                //call function to run game
                console.log(word + " already used")
                if(usedWords.length = 19){
                    alert("Well Done!You have completed Level 1! Choose a different level to continue.")
                }
            } else {
                usedWords.push(word) 
                console.log(word) 
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


function runGame() {

}
 
function wrongLetter() {
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
    //this if statement should change the image src if letter is incorrect
    if(""){
        
        document.getElementById("hangman-image").setAttribute("src","")
    }

}

function gameToRun() {

}

function level1 () {
     console.log(working)
    //let wordNumber = Math.floor(Math.random() * 20)
    //let newWord = [wordNumber]
}

function giveUp() {

}

function chooseDifferentLevel() {

}

function updateScore() {

}

//this function should check if the letter is correct.
//if the letter is correct, it will call the correct letter functio
//if the letter is incorrect it will cal the wrong letter function

function checkLetter() {
    addEventListener
}

function correctLetter() {

}

function incorrectLetter() {

}