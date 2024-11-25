// Synchronous Ex:-

console.log("one");
console.log("two");
console.log("three");

//ASynchronous Ex:-

console.log("first");
console.log("secod");

setTimeout ( () =>{  
console.log("hello1");
},5000);

console.log("third");
console.log("fourth");

// Callbacks
function sum (a,b)  {
console.log(a+b);
}
function calculator (a,b ,sumCallback) {
sumCallback(a,b);
}

calculator(1,5,sum);

// calculator(1,5,(a,b) =>{
//     console.log(a+b);
// });

// ASynchronous Callbacks Ex:-
const hello = () =>{
    console.log("hello");
}

setTimeout(hello ,3000);

// nesting Ex

// Nested  if-else

let age =19;
if (age>=18){
   if(age >=60){
    console.log("senior");
   }else{
    console.log("middle");
   }
}else{
    console.log("child");
}

// Nested loop

for (let i=0;i<5;i++){
    let str ="";
    for(let j=0;j<5;j++){
       str = str +j; 
    }
     console.log(i,str);
}

// Promise Ex-

// There are three stage panding,resolve,reject.

/*let promise = new Promise((resolve,reject) =>{
    console.log("i am a promise");
    // resolve("successful") //(result)
    reject("some error occured"); //(error)
    
}); */


const getPromise =() =>{
    return new Promise((resolve,reject) =>{
        console.log("i am a promise");
         resolve("success")
        // reject("network error")
});
};

// promise callback hell

let promise = getPromise();
promise.then( (res) =>{
    console.log("promise filfilled ", res)
});

promise.catch( (err) =>{
    console.log("rejected ",err)
});
/** 

function getData(dataId , getNextData){
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            console.log("data" , dataId);
            resolve("suceess");
            if (getNextData){
                getNextData();
            }
        }, 5000);
    });
} */

    /* promise ex used to Asyncfuction

    function asyncfuction(){
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                console.log("data1");
                resolve("succes full")     
            },4000);   
        });
    }
console.log("fetching data1.....");
let p1 = asyncfuction();
p1.then((res) => {
    console.log(res);
}); */

//

function asyncfuction1(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("succes full")     
        },4000);   
    });
}

function asyncfuction2(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("succes full")     
        },4000);   
    });
}
// promise chain

console.log("fetching data1.....");
 asyncfuction1().then((res) => {
    console.log("fetching data2.....");
asyncfuction2().then((res) => {});
});