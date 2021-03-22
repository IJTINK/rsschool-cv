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
let progressScale = document.getElementById("progress");
let isClicked = false;

let clickOnProgressScale = (e) => {
    let progressScaleSize = progressScale.offsetWidth;
    let progressScalePosX = progressScale.offsetLeft;
    let mousePosX = e.clientX - progressScalePosX;
    if (mousePosX < 0) {
        mousePosX = 0;
    }
    else if (mousePosX > progressScaleSize){
        mousePosX = progressScaleSize;
    }
    let onePxPercent = 100 / progressScaleSize;
    let percent = onePxPercent * mousePosX;
    progressScale.value = percent;
    cartoon.currentTime = cartoon.duration / 100 * percent;
}
progressScale.addEventListener("mousedown", (e) => {
    clickOnProgressScale(e);
    isClicked = true;
});
document.addEventListener("mousemove", (e) => {
    if (isClicked) {
        clickOnProgressScale(e);
    }
});
document.addEventListener("mouseup", (e) => {
    isClicked = false;
});

let videoInterval;

let playVideo = () => {
    if (cartoon.classList.contains("watching") ) {
        cartoon.classList.remove("watching");
        addPlayClass();
        cartoon.pause();

        clearInterval(videoInterval);
    }
    else{
        cartoon.classList.add("watching");
        cartoon.play();
        addPauseClass();
        
        videoInterval = setInterval(() => {
            maxValue = cartoon.duration;
            let oneSecondPercent = 100 / maxValue;
            progressScale.value = cartoon.currentTime * oneSecondPercent;
        },1)
    };
};
let stopVideo = () => {
    cartoon.pause();
    cartoon.currentTime = 0;
    addPlayClass();
    cartoon.classList.remove("watching");
    progressScale.value = 0;
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