let numContainer = document.querySelector(".numbers");
let calcScreen = document.querySelector(".calculator-screen");

for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = i;
    numContainer.appendChild(button);

    button.addEventListener("click", ()=> {
        calcScreen.append(i);
    })
}

let zeroBtn = document.querySelector(".numbers button:nth-child(1)");
zeroBtn.classList.add("zeroBtn");

let clearBtn = document.querySelector("#clear-btn");
clearBtn.onclick = ()=>{
    calcScreen.textContent = "";
}

let deleteBtn = document.querySelector("#delete-btn");
deleteBtn.onclick = () => {
    calcScreen.textContent = calcScreen.textContent.slice(0, -1);
}

