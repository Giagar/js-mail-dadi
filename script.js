// email autorizzate e variabili
var emails = ["dado", "altrodado@dadolandia.com"];
var checkEmail = false;
var result;

// evento che gestisce l'attivazione del login e del gioco
document.querySelector(".play").addEventListener("click", function() {
    // prompt per email utente
    var userEmail = prompt("Inserire la propria email (dado@dadolandia.com): ");

    // check per verificare email autorizzata
    for (var m = 0; m < emails.length; m++) {
        if(emails[m] === userEmail) {
            checkEmail = true; 

// ? Come faccio a farlo eseguire prima di alert?
            document.querySelector(".inner-container").classList.add("hidden");
            alert("Ok, preparati a giocare!");
        }
    }

    // in caso di email autorizzata
    if (!checkEmail) {
        alert("L'email inserita non è fra quelle autorizzate. Riprova a fare il login.");
    } else {
        
        //test dei risultati: la formula restituisce sempre (campione di mille numeri) numeri < 7 e >=1 ?
        // var testArray = [];

        // for(var i = 0; i < 1000; i++ ) {
        //     testArray.push(Math.floor(Math.random() * (7 - 1) + 1));
        // }

        // for(var l = 0; l < testArray.length; l++) {
        //     if (testArray[l] < 1 || testArray[l] > 6) {
        //         console.error("formula non funziona")
        //     }
        //     console.log("formula funziona correttamente")
        // }

        // gioco dadi inizia
        // var giocatore, var computer: random numero 1-6

        var userDice = Math.floor(Math.random() * (7 - 1) + 1);
        var computerDice = Math.floor(Math.random() * (7 - 1) + 1);

        // compara le due var, vince la maggiore
        if(computerDice > userDice) {
            document.querySelector(".computer-dice").classList.add("winner-animation")
            result = "Hai perso";
        } else if (userDice > computerDice) {
            document.querySelector(".user-dice").classList.add("winner-animation")
            result = "Hai vinto";
        } else {
            result = "Pari";
        }

        // il container dei risultati diventa visibile
        document.querySelector(".results-container").classList.remove("hidden");

        // visualizzazione risultati
        document.querySelector("#computer-dice-result").innerText = computerDice;
        document.querySelector("#user-dice-result").innerText = userDice;
        document.querySelector("#result").innerText = result;
    }
})


