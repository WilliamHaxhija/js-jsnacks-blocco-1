//Creo una variabile sum e le assegno valore 0
let sum = 0;
//Creo un ciclo di 5 iterazioni
for ( let i = 0; i < 5; i++) {
    // - Creo un prompt all'interno del ciclo all'interno del quale l'utente inserisce un numero
    const userNumber = parseInt(prompt('Scrivi un numero'));
    //Riassegno all'interno del ciclo la variabile sum uguale a se stessa + il numero inserito dall'utente
    sum += userNumber;
}
//Stampo fuori dal ciclo la somma di tutti i numeri in console
console.log(sum);