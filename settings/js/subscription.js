const numero = "573146621582";
const mensaje = "Hola Viveya!, estoy interesado en suscribirme, ¿Cómo puedo proceder al pago?";
const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('whatsapp-inscripcion');
    const textoOriginal = boton.textContent;

    boton.addEventListener('click', (event) => {
        event.preventDefault();

        Swal.fire({
            title: '¿Deseas inscribirte?',
            text: 'Serás redirigido a WhatsApp para completar la inscripción',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Sí, continuar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                confirmButton: 'custom-swal-confirm',
                cancelButton: 'custom-swal-cancel'
            },
            buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
                // Desactivar el botón para evitar múltiples clics
                boton.textContent = 'Reiniciando...';
                boton.classList.add('disabled');
                boton.style.pointerEvents = 'none';
                window.open(url, '_blank');

                // Reactivar el botón después de 20 segundos
                setTimeout(() => {
                    boton.textContent = textoOriginal;
                    boton.classList.remove('disabled');
                    boton.style.pointerEvents = 'auto';
                }, 20000); // 20000 ms = 20 segundos
            }
        });
    });
});
