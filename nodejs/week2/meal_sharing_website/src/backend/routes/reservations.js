const express = require('express');
const router = express.Router();

const jsonReservationData = require("../data/reservations.json");

const reservationsTest = function (request, response) {

    if (request.params.id) {
        const idString = request.params.id;
        const id = parseInt(idString);
        if (isNaN(id)) {
            response.send('Id should be an integer');
        } else {
            const filteredId = jsonReservationData.filter(item => item.id === id);
            if (filteredId.length === 0) {
               response.send('No match found');
            } else {
                response.json(filteredId);
            }
        }
    } else {
        response.json(jsonReservationData);
    }
}
router.get('/', reservationsTest);
router.get('/:id', reservationsTest);

module.exports = router;