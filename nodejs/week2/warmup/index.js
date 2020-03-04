const express = require('express');
const app = express();


app.get('/numbers/add', function (request, response) {
    // This type /numbers/add?first=<number here>&second=<number here> is called query method
    // where we give only till add and the rest starting from ? is directly given in browser url
    // which get automatically assigned to first, second etc.

    //request.query.first type is a string. So this has to be changed to integer to perform addition
    const firstNumberInString = request.query.first;
    const secondNumberInString = request.query.second;
    const firstNumber = parseInt(firstNumberInString);
    const secondNumber = parseInt(secondNumberInString);

    response.json(firstNumber + secondNumber);
})

app.get('/numbers/multiply/:first/:second', function (request, response) {
    // This type /numbers/multiply/<first number here>/<second number here> is called params method
    // where we give all the params directly in the url but including ':' before indicating that its a param
    // when we type the url in browser this ':' is omitted and only the numbers are passed

    const firstNumberInString = request.params.first;
    const secondNumberInString = request.params.second;
    const firstNumber = parseInt(firstNumberInString);
    const secondNumber = parseInt(secondNumberInString);

    response.json(firstNumber * secondNumber);
})

app.listen(3000, function () {
    console.log('Server Started');

})