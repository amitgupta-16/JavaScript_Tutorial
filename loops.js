// for loop

// print 1 to 5
 
 for (let i=1;i<=5;i++){
    console.log ("i=",i);
 }

// Calculate sum of 1 to 5

/**let sum = 0;
for(let i=1;i<=15;i++){
    sum = sum +i;
}
console.log("sum =", sum)
console.log("loop has ended");**/

// while loop

// let i =1;
// while(i <=10){
//     console.log("i=",i);
//     i++;
//  }

 // do-while loops

 let i=1;
 do{
console.log("i=", i);
i++
 }while(i <=10);

 // for-of-loop

 let str="amitgupta";

 let size = 0;

 for(let val of str){
    console.log("val=", val);
    size++
 }

 console.log("string size", size);


 // for-in-loop

 let student={
    name: "amit gupta",
    age: 20,
    cgpa:7.5,
    isPass: true,
 };

 for(let key in student){
    console.log("key=",key, "value=", student[key]);
 }

 // practice Qs1

 for (let num=0; num<=100; num++){
      if (num % 2  !== 0) { // even number ex
        console.log("num=",num);
      }
 } 

 // practice Qs2

 let gameNum = 25;

 let userNum = prompt("Guess the game number :");

 while(userNum != gameNum){
     userNum = prompt("You entered wrong number. Guess again :");
 }

 console.log("congrulation , You entered the right number");
