let container = document.getElementById('container');


function fetchDataUser(name) {
    fetch(`https://api.github.com/search/repositories?q=user:${name}`)
        .then(response => response.json())
        .then(data => {
            extractData(data);
        })
}

function extractData(data) {
    const uList1 = document.createElement('ul');
    const list1 = document.createElement('li');
    container.appendChild(uList1);
    uList1.appendChild(list1);
    data.items.every(item => {
        list1.innerHTML = `OWNER: <b>${item.owner.login}</b>`;
    })
    data.items.forEach(item => {
        const uList2 = document.createElement('ul');
        const list2 = document.createElement('li');
        const uList3 = document.createElement('ul');
        const list3 = document.createElement('li');
        list2.innerText = `REPO NAME: ${item.full_name}`;
        list3.innerText = `REPO URL: ${item.html_url}`;
        list1.appendChild(uList2);
        uList2.appendChild(list2);
        list2.appendChild(uList3);
        uList3.appendChild(list3);
    })
}

function promiseAllAtOnce() {
    Promise.all([
        fetchDataUser('Lucha2040'),
        fetchDataUser('SwathiSankararaman'),
        fetchDataUser('mag-da-lenka')
    ]).then(() => {
        console.log('Done');
    })
}

promiseAllAtOnce();