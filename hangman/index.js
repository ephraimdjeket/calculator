const wordsEl = document.querySelector(".word-wrapper");
const hangMan = document.querySelector(".part");
let message = document.querySelector(".message");

var randomAnswers = [
  "stars",
  "universe",
  "venus",
  "mars",
  "pluto",
  "earth",
  "milkyway",
  "galaxy",
];

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = randomAnswers[Math.trunc(Math.random() * randomAnswers.length)];
}

function generateLetterBtns() {
  // Create an array of buttons HTML
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((letter) => {
      return `
        <button id="${letter}" onClick="handleGuess('${letter}')">
          ${letter}
        </button>
      `;
    })
    .join("");

  document.getElementById("buttons-container").innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  // Add the guessed letter to the guessed array if not already present
  if (guessed.indexOf(chosenLetter) === -1) {
    guessed.push(chosenLetter);
    document.getElementById(chosenLetter).setAttribute("disabled", true);

    // Check if the chosen letter is in the answer
    if (answer.toLowerCase().indexOf(chosenLetter.toLowerCase()) >= 0) {
      guessedWord();
      checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
      updateMistakes();
      checkIfGameLost();
      updateHangmanPicture();
      // Update the number of mistakes or any other logic for wrong guesses
    }
  }
}

function updateHangmanPicture() {
  document.getElementById(
    "hangmanPic"
  ).src = `/hangman/images/pic-${mistakes}.png`;
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("buttons-container").innerHTML = "You won!";
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "The answer was " + answer;
    document.getElementById("buttons-container").innerHTML = "You lost!";
  }
}

function guessedWord() {
  // Map through the answer letters to display the correctly guessed ones, otherwise show '_'
  wordStatus = answer
    .split("")
    .map((letter) =>
      guessed.indexOf(letter.toLowerCase()) >= 0 ? letter : " _ "
    )
    .join(""); // Join array into a string

  // Update the inner HTML of the wordSpotlight element
  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}
// Assuming randomWord function is defined elsewhere

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "/hangman/images/pic-0.png";

  randomWord();
  guessedWord();
  updateMistakes();
  generateLetterBtns();
}

document.getElementById("maxWrong").innerHTML = maxWrong;

randomWord();
generateLetterBtns();
guessedWord();
