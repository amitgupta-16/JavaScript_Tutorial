// inline Event handling

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) =>{
    console.log(evt); 
    console.log(evt.type); // event object
    console.log(evt.target);// event object
    console.log("btn1 was clicked")
};

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () =>{
    console.log("btn2 was clicked 2x")

};

 let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
};

//Event Listeners -> same events par multiple work

 btn3.addEventListener("click" , (evt) =>{
    console.log("button was clicked - handler1")
    /* event object
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target); **/
 });
 
const handler2 =() =>{
    console.log("button was clicked - handler2")  
}
 btn3.addEventListener("click" , handler2);

btn3.addEventListener("click" , () =>{
    console.log("button was clicked - handler3")
});

btn3.addEventListener("click" , () =>{
    console.log("button was clicked - handler4")
});

btn3.removeEventListener("click" , handler2);

// Practice Set Qs

let modeBtn = document.querySelector("#mode");
 let body = document.querySelector("body");
let currMode = "light"; // dark

modeBtn.addEventListener("click" , ()=>{
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }
    console.log(currMode);
});
