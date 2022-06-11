

function add (x,y) {   
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}
function operate(op, par1, par2) {
    if (op == "+") return add(par1,par2);
    if (op == "-") return subtract(par1,par2);
    if (op == "*") return multiply(par1,par2);
    if (op == "/") return divide(par1,par2);
}

console.log(operate("+",32,12));


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

        let counter = false;
        let sum = 0;
        let num1 = 0;
        let num2 = 0;

        if(event.target.innerText == "Clear") {
            displayCal.innerText = "";
        } else {

            if (event.target.innerText == "=") {
                valuesForExec = displayCal.innerText;
                for (let i = 0;i<valuesForExec.length;i++) {
                    for (let j=0;j<allOperators.length;j++) {

                        if (valuesForExec[i] == allOperators[j]) {
                            if (counter == false){

                                if (sum != 0) {
                                    num1 = valuesForExec.slice(0,i);
                                    console.log("num1 sum", num1);
                                    valuesForExec = valuesForExec.substring(i+1);
                                    console.log("exec",valuesForExec);
                                    i -= num1.length;
                                    num1 = Number(num1);
                                    operator = allOperators[j];
                                    console.log(operator);
                                    sum = (operate(operator,sum,num1));
                                    console.log("sum 2nd",sum)
                                } else {
                                    console.log("counter bool", counter);
                                    num1 = valuesForExec.slice(0,i);
                                    console.log("num1", num1);
                                    valuesForExec = valuesForExec.substring(i+1);
                                    console.log("exec",valuesForExec)
                                    i -= num1.length;
                                    num1 = Number(num1)
                                    operator = allOperators[j];
                                    console.log(operator);
                                    counter = true;
                                    console.log("counter bool", counter);
                                }

                            } else if (counter == true) {
                                operator = allOperators[j];
                                valuesForExec = valuesForExec.substring(i+1);
                                console.log("exec2",valuesForExec)

                                num2 = valuesForExec.slice(0,i);
                                console.log("num2",num2)
                                console.log("i value", i)
                                i -= num2.length;
                                console.log("i value", i)
                                num2 = Number(num2)
                                sum = operate(operator,num1,num2);
                                console.log("sum",sum)
                                console.log(operate(operator,num1,num2))
                                console.log("counter true",valuesForExec)
                                operator = allOperators[j];
                                console.log(operator);
                                counter = false;
                            } else {
                                console.log("triggerd else")
                                result.innerText = operate(operator,sum,num2);
                            }
                        }
                    }
                }
                if (counter == true && sum == 0) {
                    console.log("tig")
                    num2 = Number(valuesForExec);
                    result.innerText = operate(operator,num1,num2);
                    counter = false;
                    sum = 0;
                } else if (sum != 0){
                    num1 = Number(valuesForExec.slice(0));
                    console.log("last number:",num1);
                    result.innerText = operate(operator,sum,num1);
                    console.log("big")
                    counter = false;
                    sum = 0;
                }
                displayCal.textContent = "";
            } else {
                displayCal.textContent += event.target.innerText;
            }
        }
    })
};









// let btn1 = document.getElementById("num1")
// let btn2 = document.getElementById("num2")
// let btn3 = document.getElementById("num3")

// let btn4 = document.getElementById("num4")
// let btn5 = document.getElementById("num5")
// let btn6 = document.getElementById("num6")

// let btn7 = document.getElementById("num7")
// let btn8 = document.getElementById("num8")
// let btn9 = document.getElementById("num9")


// let lastNum = 0;
//         for (let i=0;i<4;i++) {
//             if (allOperators[i] == event.target.innerText) {
//                 numbers.push(allOperators[i])
//                 console.log("Append selected operator to array", numbers)
//             }
//         }

//         for (let i=0;i<10;i++) {
//             if (allNumbers[i] == event.target.innerText) {
//                 numbers.push(allNumbers[i])
//                 console.log("Append selected Number to array", numbers)
//             }
//         }
