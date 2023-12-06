/*
consegna:

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

1) genero due dadi con risultati compresi da 1-6
2) confronto i due dadi
3) dichiaro il vincitore
*/
//assegnazione button ad una variabile
const gioca = document.querySelector("button");

//evento click sul pulsante gioca
gioca.addEventListener("click", function(){
    //generazione "dadi" random
    const dadoUtente = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    const dadoComputer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    let risultato ="";
    //controllo giocata
    if (dadoUtente == dadoComputer){
        risultato = "Pareggio!"
    }
    else if (dadoUtente > dadoComputer){
        risultato = "Hai vinto!"
    }
    else{
        risultato ="Hai perso!"
    }
    document.getElementById("risultato").innerHTML = risultato;
})