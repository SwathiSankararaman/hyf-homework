
const button = document.getElementById('mybutton');
button.addEventListener('click', fetchData);


function fetchData() {
    const currencyCode = document.getElementById('currcode');
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyCode.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}
