/*
consegna:
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

1) Chiedi all'utente la sua email
2) controlla che sia nella lista di chi può accedere
3) stampa un messaggio appropriato sull'esito del controllo

*/
//input dati
const accedi = document.querySelector("button");
console.log(accedi);
const arrayEmail= ["gino@hotmail.it", "admin@admin.com"];
//evento click su button accedi 
accedi.addEventListener("click", function(){
    const email = document.getElementById("email");
    console.log(email);
    for (let i = 0; i < arrayEmail.length; i++){
        console.log(arrayEmail[i])
    }

})
