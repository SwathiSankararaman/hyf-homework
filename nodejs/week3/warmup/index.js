const express = require('express');
const app = express();

// I get the operation to be done as params(request.params) then the actual parameters as
// query(request.query)

const arithmeticCalculations = function (request, response) {
     // This will give all the parametes in an array since request.query result is of type object
     const paramsArrayInString = Object.values(request.query);
     const paramsArrayInInt = paramsArrayInString.map(Number);
     console.log(request.params);
     
     if (request.params.operation === 'add') {
         const result = paramsArrayInInt.reduce((acc, value) => acc + value, 0);
         response.send (`The sum is : ${result}`);
     } else if (request.params.operation === 'subtract') {
         const result = paramsArrayInInt.reduce((acc, value) => acc - value, 0);
         response.send (`The difference is : ${result}`);
     } else if (request.params.operation === 'multiply') {
         const result = paramsArrayInInt.reduce((acc, value) => acc * value, 1);
         response.send (`The product value is : ${result}`);
     } else {
         const result = paramsArrayInInt.reduce((acc, value) => acc / value, 1);
         response.send (`The divided value is : ${result}`);
     }
}

app.get('/calculator/:operation', arithmeticCalculations);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started in ${PORT}`); 
})