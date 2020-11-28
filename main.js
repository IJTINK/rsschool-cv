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
let point = document.getElementById("point");
let clean = document.getElementById("clean");
let cleanEntry = document.getElementById("cleanEntry");
let display = document.getElementById("display");


one.addEventListener('click', function(){
    display.value += 1;
});
two.addEventListener('click', function(){
    display.value += 2;
});
three.addEventListener('click', function(){
    display.value += 3;
});
four.addEventListener('click', function(){
    display.value += 4;
});
five.addEventListener('click', function(){
    display.value += 5;
});
six.addEventListener('click', function(){
    display.value += 6;
});
seven.addEventListener('click', function(){
    display.value += 7;
});
eight.addEventListener('click', function(){
    display.value += 8;
});
nine.addEventListener('click', function(){
    display.value += 9;
});
zero.addEventListener('click', function(){
    display.value += 0;
});


plus.addEventListener('click', function(){
    display.value += "+";
});
minus.addEventListener('click', function(){
    display.value += "-";
});
multiplication.addEventListener('click', function(){
    display.value += "*";
});
division.addEventListener('click', function(){
    display.value += "/";
});




