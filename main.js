// variables
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let equalButton = document.getElementById("equal");
let cleanButton = document.getElementById("clean");
let cleanEntryButton = document.getElementById("cleanEntry");
let pointButton = document.getElementById("point");
let display = document.getElementById("display");

let point = false;
let number = "";
let number_1 = "";
let number_2 = "";
let operation = "";

// number
let functionPressNumber = (e) => {
  number += e.target.textContent;
  if (number.length > 1 && number[0] === "0" && number[0] + number[1] != "0.") {
    number = number.slice(-1);                                                      // Why?
  }
  display.value = number;
  if (operation === "") {
    number_1 = number;
  } else {
    number_2 = number;
  }
};

// operation
let functionPressOperation = (e) => {
  if (number_1 === "") {
    number_1 = 0;
  } else if (number_2 != "") {
    functionEqual();
  }
  operation = e.target.textContent;
  display.value = 0;
  number = "";
  point = false;
};

// equal
let functionEqual = () => {
  let equal = parseFloat(eval(number_1 + operation + number_2).toFixed(10));
  display.value = equal;
  number_1 = equal;
  operation = "";
  number_2 = "";
  number = "";
  point = false;
};

// point
let functionPressPoint = () => {
  if (!point) {
    number += ".";
    if (number === ".") {
      number = "0.";
    }
    display.value = number;
    if (operation === "") {
      number_1 = number;
    } else {
      number_2 = number;
    }
    point = true;
  }
};

// event equal
equalButton.addEventListener("click", functionEqual);

// event point
pointButton.addEventListener("click", functionPressPoint);

// event operation
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", functionPressOperation);
}

// event number
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener("click", functionPressNumber);
}

// clean
cleanButton.addEventListener("click", () => {
  display.value = 0;
  number_1 = "";
  number_2 = "";
  operation = "";
  number = "";
  point = false;
});

// cleanEntry
cleanEntryButton.addEventListener("click", () => {
  number_2 = "";
  number = "";
  point = false;
  display.value = 0;
});
