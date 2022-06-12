

function add (x,y) {   
    return Number(x) + Number(y);
}

function subtract(x,y){
    return Number(x) - Number(y);
}

function multiply(x,y) {
    return Number(x) * Number(y);
}

function divide(x,y) {
    return Number(x) / Number(y);
}
function operate(op, par1, par2) {
    if (op == "+") return add(par1,par2);
    if (op == "-") return subtract(par1,par2);
    if (op == "*") return multiply(par1,par2);
    if (op == "/") return divide(par1,par2);
}

function calculationInfoFunc(displayCal, numbers) {

    valuesForExec = displayCal.innerText;
            console.log(numbers);

            let operand = [];
            let num1 = "";
            let num2 = "";
            let sum = 0;
            let multiOperator = false;
            let opFound = false;

            for (let i =0;i<numbers.length;i++){
                opFound = false;
                console.log("loop ",i, "of" ,numbers.length, "value ", numbers[i])
                for (let j=0;j<allOperators.length;j++) {
                    if (numbers[i] == allOperators[j]){
                        operand.push(allOperators[j]);
                        if (operand[1] != undefined) {
                            console.log("num1 before",num1)
                            num1 = operate(operand[0],num1,num2);
                            console.log("num1 after",num1)
                            console.log(operand)
                            operand.shift();
                            console.log(operand)
                            multiOperator = true;
                            console.log("acti")
                            num2= "";
                        }
                        opFound = true;
                    }
                }
                if (operand[0] == undefined) {
                    console.log(numbers[i])
                    num1 += numbers[i];
                    console.log("only first number",num1)
                } else if (opFound == false && operand[0] != undefined) {
                    num2 += numbers[i]
                    console.log("num2",num2)
                }
                if (numbers.length == i+1 && opFound == false && multiOperator == true) {
                    console.log("final")
                    num1 = operate(operand[0],num1,num2);
                }
            }
            if (multiOperator == false){
                sum = operate(operand[0],num1,num2);
                console.log("num1",num1)
                if (sum == Infinity) {
                    return result.innerText = "42 It's true. Really."
                } else {
                    return result.innerText = Math.round(sum * 1000) / 1000;
                }
            } else {
                if (sum == Infinity) {
                    return result.innerText = "42 It's true. Really."
                } else {
                    return result.innerText = Math.round(num1 * 1000) / 1000;
                }
            }

}

let arr = ["+"]
console.log(operate(arr[0],"12","2"))

let numbers = [];
let currNum = "";
let operationExec = "";
let operator = "";
const allOperators = "+-*/";
const allNumbers = "1234567890";
let displayCal = document.getElementById("calculations");
let result = document.getElementById("output");
let clrBtn = document.getElementById("clear-btn");
let btnNum = document.getElementsByClassName("btn-num");
let decimalBtn = document.getElementById("decimal-btn");
let undoBtn = document.getElementById("undo-btn")



var decimalUsed = false;

window.addEventListener("keydown", event => console.log(event.keyCode))
window.addEventListener("click", event => console.log(event))

window.addEventListener("keydown", keyboardPress)






// let operatorBtns = document.querySelectorAll("btn-num")
// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//     key.classList.toggle('playing');
// };

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// };

// operatorBtns.forEach(btnNum => btnNum.addEventListener('transitionend', removeTransition));


function keyboardPress(e) {

    if (e.keyCode >= 96 && e.keyCode <= 111 || e.keyCode == 8 || e.keyCode == 13 || e.keyCode >= 45 && e.keyCode <= 57) {
    } else return;
    if (e.key == "Enter") {
        calculationInfoFunc(displayCal,numbers);
        displayCal.innerText = "";
        numbers = [];
    } else if (e.key == "Backspace") {
        displayCal.textContent = displayCal.textContent.slice(0, displayCal.textContent.length -1)
        numbers.pop();
    } else if (e.key == ",") {
        displayCal.innerText += ".";
        numbers.push(".");
    }
    else {
        displayCal.innerText += e.key;
        numbers.push(e.key);
    }
}


undoBtn.addEventListener("click", event => {
    if (displayCal.textContent[displayCal.textContent.length -1] == ".") decimalUsed = false;
    displayCal.textContent = displayCal.textContent.slice(0, displayCal.textContent.length -1)
    numbers.pop();

})

decimalBtn.addEventListener("click", event => {
    if (decimalUsed == false){
        numbers.push(event.target.innerText)
        displayCal.textContent += event.target.innerText;
        decimalUsed = true;
    }
});


for (let i = 0;i<btnNum.length;i++){
    btnNum[i].addEventListener("click", event => {

        displayCal.textContent += event.target.innerText;
        if(event.target.innerText == "Clear") {
            displayCal.innerText = "";
            result.innerText = "0";
            numbers = [];
            decimalUsed = false;
        }

        for(let i=0;i<allOperators.length;i++) {
            if (event.target.innerText == allOperators[i]) {
                decimalUsed = false;
            }
        }

        if (event.target.innerText == "=") {
            
            calculationInfoFunc(displayCal, numbers);
            numbers = [];
            displayCal.innerText = "";
            decimalUsed = false;

        } 

        if (event.target.innerText != "=" && event.target.innerText != "Clear"){
            numbers.push(event.target.innerText)
        }
        // for (let i=0;i<4;i++) {
        //     if (allOperators[i] == event.target.innerText) {
        //         numbers.push(allOperators[i])
        //         //console.log("Append selected operator to array", numbers)
        //     }
        // }

        // for (let i=0;i<10;i++) {
        //     if (allNumbers[i] == event.target.innerText) {
        //         numbers.push(allNumbers[i])
        //         //console.log("Append selected Number to array", numbers)
        //     }
        // }
    })
}

