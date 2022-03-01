'use strict';
const numberValue = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(numberValue);
  if (typeof guess !== 'number' || guess > 20) {
    console.log('please enter a number between 1-20');
    document.querySelector('.message').textContent =
      'please enter a number between 1-20';
  } else if (guess === numberValue) {
    console.log('you win');
    document.querySelector('.message').textContent = 'you win';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    highScore = Number(localStorage.getItem('highScore'));
    document.querySelector('.highscore').textContent = highScore;
    console.log(highScore);
    if (score >= highScore) {
      highScore = Number(localStorage.setItem('highScore', score));
    }
  } else if (guess > numberValue) {
    console.log('High number');
    document.querySelector('.message').textContent = 'High number';
    score--;
  } else if (guess < numberValue) {
    console.log('Low number');
    document.querySelector('.message').textContent = 'Low number';
    score--;
  }
  document.querySelector('.score').textContent = score;
  if (score > 1) {
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  highScore = localStorage.getItem('highScore');
  document.querySelector('.highscore').textContent = highScore;
  location.reload();
});
