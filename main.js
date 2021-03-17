let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let stopButton = document.getElementById("stop");
let speedDownButton = document.getElementById("speed-down");
let normalSpeedButton = document.getElementById("normal-speed");
let speedUpButton = document.getElementById("speed-up");
let volumeButton = document.getElementById("volume");
let cartoon = document.getElementById("cartoon");

let playVideo = () => {
    cartoon.play();
}
let pauseVideo = () => {
    cartoon.pause();
}
let stopVideo = () => {
    cartoon.pause();
    cartoon.currentTime = 0;
}
let speedDownPlay = () => {
    cartoon.playbackRate = 0.5;
}
let normalSpeedPlay = () => {
    cartoon.playbackRate = 1;
}
let speedUpPlay = () => {
    cartoon.playbackRate = 2;
}

playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
speedDownButton.addEventListener("click", speedDownPlay);
normalSpeedButton.addEventListener("click", normalSpeedPlay);
speedUpButton.addEventListener("click", speedUpPlay);
