// variables
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let equalButton = document.getElementById("equal");
let cleanButton = document.getElementById("clean");
let cleanEntryButton = document.getElementById("cleanEntry");
let pointButton = document.getElementById("point");
let display = document.getElementById("display");

let point = false;
let intermediateMemory = "";
let firstMemory = "";
let secondMemory = "";
let operation = "";

// number
let PressNumber = (e) => {
    intermediateMemory += e.target.textContent;
    if (intermediateMemory.length > 1 && intermediateMemory[0] === "0" && intermediateMemory[0] + intermediateMemory[1] != "0.") {
        intermediateMemory = intermediateMemory.slice(-1);                                                 
    }
    display.value = intermediateMemory;
    if (operation === "") {
        firstMemory = intermediateMemory;
    } else {
        secondMemory = intermediateMemory;
    }
};

// operation
let PressOperation = (e) => {
  if (firstMemory === "") {
    firstMemory = 0;
  } else if (secondMemory != "") {
    Equal();
  }
  operation = e.target.textContent;
  display.value = 0;
  intermediateMemory = "";
  point = false;
};

// equal
let Equal = () => {
  let equal = parseFloat(eval(firstMemory + operation + secondMemory).toFixed(10));
  display.value = equal;
  firstMemory = equal;
  operation = "";
  secondMemory = "";
  intermediateMemory = "";
  point = false;
};

// point
let PressPoint = () => {
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

// event equal
equalButton.addEventListener("click", Equal);

// event point
pointButton.addEventListener("click", PressPoint);

// event operation
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", PressOperation);
}

// event number
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", PressNumber);
}

// clean
cleanButton.addEventListener("click", () => {
  display.value = 0;
  firstMemory = "";
  secondMemory = "";
  operation = "";
  intermediateMemory = "";
  point = false;
});

// cleanEntry
cleanEntryButton.addEventListener("click", () => {
    if (operation === ""){
        firstMemory = "";
    }
    secondMemory = "";
    intermediateMemory = "";
    point = false;
    display.value = 0;
});
