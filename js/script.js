document.getElementById("playButton").addEventListener("click", function() {
    const song = document.getElementById("mySong");
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
});

