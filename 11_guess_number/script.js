'use strict';

let guess = document.querySelector('.guess');
let btn = document.querySelector('.check');
let message = document.querySelector('.message');
let imagine = Math.ceil(Math.random() * 20);
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let again = document.querySelector('.again');
let num = 20;

function checkNum() {
  if (imagine == guess.value) {
    message.textContent = '🎉 You lucky bastard!';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (imagine > guess.value) {
    message.textContent = '📉Too low...';
  } else if (imagine < guess.value) {
    message.textContent = '📈Too high...';
  }
  if (guess.value == '') {
    message.textContent = '⛔️ No number!!!';
  }
  if (imagine != guess.value) {
    score.textContent = num--;
  } else {
    score.textContent = num;
    if (score.textContent > highscore.textContent) {
      highscore.textContent = num;
    }
  }
}
function playAgain() {
  message.textContent = 'Choose a number!';
  score.textContent = 20;
  num = 20;
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}

btn.addEventListener('click', checkNum);
again.addEventListener('click', playAgain);
