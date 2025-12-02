//built in type : number, string, boolean, void, unfined, null
var userID;
var firstName;
var lastName;
var fullName;
var isActivated;
userID = 100;
firstName = "Firoz";
lastName = " Hasan";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("My id: ".concat(userID, ", Username: ").concat(fullName, ", Account activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
//function
function display() {
    console.log("Thank You");
}
display();
