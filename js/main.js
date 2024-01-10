const userName = document.getElementById ("name")

const userKm = document.getElementById ("km")
const userAge = document.getElementById ("age-select")

const sendButton = document.getElementById ("invia");




// Devo inserire le const per i dati finali


sendButton.addEventListener ("click", function () {
    const valoreKm = parseInt(userKm.value);
    console.log(valoreKm);

    const valoreEta = parseInt(userAge.value);
    console.log(userAge);


    const parzialTicket = userKm * 0.21;
    console.log(parzialTicket);

    let sconto20 = parzialTicket * 0.2;
    let sconto40 = parzialTicket * 0.4;

    //non so se serva o meno...
    let priceTicket = 0;

    if (age == "under") {
        priceTicket = parzialTicket - sconto20;
    } else if (age == "over") {
        priceTicket = parzialTicket - sconto40;
    } else {
        priceTicket = parzialTicket;
    }
    

    // Comunico all'utente la cifra MA NON HO LA PIU' PALLIDA IDEA DI COME SI FA
    document.getElementById ("output-costo").innerHTML = priceTicket.toFixed(2) + " €";

});