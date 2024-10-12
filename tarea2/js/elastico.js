// Elasticidad botones menu
$(document).ready(function() {
    // Check if smoothScroll is defined
    if (typeof smoothScroll !== 'undefined') {
        smoothScroll.init({
            selector: '[data-scroll]',
            speed: 300,
            easing: 'easeInQuart',
        });
    } else {
        console.error('smoothScroll is not defined');
    }

    // Desaparece el boton ScrollTop al cargar la pagina web
    var flechabtn = document.getElementById("flechabtn");
    if (flechabtn) {
        flechabtn.style.display = "none";
    } else {
        console.error('Button with id "flechabtn" not found');
    }

    // Esconder botón ScrollTop (parte superior)
    window.onscroll = function() {
        scrollFunction();
    };

    // Función scroll
    function scrollFunction() {
        if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
            if (flechabtn) {
                flechabtn.style.display = "block";
            }
        } else {
            if (flechabtn) {
                flechabtn.style.display = "none";
            }
        }
    }

    // Función ScrollTop (Jquery)
    topFunction(); // Call topFunction to set up the click handler
});

// Define topFunction to attach click event
function topFunction() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000); // Adjust duration as needed
    });
}
