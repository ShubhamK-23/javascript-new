let RandomNum = parseInt(Math.random()*100+1)
const inputNumber = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const prevGuesses = document.querySelector('.guesses')
const remainigGuesses = document.querySelector('.lastResult')
const hintMessage = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let guessCount = 1

let playGame = true;

if(playGame){
    submit.addEventListener( 'click', function(e) {
        e.preventDefault()
        const  userInput = parseInt(inputNumber.value)
        validateGuess(userInput)

    } )
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || 100 < guess) {
        alert("Please enter a number between 1 and 100")
    } else 
        {
            prevGuess.push(guess)
            if (guessCount == 10)
            {
                displayGuess(guess)
                displayMessage (`Game Over, Correct number was ${RandomNum}`)
                endGame();
            } else {
                displayGuess(guess)
                checkGuess(guess)
            }
        }   

}

function checkGuess(guess) {
    if (guess === RandomNum) {
        displayMessage(`Well Done, You guessed it right`)
        endGame()
    
    }else {
        if (guess > RandomNum) {
            displayMessage(`Too high`)
        } else { 
            displayMessage(`Too low`)
    }

}
}

function displayGuess( guess) {
    inputNumber.value = ''
    prevGuesses.innerHTML += `${guess},`;
    guessCount++;
    remainigGuesses.innerHTML = `${11-guessCount}`

}

function displayMessage (message) {
    hintMessage.innerHTML =`<h2>${message}</h2>`
}

function endGame() {
    inputNumber.value = ''
    inputNumber.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame() {
    const newGameBtn = document.querySelector('#newGame') 
    newGameBtn.addEventListener('click', function(e) {
        RandomNum = parseInt(Math.random()*100+1)
        prevGuess = []
        guessCount = 1

        prevGuesses.innerHTML = ''
        remainigGuesses.innerHTML = `${11 - guessCount}`
        inputNumber.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        startOver.removeChild(p) 
        playGame = true;
    })


}