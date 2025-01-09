const display = document.querySelector(".display");
let currentInput = "";
let operator = null;
let previousInput = "";

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        const action = button.dataset.action;

        if(action === "clear") {
            currentInput = "";
            previousInput = "";
            operator = null;
            display.textContent = "0";
        }else if(action === "calculate"){
            if (currentInput && previousInput && operator) {
                const result = eval(`${previousInput} ${operator} ${currentInput}`);
                display.textContent = result;
                currentInput = result.toString();
                previousInput = "";
                operator = null;
            }
        }else if(["+","-","*","/"].includes(value)){
            operator = value;
            previousInput = currentInput;
            currentInput = "";
        }else{
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});