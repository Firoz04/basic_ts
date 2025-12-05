var userName;
userName = "Firoz";
userName = "04";
userName = true;
userName = [213, 60];
//history of all previous values
var history = [];
var userName;
userName = "Firoz";
history.push(userName);
userName = "04";
history.push(userName);
userName = true;
history.push(userName);
userName = [213, 60];
history.push(userName);
console.log(history[1]); // prints: 04 (index 1)
console.log(history); // prints full history
