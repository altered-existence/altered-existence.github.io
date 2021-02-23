// Get the video
var video = document.getElementById("backgroundVideo");

// Get the button
var btn = document.getElementById("playBtn");

// Pause and play the video, and change the button text
function playPause() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
