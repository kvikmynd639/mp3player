let musicBar = document.getElementById("music-bar")
let song = document.getElementById("song")
let controlIcon= document.getElementById("control-icon")

song.onloadedmetadata = function() {
    musicBar.max = song.duration
    musicBar.value = song.currentTime

}

function playPause() {
    if(controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");

    }
    else{
        song.play()
        controlIcon.classList.add("fa-pause")
        controlIcon.classList.remove("fa-play")
        
    }
if (song.play()) {
    setInterval(() => {
        musicBar.value=song.currentTime
    


    }, 500)
}
musicBar.onchange = function() {
    song.play()
    song.currentTime = musicBar.value
    controlIcon.classList.add("fa-pause")
    controlIcon.classList.remove("fa-play")
}
}

