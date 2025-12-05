var user = /** @class */ (function () {
    //constructor
    function user(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    //methos
    user.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, ", Age: ").concat(this.age));
    };
    return user;
}());
//class object
var user1 = new user("Firoz Hasan", 23);
user1.display();
var user2 = new user("Amit Hasan", 22);
user2.display();
