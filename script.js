'use strict';
const getRandomInteger = () => Math.floor(Math.random() * 20 + 1);
let randomNumber = getRandomInteger();
const score = document.getElementById('score');
const message = document.getElementById('message');
const gussedNumber = document.getElementById('gussedNumber');
const highScore = document.getElementById('highscore');
const checkButton = document.getElementById('checkButton');
let firstBodyStyle = document.body.style;
const checkWinner = function (winned) {
  if (score.number > Number(highScore.innerHTML))
    highScore.innerHTML = score.number;
  document.body.style.backgroundColor = winned ? '#008000' : '#Ff0000';
  message.innerHTML = winned ? 'You gessed the number' : 'Sorry, try again';
  show(true);
  gussedNumber.style.active = false;
};

const checkNumber = function () {
  score.setNumber(score.innerHTML);
  const guess = Number(gussedNumber.value);
  if (guess < 1 || guess > 20) {
    message.innerHTML = 'Invalid number has to be from 1 to 20';
    return;
  }

  let winned = guess === randomNumber;
  if (!winned && score.number) {
    guess > randomNumber
      ? (message.innerHTML = 'Too high')
      : (message.innerHTML = 'Too low');
    score.setNumber((score.number -= 1));
  } else {
    checkWinner(winned);
  }
};

const reset = function () {
  document.body.style = firstBodyStyle;
  gussedNumber.value = '';
  randomNumber = getRandomInteger();
  score.setNumber(20);
  showAgain(false);
};

const show = function (status) {
  Array.from(document.getElementsByClassName('again')).forEach(element => {
    element.style.display = status ? 'block' : 'none';
  });
  checkButton.active = !status;
};
score.setNumber = function (number) {
  this.number = Number(number);
  this.innerHTML = String(number);
};

document.getElementById('resetButton').addEventListener('click', reset);

checkButton.addEventListener('click', checkNumber);
//gussedNumber.addEventListener('keyup', checkNumber);
