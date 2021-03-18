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
        playButton.innerHTML = "Play";
        cartoon.pause();
    }
    else{
        cartoon.classList.add("watching");
        playButton.innerHTML = "Pause";
        cartoon.play();
    }
   
}

let stopVideo = () => {
    cartoon.pause();
    cartoon.currentTime = 0;
    playButton.innerHTML = "Play";
    cartoon.classList.remove("watching");

}
let speedDownPlay = () => {
    cartoon.play();
    cartoon.playbackRate = 0.5;
    playButton.innerHTML = "Pause";
    cartoon.classList.add("watching");
}
let normalSpeedPlay = () => {
    cartoon.play();
    cartoon.playbackRate = 1;
    playButton.innerHTML = "Pause";
    cartoon.classList.add("watching");
}
let speedUpPlay = () => {
    cartoon.play();
    cartoon.playbackRate = 2;
    playButton.innerHTML = "Pause";
    cartoon.classList.add("watching");
}

let rewindForward= () => {
    cartoon.currentTime = cartoon.currentTime + 10;
}

let rewindBack = () => {
    cartoon.currentTime = cartoon.currentTime - 10;
}

let clickOnVideo = () => {
    if(cartoon.classList.contains("watching")){
        cartoon.classList.remove("watching")
        cartoon.pause();
        playButton.innerHTML = "Play";

    }
    else{
        cartoon.classList.add("watching")
        cartoon.play();
        playButton.innerHTML = "Pause";
    }
}

let clickOnPinOfVolume = () => {
    if(volumeOn.classList.contains("active")){
        volumeOn.classList.remove("active")
        cartoon.volume = 0;
        volumeOn.innerHTML = "🔇";
    }
    else{
        volumeOn.classList.add("active")
        cartoon.volume = volumeRange.value / 100;
        volumeOn.innerHTML = "🔊"
    }
    }


playButton.addEventListener("click", playVideo);
cartoon.addEventListener("click", clickOnVideo);
stopButton.addEventListener("click", stopVideo);
speedDownButton.addEventListener("click", speedDownPlay);
normalSpeedButton.addEventListener("click", normalSpeedPlay);
speedUpButton.addEventListener("click", speedUpPlay);
volumeOn.addEventListener('click', clickOnPinOfVolume);
volumeRange.addEventListener("change", function() {
    cartoon.volume = this.value / 100;
  });
rewindForwardButton.addEventListener("click", rewindForward);
rewindBackButton.addEventListener("click", rewindBack);







