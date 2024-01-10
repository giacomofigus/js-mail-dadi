/*

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

// DADI 
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

// MAIL
const mails = ["franco", "pippo", "mario", "dario"]

let variabileControllore = false

document.getElementById("sendMail").onclick = function(){
    const mailUserHtml = document.getElementById("mailUser").value

    for (i = 0; i <= mails.length; i++ ){

        if(  mailUserHtml === mails[i] ){
            variabileControllore === true
            console.log(variabileControllore);
        } else {
            variabileControllore === false
        }
        
        
    }

    if( variabileControllore == true ){
        console.log("giusto");
    } else{
        console.log("sbagliato");
    }

    
    
   
}


// for(i = 0; i <= mails.length; i++){
//     console.log(mails);

    
// }



 



