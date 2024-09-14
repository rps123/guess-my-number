let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const guessRemain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// reset button .............
const resetButton = document.querySelector('.reset');


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number');
        userInput.value = " ";
    } else if(guess < 1){
        alert('Please Enter Number more than 1');
        userInput.value = " ";                      // clear text field
    } else if(guess > 100){
        alert('Please Enter Number less than 100');
        userInput.value = " ";
    } else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over!. Random Number was:  ${randomNumber}`);
            endGame(guess);
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congrats!, 💖You Guessed the Number`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is TOO Low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is TOO High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    guessRemain.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    //p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;       // to start new  game..
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

// function newGame(){
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     guessRemain.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);
//     displayMessage('');

//     playGame = true
//     });
// }


function newGame(){
    resetButton.addEventListener('click', function (re) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        guessRemain.innerHTML = `${10 - numGuess}, `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        displayMessage('');

        playGame = true;
    });
}

