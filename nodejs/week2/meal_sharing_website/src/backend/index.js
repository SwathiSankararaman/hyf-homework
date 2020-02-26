const express = require('express');
const app = express();

const getMeals = require("./routes/meals.js");
const getReservations = require("./routes/reservations.js");
const getReviews = require("./routes/reviews.js");

// Middleware
app.use('/', (req, res, next) => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes();
    console.log(`${date} ${time} request received for path: ${req.originalUrl}`);
    next();
})

app.use('/meals', getMeals);
app.use('/reviews', getReviews);
app.use('/reservations', getReservations);

const PORT = 5000;
app.listen(PORT, function () {
    console.log(`Server started in ${PORT}`);
})