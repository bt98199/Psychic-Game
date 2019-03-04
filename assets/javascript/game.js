  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var guessHistoryArray = [];

  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var wins = 0;
  var losses = 0;
  var guesses = 9;
  var letterToGuess = undefined;


  // Create variables that hold references to the places in the HTML where we want to display things.
  var directionsText = document.getElementById("directions-text");
  var userChoiceText = document.getElementById("userchoice-text");
  var computerChoiceText = document.getElementById("computerchoice-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessesText = document.getElementById("guesses-left");
  var guessHistoryText = document.getElementById("guess-history");

// Defining Functions
//Build the array of past guesses


function psyChoice() {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);
};

function reset() {
  guesses = 9;
  guessHistoryArray = [];
  psyChoice();
}

  // Sets the Psychic choice. 
  psyChoice();

  //******* This function is run whenever the user presses a key*******body*****//
  document.onkeyup = function (event) {

  // Determines which key was pressed. It is modified to convert all entries to lower case
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // Build initial history array
  guessHistoryArray.push(userGuess);
//  guessHistoryBuild();
  
  // 3 possible out comes, a win, a loss of guess, or a loss
  if (guesses === 1) {
          losses++;
          document.querySelector('#losses-text').innerHTML = "Losses: " + losses;
          alert("You lost, Carnac");
          reset();
        } else if (userGuess === letterToGuess) {
          wins++;
          document.querySelector('#wins-text').innerHTML = "Wins: " + wins;
          alert("You got it, Kreskin!");
          reset();
        } else {
        guesses--;
     }

// Hide the directions
// directionsText.textContent = "";

          // Display the user and computer guesses, and wins/losses/ties.
          userChoiceText.textContent = "You chose: " + userGuess;
          computerChoiceText.textContent = "The computer chose: " + letterToGuess;
          winsText.textContent = "Wins: " + wins;
          lossesText.textContent = "Losses: " + losses;
          guessesText.textContent = "Guesses Left: " + guesses;
          document.getElementById('guess-history').innerHTML = "Your Guesses so far: " + (guessHistoryArray.join(", "));

}

