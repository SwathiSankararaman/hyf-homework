
// addCandy function implemented with if conditions
// function calculates the price of the candies based on how much we have got(weight) and stores the price in an array called boughtCandyPrices
let boughtCandyPrices = [];
function addCandy(candyType, weight) {
if(candyType === "sweet") {
    let price = weight * 0.5;
    boughtCandyPrices.push(price);
} else if (candyType === "chocolate") {
     let price = weight * 0.7;
    boughtCandyPrices.push(price);
} else if (candyType === "toffee") {
     let price = weight * 1.1;
    boughtCandyPrices.push(price);
} else if (candyType === "chewing-gum") {
     let price = weight * 0.03;
    boughtCandyPrices.push(price);
}
}

addCandy("sweet", 5);
addCandy("toffee", 10);
addCandy("chocolate", 3);
console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;
console.log(`Amount that we can spend : ${amountToSpend.toFixed(2)}`);
// using the array formed in my first function as an parameter to my second function
function canBuyMoreCandy(boughtCandyPrices) {
    let arraySum = 0;
    // loop to go through my array and get the sum of all elements in the array
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        arraySum = arraySum + boughtCandyPrices[i];
    }
    console.log(`Amount of candies already bought :${arraySum}`);
    
    // if loop to compare the sum of array elements and amountToSpend
    if (arraySum > amountToSpend) {
        return false;
    } else {
        return true;
    }

}
// if loop to display log based on the return value from the previous if loop as boolean(which was a requirement)
if (canBuyMoreCandy(boughtCandyPrices)) {
    console.log("You can buy more, so please do!");
} else {
    console.log("Enough candy for you!");
}

























