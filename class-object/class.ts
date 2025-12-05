class user{
    // properties 
    userName: string;
    age: number;

//constructor
constructor(userName: string, age: number){
    this.userName = userName;
    this.age = age;
 }

 //methos
 display(): void{
    console.log(`UserName: ${this.userName}, Age: ${this.age}`)
 }
}

//class object
 let user1  = new user("Firoz Hasan",23);
user1.display();

 let user2  = new user("Amit Hasan",22);
user2.display();
