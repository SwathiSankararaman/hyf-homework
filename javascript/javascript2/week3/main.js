console.log('Script loaded');

// console.log(getAvailableProducts());


const products = getAvailableProducts();

function renderProducts(products) {
    console.log(products);
    let trailProducts = document.querySelector('.products');
    let firstUl = trailProducts.querySelector('ul');
    while (firstUl.firstChild) {
        firstUl.removeChild(firstUl.firstChild);
    }
    for (let i = 0; i < products.length; i++) { // This loop is to iterate over the general products array(its an object array with each index as an object)
        let firstLi = document.createElement('li');
        firstUl.appendChild(firstLi);
        let secondUl = document.createElement('ul');
        firstLi.appendChild(secondUl);
        for (const key in products[i]) { // This for loop is to iterate over objects, in our case every index of products array is an object.
            if (products[i].hasOwnProperty(key)) { //  Why are we doing this? Because we want the properties of the objects in lists
                // const element = products[i][key];
                let innerLi = document.createElement('li');
                if (!Array.isArray(products[i][key])) { // The shipsTo objects property is an array, so I am going add other properties normally since its not array
                    innerLi.textContent = products[i][key];
                    secondUl.appendChild(innerLi);
                } else { // when the iteration comes to shipsTo, it is an array so I create another li inside an ul
                    let innerMostUl = document.createElement('ul')
                    innerLi.appendChild(innerMostUl);
                    for (let j = 0; j < products[i][key].length; j++) {
                        let innerMostLi = document.createElement('li');
                        innerMostLi.textContent = products[i][key][j];
                        innerMostUl.appendChild(innerMostLi);

                    }
                    secondUl.appendChild(innerLi);

                }

            }
        }
    }
}


// Searching for products
let sortedProducts = products;
function filter() {
    let value = document.getElementById('input').value;
    sortedProducts = sortedProducts.filter(prod => prod.name.toLowerCase() === value);
    renderProducts(sortedProducts);
}

document.getElementById('mybutton').addEventListener('click', filter);

// Showing products that ships to country - optional
function filterBasedOnShipping() {
    let country = document.querySelector('.country select');
    country = country.options[country.selectedIndex].text;
    if (country === 'Please select an option') {
        sortedProducts = products;
        sorting();
    } else {
        sortedProducts = sortedProducts.filter(prod => prod.shipsTo.includes(country));
        renderProducts(sortedProducts);
    }

}

// Sort the products - optional
function sorting() {
    let option = document.querySelector('.sort select').value;
    if (option === 'cheap') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'expensive') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === 'name') {
        sortedProducts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    } else if (option === 'novalue') {
        console.log('Hi');
        console.log(products);

        sortedProducts = products;
    }
    renderProducts(sortedProducts);
}

renderProducts(products);

//Price analytics
// window.sendPricesToServer = function (prices, callback) {
//     console.log(`Sending these prices: ${prices} to an analytics server`);

//     setTimeout(() => {
//         callback(`These prices were received ${prices}`);
//     }, 3000)
// }

const productPriceArray = products.map(item => item.price);
const callbackFunction = function (text) {
    console.log(text);
}

sendPricesToServer(productPriceArray, callbackFunction);