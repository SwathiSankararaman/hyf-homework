let input = document.getElementById('myinput');
let button = document.getElementById('mybutton');
let otherButton = document.getElementById('newbutton');
let leftLabel = document.querySelector('.leftsection label');
let rightLabel = document.querySelector('.rightsection label');
let lWinMessage = document.querySelector('.leftsection label:last-child');
let rWinMessage = document.querySelector('.rightsection label:last-child');

let countS = 0;
let countL = 0;


// Will be executed when I press "Start game"
function getInputValue() {
    // Only one game can be played at a time(Once the game is started I cannot enter time again and press start game again)
    input.disabled = true;
    button.disabled = true;
    let time = input.value;
    if (time == 0) {
        alert(`Please enter the time to proceed`);
        input.disabled = false;
        button.disabled = false;
    } else {
        // I am doing this because when ever I start the game I should start with 0(If this is not there then the values in the counter is from the previous iteration)
        // Kind of resetting the counters to zero after running the game for first time
        countS = 0;
        countL = 0;
        leftLabel.innerHTML = countS;
        rightLabel.innerHTML = countL;
        document.addEventListener('keydown', left); // I want keydown action to work only after the game has started. Thats why its here.
        setTimeout(() => {
            //I am disabling here because I am not able to access these fields after the game has completed(for next iteration).
            input.disabled = false;
            button.disabled = false;
            document.removeEventListener('keydown', left); // I donot want the keydown to work after the game has finished.
            if (leftLabel.innerHTML == 0 && rightLabel.innerHTML == 0) {
                alert(`Please be interested in the game. Press the keys to win!!`);
            } else {
                console.log('Sorry, Your time is up!!');
                console.log(leftLabel.innerHTML);
                console.log(rightLabel.innerHTML);
                if (leftLabel.innerHTML > rightLabel.innerHTML) {    
                    lWinMessage.innerHTML = `Congrats,You won!`;
                    rWinMessage.innerHTML = `Sorry,You lost!`;
                    let confettiSettings = { target: 'left' };
                    let confetti = new ConfettiGenerator(confettiSettings);
                    confetti.render();
                } else if (leftLabel.innerHTML < rightLabel.innerHTML) {
                    rWinMessage.innerHTML = `Congrats,You won!`;
                    lWinMessage.innerHTML = `Sorry,You lost!`;
                    let confettiSettings = { target: 'right' };
                    let confetti = new ConfettiGenerator(confettiSettings);
                    confetti.render();
                } else {
                    lWinMessage.innerHTML = `Awww!!It was close. Game Draw!`;
                    rWinMessage.innerHTML = `Awww!!It was close. Game Draw!`;
                }
            }

        }, time * 1000);
    }
}

button.addEventListener('click', getInputValue);

// This function checks for S and L and stores the count of presses.
function left(event) {
    if (event.code == 'KeyS') {
        countS++;
    } else if (event.code == 'KeyL') {
        countL++;

    }
    leftLabel.innerHTML = countS;
    rightLabel.innerHTML = countL;
}

// By doing this I can reset all the values in my game as initial.
function restart() {
    document.location.href = "";
}

otherButton.addEventListener('click', restart);
