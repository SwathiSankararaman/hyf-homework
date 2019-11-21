// Adding an activity
// I have created an empty array called activities
let activities = [];

// This gets the date automatically
let date = new Date();
let dateToday = date.toLocaleDateString("en-US");
// This function adds object with properties(in function parameters) to the activities array making it an object array
function addActivity(date, activity, duration) {
  // I am pushing the object properties to the activites array making it an object array
  activities.push({ 'date': date, 'activity': activity, 'duration': duration });
}

addActivity(dateToday, 'Youtube', 40);
addActivity(dateToday, 'Song', 5);
// addActivity(dateToday, 'Javascript', 40);
addActivity(dateToday, 'Facebook', 45);
addActivity(dateToday, 'Gmail', 45);
console.log(activities);

// Show my status
// This function simply returns the activities object array when called and shows the status in the requested format
function showStatus(date) {
  // If there are no activities in the object then this will be executed  
  if (activities.length == 0) {
    console.log("Add some activities before calling showStatus");
    return 0;
    // If there are activities in the object then we have to calculate the usage time and no of activities of a particular date
  } else {
    // I can calculate usage time only by adding all the activities.duration, so I decalre sum and will store the addition result in this
    let sum = 0;
    // I need a variable like counter to calculate no of activities for a specific date
    let noOfActivities = 0;
    // This for loop goes through the length of the object array and does the sum of  durations during each iteration storing it in sum
    for (let i = 0; i < activities.length; i++) {
      sum = sum + activities[i].duration;
      // If the argument date to the function matches with the date in activities object then I increment the counter to 1. 
      if (activities[i].date === date) {
        noOfActivities = noOfActivities + 1;
      }
    }
    console.log(`You did ${noOfActivities} activities on ${date}`);
    console.log(`You have added ${activities.length} activities. They amount to ${sum} min. of usage`);
    // I am returning sum because I would want to use it in the next function when I am calling this function
    return sum;
  }
}
//showStatus(dateToday);


// This function is to set a limit to the user screen time and display messages accordingly
function usageLimit() {
  // Here I set the limit as 45
  let limit = 45;
  // I invoke showStatus function as the function return me sum of the screen time of the user 
  let sum = showStatus(dateToday); // Now sum here is equal to the sum value returned from the previous function
  // I compare the sum with the limit and log message when screen time is higher than the limit
  if (sum > limit) {
    console.log("You have reached your limit, no more smartphoning for you!");

  }
}
usageLimit();


// This function is to know an activity where the user has spent maximum time
// This function assumes that in the object array there are only 1 occurence of max value for an activity
function activityUserSpentMostTime() {
  // This variable is to store the maximum value in the object array
  let maxDuration = 0;
  // This variable is to show the corresponding activity where the user spent maximum time
  let maxActivity = '';
  // I iterate through the object array to find the maximum duration
  for (let i = 0; i < activities.length; i++) {
    // This if loop is to find max value in among the duration
    if (maxDuration < activities[i].duration) {
      maxDuration = activities[i].duration;
      maxActivity = activities[i].activity;
    }
  }
  // When I return I return as an object since I need to access both maxDuration and maxActivity in log message(Returning 2)
  return { 'maxDuration': maxDuration, 'maxActivity': maxActivity };
}
const maxObject = activityUserSpentMostTime();
console.log(`The user has spent ${maxObject.maxDuration} minutes on ${maxObject.maxActivity}`);

// Extra Feature 
// I am trying to modify activityUserSpentMostTime() function when the user has done more than 1 activity for the same maximum duration
// In the previous case both maxDuration and maxActivity was a variable since there was only one value
// Here the maxDuration will be 1 value whereas maxActivity will be more than 1. So it has to be an array
function activityUserSpentMostTime1() {
  let maxDuration = 0;
  let maxActivity = [];
  for (let i = 0; i < activities.length; i++) {
    if (maxDuration < activities[i].duration) {
      maxDuration = activities[i].duration;
      maxActivity.push(activities[i].activity);
    }

  }
  return { 'maxDuration': maxDuration, 'maxActivity': maxActivity };
}
const multipleMaxObject = activityUserSpentMostTime1();
console.log(`The user has spent ${multipleMaxObject.maxDuration} minutes on ${multipleMaxObject.maxActivity}`);







// if (maxDuration == activities[i].duration) {
//   maxActivity.push(activities[i].activity);
// }
// else if (maxDuration < activities[i].duration) {
//   maxDuration = activities[i].duration;
//   maxActivity = [];
//   maxActivity.push(activities[i].activity);