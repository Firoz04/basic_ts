var users;
users = [];
var user1;
user1 = { userName: "firoz", userId: 124 };
users.push(user1);
var user2;
user2 = { userName: "tamim", userId: 14 };
users.push(user2);
var user3;
user3 = { userName: "shakib", userId: 144 };
users.push(user3);
console.log(users);
var getRequrst;
getRequrst: "GET";
// Function to handle requests
function requestHandler(RequestType) {
    console.log(RequestType);
}
requestHandler("GET");
