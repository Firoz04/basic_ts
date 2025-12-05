type user = {userName: string; userId: number}

let users: object[];
users = [];

let user1: user;
user1 ={userName: "firoz", userId: 124};
users.push(user1);

let user2: user;
user2 ={userName: "tamim", userId: 14};
users.push(user2);

let user3: user;
user3 ={userName: "shakib", userId: 144};
users.push(user3);

console.log(users);

// Define a type for request types
type requestType = "GET" | "POST";
let getRequrst: requestType;
getRequrst: "GET";

// Function to handle requests
function requestHandler(RequestType: requestType){
    console.log(RequestType);
}
requestHandler("GET");