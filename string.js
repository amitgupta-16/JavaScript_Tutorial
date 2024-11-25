 // strings
 //strings are immutable means string not be any change

 let str = "amitgupta";
let str2 = "krishna yadav";

//string lenth
str.length

// string indices

let str3= "amitgupta";
console.log(str[0]);

// template literals

let spacialString =`This is a template literal ${1+2+8} `;
console.log(spacialString)

let obj= {
    item : "pen",
    price : "10",
};

let output = `The cost of ${obj.item} is ${obj.price} rupees `;
console.log(output);

// escape character

console.log("amit\ngupta");
console.log("amit\tgupta")


let str4 = "krishna\tyadav";
console.log(str4.length);

// string metthod menans function

let str5 = ("amitgupta");
str= str5.toUpperCase();
console.log(str);


let str6 = ("amitgupta");
str= str6.toLowerCase();
console.log(str);

// trim method

let str7 = "     ArjunGupta    JS  ";
console.log(str7.trim()); // remove extra space 


// slice method

let str8 =("amitgupta");
console.log(str8.slice(4)); // returns part of string

// concat method 

let str9 = "amit";
let str10 = "gupta"

// let res = str9.concat(str10);
let res = "I am learning coding from " + str9 + str10;
console.log(res);

// replace method

let str11 = "hello";
console.log(str11.replace("lo","p"));

// char method

let str12 = "ILoveJS";
console.log(str12.charAt(4)); // use to chart search


//Practice set

let fullName = prompt("enter your fullName without space");
let userename = "@" + fullName + fullName.length;
console.log(userename);

