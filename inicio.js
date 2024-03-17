document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".audio-link");

    // Función para reproducir el audio al hacer clic en los enlaces y luego redirigir
    function playAudioAndRedirect(event, href) {
      var audio = document.getElementById("audioPlayer1");
      audio.currentTime = 0; // Reiniciar la reproducción del audio
      audio.play(); // Reproducir el audio

      // Esperar un breve momento antes de redirigir
      setTimeout(function() {
        window.location.href = href; // Redirigir al enlace
      }, 100); // Ajusta este valor según sea necesario

      // Detener el evento de navegación predeterminado
      event.preventDefault();
    }

    // Agregar un controlador de eventos clic a cada enlace
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        var href = this.getAttribute("href"); // Obtener la URL del enlace
        playAudioAndRedirect(event, href);
      });
    });
  });

  $(document).ready(function() {
    // Obtener el elemento de audio y el botón
    var audioPlayer = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");
  
    // Agregar un evento de clic al botón
    playButton.addEventListener("click", function() {
      // Verificar si el audio está pausado o en reproducción
      if (audioPlayer.paused) {
        // Si está pausado, reproducir el audio
        audioPlayer.play();
        // Cambiar el texto del botón a "Pausar"
        playButton.textContent = "Pausar Audio";
      } else {
        // Si está en reproducción, pausar el audio
        audioPlayer.pause();
        // Cambiar el texto del botón a "Reproducir"
        playButton.textContent = "Reproducir Audio";
      }
    });
  });
  