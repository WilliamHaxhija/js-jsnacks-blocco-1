//Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

//Creo un array vuoto
const numbers = [];
//Chiedo all'utente 5 numeri
  // - Creo un prompt all'interno di un ciclo for che esegue 5 iterazioni
for (let i = 0; i < 5; i++) {
    const userNumber = prompt('Inserisci un numero');
//Inserisco i numeri in un array, senza creare dupilcati
  //Con la unzione .includes controllo se il numero è già presente nell'array
    numbers.includes(userNumber);
    // - Se non c'è, lo inserisco nell'array con la funzione .push
    if (numbers.includes(userNumber) === false) {
        numbers.push(userNumber);
    }
}
console.log(numbers);
