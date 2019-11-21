const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  // This function calculates the travelling time in the requested format.
  function timeToArrive (travelInformation) {
    //Time taken is division of distance by speed
    timeTaken = travelInformation.destinationDistance / travelInformation.speed; // This result is in hours(in this case 8.64 hours)
    // I am seperating the solid hours(8 in this case with math floor and storing it in timeInHours)
    let timeInHours = Math.floor(timeTaken);
    console.log(timeInHours);
    // Now to calculate mins I subtract timeInHours from time(8.64 hours-8 hours = .64 hours)
    let timeInMinutes = timeTaken - timeInHours;
    // Converting .64 hours into mins by multiplying by 60
    timeInMinutes = timeInMinutes * 60;
    // I am using math.floor again to have a round number
    timeInMinutes = Math.floor(timeInMinutes);
    console.log(timeInMinutes);
    // returning time in format requested
    let time = `${timeInHours} hours and ${timeInMinutes} minutes`;
    return time;
  }

  const travelTime = timeToArrive(travelInformation);
  console.log(travelTime);
