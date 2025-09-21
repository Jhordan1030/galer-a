let player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  const btn = document.getElementById("musicToggle");
  btn.addEventListener("click", () => {
    if (isPlaying) {
      player.pauseVideo();
      btn.textContent = "🎵";
    } else {
      player.playVideo();
      btn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    player.playVideo(); // Reiniciar la canción si termina
  }
}
