let player;
let isPlaying = false;

// Reproductor de música
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

// Animación al hacer scroll para la línea de tiempo
document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Activa la animación cuando el 10% del elemento es visible
  });

  timelineItems.forEach(item => {
    observer.observe(item);
  });
});
