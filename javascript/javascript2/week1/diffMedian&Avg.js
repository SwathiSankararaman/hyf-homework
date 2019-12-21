
let housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
let lengthOfHousePrices = housePrices.length;
housePrices = housePrices.sort(function (a, b) { return a - b });


// Make a function that takes an array as parameter and returns the average of that parameter

function calculateAverage(housePrices) {
    let sum = 0;
    for (let i = 0; i < lengthOfHousePrices; i++) { // Iterating through the array and calculating the sum
        sum = sum + housePrices[i];
    }
    let average = sum / lengthOfHousePrices; // average = sum of all elements/no of elements
    return Math.round(average);
}

// Make a function that takes an array as parameter and returns the median of that parameter

function calculateMedian(housePrices) {
    let halfLengthOfHousePrices = lengthOfHousePrices / 2;
    if (lengthOfHousePrices % 2 === 0) { // If the array length is even we have to do the average of middle 2 values
        let median = (housePrices[halfLengthOfHousePrices] + housePrices[halfLengthOfHousePrices - 1])/2;
        return Math.round(median);

    } else { // If the array length is odd we have to take the middle element
        let median = housePrices[(lengthOfHousePrices - 1) / 2]; // (7-1)/2 = 6/2 = 3 will be middle element since index starts with 0
        return Math.round(median);
    }

}

// Now create a function that calculates the median and the average and returns these two value in an object.

function calculateAvgAndMedian(housePrices) {
    let averageObject = calculateAverage(housePrices);
    let medianObject = calculateMedian(housePrices);

    return { 'average': averageObject, 'median': medianObject }; // Returning both median and average as an object

}

let resultOfAverage = calculateAverage(housePrices);
console.log(resultOfAverage);

let resultOfMedian = calculateMedian(housePrices);
console.log(resultOfMedian);


let object = calculateAvgAndMedian(housePrices);
console.log(object);

let result = document.getElementById('result');
let heading1 = document.createElement('h1');
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let para3 = document.createElement('p');
result.appendChild(heading1);
result.appendChild(para1);
result.appendChild(para2);
result.appendChild(para3);
heading1.innerText = 'Average and Median of an array';
para1.innerText = `The Prices of the houses are : [${housePrices}]`;
para2.innerText = `The Average is : ${object.average}`;
para3.innerText = `The Median is : ${object.median}`;
