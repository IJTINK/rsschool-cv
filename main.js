let currentTime = document.getElementById("currentTime");
let greeting = document.getElementById("greeting");
let nameOfUser = document.getElementById("nameOfUser");
let question = document.getElementById("question");
let answer = document.getElementById("answer");


let showTime = () => {

let day = new Date();
let hour = day.getHours();
let minute = day.getMinutes();
let second = day.getSeconds();
currentTime.textContent = (hour < 10 ? "0" : '') + hour + ":" + (minute < 10 ? "0" : '') + minute + ":" + (second < 10 ? "0" : '') + second;
setTimeout(showTime, 1000);
};
showTime();

let changeBackgroundAndMeeting = () => {
    let day = new Date();
    let hour = day.getHours();

    if(hour < 12){
    document.body.style.backgroundImage = "url('./images/morning.jpg')";
    greeting.textContent = "Good morning,"
    }else
    if(hour < 18){
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
        greeting.textContent = "Good afternoon,"
    }else{
        document.body.style.backgroundImage = "url('./images/evening.jpg')";  
        greeting.textContent = "Good evening,"
    }
};

changeBackgroundAndMeeting();


let inputName = () => {
    if(localStorage.getItem("nameOfUser") === null){
        nameOfUser.textContent = "Input your name";
    }else{
        nameOfUser.textContent = localStorage.getItem("nameOfUser");
    }
};

let setName = (e) => {
    if(e.type === "keydown"){
        if(e.key == "Enter"){
            localStorage.setItem('nameOfUser', e.target.innerText);
            nameOfUser.blur();
        }
    }else{
        localStorage.setItem('nameOfUser', e.target.innerText);
    }
};

let inputQuestion = () => {
    if(localStorage.getItem("answer") === null){
        answer.textContent = "Your answer";
    }else{
        answer.textContent = localStorage.getItem("answer");
    }
};

let setQuestion = (e) => {
    if (e.type === "keydown"){
        if(e.key == "Enter"){
            localStorage.setItem('answer', e.target.innerText);
            answer.blur();
        }
    }else{
        localStorage.setItem('answer', e.target.innerText);
    }
};


nameOfUser.addEventListener("keydown", setName);
nameOfUser.addEventListener("blur", setName);
answer.addEventListener("keydown", setQuestion);
answer.addEventListener("blur", setQuestion);

inputName();
inputQuestion();