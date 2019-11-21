// Save a note
// I have created an empty array called notes
let notes = [];

// This function pushes an object with properties content and id into notes and making notes an array of objects
function addNote(content, id) {
  // This is the syntax to push an object into an array making it an array of objects
  notes.push({'content': content, 'id': id});
}

// Get a note
// This function returns a specific object from notes object array based on the argument we pass to the function
function getNoteFromId(id) {
// For loop to scan through the notes object array to find any match
  for (let i = 0; i < notes.length; i++) {
    // If condition to check if the id passed as an argument is a match to any id in the array of object(notes)
    if (id === notes[i].id) {
      // If match then its returning the specific object in the array 
      return notes[i];
      // This condition is to check if the id value is undefined or not string
    } else if (!id || typeof(id) === 'string') {
      console.log("Id cannot be undefined or a string!! Must enter a valid Id");
      // This will be executed when the id is a valid one but doesnot match with any object
    } else {
      console.log("The given Id doesnot match with any notes.");
    }
  }
}

// Get all notes
// This function simply returns the notes array when called
function getAllNotes() {
  return notes;
}

// Log out notes
// This function uses for loop to go through array and display the properties in the given format.
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`);
  }
}

// Unique feature - Personal ideas


// Delete a note
// This function uses for loop to go through object array and delete a particular object based on the argument passed to the function .
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    // This condition checks if the argument passed to the function matches with any property value and deletes it from the object array
    if(id === notes[i].id) {
      let deletedNote = notes.splice(notes[i], 1);
      return deletedNote;
    }
  }
}



// Edit a note
// This function uses for loop to go through object array and edits a particular object based on the argument passed to the function .
function editNote(id, text) {
  for (let i = 0; i < notes.length; i++) {
    // This condition checks if the argument passed to the function matches with any id value and edits the content value
    if(id === notes[i].id) {
      // When id matches we should append the text passsed as an argument into the object array content value.
      notes[i].content = notes[i].content + text;
      console.log(notes[i].content);
      
      return notes[i];
    }
  }
}


// Update a note
// This function uses for loop to go through object array and completely changes/updates particular object based on the argument passed to the function .
function updateNote(id, content) {
  for (let i = 0; i < notes.length; i++) {
    // This condition checks if the argument passed to the function matches with any id value and edits the content value
    if(id === notes[i].id) {
      // When id matches we should append the text passsed as an argument into the object array value.
      notes[i].content = content;
      return notes[i];
    }
  }
}

addNote('Learning to work with objects', 1);
console.log(notes);
addNote('Learning some formatting in this homework.', 2);
console.log(notes);
addNote('Trying to implement fuzzy search.', 3);
console.log(notes);

const searchedNote = getNoteFromId(1);
console.log(searchedNote);

console.log(getAllNotes());

logOutNotesFormatted();

console.log(deleteNote(1));
console.log(notes);

const editedNote = editNote(3, 'Did some formatting with Time.');
console.log(editedNote);

const updatedNote = updateNote(2, 'Trying to update the object array.');
console.log(updatedNote);