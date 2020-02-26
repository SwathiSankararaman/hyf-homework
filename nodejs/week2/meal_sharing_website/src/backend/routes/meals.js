const express = require('express');
//Trying to use moment package for my date validation
const moment = require('moment');
const router = express.Router();

const jsonMealsData = require("../data/meals.json");

// This is a function to test params style endpoints
const paramEndpoint = function (request, response) {
    if (request.params.id) {
        const idString = request.params.id;
        const id = parseInt(idString);
        if (isNaN(id)) {
            response.send('Id should be an integer');
        } else {
            const filteredId = jsonMealsData.filter(item => item.id === id);
            processArrayLength(filteredId, response);
        }
    }
}

//This is a function to check query style endpoints

const queryEndpoint = function (request, response) {
    if (isEmpty(request.query)) {
        response.json(jsonMealsData);
    } else if (request.query.maxPrice) {
        const maxPriceInString = request.query.maxPrice;
        const maxPriceInInt = parseInt(maxPriceInString);
        if (isNaN(maxPriceInInt)) {
            response.send('Maximum Price should be an integer');
        } else {
            const filteredPrice = jsonMealsData.filter(item => item.price < maxPriceInInt);
            processArrayLength(filteredPrice, response);
        }
    } else if (request.query.title) {
        const title = request.query.title;
        const filteredTitle = jsonMealsData.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
        processArrayLength(filteredTitle, response);

    } else if (request.query.createdAfter) {
        const dateInString = request.query.createdAfter;   
        if (!moment(dateInString, 'YYYY-MM-DD', true).isValid()) {
            response.send('Date should always be a valid date');
        } else {
            const filteredDate = jsonMealsData.filter(item => parseInt(item.createdAt) > parseInt(dateInString));
            processArrayLength(filteredDate, response);
        }

    } else if (request.query.limit) {
        const limitInString = request.query.limit;
        const limitInInt = parseInt(limitInString);
        if (isNaN(limitInInt)) {
            response.send('Limit should be an integer');
        } else {
            const filteredLimit = jsonMealsData.slice(0, limitInInt);
            processArrayLength(filteredLimit, response);
        }

    } else {
        response.send('Parameter not supported');
    }
}

// Function to check if the array has a match to the parameters in the endpoint
function processArrayLength(array, res) {
    if (array.length === 0) {
        res.send('No match found');
    } else {
        res.json(array);
    }
}

//I write this function to check if some query parameters already exists,
//Since nature of request.query is an object(Key value pairs), I check the
// presence of an key value pair already
function isEmpty(obj) {
    for (const key in obj) {
        return false;
    }
    return true;
} 

router.get('/', queryEndpoint);
router.get('/:id', paramEndpoint);



module.exports = router;


