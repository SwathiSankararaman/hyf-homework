// Write a function that finds the shortest word of an array of words
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
let length = [];
function shortestWord(danishWords) {
    // This for loop puts the length of each words into an array called length(which will be array of numbers)
    for (let i = 0; i < danishWords.length; i++) {
         length[i] = danishWords[i].length;
    }
    let x = Math.min(...length); // This function helps to calculate min value in the array length and store in variable x
    for (let j = 0; j < danishWords.length; j++) { // This for loop iterates over the length array and checks with x
        if (x === length[j]) {
            return danishWords[j]; // When matches returns the corresponding word
        }
    }
}

let word = shortestWord(danishWords); 
console.log(word);// returns 'ø'