const express = require('express');
//app is an instance of the express class
const app = express();

const getMeals = require("./routes/meals.js");
const getAMeal = require("./routes/meal.js");
const getCheapMeals = require("./routes/cheap-meals.js");
const getLargeMeals = require("./routes/large-meals.js");
const getReservations = require("./routes/reservations.js");
const getAReservation = require("./routes/reservation.js");

//get is a method inside express(class)that takes 2 required parameters
//1. endpoint
//2. callback function
//(The nature of this callback is function(request, response) {

//})
//This is the reason why I have declared the function like above in the respective .js files
app.get('/meals', getMeals);
app.get('/meal', getAMeal);
app.get('/cheapmeals', getCheapMeals);
app.get('/largemeals', getLargeMeals);
app.get('/reservations', getReservations);
app.get('/reservation', getAReservation);

// listen is a method that takes 2 parameters 
//1. portnumber
//2. callback function (optional)
// This function can have a log so that we can see the log in console and be sure the server has started and running
app.listen(5000, function(){
    console.log('Server started in 5000!');
    
})