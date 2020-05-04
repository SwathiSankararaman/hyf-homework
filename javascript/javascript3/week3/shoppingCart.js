
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency) {
        fetch(`https://api.exchangeratesapi.io/latest?base=DKK&symbols=EUR,GBP,USD,SEK`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (currency === 'euros') {
                    this.price = (data.rates.EUR * this.price).toFixed(2);
                    console.log(`Price in ${currency} is ${this.price}`);
                } else if (currency === 'pounds') {
                    this.price = (data.rates.GBP * this.price).toFixed(2);
                    console.log(`Price in ${currency} is ${this.price}`);
                } else if (currency === 'dollars') {
                    this.price = (data.rates.USD * this.price).toFixed(2);
                    console.log(`Price in ${currency} is ${this.price}`);
                } else if (currency === 'swedish krones') {
                    this.price = (data.rates.SEK * this.price).toFixed(2);
                    console.log(`Price in ${currency} is ${this.price}`);
                }
            })

    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products = this.products.filter(item => item.name !== product.name);
    }

    searchProduct(productName) {
        const searchedProduct = this.products.filter(item => item.name === productName);
        console.log(searchedProduct);
    }

    getTotal() {
        this.total = this.products.reduce((acc, item) => acc + item.price, 0);
        console.log(this.total);
    }

    renderProducts() {
        const container = document.getElementById('container');
        const items = document.getElementById('items');
        const modal = document.getElementById("myModal");
        const inputField = document.getElementById("mySearch");
        const text = document.querySelector(".modal-text");
        const span = document.getElementsByClassName("close")[0];
        inputField.oninput = function () {
            if (productList.includes(inputField.value)) {
                text.innerHTML = `The item you have selected is: <b>${inputField.value}</b>`;
                modal.style.display = "block";
            }
        }
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        const productList = this.products.map(item => item.name);
        productList.forEach(item => {
            const option = document.createElement('option');
            option.setAttribute('value', item);
            items.appendChild(option);
        })


        if (this.user) {
            const heading = document.createElement('h3');
            heading.innerHTML = this.user.username;
            container.appendChild(heading);
        }
        this.products.forEach(item => {
            const uList1 = document.createElement('ul');
            const uList2 = document.createElement('ul');
            const list1 = document.createElement('li');
            const list2 = document.createElement('li');
            list1.innerHTML = `Item name: <b>${item.name}</b>`;
            list2.innerHTML = `Item price: <b>${item.price}</b>`;
            container.appendChild(uList1);
            uList1.appendChild(list1);
            list1.appendChild(uList2);
            uList2.appendChild(list2);
        });
        const total = document.createElement('p');
        container.appendChild(total);
        total.innerHTML = `The total price of the products: <b>${this.total}</b>`

    }

    getUser() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.user = data;
                this.renderProducts();
            })
    }
}


const flatscreen = new Product('flat-screen', 5000);
const shoppingCart = new ShoppingCart([flatscreen]);
const plant = new Product('plant', 50);
plant.convertToCurrency('dollars');
shoppingCart.addProduct(new Product('fridge', 15000));
shoppingCart.addProduct(new Product('washingmachine', 10000));
shoppingCart.removeProduct(new Product('plant', 50));
shoppingCart.getTotal();
shoppingCart.searchProduct('fridge');
shoppingCart.getUser();
console.log(shoppingCart);

