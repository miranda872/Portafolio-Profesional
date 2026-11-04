// Formulario de contacto
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado! Gracias por contactarme.');
    form.reset();
});
