$(document).ready(function(){
  // Al cargar la página, ocultamos las cortinas
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  $('.valentines-day').click(function(){
    // Animación de desvanecimiento de los elementos del sobre
    $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
    $('.envelope').fadeOut(800, function() {
      // Ocultar elementos dentro de .valentines-day
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();


      // Hacer visible la carta con una animación ondulante
      $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
      $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
        var scale = 1 + Math.sin(now * Math.PI) * 0.3; // Calculamos la escala basada en la función seno
        $(this).css('transform', 'scale(' + scale + ')');
      }}); // Animación de ondulación

      // Reproducir música al abrir la carta
      var audio = document.getElementById("audioPlayer");
      audio.play();

      // Guardar la carta de vuelta después de 15 segundos
      setTimeout(function() {
        // Realiza aquí la lógica para guardar la carta de vuelta
        // Por ejemplo, puedes revertir las animaciones y mostrar los elementos del sobre nuevamente
        $('#card').animate({'opacity': 0}, 800, function() {
          $(this).css({'visibility':'hidden', 'transform': 'scale(0.1)'});
        });
        $('.envelope').fadeIn(800);
        $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').show();
        audio.pause(); // Pausa la reproducción del audio
      }, 15000); // 15 segundos

      // Reproducir música al guardar la carta de vuelta
      setTimeout(function() {
        audio.play();
      }, 15000); // 15 segundos
    });
  });
});


