let input = document.getElementById("input");
let result = document.getElementById("result");
let inputstr = "";

function ac() {
    result.textContent = "";
    input.textContent = "";
    inputstr = "";
}

function percent() {
    result.textContent = "";
    inputstr += "%";
    input.textContent += "%";
}

function backspace() {
    result.textContent = "";
    inputstr = inputstr.slice(0, -1);
    input.textContent = input.textContent.slice(0, -1);
}

function divide() {
    result.textContent = "";
    inputstr += "/";
    input.textContent += "/";
}

function seven() {
    result.textContent = "";
    inputstr += "7";
    input.textContent += "7";
}

function eight() {
    result.textContent = "";
    inputstr += "8";
    input.textContent += "8";
}

function nine() {
    result.textContent = "";
    inputstr += "9";
    input.textContent += "9";
}

function multiply() {
    result.textContent = "";
    inputstr += "*"; 
    input.textContent += "x";
}

function four() {
    result.textContent = "";
    inputstr += "4";
    input.textContent += "4";
}

function five() {
    result.textContent = "";
    inputstr += "5";
    input.textContent += "5";
}

function six() {
    result.textContent = "";
    inputstr += "6";
    input.textContent += "6";
}

function subtract() {
    result.textContent = "";
    inputstr += "-";
    input.textContent += "-";
}

function one() {
    result.textContent = "";
    inputstr += "1";
    input.textContent += "1";
}

function two() {
    result.textContent = "";
    inputstr += "2";
    input.textContent += "2";
}

function three() {
    result.textContent = "";
    inputstr += "3";
    input.textContent += "3";
}

function add() {
    result.textContent = "";
    inputstr += "+";
    input.textContent += "+";
}

function zero() {
    result.textContent = "";
    inputstr += "0";
    input.textContent += "0";
}

function point() {
    result.textContent = "";
    inputstr += ".";
    input.textContent += ".";
}

function equal() {
    try {
        let evaluatedResult = eval(inputstr);
        console.log(evaluatedResult);
        console.log(evaluatedResult % 1);
        console.log(evaluatedResult % 1 !== 0);
        if (evaluatedResult % 1 !== 0) {
            evaluatedResult = evaluatedResult.toFixed(6);
        }
        result.textContent = evaluatedResult;
    } catch (error) {
        result.textContent = "Error";
        console.error("Evaluation error:", error);
    }
}

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("input").scrollLeft += 100;
    })
})
