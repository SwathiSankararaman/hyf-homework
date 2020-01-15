// Function to fetch json from provoided api
function fetchData() {

    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            organizeData(data);
        })

}

// Performing different array function on the json returned from the api
function organizeData(data) {
    let badMovies = data.filter(item => item.rating < 3);
    console.log(badMovies);

    let badMoviesYear = badMovies.filter(item => item.year >= 2000);
    console.log(badMoviesYear);

    let badMoviesTitle = badMoviesYear.map(item => item.title);
    console.log(badMoviesTitle);
}

fetchData();