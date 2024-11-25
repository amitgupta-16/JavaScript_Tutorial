/** obj ex:
const student = {
     fullname : "Amit Gupta" ,
    marks : 94.5,
    printMarks: function () {
        console.log("marks =", this.marks);
     },
 };
 **/

 // prototype ex:

 const employee = {
    calcTax () {
        console.log("tax rete is 10%");
    },
 };

 const karan ={
    salary:50000,
    // calcTax() {
    //     console.log("tax rete is 20%");
    // },
 };

 karan.__proto__ = employee;


 // Classes Ex:

 class Toyotocar {
 constructor (brand,mileage){
    console.log("creting new object");
    this.brand = brand;
    this.mileage = mileage;
 }


    start (){
        console.log("satar");
    }

    stop (){
        console.log("stop");
    }
 }

 let fortuner = new Toyotocar ("fortuner",10);
 console.log(fortuner);
 let lexus = new Toyotocar ("lexus",12);
 console.log(lexus);
 
// Inheritance ex

class person {
    constructor (){  //constructor
        this.species = "home species";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends person {
    work(){
           console.log("solve problems , bulid something"); // if child & parent have same method ,child's method will be used   
    }
}

let amitobj = new Engineer();
 

// super Keyword

class persons {
    constructor (name){  //constructor
        this.species = "home species";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}

class Engineerr extends persons {
    constructor(name){
        super(name);
    }
    work(){
        super.eat();
        console.log("solve problems , bulid something");
    }
}

let engobj = new Engineerr("amit");
 
// Practice set Q1

let DATA = "secret information";

class User {
   constructor(name,email){
    this.name= name;
    this.email= email;
   }

   viewData(){
    console.log("data =", DATA)
   }
}


class Admin extends User{
    constructor(name, email){
        super(name,email);
    }
   editdata(){
    DATA = "some new value";
   }
}

let student1 = new User("amit","amit@gmail.com" );
let student2 = new User("krishna","krishna@gmail.com" );

let teacher = new User("raju","raju@gmail.com" );

let admin1 = new Admin ("admin","admin@gmail.com" );







