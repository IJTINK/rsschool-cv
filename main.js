let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let clearButtons = document.querySelectorAll (".clearButton")
let decimalButton = document.getElementById("decimal");
let equalButton = document.getElementById("equal");
let display = document.getElementById("display");
let MemoryCurrentNumber = "0";
let MemoryNewNumber = false;
let MemoryPendingOperation = "";



for(let i = 0; i < numbers.length; i++){
let number = numbers[i];
number.addEventListener('click', function(event){
    numberPress(event.target.textContent);
    });
}

for(let i = 0; i < operations.length; i++){
    let operationButton = operations[i];
    operationButton.addEventListener('click', function(event){
        operation(event.target.textContent);   
    });   
}

for(let i = 0; i < clearButtons.length; i++){
    let clearButton = clearButtons[i];
    clearButton.addEventListener('click', function(event){
    clear(event.target.id);      
    });   
}

    decimalButton.addEventListener('click', decimal);

function numberPress(number){
    if(MemoryNewNumber){
        display.value = number;
        MemoryNewNumber = false;
} else{
    if (display.value === '0'){
        display.value = number;
    }else{
    display.value += number;
        };
    };
};

function operation(oper){
let localOperationMemory =  display.value;

if (MemoryNewNumber && MemoryPendingOperation !== '=' ){
    display.value = MemoryCurrentNumber;
} else{
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+'){
         MemoryCurrentNumber += parseFloat(localOperationMemory); 
        } else if (MemoryPendingOperation === '-'){
        MemoryCurrentNumber -= parseFloat(localOperationMemory); 
        }else if (MemoryPendingOperation === '*'){
        MemoryCurrentNumber *= parseFloat(localOperationMemory); 
        }else if (MemoryPendingOperation === '/'){
        MemoryCurrentNumber /= parseFloat(localOperationMemory); 
        } else { MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = oper;
   };
};

function decimal(){
  let localDecimalMemory = display.value;

    if (MemoryNewNumber){
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
        localDecimalMemory += '.';
        }
     };

     display.value = localDecimalMemory;
     
};


function clear(id){
   if (id === 'ce'){
    display.value = '0';
    MemoryNewNumber = true;
   }else if(id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
   }
};
