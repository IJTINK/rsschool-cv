let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let equalButton = document.getElementById("equal");
let cleanButton = document.getElementById("clean");
let cleanEntryButton = document.getElementById("clean-entry");
let pointButton = document.getElementById("point");
let display = document.getElementById("display");

let point = false;
let intermediateMemory = "";
let firstMemory = "";
let secondMemory = "";
let operation = "";

let iterateArray = (nameofArray,nameOfFunction) => {
  for (let i = 0; i < nameofArray.length; i++) {
    nameofArray[i].addEventListener("click", nameOfFunction);
  }
};

let cleanValue = () => {
  secondMemory = "";
  intermediateMemory = "";
  point = false;
  display.value = 0;
}

let onNumberPressed = (e) => {
    intermediateMemory += e.target.textContent;
    if (intermediateMemory.length > 1 && intermediateMemory[0] === "0" && intermediateMemory[0] + intermediateMemory[1] != "0.") {
        intermediateMemory = intermediateMemory.slice(-1);                                                 
    }
    display.value = intermediateMemory;
    if (operation === ""){
        firstMemory = intermediateMemory;
    } else {
        secondMemory = intermediateMemory;
    }
};

let onOperationPressed = (e) => {
  if (firstMemory === "") {
    firstMemory = 0;
  } else if (secondMemory != "") {
    onEqualPressed();
  }
  operation = e.target.textContent;
  display.value = 0;
  intermediateMemory = "";
  point = false;
};

let onEqualPressed = () => {
  let equal = parseFloat(eval(firstMemory + operation + secondMemory).toFixed(10));
  display.value = equal;
  firstMemory = equal;
  operation = "";
  secondMemory = "";
  intermediateMemory = "";
  point = false;
};

let onPointPressed = () => {
  if (!point) {
    intermediateMemory += ".";
    if (intermediateMemory === ".") {
        intermediateMemory = "0.";
    }
    display.value = intermediateMemory;
    if (operation === "") {
      firstMemory = intermediateMemory;
    } else {
      secondMemory = intermediateMemory;
    }
    point = true;
  }
};

equalButton.addEventListener("click", onEqualPressed);

pointButton.addEventListener("click", onPointPressed);

iterateArray(numbers, onNumberPressed);
iterateArray(operations, onOperationPressed);

cleanButton.addEventListener("click", () => {
  firstMemory = "";
  operation = "";
  cleanValue();
});

cleanEntryButton.addEventListener("click", () => {
    if (operation === ""){
        firstMemory = "";
    }
    cleanValue();
});
