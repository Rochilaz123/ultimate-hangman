document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button")
    for (let button of buttons) {
        button.addEventListener("click", function(){
            let gameLevel = this.getAttribute("data-type");
            function gameToRun()
        })

        }
    }
)


function runGame() {

}
 
function wrongLetter() {

}

function gameToRun() {

    let numberOfLetters = [
    ["magic", "bright", "giggle", "puzzle", "jungle", "wisdom", "animal", "cheese", "monkey", "rocket", "dolphin", "pirate", "garden", "quench", "sphere", "unpack", "yellow", "father", "window", "banana"],
    ["desktop", "adverse", "benefit", "exclude", "edition", "fifteen", "mascara", "generic", "acrylic", "cryptic", "removed", "diamond", "invalid", "ashamed", "steward", "mustard", "leisure", "keynote", "turmoil", "whether"],
    ["absolute", "mountain", "sentence", "children", "although", "analysis", "physical", "remember", "marriage", "consider", "presence", "birthday", "dialogue", "frequent", "register", "universe", "whatever", "scenario", "educator", "discover"],
    ["religious", "operation", "developed", "president", "published", "important", "beautiful", "otherwise", "explained", "confusion", "introduce", "wonderful", "complaint", "marketing", "something", "certainly", "universal", "yesterday", "vegetable", "technique"],
    ["agriculture", "consumption", "theoretical", "imagination", "limitations", "expenditure", "integration", "perspective", "destruction", "probability", "governments", "personality", "wakefulness", "undisturbed", "variational", "ventilating", "terminology", "restriction", "manufacture", "lengthening", "justifiably"]
    ]

    let wordNumber = Math.floor(Math.random() * 20)


    let buttons = document.getElementsByTagName("button")
    for (let button of buttons) {
        button.addEventListener("click", function(event){
            let gameLevel = this.getAttribute("data-type");
            if (data-type === "6 letter words"){
               let word = numberOfLetters[0]
            } else if (data-type === "7 letter words") {
                let word = numberOfLetters[1]
            } else if (data-type === "8 letter words") {
                let word = numberOfLetters[2]
            } else if (data-type === "9 letter words") {
                let word = numberOfLetters[3]
            } else if (data-type === "10 letter words") {
                let word = numberOfLetters[4]
            }
            alert(`The word is ${"word"}`)
        })
    }  
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

function correctLetter() {

}

function incorrectLetter() {

}