// Seleccionar el elemento
const mensaje = document.getElementById('mensaje');

// Agregar un evento de mouseover al elemento
mensaje.addEventListener('mouseover', function(event) {
  // Mostrar un mensaje cuando el mouse está sobre el elemento
  alert('¡El MOUSE está sobre el mensaje!');
});