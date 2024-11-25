/**  get.Attributes (attr) // to get the attributes value

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class")); 
**/

/** setAttributes (att,value) // to set the attributes val th

 let para = document.querySelector("p");
console.log (para.setAttribute("class", "newClass")); 
**/

/* node.style 

 let div = document.querySelector("div");

div.style.backgroundColor ="green";
div.style.fontSize = "20px";
**/

//Insert Element

/** let newBtn = document.createElement("button");
newBtn.innerText = "click me!"
console.log(newBtn);

let p = document.querySelector("p");
// div.append(newBtn); ->adds at the end of node (inside)

//  div.prepend(newBtn); ->adds at the start  of node (inside)

// div.before(newBtn); -> adds before the node (outside)

// p.after(newBtn); -> adds after the node (outside)

**/

/** Insert Element 
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

*/

/**Delete Element

let para = document.querySelector("p");
para.remove();

newHeading.remove(); **/

 // Practice Set Q1

let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.backgroundColor ="red";
newBtn.style.color ="white";

document.querySelector("body").prepend(newBtn); 

// Q2

let para= document.querySelector("p");
 para.classList.add("newclass"); //add classlist
 para.classList.remove("newclass"); // remove classlist







