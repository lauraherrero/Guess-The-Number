'use strict';

const elementInputNumber = document.querySelector('#input-number');
const elementButton = document.querySelector('#btn');
const elementTextClue = document.querySelector('#clue');



function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  
}


const tryIt = () => {
  console.log(elementInputNumber.value);
  console.log(getRandomNumber(100));
  
  compare ();
} 

  function compare (){
    const randomNumber = getRandomNumber(100);
    
    if (elementInputNumber.value > randomNumber){
      elementTextClue.innerHTML = 'Demasiado alto';
    } else if (elementInputNumber < randomNumber){
      elementTextClue.innerHTML = 'Demasiado bajo';
    } else if (elementInputNumber === randomNumber){
      elementTextClue.innerHTML = 'Has ganado campeona!!!!';
    } else if (elementInputNumber < 1 || elementInputNumber > 100){
      elementTextClue.innerHTML = 'El número debe estar entre 1 y 100';
    }
  }



elementButton.addEventListener('click', tryIt);