// Block of code that performs a specific task , can be invoked/call  whenever needed

/** function Definition
function myFunction(){
  console.log("welcome to myfunction");
  console.log("i am learing js");
}

// Function Call
myFunction();**/

function myFunction(msg ){// parameter -> input
    // function parameter -> like local variables of function->block scope
    console.log(msg);
  }

  myFunction("I Love JS")// argument

  // function ->2 number , sum

  function sum(a,b){
    console.log(a + b);
  }

  //return value

  function sum(x,y){ 
    s= x+y;
    return s;
  }

  let val = sum (3,4);
  console.log(val);

// multiplication function

function mul(a,b){
  return a * b;
}

const arrowMul = (a,b) =>{
  return a * b;
}
  // Arrow fuction

  function sum(a,b){
  return a + b ;
  }

 const arrowSum = (a,b) => {
    console.log(a+b);
  }

  // Practice Q1

  function countVowels(str){
    let count =0;
    for (const char of str){
      if (char ==="a" || char === "e"|| char === "o"|| char === "u"|| char === "e"){
        count++;
      }
    }
    return(count);
  }
// arrow
  const countVow =(str)=>{
    let count =0;
    for (const char of str){
      if (char ==="a" || char === "e"|| char === "o"|| char === "u"|| char === "e"){
        count++;
      }
    }
    return(count);
  }
  
  // forEach Loop in Arrays forEach method only use to array
  // forEach Highorder function/Method

  let arr = [1,2,3,4,5];

  arr.forEach(function printVal(val){
    console.log(val);
  }
);

// there are three parameter 1 val 2 idx 3 arr

let arrr = ["pune", "delhi","mumbai"];

  arrr.forEach((val,idx,arr) =>{
    console.log(val.toUpperCase(),idx,arr);
  }
);

// practice Q1
let nums = [3,5,8,6];

nums.forEach((num) => {
  console.log(num*num);
})
