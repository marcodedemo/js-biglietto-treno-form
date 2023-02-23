
/*

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

*/


/* 

chiedere all'utente il numero di km da percorre e memorizzarlo
chiedere all'utente l'età e memorizzarla
calcolare il prezzo del biglietto considerando che ogni km costa 0.21€
applicare uno sconto del 20% ai minorenni
applicare uno sconto del 40% agli over 65

*/


let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(){


    // html display info 

    document.getElementById("incomplete-inputs").style.display = "none";
    document.getElementById("hidden-info").style.display = "block";


    // memorizzo numero di km da percorre, l'età e il nome del passeggero

    let userName = document.getElementById("input-name").value;
    let kilometers = document.getElementById("input-km").value;
    let userAge = document.getElementById("input-age").value;
    


    // calcolo il prezzo base e dichiaro la variabile prezzo scontato

    let fullPrice = kilometers * 0.21;
    let discountedPrice;


    // se l'età è minore di 18 anni applico uno sconto del 20%

    if(userAge < 18){

        discountedPrice = (fullPrice - fullPrice / 100 * 20);
        console.log("hai ottenuto uno sconto del 20% in quanto minorenne, il prezzo totale del tuo biglietto è di " + discountedPrice.toFixed(2) + "€");


        document.getElementById("printed-name").innerHTML = userName;
        document.getElementById("printed-offer").innerHTML = "20%";
        document.getElementById("printed-carriage").innerHTML = Math.floor(Math.random() * 10 +1);
        document.getElementById("printed-code").innerHTML = Math.floor(Math.random() * 10000 +1);
        document.getElementById("printed-price").innerHTML = discountedPrice.toFixed(2) + " €";

    

    // se l'età è maggiore o uguale a 65 anni applico uno sconto del 40%

    } else if (userAge >= 65){

        discountedPrice = (fullPrice - fullPrice / 100 * 40);
        console.log("hai ottenuto uno sconto del 40% in quanto over 65, il prezzo totale del tuo biglietto è di " + discountedPrice.toFixed(2) + "€");


        document.getElementById("printed-name").innerHTML = userName;
        document.getElementById("printed-offer").innerHTML = "40%";
        document.getElementById("printed-carriage").innerHTML = Math.floor(Math.random() * 10 +1);
        document.getElementById("printed-code").innerHTML = Math.floor(Math.random() * 10000 +1);
        document.getElementById("printed-price").innerHTML = discountedPrice.toFixed(2) + " €";


    // altrimenti il bigliettò sarà venduto a prezzo pieno 

    } else {
        console.log("il prezzo totale del tuo biglietto è di " + fullPrice.toFixed(2) + "€");

        document.getElementById("printed-name").innerHTML = userName;
        document.getElementById("printed-offer").innerHTML = "/";
        document.getElementById("printed-carriage").innerHTML = Math.floor(Math.random() * 10 +1);
        document.getElementById("printed-code").innerHTML = Math.floor(Math.random() * 10000 +1);
        document.getElementById("printed-price").innerHTML = fullPrice.toFixed(2) + " €";
    }
})



