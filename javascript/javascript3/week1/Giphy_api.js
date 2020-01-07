
let button = document.getElementById('mybutton');
button.addEventListener('click', fetchGif);

function fetchGif() {
    let gifType = document.getElementById('giftype');
    let gif = gifType.value;
    let noOfGifs = document.getElementById('gifnum');
    let Number = noOfGifs.value;
    if (!gif) {
        alert("Please enter the type of GIF");
    } else {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=OKovy8ivHuB7o9yBxUn8kgfYQEB4Nr0t&q=${gif}&limit=${Number}&offset=0&rating=G&lang=en`)
            .then(Response => Response.json())
            .then(data => {
                console.log(data);

                organizeData(data);

            })
    }

}

function organizeData(data) {
    let imageContainer = document.getElementById('flex-container');
    // To clear the gifs obtained from the previous search
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    data.data.map(item => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = item.images.preview_gif.url;
        imageContainer.appendChild(div);
        div.appendChild(img);
    });
}




