/*
 * Fizz Buzz: 
 * Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione 
 * appenda un elemento html al container con uno stile differente 
 * a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 
 * e per i valori che sono sia multipli di 3 che di 5.
*/

const maxIterations = 100;
const containerDOMElement = document.getElementById('container');

for (let number = 1; number <= maxIterations; number++) {

    //if (number % 15 === 0)
    if (number % 3 === 0 && number % 5 === 0) {
        containerDOMElement.innerHTML += `<div class="box box--fizzbuzz">FizzBuzz</div>`;
    } else if (number % 5 === 0) {
        containerDOMElement.innerHTML += `<div class="box box--buzz">Buzz</div>`;
    } else if (number % 3 === 0) {
        containerDOMElement.innerHTML += `<div class="box box--fizz">Fizz</div>`;
    } else {
        containerDOMElement.innerHTML += `<div class="box">${number}</div>`;
    }

}
