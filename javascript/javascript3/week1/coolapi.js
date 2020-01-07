
let button = document.getElementById('mybutton');
button.addEventListener('click', fetchData);


function fetchData() {
    let currencyCode = document.getElementById('currcode');
    

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyCode.value}`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
        })

}