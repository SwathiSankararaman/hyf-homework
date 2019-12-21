// write a program that doubles the odd numbers in an array and throws away the even number.
// using map and filter don't forget to use arrow functions.

let numbers = [1, 2, 3, 4];
let newNumbers = [];


newNumbers = numbers.filter(num => num % 2 !== 0).map(num => num * 2); // chaining array methods


// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers.push(numbers[i] * 2);
//     }
// }

 console.log("The doubled numbers are", newNumbers); // [2, 6]