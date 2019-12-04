let spiritAnimalArray = ['Wolf', 'Butterfly', 'Swan', 'Tiger', 'Turtle', 'Rabbit', 'Peacock', 'Panda', 'Dolphin', 'Raven'];
let arrayLength = spiritAnimalArray.length;

// // When user selects Clicking the button this function should be executed
function buttonClick() {
    if (document.getElementById('generateOptions').value === 'button') {
        commonFunctionality();
    }
}

// // When user selects Hovering over name this function should be executed
function inputHover() {
    if (document.getElementById('generateOptions').value === 'hovering') {
        commonFunctionality();
    }
}

// // When user selects while entering the name this function should be executed
function inputTyping() {
    if (document.getElementById('generateOptions').value === 'typing') {
        commonFunctionality();
    }

}

// Event listeners for three types of events
document.getElementById('mybutton').addEventListener('click',buttonClick);
document.getElementById('name').addEventListener('mouseover',inputHover);
document.getElementById('name').addEventListener('input',inputTyping);



// This function takes the value entered in the input field and displays the final value with spirit animal appended
function commonFunctionality() {
    let index = Math.floor(Math.random() * arrayLength); // This will give random index of spiritAnimal array.
    let value = document.getElementById('name').value;
    if (!value) {
        alert('Please enter your name to proceed');
    } else {
        let result = document.getElementById('namedisplay');
        result.innerText = `${value} - The ${spiritAnimalArray[index]}`;

    }
}