// Seleccionar el botón
const boton = document.getElementById('cambiarColor');

// Agregar un evento de clic al botón
boton.addEventListener('click', function(event) {
  // Cambiar el color del botón
  boton.style.backgroundColor = '#809E9A';
  boton.style.borderColor = '#566967';
  boton.textContent = "Has cambiado el color"
});

