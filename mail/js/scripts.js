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
//array contentente mail che possono accedere al sito
const arrayEmail= ["gino@hotmail.it", "admin@admin.com", "alessio.vietri@boolena.com", "prova@gmail.com"];
//evento click su button accedi 
accedi.addEventListener("click", function(){
    //dichiariazione variabili
    let controllo = false;
    let risultato ="";
    const email = document.getElementById("email").value;
    console.log("email inserita",email, typeof email);
    //ciclo per scorrere l'arrey
    for (let i = 0; i < arrayEmail.length; i++){
        //controllo corrispondenza stringa contenuta in email con l'arrey
        if (email == arrayEmail[i]){
            controllo = true;
        }
    }
    if (controllo == true){
        alert("Accesso riuscito")
        risultato = "Sei collegato con la e-maile: " + email +";"; 
    }
    else{
        alert("Accesso negato")
        risultato = "Non sei collegato riprova con un altra e-mail";
    }
    //outputdati in pagina
    document.getElementById("risultato").innerHTML = risultato;
    //azzeramento campo emai
    document.getElementById("email").value = "";
})
