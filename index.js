var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var wordToGuess = document.getElementById('word-to-guess')
var remainingGuessDisplay = document.getElementById('remaining-guesses')
var incorrectLettersDisplay = document.getElementById('incorrect-letters')
var previousWord = document.getElementById('previous-word')
var winDisplay = document.getElementById('wins')
var lossDisplay = document.getElementById('losses')

var wins = 0
var losses = 0
var remainingGuesses 
var correctLetters
var incorrectLetters
var currentWord
var displayWord

// Create a new game (user wins, losess or page loads)
function newGame() {
currentWord = words[Math.floor(Math.random() * words.length)]
correctLetters = []
incorrectLetters = []
remainingGuesses = 10
updateGuessesInfo()
}


 // Update user interface depending on what user types
function updateGuessesInfo(){
displayWord = ""

for (var i = 0; i < currentWord.length; i++){
  if(correctLetters.indexOf(currentWord[i]) > -1){
displayWord += currentWord[i]
} else {
  displayWord += '_'
 }
}

remainingGuessDisplay.textContent = remainingGuesses
incorrectLettersDisplay.textContent = incorrectLetters.join (",  ")
wordToGuess.textContent = displayWord
}


//Key press functionality
document.onkeyup = function(e){
  var guessedLetter = e.key.toLowerCase()

  if(!/^[a-z]{1}$/g.test(guessedLetter)) return

  if(currentWord.includes(guessedLetter)){
    correctLetters.push(guessedLetter)
  } else if (!currentWord.includes(guessedLetter)){
    incorrectLetters.push(guessedLetter)

    remainingGuesses--
  }
  updateGuessesInfo()

  if(displayWord === currentWord){
      wins++
      winDisplay.textContent = wins
      previousWord.textContent = currentWord
      newGame()
  }
  if (remainingGuesses <= 0){
    losses++
    lossDisplay.textContent = losses
    previousWord.textContent = currentWord
    newGame()
  }
}

newGame()
