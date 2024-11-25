// DOM Manipulation

//Selecting with id

let heading = document.getElementById("heading");
console.dir(heading);
   
// Selecting with class

let headings = document.getElementsByClassName("headins");
console.dir(headings);
console.log(headings);

//  Selecting with tag

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

// Query Selector

/**document.querySelector("myid/myClass/tag")
//returns first element**/

/**document.querySelectorAll("myid/myClass/tag")
//returns a NodeList **/


/**DOM Manipulation -> Properties

let firstEl = document.querySelector("h3"); // tagName
console.log(firstEl);

let div = document.querySelector("div");
console.dir(div);
let inertext = div.innerText; // innerText
console.log(inertext);
let innerhtml = div.innerHTML; // innerHtml
console.log(innerhtml);

let headingg =document.querySelector("h1");
console.log(headingg); **/

// Practice set
 let h2 = document.querySelector("h2");
 console.dir(h2.innerText);

 h2.innerText = h2.innerText + "from Amit Gupta";

 // Practice set 2
let divs = document.querySelectorAll(".box");

 let idx = 1;
 for (div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
 }