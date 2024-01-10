const userName = document.getElementById ("name")

const userKm = document.getElementById ("km")
const userAge = document.getElementById ("age-select")

const sendButton = document.getElementById ("invia");


sendButton.addEventListener ("click", function () {
    const valoreKm = parseInt(userKm.value);
    console.log(valoreKm);

    const valoreEta = parseInt(userAge.value);
    console.log(userAge);


    const parzialTicket = userKm * 0.21;
    console.log(parzialTicket);

    let sconto20 = parzialTicket * 0.2;
    let sconto40 = parzialTicket * 0.4;

    let priceTicket = 0;

    if (age < 18) {
        priceTicket = parzialTicket - sconto20;
    } else if (age > 65) {
        priceTicket = parzialTicket - sconto40;
    } else {
        priceTicket = parzialTicket;
    }
    
});





// // Il calcolo parziale del biglietto
// const parzialTicket = km * 0.21;
// console.log(parzialTicket);


// // Applico sconto se rispetta alcuni parametri
// let sconto20 = parzialTicket * 0.2;
// let sconto40 = parzialTicket * 0.4;


// // faccio uscire la variabile dalla condizione di se: SCOPE
// let priceTicket = 0;

// // Calcolo del prezzo del biglietto
// if (age < 18) {
//     priceTicket = parzialTicket - sconto20;
// } else if (age > 65) {
//     priceTicket = parzialTicket - sconto40;
// } else {
//     priceTicket = parzialTicket;
// }


// // Comunico all'utente la cifra
// document.getElementById ("prezzo").innerHTML = priceTicket.toFixed(2) + " €";