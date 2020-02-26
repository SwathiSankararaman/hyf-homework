const jsonMealsData = require("../data/meals.json");
const jsonReviewsData = require("../data/reviews.json");

const mealsTest = function (request, response) {

    // This logic is to include reviews json data inside meals json data
    const mealsInReview = jsonMealsData.map(item => {
        item.reviews = jsonReviewsData.filter(element => element.mealId === item.id)
        return item;
    });

    // json is a response method that sends the parameter as json to be displayed as response in the browser
    response.json(mealsInReview);
}

module.exports = mealsTest;