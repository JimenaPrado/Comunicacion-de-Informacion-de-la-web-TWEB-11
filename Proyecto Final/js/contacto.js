'use strict';

// Carga de la función init 
window.addEventListener('load', init, false);

// Función inicial
function init() {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');
    const form = document.getElementById('form3');
    const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // Función del formulario al enviar
    form.onsubmit = function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario

        const nombre = nombreInput.value;
        const email = emailInput.value;
        const mensaje = mensajeInput.value;

        // Validación de los campos del formulario
        if (nombre === '' || email === '' || mensaje === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos.',
            });
        } else if (!expressionEmail.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email inválido.',
            });
        } else {
            // Si NO existe error en los campos validados se envían los datos al servidor de correo
            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: 'Mensaje enviado con éxito.',
            });

            emailjs.sendForm('service_3atukvm', 'template_7yijydq', '#form3', '_b_VFM1Z6KR8HJU_M')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });

            // Limpia los campos después de enviar
            limpiar();
        }
    };

    function limpiar() {
        nombreInput.value = '';
        emailInput.value = '';
        mensajeInput.value = '';
    }
}