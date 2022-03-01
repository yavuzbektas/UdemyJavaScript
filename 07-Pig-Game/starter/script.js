'use strict';
// gett element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const section0El = document.querySelector('.player--0');
const section1El = document.querySelector('.player--1');

//set initial values
function firstValues() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  diceEl.classList.add('hidden');
}
firstValues();
let currentScore = 0;
btnRollEl.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;

  let isPlayer0Active = section0El.classList.contains('player--active');
  let isPlayer1Active = section1El.classList.contains('player--active');
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    if (isPlayer0Active) {
      currentScore0El.textContent = currentScore;
    } else {
      currentScore1El.textContent = currentScore;
    }
  } else {
    currentScore = 0;

    if (isPlayer0Active) {
      currentScore0El.textContent = 0;
      section0El.classList.remove('player--active');
      section1El.classList.add('player--active');
    } else {
      currentScore1El.textContent = 0;
      section1El.classList.remove('player--active');
      section0El.classList.add('player--active');
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  let isPlayer0Active = section0El.classList.contains('player--active');
  let isPlayer1Active = section1El.classList.contains('player--active');
  if (isPlayer0Active) {
    score0El.textContent =
      Number(currentScore0El.textContent) + Number(score0El.textContent);
    currentScore0El.textContent = 0;
    section0El.classList.remove('player--active');
    section1El.classList.add('player--active');
    currentScore = 0;
    dice = 0;
  } else {
    score1El.textContent =
      Number(currentScore1El.textContent) + +Number(score1El.textContent);
    currentScore1El.textContent = 0;
    section1El.classList.remove('player--active');
    section0El.classList.add('player--active');
    currentScore = 0;
    dice = 0;
  }
});
btnNewEl.addEventListener('click', function () {
  firstValues();
  console.log('dennn');
  currentScore1El.textContent = 0;
  section1El.classList.remove('player--active');
  section0El.classList.add('player--active');
  currentScore = 0;
});
