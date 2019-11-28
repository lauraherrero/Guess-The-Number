'use strict';

const elementInputNumber = document.querySelector('#input-number');
const elementButton = document.querySelector('#btn');
const elementTextClue = document.querySelector('#clue');
const elementTextTry = document.querySelector('#count-number');
let attemps = 0;
const maxNumber = 100;

//Creo una función para que me genere un número aleatorio con valor máximo 100.
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);

}
//Guardo el número aleatorio generado en una constante que usaré después para checkear con el número del input.
const randomNumber = getRandomNumber(maxNumber);

//Creo una función que me incremente el número de intentos para mi contador.
const increaseAttemps = () => {
  attemps++;
  elementTextTry.innerHTML = 'Tú número de intentos es: ' + `${attemps}`;
}

//Creo una función que va a comparar el valor del input con el número generado aleatoriamente. Dependiendo del valor, me dará unas pistas u otras para saber si estoy por encima, por debajo, el valor no es correcto o si se ha acertado
const checkUserNumber = () => {
  if (elementInputNumber.value > maxNumber || elementInputNumber.value === '' || elementInputNumber.value <=0){
    elementTextClue.innerHTML = 'Tu número debe de estar entre 1 y 100';
  } else if (elementInputNumber.value > randomNumber) {
    elementTextClue.innerHTML = 'Tu número es demasiado alto';
  } else if (elementInputNumber.value < randomNumber) {
    elementTextClue.innerHTML = 'Tu número es demasiado bajo';
  } else {
    elementTextClue.innerHTML = 'Has ganado campeona!!!!!!';
  }
}

//Muestro en mi consola el número aleatorio
console.log(randomNumber);

//Creo mi función manejadora que funciona con el evento del click en el botón y que contiene las funciones que aumentan mi contador y realizan el checkeo.
function getClickHandler () {
  increaseAttemps ();
  checkUserNumber ();
}


elementButton.addEventListener('click', getClickHandler);