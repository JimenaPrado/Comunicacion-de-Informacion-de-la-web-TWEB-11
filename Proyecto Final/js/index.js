'use strict';

// Carga de la funcion init 
window.addEventListener('load', init, false);

// Función inicial
function init() {
    const emailInput = document.getElementById('emailTxt');
    const btnEnviar = document.getElementById('btnSend');
    const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // Funcion del boton Enviar
    btnEnviar.onclick = function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario

        const email = emailInput.value;

        // Condicionales anidadas para validar cada campo del form 
        if (email === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo email está vacío.',
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
                text: 'Mensaje enviado.',
            });

            emailjs.sendForm('service_hvqtf93', 'template_02suvcr', '#formSucripcion', 'awvCJNp4dX1zPIJwP')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });

            // Limpia el campo de email después de enviar
            limpiar();
        }
    };

    function limpiar() {
        emailInput.value = '';
    }
}