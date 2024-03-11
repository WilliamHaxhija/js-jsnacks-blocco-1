//Dato un array contenente 10 numeri, stampare in console il numero più grande.

const number1To10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let biggerNumber = number1To10[0];
for (let i = 1; i < number1To10.length; i++) {
    if (number1To10[i] > biggerNumber) {
        biggerNumber = number1To10[i];
    }
}
console.log(number1To10);
console.log(biggerNumber + " è il numero più grande dell'array");