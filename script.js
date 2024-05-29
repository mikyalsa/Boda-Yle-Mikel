document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    document.getElementById('confirmation-message').innerText = `Gracias por confirmar tu asistencia, ${name}.`;
    
    // Aquí podrías agregar código para enviar estos datos a un servidor.
});
