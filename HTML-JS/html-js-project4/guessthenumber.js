let randomnumber = parseInt(Math.random()*100+1); 

let form = document.querySelector('.form');
let guessfield= document.querySelector('#guessField')
let submit= document.querySelector('#subt')
let guesses= document.querySelector('.guesses')
let remaining= document.querySelector('.lastResult')
let lowOrHi= document.querySelector('.lowOrHi')

let number_of_guess=10;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let guess = parseInt(guessfield.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    number_of_guess--;
    guesses.textContent += `  ${guess} `;       //guesses field stores the guees numbers (previous guess field)
    remaining.textContent = number_of_guess;    // reamimg field , used to show remaning guess attempts

    if (guess === randomnumber) {
        lowOrHi.textContent = 'Congratulations! You guessed the correct number!';
        gameOver();
    } else if ( number_of_guess=== 0) {
        lowOrHi.textContent = `Game over! The correct number was ${randomnumber}.`;
        gameOver();
    } else {
        lowOrHi.textContent = guess < randomnumber ? 'Last guess was Too low!' : 'Last guess was Too high!';
    }

    guessfield.value = '';              //this field clears the guess field after every guess
});

// this function disable the guessfield and submit button 
function gameOver() {
    guessfield.disabled = true;
    submit.disabled = true;
}