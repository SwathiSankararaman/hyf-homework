// Function to decide which clothes to wear based on the temperature
function clothesToWear(temperature) {
// If conditions with different temperature and dress decisions
    if (temperature >= 25) {
        console.log("Enjoy with T-shirts, shorts with a pair of Flip-flops!!");
    }
    else if (temperature >= 10 && temperature < 25 ) {
        console.log("Wear Full hand shirts with pants!!");
    } else if (temperature >= 10 && temperature < 18) {
        console.log("Wear a Thermo along with the jacket, pants and Shoes!!");
    } else {
        console.log("Wear a winter jacket, gloves, scarf and winter shoes!!");
    }

}


clothesToWear(40);
