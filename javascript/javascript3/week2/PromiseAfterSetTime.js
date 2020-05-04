const myFunction = function (resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('I am called asynchronously');
        }, resolveAfter * 1000)
    })
}

myFunction(3).then((logOutString) => console.log(logOutString));