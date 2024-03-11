//Calcola la somma e la media dei primi 10 numeri.

//Creo una variabile
let sum = 0;
//Creo ciclo for con 10 iterazoni
for (let i = 1; i <= 10; i++) {
    //Dentro al ciclo stampo un numero per ogni iterazone e lo assegno alla variabile sommandolo la valore precedente della variabile
    sum += i;
    console.log(i);
}
console.log(sum);
//Fuori dal ciclo divido per 10 la variabile e trovo la media
sum = sum / 10;
console.log(sum);