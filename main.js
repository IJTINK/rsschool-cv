let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let stopButton = document.getElementById("stop");
let speedDownButton = document.getElementById("speed-down");
let normalSpeedButton = document.getElementById("normal-speed");
let speedUpButton = document.getElementById("speed-up");
let volumeRange = document.getElementById("volumeRange");
let cartoon = document.getElementById("cartoon");
let volumeOn = document.getElementById("volumeOn");
let rewindForwardButton = document.getElementById("rewindForward");
let rewindBackButton = document.getElementById("rewindBack");

let playVideo = () => {
    if (cartoon.classList.contains("watching") ) {
        cartoon.classList.remove("watching");
        addPlayClass();
        cartoon.pause();
    }
    else{
        cartoon.classList.add("watching");
        cartoon.play();
        addPauseClass();
    };
};
let stopVideo = () => {
    cartoon.pause();
    cartoon.currentTime = 0;
    addPlayClass();
    cartoon.classList.remove("watching");
};
let addPlayClass = () =>{
    playButton.querySelector('.fas').classList.add("fa-play");
    playButton.querySelector('.fas').classList.remove("fa-pause");
}
let addPauseClass = () =>{
    playButton.querySelector('.fas').classList.add("fa-pause");
    playButton.querySelector('.fas').classList.remove("fa-play");
};
let clickOnPinOfVolume = () => {
    if(volumeOn.classList.contains("active")){
        volumeOn.classList.remove("active")
        cartoon.volume = 0;
        volumeOn.querySelector('.fas').classList.remove("fa-volume-up");
        volumeOn.querySelector('.fas').classList.add("fa-volume-mute");
    }
    else{
        volumeOn.classList.add("active")
        cartoon.volume = volumeRange.value / 100;
        volumeOn.querySelector('.fas').classList.remove("fa-volume-mute");
        volumeOn.querySelector('.fas').classList.add("fa-volume-up");
    };
};
let changeSpeedOfCartoon = (speedOfCartoon) => {
    cartoon.play();
    cartoon.playbackRate = speedOfCartoon;
    addPauseClass();
    cartoon.classList.add("watching");
}
let rewindOfCartoon= (timeOfRewind) => {
    cartoon.currentTime = cartoon.currentTime + timeOfRewind;
};

playButton.addEventListener("click", playVideo);
cartoon.addEventListener("click", playVideo);
stopButton.addEventListener("click", stopVideo);
volumeOn.addEventListener('click', clickOnPinOfVolume);
volumeRange.addEventListener("change", function() {
    cartoon.volume = this.value / 100;
  });
speedDownButton.addEventListener( "click", () => changeSpeedOfCartoon(0.5) );
normalSpeedButton.addEventListener( "click", () => changeSpeedOfCartoon(1) );
speedUpButton.addEventListener( "click", () => changeSpeedOfCartoon(2) );
rewindForwardButton.addEventListener("click", () => rewindOfCartoon(10));
rewindBackButton.addEventListener("click", () => rewindOfCartoon(-10));