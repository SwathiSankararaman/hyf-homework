//  1 . Age-ify

const yearOfBirth = 1989;
const yearFuture = 2050;
// yearFuture = 2;
const age = yearFuture - yearOfBirth;
// Formula to calculate the age difference
console.log(`You will be ${age} years old in ${yearFuture}.`);


// 2. Dog age calculator

const dogYearOfBirth = 2015;
const dogYearFuture = 2030;
// Formula to calculate Dog's age
const humanYears = dogYearFuture - dogYearOfBirth;
// Boolean variable 
const shouldShowResultInDogYears = true;

// Logic to display the dog's age in both dog years and human years
// 1 Dog year = 7 * Human Years
if (shouldShowResultInDogYears) {

    const dogYear = 7 * humanYears;
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}.`);

} else {
    console.log(`Your dog will be ${humanYears} human years old in ${dogYearFuture}.`);
}

// 3. House Price Calculator


// Code 1

let widthInM;
let depthInM;
let heightInM;
let gardenSizeInM2;
let volumeInMeters;
let housePrice;
let quotedPrice;
let priceDifference;


// Calculation for Peter's House
widthInM = 8;
depthInM = 10;
heightInM = 10;
gardenSizeInM2 = 100;
quotedPrice = 2500000;
// Formula for volume is product of all three dimensions
volumeInMeters = heightInM * widthInM * depthInM;
// Formula of housePrice as given in the homework
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
// Formula for difference in price
priceDifference = quotedPrice - housePrice;
console.log("Peter's House Details: ");
console.log("Volume of Peter's house: " + volumeInMeters);
console.log("Actual Price of Peter's house based on the formula: " + housePrice);
console.log("Quoted Price of Peter's house: " + quotedPrice);
console.log("The Price difference is: " + priceDifference);
if (quotedPrice > housePrice) {
    console.log("Peter is paying " + priceDifference + " more.");
} else if (quotedPrice == housePrice) {
    console.log("Peter is paying according to the standards.");
}
else {
    console.log("Peter is paying " + priceDifference + " less.");

}



// Calculation for Julia's House

widthInM = 5;
depthInM = 11;
heightInM = 8;
gardenSizeInM2 = 70;
quotedPrice = 1000000;
// Formula for volume is product of all three dimensions
volumeInMeters = heightInM * widthInM * depthInM;
// Formula of housePrice as given in the homework
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
// Formula for difference in price
priceDifference = -(quotedPrice - housePrice);
console.log("Julia's House Details: ");
console.log("Volume of Julia's house: " + volumeInMeters);
console.log("Actual Price of Julia's house based on the formula: " + housePrice);
console.log("Quoted Price of Julia's house: " + quotedPrice);
console.log("The Price difference is: " + priceDifference);
if (quotedPrice > housePrice) {
    console.log("Julia is paying " + priceDifference + " more.");
} else if (quotedPrice == housePrice) {
    console.log("Julia is paying according to the standards.");
}
else {
    console.log("Julia is paying " + priceDifference + " less.");

}


// 4. Random Start-up name generator

const firstWords = ["Cool", "Awesome", "Easy", "Light", "Talent", "Creative", "Minds", "Lion", "White", "Black"];
const secondWords = ["House", "Circle", "Triangle", "Rectangle", "Square", "Pentagon", "Cylinder", "Sphere", "Line", "Dot"];
let startupName;

let randomNumber = Math.floor(Math.random() * 10) + 0;

// Logic to concatenate the words from both arrays using index from the randomNumber generator
startupName = firstWords[randomNumber] + secondWords[randomNumber];

console.log("The startup: " + startupName + " " + "contains" + " " + startupName.length + " " + "characters");








