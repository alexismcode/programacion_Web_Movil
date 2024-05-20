// Función para simular una solicitud a una API
function getDataFromAPI(callback) {
    console.log("--> Iniciando solicitud a la API <--");
    
    // Simular un retraso en la obtención de datos (2 segundos)
    setTimeout(function() {
        console.log("--> Datos recibidos de la API <--");
        const data = { userId: 1, username: "Alexis_Sanchez" };
        
        // Llamar al callback con los datos recibidos
        callback(data);
    }, 2000);
}

// Función para procesar los datos recibidos
function processData(data) {
    console.log("Procesando los datos...");
    
    // Simular un procesamiento de datos (1 segundo)
    setTimeout(function() {
        console.log(`> Datos procesados: User ID - ${data.userId}, Username - ${data.username}`);
    }, 1000);
}

// Iniciar la solicitud y procesar los datos usando callbacks
getDataFromAPI(function(data) {
    processData(data);
});