document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            //this.getAttribute("data-type")
            let gameLevel = this.getAttribute("data-type");
            alert(`You chose ${gameLevel}`)
        })

        }
    }
)


function runGame() {

}

function wrongLetter() {

}

function gameLevel() {

    let sixLetterWords = ["magic", "bright", "giggle", "puzzle", "jungle", "wisdom", "animal", "cheese", "monkey", "rocket", "dolphin", "pirate", "garden", "quench", "sphere", "unpack", "yellow", "father", "window", "banana"]
    let sevenLetterWords = ["desktop", "adverse", "benefit", "exclude", "edition", "fifteen", "mascara", "generic", "acrylic", "cryptic", "removed", "diamond", "invalid", "ashamed", "steward", "mustard", "leisure", "keynote", "turmoil", "whether"]
    let eightLetterWords = ["absolute", "mountain", "sentence", "children", "although", "analysis", "physical", "remember", "marriage", "consider", "presence", "birthday", "dialogue", "frequent", "register", "universe", "whatever", "scenario", "educator", "discover"]
    let nineLetterWords = ["religious", "operation", "developed", "president", "published", "important", "beautiful", "otherwise", "explained", "confusion", "introduce", "wonderful", "complaint", "marketing", "something", "certainly", "universal", "yesterday", "vegetable", "technique"]
    let tenLetterWords = ["agriculture", "consumption", "theoretical", "imagination", "limitations", "expenditure", "integration", "perspective", "destruction", "probability", "governments", "personality", "wakefulness", "undisturbed", "variational", "ventilating", "terminology", "restriction", "manufacture", "lengthening", "justifiably"]

}

function giveUp() {

}

function chooseDifferentLevel() {

}

function updateScore() {

}

function correctLetter() {

}

function incorrectLetter() {

}