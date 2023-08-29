document.addEventListener('DOMContentLoaded', () => {
    const divbutton = document.getElementById('divbutton');
    const button = document.getElementById('button');

    divbutton.addEventListener('click', () => {
        alert('¡Hola! Soy el div');
    });

    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Detiene la propagación del evento del botón
        alert('Hola! Soy el botón');
    });
});

