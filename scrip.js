document.addEventListener("DOMContentLoaded", function () {
  var bgMusic = document.getElementById("bgMusic");

  // Función para reproducir la música
  function playMusic() {
    bgMusic.currentTime = 0; // Establecer el tiempo de reproducción al principio
    bgMusic.play(); // Reproducir la música
  }

  // Función para aumentar el volumen gradualmente
  function fadeInVolume() {
    var fadeInInterval = setInterval(function () {
      if (bgMusic.volume < 1) {
        bgMusic.volume += 0.1; // Aumentar el volumen
      } else {
        clearInterval(fadeInInterval);
      }
    }, 1000); // 1000 milisegundos = 1 segundo
  }

  // Función para disminuir el volumen gradualmente
  function fadeOutVolume() {
    var fadeOutInterval = setInterval(function () {
      if (bgMusic.volume > 0.1) {
        bgMusic.volume -= 0.1; // Bajar el volumen
      } else {
        clearInterval(fadeOutInterval);
        // Redirigir a la dirección deseada después de disminuir el volumen
        window.location.href = "inicio.html";
      }
    }, 500); // 500 milisegundos = 0.5 segundos, ajusta este valor según sea necesario
  }

  // Función para manejar los intervalos de la imagen y la música
  function handleIntervals() {
    setTimeout(function () {
      document.querySelector(".ring").style.display = "none";
      // Mostrar la imagen después de que desaparezca el ring
      document.querySelector("img.tutulo").style.display = "block";
      // Reproducir la música y aumentar el volumen gradualmente
      playMusic();
      fadeInVolume();
      // Esperar un tiempo antes de disminuir el volumen
      setTimeout(function () {
        fadeOutVolume();
      }, 7000); // 7000 milisegundos = 7 segundos
    }, 15000); // 15000 milisegundos = 15 segundos
  }


  // Llamar a la función para manejar los intervalos de la imagen y la música
  handleIntervals();
});
