/*
**Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

**Mail**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

**Consigli del giorno:**
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/ 
let x;
let y;

document.getElementById("generateBtn").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dado-1").innerHTML = x;
    document.getElementById("dado-2").innerHTML = y;

    if(x > y){
        document.getElementById("win-draw").innerHTML = "Ha vinto user 1!"
    } else if (x < y){
        document.getElementById("win-draw").innerHTML = "Ha vinto user 2!"
    } else{
        document.getElementById("win-draw").innerHTML = "Pareggio!"
    }
}



