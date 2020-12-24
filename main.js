let audios = document.querySelectorAll(".audio");
let chords = document.querySelectorAll(".chord");

let playAudio = (key) => {
    for (let audio of audios) {
        if (audio.getAttribute("data-key") == key) {
            audio.load();
            audio.play();
            break;
        }
    }
}

chords.forEach((chord) => {
    chord.addEventListener("click",() => {
        let key = chord.getAttribute("data-key");
        playAudio(key);
    });
});
document.addEventListener("keydown", (e) => {
    let key = e.which;
    playAudio(key);
});