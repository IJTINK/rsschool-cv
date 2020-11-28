let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");
let equal = document.getElementById("equal");
let clean = document.getElementById("clean");
let cleanEntry = document.getElementById("cleanEntry");
let point = document.getElementById("point");
let display = document.getElementById("display");

const OPERATIONS = {
  NONE: 0,
  PLUS: 1,
  MINUS: 2,
  MULTIPLICATION: 3,
  DIVISION: 4,
};

let memoryNumber1 = 0;
let currentActiveOperation = OPERATIONS.NONE;

let sumFunction = () => {
  memoryNumber1 = display.value;
  display.value = "0";
  currentActiveOperation = OPERATIONS.PLUS;
};

let subtractionFunction = () => {
  memoryNumber1 = display.value;
  display.value = "0";
  currentActiveOperation = OPERATIONS.MINUS;
};

let multiplicationFunction = () => {
  memoryNumber1 = display.value;
  display.value = "0";
  currentActiveOperation = OPERATIONS.MULTIPLICATION;
};

let divisionFunction = () => {
  memoryNumber1 = display.value;
  display.value = "0";
  currentActiveOperation = OPERATIONS.DIVISION;
};

let result = () => {
  switch (currentActiveOperation) {
    case OPERATIONS.PLUS:
      display.value = Number(memoryNumber1) + Number(display.value);
      currentActiveOperation = OPERATIONS.NONE;
      break;
    case OPERATIONS.MINUS:
      display.value = Number(memoryNumber1) - Number(display.value);
      currentActiveOperation = OPERATIONS.NONE;
      break;
    case OPERATIONS.MULTIPLICATION:
      display.value = Number(memoryNumber1) * Number(display.value);
      currentActiveOperation = OPERATIONS.NONE;
      break;
    case OPERATIONS.DIVISION:
      display.value = Number(memoryNumber1) / Number(display.value);
      currentActiveOperation = OPERATIONS.NONE;
      break;
    default:
      break;
  }

  //   if (currentActiveOperation === OPERATIONS.PLUS) {
  //     let result = Number(memoryNumber1) + Number(display.value);
  //     display.value = result;
  //     currentActiveOperation = OPERATIONS.NONE;
  //   } else if (currentActiveOperation === OPERATIONS.MINUS) {
  //     let result = Number(memoryNumber1) - Number(display.value);
  //     display.value = result;
  //     currentActiveOperation = OPERATIONS.NONE;
  //   } else if (currentActiveOperation === OPERATIONS.MULTIPLICATION) {
  //     let result = Number(memoryNumber1) * Number(display.value);
  //     display.value = result;
  //     currentActiveOperation = OPERATIONS.NONE;
  //   }
};

equal.addEventListener("click", result);
plus.addEventListener("click", sumFunction);
minus.addEventListener("click", subtractionFunction);
multiplication.addEventListener("click", multiplicationFunction);
division.addEventListener("click", divisionFunction);

one.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 1;
});
two.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 2;
});
three.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 3;
});
four.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 4;
});
five.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 5;
});
six.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 6;
});
seven.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 7;
});
eight.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 8;
});
nine.addEventListener("click", function () {
  if (display.value == "0") {
    display.value = "";
  }
  display.value += 9;
});
zero.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += 0;
});

cleanEntry.addEventListener("click", function () {});

clean.addEventListener("click", function () {
  display.value = "0";
  currentActiveOperation = OPERATIONS.NONE;
});

point.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "0.";
    memoryNumber1 = 0;
  }
});

// let numbers = document.querySelectorAll(".number");
// let operations = document.querySelectorAll(".operation");
// let clearButtons = document.querySelectorAll (".clearButton")
// let decimalButton = document.getElementById("decimal");
// let equalButton = document.getElementById("equal");
// let display = document.getElementById("display");
// let MemoryCurrentNumber = "0";
// let MemoryNewNumber = false;
// let MemoryPendingOperation = "";

// for(let i = 0; i < numbers.length; i++){
// let number = numbers[i];
// number.addEventListener('click', function(event){
//     numberPress(event.target.textContent);
//     });
// }

// for(let i = 0; i < operations.length; i++){
//     let operationButton = operations[i];
//     operationButton.addEventListener('click', function(event){
//         operation(event.target.textContent);
//     });
// }

// for(let i = 0; i < clearButtons.length; i++){
//     let clearButton = clearButtons[i];
//     clearButton.addEventListener('click', function(event){
//     clear(event.target.id);
//     });
// }

//     decimalButton.addEventListener('click', decimal);

// function numberPress(number){
//     if(MemoryNewNumber){
//         display.value = number;
//         MemoryNewNumber = false;
// } else{
//     if (display.value === '0'){
//         display.value = number;
//     }else{
//     display.value += number;
//         };
//     };
// };

// function operation(oper){
// let localOperationMemory =  display.value;

// if (MemoryNewNumber && MemoryPendingOperation !== '=' ){
//     display.value = MemoryCurrentNumber;
// } else{
//         MemoryNewNumber = true;
//         if (MemoryPendingOperation === '+'){
//          MemoryCurrentNumber += parseFloat(localOperationMemory);
//         } else if (MemoryPendingOperation === '-'){
//         MemoryCurrentNumber -= parseFloat(localOperationMemory);
//         }else if (MemoryPendingOperation === '*'){
//         MemoryCurrentNumber *= parseFloat(localOperationMemory);
//         }else if (MemoryPendingOperation === '/'){
//         MemoryCurrentNumber /= parseFloat(localOperationMemory);
//         } else { MemoryCurrentNumber = parseFloat(localOperationMemory);
//         };
//     display.value = MemoryCurrentNumber;
//     MemoryPendingOperation = oper;
//    };
// };

// function decimal(){
//   let localDecimalMemory = display.value;

//     if (MemoryNewNumber){
//         localDecimalMemory = '0.';
//         MemoryNewNumber = false;
//     } else {
//         if (localDecimalMemory.indexOf('.') === -1) {
//         localDecimalMemory += '.';
//         }
//      };

//      display.value = localDecimalMemory;

// };

// function clear(id){
//    if (id === 'ce'){
//     display.value = '0';
//     MemoryNewNumber = true;
//    }else if(id === 'c') {
//     display.value = '0';
//     MemoryNewNumber = true;
//     MemoryCurrentNumber = 0;
//     MemoryPendingOperation = '';
//    }
// }
