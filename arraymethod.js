let fruits = ["fruites", "apple", "organe", "chiku", "cherry"];
console.log(fruits);

fruits.push("banana","pear"); // add to end 
console.log(fruits);

let deletedItem = fruits.pop();
console.log("deleted" ,deletedItem );

// toString():-- converts array to string

let marks = [45,78,90,57,95];
console.log(marks);
console.log(marks.toString());

// Concat():-- joins multiple arrays & returns result

let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman","batman" ];
let indianHeroes = ["shakiman","krish"];

let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

// unshift() like push()

let indianHeroess = ["shakiman","krish"];
indianHeroess.unshift("padman"); // add to start
console.log(indianHeroess);

// shift()

let marvelHeroess = ["thor", "spiderman", "ironman"];
let val =marvelHeroess.shift(); // delete to start
console.log("deleted", val);

// slice():-- returns a piece of the array

  let num = [123,345,456,825,111,308,120];
console.log(num);

console.log(num.slice(2,5));

// Splice():-- change original array (add,remove,replace)
// splice(startdx,delCount,newE add )

let arr = [1,2,3,4,5,6,7];

 arr.splice(2,0,101,102);

/**Add Element
  arr.splice(2,0,101);**/

 /**Delete Elment
 arr.splice(3,1);**/

 /**Replace Element
  arr.splice(3,1,101);**/
  
// practice Q1

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netfilx"]

// companies.shift();
//companies.splice(2,1,"ola")
companies.push("Amzon");

// map method

let nums =[67 ,52, 39];

/**  nums.map((val) =>{
   console.log(val);
}); **/

let newArr = nums.map((val) =>{
  return val*2;
}
);

console.log(newArr);

// filter method

let arrr =[1,2,3,4,5,6,7,8];

let evenArr = arrr.filter((val)=>{
  return val % 2 === 0;
});

console.log(evenArr);

// Reduce method
let ar =[1,2,3,4];

const output =ar.reduce((res, curr)=>{
  return res + curr;
});
console.log(output); //10

// practice Q1

let markss = [65,78,56,93.96,86,99];

let toppers = markss.filter((val) =>{
  return val > 90;
});

console.log(toppers);