// Variables
var wins = 0;
var guessesRemaining = 10;
var guessesRemainingHtml = document.getElementById("remaining");
var currentWordHTML = document.getElementById("current");
var guesses = "";
guessesRemainingHtml.innerHTML = 10;
var alph = ("abcdefghijklmnopqrstuvwxyz").split("");
var words= [
    {
        question: "question 1",
        answer: "shenanigans"
    },
    {
        question: "question 2",
        answer: "the terminator"
    },
    {
        question: "question 3",
        answer: "baseball"
    },
    {
        question: "question 4",
        answer: "water baloons"
    },
    {
        question: "question 5",
        answer: "stuff"
    },
]
console.log(guessesRemaining)

const doTheStuff = () => {

    var string = "";

    var randoKey = words[Math.floor(Math.random() * words.length)];
    console.log(randoKey.question);
    console.log(randoKey.answer);

    var reset = () => {
        console.log("hi");
    }

    console.log(string)
    for (let i = 0; i < randoKey.answer.length; i++) {
        if (randoKey.answer[i] === " ") {
            string = string += " "
        } else {
            string = string += "_"
        }
    } 
    
    document.onkeyup = (event) =>  {
        var userGuess = event.key;
        console.log(userGuess);
        
        if (alph.includes(userGuess)  ) {
            for (let j = 0; j < randoKey.answer.length; j++) {
                if (userGuess === randoKey.answer[j]) {
                    string += userGuess;
                    console.log(string);
                }
            }
        }  
    }

    console.log(string)
    guessesRemainingHtml.innerHTML = guessesRemaining;
    currentWordHTML.innerHTML = string;
    // console.log(currentWordHTML)
}

doTheStuff();