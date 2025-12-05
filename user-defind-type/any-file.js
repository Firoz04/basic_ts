var userName;
userName = "Firoz";
userName = "04";
userName = true;
userName = [213, 60];
//history of all previous values
var valueHistory = [];
//let userName: any;
userName = "Firoz";
valueHistory.push(userName);
userName = "04";
valueHistory.push(userName);
userName = true;
valueHistory.push(userName);
userName = [213, 60];
valueHistory.push(userName);
console.log(valueHistory[1]); // prints: 04 (index 1)
console.log(valueHistory); // prints full history
