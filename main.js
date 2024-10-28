'use strict';
let randomValue = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let gameScore = document.querySelector('.score');
let body = document.querySelector('body');
let highScore = document.querySelector('.highscore');
let guess = document.querySelector('.guess');
// ** check button 
document.querySelector('.check').addEventListener('click', () => {
  const insertedValue = guess.value;

  if (!insertedValue) {
    message.textContent = 'please, insert a number';
    return;
  }
  if (score > 0) {
    if (randomValue == insertedValue) {
      message.textContent = 'True Number !';
      number.textContent = randomValue;
      body.style.backgroundColor = '#60b347';
      number.style.width = '25rem';
    } else if (insertedValue <= randomValue) {
      message.textContent =
        'False Number, increase number!';
      score--;
      gameScore.textContent = score;
    } else if (insertedValue >= randomValue) {
      message.textContent =
        'False Number, decrease number!';
      score--;
      gameScore.textContent = score;
    }
  } else if (score == 0) {
    message.textContent = 'Try Again !';
    number.textContent = randomValue;
  }
});
// ** again button 
document.querySelector('.again').addEventListener('click', () => {
  randomValue = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';

  if (highScore.textContent < score) {
    highScore.textContent =
      gameScore.textContent;
  }
  message.textContent = 'Start guessing...';
  gameScore.textContent = 20;
  guess.value = '';
  number.textContent = '?';
});