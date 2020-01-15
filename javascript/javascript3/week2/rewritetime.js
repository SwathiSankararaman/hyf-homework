
// setTimeOut rewrite

function setTimeoutPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });


//  navigator.geolocation.getCurrentPosition rewrite


function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position);
        }, noPosition => {
            reject(noPosition);
        })
    })
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });