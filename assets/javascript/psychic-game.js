
//!!!!!!!!!!!!!!!!!!!!!!!!!!GLOBAL VARIABLES AND FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!

//stores some random words.  Computer guesses from this array.
var randomArray = ["carrot", "lettuce", "brocolli", "onion", "celery", "radish", "kale", "asparagus", "cucumber", "cauliflower", "tomato", "eggplant", "zuchinni", "parsnip", "leek", "pepper"];

//create an array to hold user guesses.
var guessArray = [];

//create an array to hold correct guesses
var correctLettersArray = [];

//create an array to hold incorrect guesses
var wrongLettersArray = [];

//create and array to replace inex position of random word with underscores for HTML
var underScoreArray = [];

//chooses a random word from randomArray
var mysteryWord = randomArray[Math.floor(Math.random() * randomArray.length)];

//Creates a new empty array to hold current word//
var mysteryWordArray = [];

var cabbage = "./assets/images/cabbage.jpg";


//setting up wins, losses, and #of guesses remaining.
var wins = 0;
var lose = 0;
var guessesRemaining =  (Math.floor(mysteryWord.length * 1.5));

//reset game function
function reset() {
   // chooses a random word from randomArray
   
    guessArray = [];
    mysteryWord = randomArray[Math.floor(Math.random() * randomArray.length)];;
    mysteryWordArray = [];
    wordToDisplay = [];
    guessesRemaining = (Math.floor(mysteryWord.length * 1.5))+1;
    correctLettersArray = [];
    };

//declare 
var wordToDisplay = []

//displays underscore array that is same length as mystery word in HTML at id hiddenWord.
function displayWord() {
    wordToDisplay = [];
    for (var i = 0; i < mysteryWordArray.length; i++) {
        if (guessArray.includes(mysteryWordArray[i])) {

            //puts mysteryWordArray letter in wordToDisplay at matching index
            wordToDisplay.push(mysteryWordArray[i]);

        }
        else {
            //puts __ in wordToDisplay at matching index
            wordToDisplay.push("_");

        }
    }

    document.getElementById("hiddenWord").innerHTML = wordToDisplay.join(" , ");
};


//scoring- checks if wordToDisply contains "_" and if guessesRemaining = 0 
function score() {
    if (wordToDisplay.includes("_") === true && guessesRemaining === 0) {
        lose++;
        alert("You lost!");
        reset();  //use reset() to reset game.
        prompt("press any key to start.");
    }
    else if (wordToDisplay.includes("_") !== true && guessesRemaining > 0) {

        wins++;
        alert("You Won!");
        reset();
        prompt("press any key to start."); 
    }
};



//!!!!!!!!!!!!!!START OF JAVASCRIPT GAME!!!!!!!!!!!!!!!!!!!!!!!

// Next, we give JavaScript a function to execute when onkeyup event fires. ****** Ending } is at end of program*********
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    //breaks mysteryWord into individual letters and places into mysteryWordArray//
    mysteryWordArray = mysteryWord.split('');

   //Condition to test if letter was already guessed and return to game without costing user a guess.
    if (guessArray.includes(userGuess) === true) {
        alert("Ooops!  You already guessed that. Try a different letter.");
        return;
    };

    //puts guess into guessArray 
    guessArray.push(userGuess);

    if (mysteryWordArray.indexOf(userGuess) > -1) {
        correctLettersArray.push(userGuess);
    }
    else {
        //puts letters in wrongLettersArray
        wrongLettersArray.push(userGuess);
        guessesRemaining--;
    }

    displayWord();

    score();

    //displays guesses remaing in HTML
    document.getElementById("guessesLeft").innerHTML = "<p> Guesses Remaining:" + guessesRemaining + "</p>";

    //displays wins in HTML
    document.getElementById("wins").innerHTML = "<p>Wins: " + wins + "</p>";

    //displays losses in HTML
    document.getElementById("losses").innerHTML = "<p>Losses: " + lose + "</p>";

    //pushes guessArray into all letters guessed id in HTML.
    document.getElementById("all-letters-guessed").innerHTML = "Letters Guessed: " + guessArray.join(', ');

}; //document.onkeyup curly
