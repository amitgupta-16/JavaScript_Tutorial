//Array -Collection of items - linear means single line
// Arrays is mutable 

let marks =[97,48,89,39,78,97];
marks[4]=28;
console.log(marks);
console.log(marks.length);//


let heroes = ["ironman", "thor", "captionamerica","hulk", "antman", "spiderman"];

// for loop
for (let i = 0;i < heroes.length; i++ ) {
    console.log(heroes[i]);
}

//for of 

for (let hero of heroes){
console.log(hero);
}

let cities =["delhi","pune","mumbai","hyderabad","varanashi"];
for (let city of cities){
    console.log(city.toUpperCase());

}

// practice set

let markss =[86,97,44,38,67];

let sum = 0;


for (let val of markss){
    // console.log(val);
    sum +=val;
}
let avg = sum/ marks.length;
console.log(`avg marks of the class = ${avg}`);
// console.log(sum);

// practice set Q2

let items =[250,560,160,426,180];

// for of ex
// let i =0;

// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
//  }

// for loop ex

for (let i = 0;i< items.length; i++){
    let offer = items [i] / 10;
    items [i] -= offer;
}

console.log(items);


