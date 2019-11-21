
// lifeSpan years multiplied to change to minutes  
let lifeSpan = 80 * 525949; // value of 1 year in minutes rounded is 525949
  let sum = 0;
  const seriesDurations = [
    {
      title: 'House',
      days: 5,
      hours: 9,
      minutes: 48,  
    },
    {
      title: 'suits',
      days: 4,
      hours: 0,
      minutes: 2,
    },
    {
      title: 'Sacred games',
      days: 0,
      hours: 13,
      minutes: 20,
    }
  ]
  // for loop to iterate over all array elements(each array element is objects here)
  for (let i = 0; i < seriesDurations.length; i++) {
     // getting days property from the array and multiplying by 1440 to change to minutes
     let daysInMins = seriesDurations[i].days;
     daysInMins = daysInMins * 1440; // 1 day is 1440 minutes
     // getting hours property from the array and multiplying by 60 to change to minutes
     let hoursInMins = seriesDurations[i].hours;
     hoursInMins = hoursInMins * 60;
     // getting minutes property from the array
     let mins = seriesDurations[i].minutes;
     // total times in minutes is addition of days, hours and minutes value from object
     let totalTimeInMins = daysInMins + hoursInMins + mins;
     // percentageSerialTime is division of totalTimeInMins by lifeSpan in minutes and multiplying by 100
     let percentageSerialTime = (totalTimeInMins / lifeSpan) * 100;
     // calculates sum of percentageSerialTime of all the objects in array seriesDurations
     sum = sum + percentageSerialTime;
     console.log(`${seriesDurations[i].title} took ${percentageSerialTime.toFixed(3)} % of my life`); // toFixed method rounds the decimal to 3 digits in this case.
  }
  // Printing the sum of durations of all the series together
  console.log(`In total that is ${sum.toFixed(3)}% of my life`);