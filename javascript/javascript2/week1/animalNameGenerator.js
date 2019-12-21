let spiritAnimalArray = ['Wolf', 'Butterfly', 'Swan', 'Tiger', 'Turtle', 'Rabbit', 'Peacock', 'Panda', 'Dolphin', 'Raven'];
let arrayLength = spiritAnimalArray.length;

document.getElementById('mybutton').addEventListener('click', commonFunctionality);
document.getElementById('generateOptions').addEventListener('change', dropDownChange);



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

function dropDownChange() {

    document.getElementById('mybutton').removeEventListener('click', commonFunctionality);
    document.getElementById('name').removeEventListener('mouseover', commonFunctionality);
    document.getElementById('name').removeEventListener('input', commonFunctionality);

    if (document.getElementById('generateOptions').value === 'button') {
        document.getElementById('mybutton').addEventListener('click', commonFunctionality);

    } else if (document.getElementById('generateOptions').value === 'hovering') {
        document.getElementById('name').addEventListener('mouseover', commonFunctionality);

    } else {
        document.getElementById('name').addEventListener('input', commonFunctionality);
    }
}