let numContainer = document.querySelector(".numbers");
let calcScreen = document.querySelector(".calculator-screen");
let addBtn = document.querySelector("#add-btn");
let subBtn = document.querySelector("#subtract-btn");
let divBtn = document.querySelector("#divide-btn");
let multBtn = document.querySelector("#multiply-btn");
let equalsBtn = document.querySelector("#equals-btn");
let screenState = false; // to track whether an operation has been selected, and a new number needs to be shown on the calc screen

// adding the numbered buttons 0-9
for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");    // create button element
    button.textContent = i;                             // insert number as button text
    numContainer.appendChild(button);                   // append button element to number container div

    button.addEventListener("click", (event)=> {
        // if screen shows 0, dont append more 0s 
        // or if screenstate is true -- this means an operation was selected, therefore no more appending new numbers
        // or if it says error, then clear screen 
        if(calcScreen.textContent == 0 || screenState == true || calcScreen.textContent == "Error"){
            calcScreen.textContent = "";
        }
        screenState = false; // setting back to false so we can append more for the new number
        calcScreen.append(i);
        
        // debug log for calcscreen
        console.log("Calc Screen:", calcScreen.textContent);
        // logs the event object's target
        console.log(event.target);
    })
}

// selecting the zero button and adding special css class to it
let zeroBtn = document.querySelector(".numbers button:nth-child(1)");
zeroBtn.classList.add("zeroBtn");

let clearBtn = document.querySelector("#clear-btn");
clearBtn.onclick = ()=>{
    calcScreen.textContent = "0";
    operation=undefined;
    a=null;
    b=null;
}

let deleteBtn = document.querySelector("#delete-btn");
deleteBtn.onclick = () => {
    if(calcScreen.textContent.length == 1){
       calcScreen.textContent = "0";
    }
    else{
        calcScreen.textContent = calcScreen.textContent.slice(0, -1);
    }
}

// when an operation button is selected it gets saved here
let operation; 
let a, b = 0;

// button onclick functions, has their respoective arithmetic operations
addBtn.onclick = () => {
    saveA();            // save current screen value to a var 
    operation = "add";  // save arithmetic operation
    screenState = true; // set screenState to true so that when a new number is clicked, its not appended from prev num
    console.log( operation, a, b);
}
subBtn.onclick = () => {
    saveA();
    operation = "sub";
    screenState = true;
    console.log( operation, a, b);
}
multBtn.onclick = () => {
    saveA();
    operation = "mult";
    screenState = true;
    console.log( operation, a, b);
}
divBtn.onclick = () => {
    saveA();
    operation = "divide";
    screenState = true;
    console.log( operation, a, b);
}

equalsBtn.onclick = () =>{
    calcScreen.textContent = calculate(a, b);
    operation = undefined;
}

// function to save whats on the screen to var a
function saveA(){
    a = calcScreen.textContent;
}

// returns the computed value
function calculate() {
    a = Number(a);
    b = Number(calcScreen.textContent);


    // debug log
    console.log("calculate", operation, a, b);

    // switch statement that decides which arithmetic operation to do depending on operation var 
    switch (operation){
        case "add": 
            return a+b;
        case "sub": 
            return a-b;
        case "divide": 
            return a/b;
        case "mult": 
            return a*b;
        default:
            return "Error";
    }
}

function clearScrn(){
    calcScreen.textContent = "0";
}