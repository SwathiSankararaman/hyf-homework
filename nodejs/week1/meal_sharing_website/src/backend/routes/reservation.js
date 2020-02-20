const jsonReservationData = require("../data/reservations.json");

const reservationTest = function (request, response) {

    let randomIndex = Math.floor(Math.random() * jsonReservationData.length);
    const randomReservation = jsonReservationData[randomIndex];

    response.json(randomReservation);
}

module.exports = reservationTest;