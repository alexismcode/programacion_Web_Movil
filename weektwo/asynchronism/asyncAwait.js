// Función para simular la obtención de información meteorológica
function fetchWeather(city) {
    return new Promise((resolve) => {
        console.log(`Obteniendo información meteorológica para: > ${city} <`);
        
        // Simular un retraso en la obtención de datos (2 segundos)
        setTimeout(() => {
            const weatherData = { city: city, temperature: 17, rain: Math.random() > 0.5 }; // Simular aleatoriamente si llueve
            // const weatherData2 = { city: city, temperature: 40, rain: Math.random() > 0.5 }; // Funcionamiento de temperatura alta
            resolve(weatherData);
            // resolve(weatherData2); // Funcionamiento de temperatura alta
        }, 2000);
    });
}

// Función asincrónica para obtener la información meteorológica y decidir si se necesita un paraguas
async function checkUmbrella(city) {
    try {
        const weather = await fetchWeather(city);
        console.log(`Temperatura en ${weather.city}: ${weather.temperature}°C <-`);
        
        if (weather.rain) {
            console.log("Va a llover. Necesitas llevar un paraguas.");
        } else {
            console.log("No va a llover. No necesitas llevar un paraguas.");
        }
    } catch (error) {
        console.error("Error al obtener la información meteorológica:", error);
    }
}

// Llamar a la función asincrónica
checkUmbrella("Quito");
// checkUmbrella("Guayaquil"); // Funcionamiento de temperatura alta