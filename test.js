

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

for (let i = 0;i<btnNum.length;i++){
    btnNum[i].addEventListener("click", event => {

        displayCal.textContent += event.target.innerText;
        if(event.target.innerText == "Clear") {
            displayCal.innerText = "";
            result.innerText = "0";
            numbers = [];
        }

        if (event.target.innerText == "=") {
            valuesForExec = displayCal.innerText;
            console.log(numbers);

            let operand = [];
            let operandTwo = "";
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
                            num1 = Number(num1);
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
                    um1 = Number(num1);
                    num1 = operate(operand[0],num1,num2);
                }
            }
            if (multiOperator == false){
                sum = operate(operand[0],num1,num2);
                console.log("num1",num1)
                result.innerText = sum;
                displayCal.innerText = "";
                num1 = "";
                num2 = "";
                sum = 0;
                multiOperator = false
                numbers = [];
            } else {
                result.innerText = num1;
                console.log("num1",num1)
                displayCal.innerText = "";
                num1 = "";
                num2 = "";
                sum = 0;
                multiOperator = false
                numbers = [];
            }

        } 

        for (let i=0;i<4;i++) {
            if (allOperators[i] == event.target.innerText) {
                numbers.push(allOperators[i])
                //console.log("Append selected operator to array", numbers)
            }
        }

        for (let i=0;i<10;i++) {
            if (allNumbers[i] == event.target.innerText) {
                numbers.push(allNumbers[i])
                //console.log("Append selected Number to array", numbers)
            }
        }
    })
}

