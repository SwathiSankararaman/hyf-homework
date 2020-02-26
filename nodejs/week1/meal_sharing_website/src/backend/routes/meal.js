const mealTest = function (request, response) {
    
    const jsonMealsData = require("../data/meals.json");
    const jsonReviewsData = require("../data/reviews.json");

    // This logic is to include reviews json data inside meals json data
    const mealsInReview = jsonMealsData.map(item => {
        item.reviews = jsonReviewsData.filter(element => element.mealId === item.id)
        return item;
    });

    //Finds a random meals inside mealsInReview
    let randomIndex = Math.floor(Math.random() * mealsInReview.length);
    const randomMeal = mealsInReview[randomIndex];

    response.json(randomMeal);
}

module.exports = mealTest;