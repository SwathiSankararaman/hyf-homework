const jsonMealsData = require("../data/meals.json");
const jsonReviewsData = require("../data/reviews.json");

const largeMealsTest = function (request, response) {
    
    // This logic is to include reviews json data inside meals json data
    const mealsInReview = jsonMealsData.map(item => {
        item.reviews = jsonReviewsData.filter(element => element.mealId === item.id)
        return item;
    });

    const largeMealsReturn = mealsInReview.filter(item => item.maxNumberOfGuests > 20);

    response.json(largeMealsReturn);
}

module.exports = largeMealsTest;