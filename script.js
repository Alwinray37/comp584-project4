let numContainer = document.querySelector(".numbers");
let calcScreen = document.querySelector(".calculator-screen");
let addBtn = document.querySelector("#add-btn");
let subBtn = document.querySelector("#subtract-btn");
let divBtn = document.querySelector("#divide-btn");
let multBtn = document.querySelector("#multiply-btn");
let equalsBtn = document.querySelector("#equals-btn");
let screenState = false;

// adding the numbered buttons 0-9
for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    numContainer.appendChild(button);

    button.addEventListener("click", ()=> {
        // if screen shows 0, dont append more 0s 
        if(calcScreen.textContent == 0 || screenState == true){
            calcScreen.textContent = "";
        }
        screenState = false;
        calcScreen.append(i);
        
        // debug log for calcscreen
        console.log(calcScreen.textContent);
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

addBtn.onclick = () => {
    saveA();            // save current screen value to a var 
    operation = "add";  // save arithmetic operation
    screenState = true;
}
subBtn.onclick = () => {
    saveA();
    operation = "sub";
    screenState = true;
}
multBtn.onclick = () => {
    saveA();
    operation = "mult";
    screenState = true;
}
divBtn.onclick = () => {
    saveA();
    operation = "divide";
    screenState = true;
}

equalsBtn.onclick = () =>{
    calcScreen.textContent = calculate(a, b);
    operation = undefined;

}

function saveA(){
    a = calcScreen.textContent;
}

function calculate() {
    a = Number(a);
    b = Number(calcScreen.textContent);


    // debug log
    console.log(operation, a, b);

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