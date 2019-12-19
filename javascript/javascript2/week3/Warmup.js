// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => {
    console.log('Called after 2.5 seconds');
}, 2500);


// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the 
// stringToLog after delay seconds. Call the function you have created with some different arguments. 

function delayLogging(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000);
}

delayLogging(1.5, 'This string logged after 1.5 seconds');

//3. Create a button in html. When clicking this button, use the function you created in the previous task
//to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

function buttonClick() {
    delayLogging(5, 'Called after 5 seconds');
}

let btn1 = document.getElementById('button1');
btn1.addEventListener('click', buttonClick);


//4. Create two functions and assign them to two different variables. One function logs out Earth, 
//the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. 
//The only thing the third function should do is call the provided parameter function. 
//Try call the third function once with the Earth function and once with the Saturn function.

const earthLogger = () => {
    console.log('This is planet Earth!');
}

const saturnLogger = () => {
    console.log('This is planet Saturn!');
}

function planetLogFunction(func) {
    func();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5. Create a button with the text called "Log location". When this button is clicked 
//the location (latitude, longitude) of the user should be logged out using this browser api


function getPosition() {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(`This is the latitude ${position.coords.latitude.toFixed(2)}`);
        console.log(`This is the latitude ${position.coords.longitude.toFixed(2)}`);
    })

}
let btn2 = document.getElementById('button2');
btn2.addEventListener('click', getPosition);

// 7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function 
// should wait delay seconds and then call the provided callback function. Try and call this function 
// with different delays and different callback functions

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}
const callback = () => console.log(`This is a callback function running after 4 seconds of delay!`);

runAfterDelay(4, callback);

// 8. Check if we have double clicked on the page. A double click is defined by 
// two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

btn1.addEventListener('dblclick', () => console.log('Double click'));

// 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - 
// function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function 
// that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

const logFunnyJoke = () => {
    let jokes = [
        { 'What’s the best thing about Switzerland?': 'I don’t know, but the flag is a big plus' },
        { 'I invented a new word!': 'Plagiarism!' },
        { 'Why do we tell actors to “break a leg?': 'Because every play has a cast' },
        { 'Hear about the new restaurant called Karma?': 'There’s no menu: You get what you deserve' },
        { 'Why don’t scientists trust atoms?': 'Because they make up everything' }
    ];

    let index = Math.floor(Math.random() * jokes.length);
    console.log(jokes[index]);

}

const logBadJoke = () => {
    let jokes = [
        { 'What do you call a fish with two knees?': 'A tunee fish!' },
        { 'What concert costs only 45 cents?': '50 Cent featuring Nickelback!' },
        { 'What do you give to a sick lemon?': 'Lemon aid!' },
        { 'I just went to an emotional wedding': 'Even the cake was in tiers.' },
        { 'Whens the best time to go to the dentist?': 'Tooth-hurtie!' }
    ];

    let index = Math.floor(Math.random() * jokes.length);
    console.log(jokes[index]);

}

jokeCreator(false, logFunnyJoke, logBadJoke);



// Function as a variable
// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const firstFunction = () => console.log('This is the first function in the array');
const secondFunction = () => console.log('This is the second function in the array');
const lastFunction = () => console.log('This is the last function in the array');

const functionsArray = [firstFunction, secondFunction, lastFunction];
functionsArray.forEach(item => item());

// Create a function as a const and try creating a function normally. Call both functions.

const function1 = () => console.log('Function assigned to a const variable');
function function2() {
    console.log('This is the normal function declaration');
}
function1();
function2();

// Create an object that has a key whose value is a function. Try calling this function.

const randomFloat = () => console.log(Math.random().toFixed(2));
const randomWhole = () => console.log(Math.round(Math.random()));

const object = {
    'floatNumbers': randomFloat,
    'wholeNumbers': randomWhole
}

object.floatNumbers();
object.wholeNumbers();
