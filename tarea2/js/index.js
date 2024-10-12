function animateCount(id, start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 100);
    const counter = document.getElementById(id);
    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            clearInterval(interval);
            current = end;
        }
        counter.textContent = Math.floor(current).toLocaleString();
    }, 100);
}

// Configuración de los contadores
animateCount('estudiantes', 0, 250, 3000);
animateCount('graduados', 0, 500, 3000);
animateCount('graduaciones', 0, 100, 3000);


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3, // Número de elementos a mostrar
      loop: true, // Ciclo infinito
      nav: false, // Muestra flechas de navegación
      dots: true, // Muestra puntos de navegación
      autoplay: false, // Autoplay
      autoplayTimeout: 3000, // Tiempo entre cambios (en ms)
      autoplayHoverPause: true // Pausa al pasar el ratón
    });
  });