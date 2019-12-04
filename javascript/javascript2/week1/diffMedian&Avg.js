
let housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
housePrices = housePrices.sort();


// Make a function that takes an array as parameter and returns the average of that parameter

function average(housePrices) {
    let sum = 0;
    for (let i = 0; i < housePrices.length; i++) { // Iterating through the array and calculating the sum
        sum = sum + housePrices[i];
    }
    let average = sum / housePrices.length; // average = sum of all elements/no of elements
    return Math.round(average);
}

// Make a function that takes an array as parameter and returns the median of that parameter

function median(housePrices) {
    let arrayLength = housePrices.length;
    if (arrayLength % 2 === 0) { // If the array length is even we have to do the average of middle 2 values
        let median = housePrices[arrayLength / 2] + housePrices[arrayLength / 2 - 1];
        return Math.round(median);

    } else { // If the array length is odd we have to take the middle element
        let median = housePrices[(arrayLength - 1) / 2]; // (7-1)/2 = 6/2 = 3 will be middle element since index starts with 0
        return Math.round(median);
    }

}

// Now create a function that calculates the median and the average and returns these two value in an object.

function avgAndMedian(housePrices) {
    let sum = 0;
    let arrayLength = housePrices.length;
    let median = 0;
    for (let i = 0; i < arrayLength; i++) {
        sum = sum + housePrices[i];
    }
    let average = sum / arrayLength;
    average = Math.round(average);
    if (arrayLength % 2 === 0) {
        median = housePrices[arrayLength / 2] + housePrices[arrayLength / 2 - 1];
        median = Math.round(median);

    } else {
        median = housePrices[(arrayLength - 1) / 2];
        median = Math.round(median);
    }

    return { 'average': average, 'median': median }; // Returning both median and average as an object

}

let resultOfAverage = average(housePrices);
console.log(resultOfAverage);

let resultOfMedian = median(housePrices);
console.log(resultOfMedian);


let object = avgAndMedian(housePrices);
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
