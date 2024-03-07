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

    const boxDomElement = document.createElement('div');

    //if (number % 15 === 0)
    if (number % 3 === 0 && number % 5 === 0) {
        boxDomElement.classList.add('box', 'box--fizzbuzz');
        boxDomElement.innerHTML = 'FizzBuzz';
        containerDOMElement.append(boxDomElement);
    } else if (number % 5 === 0) {
        boxDomElement.classList.add('box', 'box--buzz');
        boxDomElement.innerHTML = 'Buzz';
        containerDOMElement.append(boxDomElement);
    } else if (number % 3 === 0) {
        boxDomElement.classList.add('box', 'box--fizz');
        boxDomElement.innerHTML = 'Fizz';
        containerDOMElement.append(boxDomElement);
    } else {
        boxDomElement.classList.add('box');
        boxDomElement.innerHTML = number;
        containerDOMElement.append(boxDomElement);
    }


}
