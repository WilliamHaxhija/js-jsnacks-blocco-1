//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

//Creo un array vuoto
const oddNumbers = [];
//Creo un ciclo con 6 iterazioni
for ( let i = 0; i < 6; i++) {
    //Creo un prompt all'interno del ciclo e chiedo un numero all'utente
    const userNumber = parseInt(prompt('Digita un numero'));
    //Creo una condizione per la quale se il numero è dispari viene inserito all'interno dell'array
    if (userNumber % 2 != 0) {
        oddNumbers.push(userNumber);
    }
}
console.log(oddNumbers);