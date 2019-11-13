const class07Students = [];
// Function to add student name into class07Students array based on few conditions
function addStudentToClass(studentName) {
    // This if condition checks for the array length as well as studentName as Queen and when the length is greater than 6 as well as Queen it is executed
    if (class07Students.length >= 6 && studentName === "Queen") {
        class07Students.push(studentName);
    // If hte arraylength is more than or = 6 then cannot add more
    } else if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07.");
     // when the student is already in the array then the index will be something above= 0. So, if the index is -1 I can be sure its not a duplicate
    } else if (class07Students.indexOf(studentName) !== -1) {
        console.log(`Student ${studentName} is already in the class`);
    // to check if the name is empty
    } else if (!studentName) {
        console.log("You cannot add empty string to a class");
    } else {
        class07Students.push(studentName);
        console.log(class07Students);
        
    }

}
// gets the number of students from the class07Students array by length property and prints it
function getNumberOfStudents() {
   let noOfStudents =  class07Students.length;
   console.log(noOfStudents);
    
}



addStudentToClass("swathi");
addStudentToClass("raghavan");


getNumberOfStudents();
