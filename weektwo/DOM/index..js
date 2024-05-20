// Obtener el elemento con el id 'container' del DOM y guardarlo en una variable
const container = document.getElementById('container');

// Obtener el botón con el id 'addElement' del DOM y guardarlo en una variable
const addElementBtn = document.getElementById('addElement');

// Obtener el botón con el id 'removeElement' del DOM y guardarlo en una variable
const removeElementBtn = document.getElementById('removeElement');

// Añadir un evento 'click' al botón 'addElementBtn'
addElementBtn.addEventListener('click', () => {
    // Crear un nuevo elemento 'div'
    const newElement = document.createElement('div');
    
    // Establecer el contenido de texto del nuevo 'div'
    newElement.textContent = '✅ NUEVO ELEMENTO ';
    
    // Añadir el nuevo 'div' como hijo del elemento 'container'
    container.appendChild(newElement);
});

// Añadir un evento 'click' al botón 'removeElementBtn'
removeElementBtn.addEventListener('click', () => {
    // Verificar si el 'container' tiene un hijo (último hijo) para eliminar
    if (container.lastChild) {
        // Eliminar el último hijo del 'container'
        container.removeChild(container.lastChild);
    }
});