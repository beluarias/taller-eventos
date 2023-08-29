function mostrarAlerta() {
    alert("¡Hola!");
}

document.addEventListener('DOMContentLoaded', () => {
    const divbutton = document.getElementById('divbutton');

    divbutton.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
});
