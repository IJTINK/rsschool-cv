let play = document.querySelector(".play-button");
let video = document.querySelector(".video");
let timeDisplay = document.querySelector(".time-display");

let buttonForest = document.getElementById("button-forest");
let buttonFire = document.getElementById("button-fire");
let videoForest = document.getElementById("video-forest");
let videoFire = document.getElementById("video-fire");
let audioForest = document.getElementById("audio-forest");
let audioFire = document.getElementById("audio-fire");
let repeat = document.getElementById("repeat");
let durationButtons = document.querySelectorAll(".js-duration-button");

let time = durationButtons[0].getAttribute("data-time");
let timeMemory = time;
let timeInterval;
let timeWaiting;

let playForest = () => {
    videoFire.pause();
    audioFire.pause();
    videoForest.play();
    audioForest.play();
};

let playFire = () => {
    videoForest.pause();
    audioForest.pause();
    videoFire.play();
    audioFire.play();
};

let pause = () => {
    videoForest.pause();
    audioForest.pause();
    videoFire.pause();
    audioFire.pause();
};

let setTime = () => {
    let minutes = parseInt(timeMemory/60000);
    let seconds = timeMemory/1000%60;
    seconds = seconds < 10 ? "0"+seconds : seconds;
    timeDisplay.textContent = minutes + ":" + seconds;
}

let startTimer = () => {
    timeWaiting = setTimeout(() => {
        pause();
        play.classList.remove("active");
        clearInterval(timeInterval);
        timeMemory = time;
    },time);
};

let checkVideoSize = () => {
    let activeVideo = document.getElementsByClassName("video active")[0];
    if (activeVideo != undefined) {
        let activeVideoHeight = activeVideo.offsetHeight;
        let activeVideoWidth = activeVideo.offsetWidth;
        if (window.innerWidth > activeVideoWidth) {
            activeVideo.style.width = "100%";
            activeVideo.style.height = "auto";
        }
        else if (window.innerHeight > activeVideoHeight) {
            activeVideo.style.width = "auto";
            activeVideo.style.height = "100%";
        }
    }
};

window.addEventListener("resize",checkVideoSize);

buttonForest.addEventListener('click', () => {
    videoFire.classList.remove('active');
    videoForest.classList.add('active');
    checkVideoSize();
    if ( play.classList.contains("active") ) {
        playForest();
    }
});

buttonFire.addEventListener('click', () => {
    videoForest.classList.remove('active');
    videoFire.classList.add('active');
    checkVideoSize();
    if ( play.classList.contains("active") ) {
        playFire();
    }
});

play.addEventListener('click', () => {
    play.classList.toggle("active");
    if ( play.classList.contains("active") ) {
        if ( videoFire.classList.contains('active') ) {
            playFire();
        }
        else {
            playForest();
            if ( !videoForest.classList.contains('active') ) {
                videoForest.classList.add('active');
            }
        }
        checkVideoSize();
        setTime();
        timeInterval = setInterval(() => {
            timeMemory -= 1000;
            setTime();
        },1000);
        startTimer();
    }
    else {
        pause();
        clearInterval(timeInterval);
    }
});

repeat.addEventListener('click', () => {
    timeMemory = time;
    setTime();
    clearTimeout(timeWaiting);
    startTimer();
});

durationButtons.forEach(durationButton => {
    durationButton.addEventListener("click", (e) => {
        time = e.target.getAttribute("data-time");
        timeMemory = time;
        setTime();
        clearTimeout(timeWaiting);
        startTimer();
    });
});