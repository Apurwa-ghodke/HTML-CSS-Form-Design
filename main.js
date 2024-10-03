

// JavaScript to control video play/pause functionality
const video = document.querySelector('video');
function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
