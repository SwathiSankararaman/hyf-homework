
function translateOneByOne() {
    let documentChild = document.querySelectorAll('.marks > li');
    moveElement(documentChild[0], { x: 20, y: 300 })
        .then(() => {
            console.log('Red circle Element has been moved');
            return moveElement(documentChild[1], { x: 400, y: 300 })
        })
        .then(() => {
            console.log('Blue circle Element has been moved');
            return moveElement(documentChild[2], { x: 400, y: 20 })
        })
        .then(() => {
            console.log('Green circle Element has been moved');
        });
}


function translateAllAtOnce() {
    let documentChild = document.querySelectorAll('.marks > li');
    Promise.all([
        moveElement(documentChild[0], { x: 20, y: 300 }),
        moveElement(documentChild[1], { x: 400, y: 300 }),
        moveElement(documentChild[2], { x: 400, y: 20 })
    ]).then(() => {
        console.log('All elements has been moved');
    })
}

translateOneByOne();
// translateAllAtOnce();
