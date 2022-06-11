

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

console.log(operate("+","12","2"))

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

        if(event.target.innerText == "Clear") {
            displayCal.innerText = "";
            numbers = [];

        } else {

            if (event.target.innerText == "=") {
                valuesForExec = displayCal.innerText;
                console.log(numbers);

                let num1 = "";
                let num2 = "";
                let operand = "";
                let counter = 0;
                let sum = 0;
                let notNumber = false;
                let repeat = true;

                for (let i =0;i<numbers.length;i++){
                    notNumber = false
                    console.log("loops start", i)
                    for (let j=0;j<allOperators.length;j++) {
                        if (numbers[i] == allOperators[j]) {
                            operand = allOperators[j]
                            notNumber = true;
                            counter++;
                            console.log("check","counter",counter)
                        }
                    }
                    if (notNumber == true) {
                        console.log("loops end",i)
                        continue
                    } else if (counter == 2 && repeat == true) {
                        counter--;
                        num1 = operate(operand,num1,num2)
                        console.log("sum cal",num1)
                        if (numbers.length == i+1) {
                            num2 = numbers[i];
                            num1 = operate(operand,num1,num2)
                        } else {
                            num2 = numbers[i];
                        }
                        repeat = false;
                        console.log(repeat)
                        console.log("num2",numbers[i]);
                    } else if (operand == "" && repeat == true) {
                        num1 += numbers[i];
                        console.log("num1",num1) 
                    } else if (operand != "") {
                        num2 += numbers[i];
                        console.log("num2",typeof num2);
                    }
                    console.log("loops end",i)
                }
                if (repeat == true) {
                    console.log(num1)
                    num1 = operate(operand,num1,num2)
                    console.log(num1)
                }
                console.log(num1)
                result.innerText = num1;
                displayCal.innerText = "";
                numbers = [];

            } else {

                displayCal.textContent += event.target.innerText;
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
                  
            }
        }
    })
};

