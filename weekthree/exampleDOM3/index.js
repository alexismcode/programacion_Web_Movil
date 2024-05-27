// Seleccionar el padre y el hijo
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

// Agregar evento al padre
padre.addEventListener('click', function(event) {
  alert('¡ Se hizo clic en el botón PADRE !');
});

// Agregar evento al hijo
hijo.addEventListener('click', function(event) {
  // Evitar la propagación del evento al padre
  event.stopPropagation();
  alert('¡ Se hizo clic en el botón HIJO !');
});