var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, ", Age: ").concat(this.age));
    };
    return user;
}());
//child class(inherits)
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this; //call parent constructor
        _this.studentId = studentId;
        return _this;
    }
    //override display method
    student.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, ", Age: ").concat(this.age, ",id:").concat(this.studentId));
    };
    return student;
}(user));
//create object of student class
var student1 = new student("Firoz", 23, 313);
student1.display();
