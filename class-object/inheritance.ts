class user{
    userName: string;
    age: number;

constructor(userName: string, age: number){
    this.userName = userName;
    this.age = age;
 }

 display(): void{
 console.log(`UserName: ${this.userName}, Age: ${this.age}`)
 }
}

//child class(inherits)
 class student extends user {
  studentId: number;

  constructor(userName: string, age: number, studentId: number){
   super(userName,age);//call parent constructor
   this.studentId = studentId;
  }

  //override display method
  display(): void{
  console.log(`UserName: ${this.userName}, Age: ${this.age},id:${this.studentId}`)
  }
 }


 //create object of student class
 let student1 = new student("Firoz", 23, 313);
 student1.display();

