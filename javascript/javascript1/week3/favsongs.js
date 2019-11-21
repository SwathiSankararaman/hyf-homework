// Doubts to ask in Study group
// 2. Multiple playlist
const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];

let myPlaylist = [];

// createPlaylist("My Playlist");
// addSongToMyPlaylist("My Playlist", "Song 2");

// function createPlaylist(playlistName) {

// }

// function addSongToMyPlaylist(playlistName, songTitle) {

// }

// function addToPlaylist(songTitle, playlistName) {
//   const songs = getSongByTitle(songTitle);

//   for(let i = 0; i < playlists.length; i++) {
//     if (playlists[i].name === playlistName) {
//       playlists[i].songs = playlists[i].songs.concat(songs);
//     }
//   }
// }


// Function to add a new song into songDatabase array

function addSongToDatabase(song) {
// Using push to add songs by passing song(object) as a parameter to the function
  songDatabase.push(song);
}

addSongToDatabase({
  songId: 5,
  title: 'Poo vasam',
  artist: 'Vidhyasagar',
});

addSongToDatabase({
  songId: 6,
  title: 'Rasali mandhirama',
  artist: 'A R Rahman',
});

addSongToDatabase({
  songId: 7,
  title: 'O Vasantha Raja',
  artist: 'Ilaiyaraja',
});

addSongToDatabase({
  songId: 8,
  title: 'Poo vasam',
  artist: 'Ilaiyaraja',
});
console.log(songDatabase);


// Function to search the songs in the array based on the title and returning the matched song

function getSongByTitle(title) {
  // looping through songDatabase array and using if condition to check if the title argument passed to the 
  // function is equal to songDatabase array.propertyname, the index for searching in the array will be taken from the for loop
  // I have created searchedSongArray to accomodate multiple songs with the same name(This was an optional requirement).
  let searchedSongArray = [];
  for (let i = 0; i < songDatabase.length; i++) {
    if (title === songDatabase[i].title) {
      searchedSongArray.push(songDatabase[i]);
    } 
  }
  return searchedSongArray;
}

// Function that searches the song title that I pass as a parameter by invoking getSongByTitle function inside it and adds that song to myPlaylist using push.
function addSongToMyPlaylist(title) {
  // The getSongByTitle function returns an argument which will be stored here in favouriteSong.
  const searchedSong = getSongByTitle(title);
  console.log(searchedSong);
  if (searchedSong == 0) {
    console.log("No such song exists, so cannot add to the playsist");

  } else {
      // Since favouriteSong is an array I use concat to add songs to playlist rather than push.
      myPlaylist = myPlaylist.concat(searchedSong); 
  }
}

addSongToMyPlaylist('Poo vasam');
addSongToMyPlaylist('Rasali mandhirama');
console.log(myPlaylist);


