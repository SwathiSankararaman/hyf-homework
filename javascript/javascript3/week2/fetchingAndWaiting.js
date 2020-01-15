function fetchData() {
    return new Promise(resolve => {
        fetch('https://yesno.wtf/api/')
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        }).then(data => {
            setTimeout(() => {
                resolve(data);
            }, 3000)
        })
    })
}

fetchData().then(data => console.log(data));