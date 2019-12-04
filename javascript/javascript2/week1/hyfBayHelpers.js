/* DONT MODIFY ANY OF THIS CODE!!!*/
window.getAvailableProducts = function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomItem(availableProductNames) {
        return availableProductNames[getRandomInt(0, availableProductNames.length - 1)];
    }

    function getRandomProductname() {
        const preWords = ['Used', 'Fantastic', '"Used"', 'Broken', 'Beautiful', 'Wet', 'Green', 'Sloppy', 'Dirty'];
        const productNames = ['Carrot', 'Drone', 'Giftcard', 'Puppy', 'Car', 'Shirt', 'Milk', 'Chalk', 'Fish fingers', 'Socks', 'Chocolate', 'Toothbrush', 'Computer', 'Nokia', 'Cologne'];

        let chosenProductName = getRandomItem(productNames);
        const shouldHavePreWord = getRandomInt(0, 10) > 6;

        if (shouldHavePreWord) {
            const preWord = preWords[getRandomInt(0, preWords.length - 1)];
            chosenProductName = `${preWord} ${chosenProductName}`;
        }

        return chosenProductName;
    }

    /* DONT MODIFY ANY OF THIS CODE!!!*/
    function getRandomCountries() {
        const availableCountries = ['Denmark', 'Sweden', 'Norway', 'Germany', 'Iceland', 'England'];
        const numberOfCountries = getRandomInt(1, 3);

        const randomCountries = [];
        while (randomCountries.length < numberOfCountries) {
            const randomIndex = getRandomInt(0, availableCountries.length - 1);
            const randomCountry = availableCountries[randomIndex];
            if (!randomCountries.includes(randomCountry)) {
                randomCountries.push(randomCountry);
            }
        }

        return randomCountries;
    }

    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(null, Array(numberOfAvailableProducts))
        .map(() => {
            const name = getRandomProductname();
            return {
                id: `${name}${getRandomInt(0, 100000)}`,
                name,
                price: getRandomInt(0, 10000),
                rating: getRandomInt(1, 10),
                shipsTo: getRandomCountries(),
            };
        });

    return availableProducts;
}

window.sendPricesToServer = function (prices, callback) {
    console.log(`Sending these prices: ${prices} to an analytics server`);

    setTimeout(() => {
        callback(`These prices were received ${prices}`);
    }, 3000)
}


const products = getAvailableProducts();
let arrayLength = products.length;


// <li>
//     <ul>
//         <li class="name">Drone</li>
//         <li class="price">1234</li>
//         <li class="rating">5</li>
//         <li class="ships-to">
//             <ul>
//                 <li>Denmark</li>
//                 <li>Sweden</li>
//             </ul>
//         </li>
//     </ul>
// </li>


function renderProducts(products) {
    let trailProducts = document.querySelector('.products');
    let firstUl = trailProducts.querySelector('ul');
    for (let i = 0; i < arrayLength; i++) { // This loop is to iterate over the general products array(its an object array with each index as an object)
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

renderProducts(products);