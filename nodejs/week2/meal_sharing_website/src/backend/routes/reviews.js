const express = require('express');
const router = express.Router();

const jsonReviewsData = require("../data/reviews.json");

const reviewsTest = function (request, response) {

    if (request.params.id) {
        const idString = request.params.id;
        const id = parseInt(idString);
        if (isNaN(id)) {
            response.send('Id should be an integer');
        } else {
            const filteredId = jsonReviewsData.filter(item => item.id === id);
            if (filteredId.length === 0) {
               response.send('No match found');
            } else {
                response.json(filteredId);
            }
        }
    } else {
        response.json(jsonReviewsData);
    }

}

router.get('/', reviewsTest);
router.get('/:id', reviewsTest);

module.exports = router;