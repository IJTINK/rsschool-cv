let currentTime = document.getElementById("currentTime");
let greeting = document.getElementById("greeting");
let nameOfUser = document.getElementById("nameOfUser");
let question = document.getElementById("question");
let answer = document.getElementById("answer");

function showTime(){

let day = new Date();
let hour = day.getHours();
let minute = day.getMinutes();
let second = day.getSeconds();

hour = hour % 12 || 12; // если при делении на 12 есть остаток - то true, если 0 (false), то 12

currentTime.innerHTML = `${hour}<span>:</span>${minute}<span>:</span>${second}`;
setTimeout(showTime, 1000);
}


function changeBackgroundAndMeeting(){
let day = new Date();
let hour = day.getHours();

if(hour < 12){
document.body.style.backgroundImage = "url('/images/morning.jpg')";
}else
if(hour < 18){
    document.body.style.backgroundImage = "url('/images/afternoon.jpg')";
}else{
    document.body.style.backgroundImage = "url('/images/evening.jpg')";
    
}
}


showTime();
changeBackgroundAndMeeting();