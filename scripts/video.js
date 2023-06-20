const video = document.getElementById('myVideo');
const playPauseButton = document.getElementById('playPauseButton');

playPauseButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
