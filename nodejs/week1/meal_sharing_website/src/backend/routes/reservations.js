const jsonReservationData = require("../data/reservations.json");

const reservationsTest = function (request, response) {
    
    response.json(jsonReservationData);
}

module.exports = reservationsTest;