'use strict';

const elementInputNumber = document.querySelector('#input-number');
const elementButton = document.querySelector('#btn');
const elementTextClue = document.querySelector('#clue');
const elementTextTry = document.querySelector('#game-number');
let attemps = 0;


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  
}

function increaseAttemps() {
  if(attemps < 1){
    attemps++;
  }
  elementTextTry.innerHTML = 'Tú número de intentos es: ' + `${attemps++}`;
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function tryIt () {
  console.log(elementInputNumber.value);
  console.log(getRandomNumber(100));
  
  compare (randomNumber);
  increaseAttemps ();


  function compare (num) {

    if (elementInputNumber.value > randomNumber){
      elementTextClue.innerHTML = 'Demasiado alto';
    } else if (elementInputNumber < randomNumber){
      elementTextClue.innerHTML = 'Demasiado bajo';
    } else if (elementInputNumber === randomNumber){
      elementTextClue.innerHTML = 'Has ganado campeona!!!!';
    } else {elementTextClue.innerHTML = 'El número debe estar entre 1 y 100';
    }
  }
}
 



elementButton.addEventListener('click', tryIt);