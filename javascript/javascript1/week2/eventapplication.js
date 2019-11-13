// This function calculates when the event will be held from today based on the argument we pass to the function
function getEventWeekday(eventIn) {

    // I am storing date object(already available) in day
    let day = new Date();
    // creating an array with days of the week
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // getDay is already present in Date object used to get only the day(the day is not returned as a string but as a number from 0-6)
    // since I have already assigned Date object to day I am accessing getDay through day and since it returns the days in integers
    // I am using those integers as index for my daylist array
    let today = daylist[day.getDay()];
    
    // when the argument to the parameter(eventIn) is greater than 7(7 days in a week), I use reminder operator so that I can get the value less than 7
    if (eventIn > daylist.length) {
        let reminder;
        reminder = eventIn % daylist.length;
        console.log(`The event will be held on ${daylist[day.getDay() + reminder]}`);
        // when argument to the parameter(eventIn) is less than 7 
    } else {
        console.log(`The event will be held on ${daylist[day.getDay() + eventIn]}`);
    }

}


getEventWeekday(2);