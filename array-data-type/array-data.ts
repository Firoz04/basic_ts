let UserNames: string[];
//or, let userName: Array<string>;

UserNames = ["Firoz", "Tamim", "Imran", "Amit"];
console.log(UserNames[1]);

UserNames.sort();
console.log(UserNames);

let multiplyTypesArray:(string | number)[];
multiplyTypesArray = [2, "Bangladesh"];
console.log(multiplyTypesArray[0]);