document.addEventListener("DOMContentLoaded", function () {
  var bgMusic = new Audio("/dist/tonos/vals.mp3");

  // Reproducir la música
  function playMusic() {
    bgMusic.play(); // Reproducir la música
  }

  // Llamar a la función para reproducir la música
  playMusic();
});
