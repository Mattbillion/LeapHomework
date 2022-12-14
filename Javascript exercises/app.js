let input = "";
let counter = [];
let random = Math.floor(Math.random() * 10 + 1);
let health = 5;
let guess = "";
console.log(guess);

startGame();

function startGame() {
  input = window.prompt("Enter your number");
  if (health <= 5) {
    check();
  } if (health <= 0) {
    endGame();
  }
}


function check () {
  if (input == random) {
    console.log("U win");
  
  } if (input > random) {
    health = health - 1;
    console.log("Ih baina");

  } if (input < random) {
    health = health - 1;
    console.log("Baga baina");
  }
  counter.push(input);
  console.log("Generated number: ", random);
  console.log("You have: ", health, " lives");

}

startGame();








function endGame() {
  console.log("NOOOB");
}


// function checkGuess() {
//   const userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = 'Previous guesses: ';
//   }
//   guesses.textContent += `${userGuess} `;

//   if (userGuess === randomNumber) {
//     lastResult.textContent = 'Congratulations! You got it right!';
//     lastResult.style.backgroundColor = 'green';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = '!!!GAME OVER!!!';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else {
//     lastResult.textContent = 'Wrong!';
//     lastResult.style.backgroundColor = 'red';
//     if (userGuess < randomNumber) {
//       lowOrHi.textContent = 'Last guess was too low!';
//     } else if (userGuess > randomNumber) {
//       lowOrHi.textContent = 'Last guess was too high!';
//     }
//   }

//   guessCount++;
//   guessField.value = '';
//   guessField.focus();
// }
