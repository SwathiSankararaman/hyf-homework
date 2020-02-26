const jsonMealsData = require("../data/meals.json");
const jsonReviewsData = require("../data/reviews.json");

const cheapMealsTest = function (request, response) {
    
    // This logic is to include reviews json data inside meals json data
    const mealsInReview = jsonMealsData.map(item => {
        item.reviews = jsonReviewsData.filter(element => element.mealId === item.id)
        return item;
    });

    const cheapMealsReturn = mealsInReview.filter(item => item.price < 15);

    response.json(cheapMealsReturn);
}

module.exports = cheapMealsTest;