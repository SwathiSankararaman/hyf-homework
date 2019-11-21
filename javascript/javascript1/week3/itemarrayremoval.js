const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// I am writing a for loop to loop through all the elements in the array inorder to remove a specific name
for (let i = 0; i < names.length; i++) {
    // This condition is to check the names in the array matching with nameToRemove and if yes removes the name
    if(names[i] === nameToRemove){
    // I use the index from the for loop to slice the nameToRemove from the array(Assuming I donot know the location of nameToRemove in the names array)
        names.splice([i],1);
        console.log(names);
    } 
}