const todo = [];
let uniqueName = '';
let favouriteDish = '';
let events = [];

function getReply(command) {
    let splitCommand = command.split(' ');


    // Question 1 (Hello my name is Benjamin)
    if (splitCommand[0] == 'Hello') {
        splitCommand.splice(0, 4); // I am removing 'Hello my name is' since its going to be the same for any command
        let name = splitCommand; // In this case now name will be an array with value Benjamin
        // When Benjamin is twice, name array is going to have Benjamin twice
        // When array with duplicate value is passed to new Set it will return unique value as object
        // Array.from creates an array from the result of new Set in uniqueName
        // Learnt how to remove duplicate from array by Set
        uniqueName = Array.from(new Set(name));
        return (`nice to meet you ${uniqueName}.`);

        // Question 2,6,7,8,10,13 
    } else if (splitCommand[0] == 'What') {

        // Question 2 (What is my name?)
        if (splitCommand.includes('name') || splitCommand.includes('name?')) {

            if (uniqueName) {
                return (`My name is ${uniqueName}`);
            } else {
                let name = prompt('Please enter your name');
                if (name) {
                    return (`My name is ${name}.`);
                } else {
                    return ('Name cannot be empty!');
                }
            }
        } else if (splitCommand.includes('todo') || splitCommand.includes('todo?')) { // Question 6 (What is on my todo?)

            let count = todo.length;
            return (`You have ${count} todos - ${todo.toString()}`);

        } else if (splitCommand.includes('day') && ((splitCommand.includes('today') || splitCommand.includes('today?')))) {  // Question 7 (What day is it today?)
            let day = new Date();
            let year = day.getFullYear();
            let date = day.getDate();
            let month = day.getMonth();
            let monthsInYear = ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'];
            let monthAsString = monthsInYear[month];
            return (`${date}. of ${monthAsString} ${year}`);

        } else if (splitCommand.includes('+') || splitCommand.includes('-') || splitCommand.includes('*') || splitCommand.includes('/')) { // Question 8 (what is 3 + 3?) 

            let operator = splitCommand.splice(3, 1); // now splitCommand is ["What", "is", "3", "3?"]
            let x = splitCommand.splice(2, 1); // ["What", "is", "3?"]
            let y = splitCommand.splice(2, 1);
            x = parseFloat(x); // Converts string to whole integer(In our case '3' to 3)
            y = parseFloat(y);
            if (operator == '+') {
                let sum = x + y;
                return sum;
            } else if (operator == '+') {
                let diff = x - y;
                return diff;
            } else if (operator == '*') {
                let product = x * y;
                return product;
            } else if (operator == '/') {
                let div = x / y;
                return div;
            }
        } else if (splitCommand.includes('favorite') && (splitCommand.includes('dish') || splitCommand.includes('dish?'))) {  // Question 10 (What is my favorite dish)

            return favouriteDish;

        } else if (splitCommand.includes('doing') && (splitCommand.includes('week') || splitCommand.includes('week?'))) { // Question 13 (What am I doing this week?)

            let length = events.length;
            for (let i = 0; i < length; i++) {
                return (`This week you have ${length} event: ${events[i].name} on ${events[i].date}`);
            }
        }

        // Question 3,4 & 12 
    } else if (splitCommand[0] == 'Add') {
        // Question 12 (Add Bike ride on 3/5/2019 to my calendar)
        if (splitCommand.includes('calendar')) {
            splitCommand.splice(0, 1); // Removing Add (Bike ride on 3/5/2019 to my calendar)
            splitCommand.splice((splitCommand.length) - 3, 3); // Removing to my calendar (Bike ride on 3/5/2019)
            let eventDate = splitCommand.splice((splitCommand.length) - 1, 1); // taking bike ride on from array 
            let date = eventDate.toString(); // Converting date to string
            splitCommand.splice((splitCommand.length) - 1, 1);
            let name = splitCommand.join(' '); // converting it to string with space between bike and ride
            events.push({ 'name': name, 'date': date });
            return (`${name} added to your calendar`);


            // Question 3 & 4 ((Add fishing to my todo) & (Add singing in the shower to my todo))
        } else {
            splitCommand.splice(0, 1);
            splitCommand.splice((splitCommand.length) - 3, 3);
            let activity = splitCommand; // activity is an array
            // Learnt a new array method join
            let otherActivity = activity.join(' '); // otherActivity is a string(join will be performed in an array and will always return a string)
            todo.push(otherActivity); // Pushing otherActivity string to todo array
            return (`${otherActivity} added to your todo`);
        }


        // Question 5 (Remove fishing from my todo)
    } else if (splitCommand[0] == 'Remove') {
        splitCommand.splice(0, 1);
        splitCommand.splice((splitCommand.length) - 3, 3);
        // Learnt 2 new array methods tostring and replace
        let activityToBeRemoved = splitCommand.toString().replace(/,/g, ' '); // splitcommand will be an array with [singing, in, the, shower]
        // I want to change this array to single string with space in between the words. dats why tostring and replce(to replace , with space)
        let index = todo.indexOf(activityToBeRemoved);
        if (index == -1) {
            return ('Cannot remove an element not present in the array.');
        } else {
            todo.splice(index, 1);
            return (`Removed ${activityToBeRemoved} from your todo`);

        }
        // Question 9 (My favorite dish is lasagne)
    } else if (splitCommand.includes('favorite') && splitCommand.includes('dish')) {

        let dishName = splitCommand.splice(4, 1);
        dishName = dishName.toString();
        favouriteDish = dishName;
        return ('Saved the favourite dish.')

        // Question 11 (Set a timer for 4 minutes)
    } else if (splitCommand.includes('Set') && splitCommand.includes('timer')) {

        let time = splitCommand.splice(4, 1); // To take the minutes to set the times(In our case 4)
        time = parseInt(time, 10); // Converts 4 string into number 4 which we can use in our timer
        let timeInMs = time * 60 * 1000; //4 * 60 * 1000 = 240000ms 
        let id = setTimeout(function () { console.log('Timer done') }, timeInMs);
        return (`Timer set for ${time} minutes`);

        // Question 14 (Add one or more command to your voice assistant) (How are you feeling?) (Tried random emotions generator)
    } else if (splitCommand.includes('How') && (splitCommand.includes('feeling') || splitCommand.includes('feeling?'))) {

        let emotions = ['Happy', 'Excited', 'Surprised', 'Sad', 'Angry', 'Scared', 'Guilty', 'Disgusted', 'Romantic', 'Blessed'];
        let diffEmotions = Math.floor(Math.random() * emotions.length);
        return `I am feeling ${emotions[diffEmotions]}`;

    }

}

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 4.5 * 12?'));
console.log(getReply('My favorite dish is lasagne'));
console.log(getReply('What is my favorite dish'));
console.log(getReply('Set a timer for 4 minutes'));
console.log(getReply('Add Bike ride on 19/11/2019 to my calendar'));
console.log(getReply('What am I doing this week?'));
console.log(getReply('How are you feeling?'));







