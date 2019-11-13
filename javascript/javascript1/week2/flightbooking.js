//  Function for displaying full name

function getFullname(firstname, lastname, useFormalName) {
    // this will be executed if either one name is present and if useFormalName was checked
    if ((firstname || lastname) && useFormalName) {
        name =  "Lord" + " " + firstname + " " + lastname;
        return name;
        //this will be executed if user has not given any value(either in firstname or lastname)
    } else if (!firstname && !lastname) {
        alert ("Please enter either first name or last name");
        // this will be executed when the user has atleast given one value(either firstname or lastname) and useFormalName was not checked
    } else {
        name = firstname + " " + lastname;
        return name;
    }
}

let fullname = getFullname("Swathi", "Sankararaman", false);
console.log(fullname);
