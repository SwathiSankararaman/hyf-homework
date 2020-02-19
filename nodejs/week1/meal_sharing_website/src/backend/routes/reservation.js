const jsonReservationData = require("../data/reservations.json");

const reservationTest = function (request, response) {

    const randomReservation = jsonReservationData[Math.floor(Math.random() * jsonReservationData.length)];

    response.json(randomReservation);
}

module.exports = reservationTest;