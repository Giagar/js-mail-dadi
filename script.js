// email autorizzate
var emails = ["dado@dadolandia.com", "altrodado@dadolandia.com"];
var checkEmail;

// prompt per email utente
var userEmail = prompt("Inserire la propria email (dado@dadolandia.com): ");

// check per verificare email autorizzata
for (var m = 0; m < emails.length; m++) {
    if(emails[m] === userEmail) {
        checkEmail = true; 
        alert("Ok, preparati a giocare!");
    }
    alert("Email non autorizzata. Fare il refresh della pagina ed inserire nuovamente l'email.");
}

// in caso di email autorizzata
if (checkEmail === true) {
    
    //test dei risultati: la formula restituisce sempre (campione di mille numeri) numeri < 7 e >=1 ?
    var testArray = [];

    for(var i = 0; i < 1000; i++ ) {
        testArray.push(Math.floor(Math.random() * (7 - 1) + 1));
    }

    for(var l = 0; l < testArray.length; l++) {
        if (testArray[l] < 1 || testArray[l] > 6) {
            console.error("formula non funziona")
        }
        console.log("formula funziona correttamente")
    }

    // gioco dadi inizia
    // var giocatore, var computer: random numero 1-6
    var userDice = Math.floor(Math.random() * (7 - 1) + 1);
    var computerDice = Math.floor(Math.random() * (7 - 1) + 1);

    // compara le due var, vince la maggiore
    if(computerDice > userDice) {
        document.write("Il computer ha vinto")
    } else if (userDice > computerDice) {
        document.write("Hai vinto")
    } else {
        document.write("Pari")
    }

}

