const userName = document.getElementById ("name");

const userKm = document.getElementById ("km");
const userAge = document.getElementById ("age-select");

const sendButton = document.getElementById ("invia");

let valoreEta;
let name;

sendButton.addEventListener ("click", function () {
    const valoreKm = parseInt(userKm.value);
    console.log(valoreKm);

    valoreEta = (userAge.value);
    console.log(valoreEta);


    const parzialTicket = valoreKm * 0.21;
    console.log(parzialTicket);

    let sconto20 = parzialTicket * 0.2;
    let sconto40 = parzialTicket * 0.4;

    //non so se serva o meno...
    let priceTicket = 0;

    if (valoreEta == "under") {
        priceTicket = parzialTicket - sconto20;
    } else if (valoreEta == "over") {
        priceTicket = parzialTicket - sconto40;
    } else {
        priceTicket = parzialTicket;
    }

    // Comunico all'utente i dati del biglietto
    
    document.getElementById("output-nome").innerHTML = userName.value;

    document.getElementById("output-offerta").innerHTML = "piaushdgf";
    document.getElementById("output-carrozza").innerHTML = "69";
    document.getElementById("output-codice").innerHTML = "MN674";

    document.getElementById("output-costo").innerHTML = priceTicket.toFixed(2) + " €";
});