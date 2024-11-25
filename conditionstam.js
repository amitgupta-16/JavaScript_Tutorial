// Conditional Statement

// let age=16;

// if (age >18){
//     console.log("you can vote");
// }

// if(age <18){
//     console.log("you can't vote");
// }

/** let mode ="light";
let color ;

if ( mode === "dark"){
  color = "balack";
}

if ( mode === "light"){
    color = "white";
  }

  console.log(color); **/


  // if-else Statement

  let age =16;

  if(age>=18) {
    console.log("u can vote");
  }else{
    console.log(" u can't vote");
  }

  // odd or even ex

  let num = 7;

  if(num%2===0){
    console.log(num," is even" );
  }else{
    console.log(num," is odd" );
  }


  // else-if statment

  let mode ="pink";
let color;

if(mode === "dark"){
  color = "balack";
}else if(mode === "blue"){
  color = "blue";
}else if(mode === "pink"){
  color = "pink";
}else{
  color = "white";
}

console.log(color);

// tenary opertor

let marks = 62;

let result = marks >=35 ? "pass" : "fail";

console.log(result);

// practice question

// alert("hello");

// ex prompt

//  let name = prompt("hello");
//  console.log(name);

let number = prompt("enter a number");

if (number % 3 ===0){
  console.log(number,"is a multiple of 3");
}else{
  console.log(number,"is NOT a multiple of 3");
}



////////

let score = 78;
let grade ;

if(score>=90 && score<=100){
  garde = "A";
}else if(score>=70 && score<=89){
  garde = "B";
}else if(score>=60 && score<=69){
  garde = "C";
}else if(score>=50 && score<=59){
  garde = "D";
}else if(score>=0 && score<=49){
  garde = "F";
}

console.log("According to your score, your grade was: ", grade  );