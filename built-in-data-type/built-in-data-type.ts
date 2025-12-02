//built in type : number, string, boolean, void, unfined, null

let userID: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;


userID = 100;
firstName = "Firoz";
lastName = " Hasan";
isActivated = true;

fullName = firstName.concat(lastName);

console.log(`My id: ${userID}, Username: ${fullName}, Account activated: ${isActivated}`)

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//function
function display(): void{
    console.log("Thank You");
}

display();