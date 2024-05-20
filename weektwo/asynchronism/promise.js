// Función para simular la verificación de disponibilidad de un producto
function checkProductAvailability(productId) {
    return new Promise((resolve, reject) => {
        console.log(`Verificando disponibilidad del producto con ID: > ${productId} <`);
        
        // Simular un retraso en la verificación (2 segundos)
        setTimeout(() => {
            const isAvailable = Math.random() > 0.5; // Simular disponibilidad aleatoria
            
            if (isAvailable) {
                resolve({ productId: productId, status: "--> Disponible <--" });
            } else {
                reject(`--> Producto con ID: ${productId} no está disponible <--`);
            }
        }, 2000);
    });
}

// Función para simular el procesamiento de la compra
function processPurchase(product) {
    return new Promise((resolve) => {
        console.log(`Procesando la compra del producto con ID: > ${product.productId} <`);
        
        // Simular un retraso en el procesamiento (1 segundo)
        setTimeout(() => {
            resolve(`Compra del producto con ID: > ${product.productId} completada <`);
        }, 1000);
    });
}

// Uso de Promesas para manejar la verificación y compra del producto
const productId = 12345;

checkProductAvailability(productId)
    .then((product) => {
        console.log(product.status);
        return processPurchase(product);
    })
    .then((confirmation) => {
        console.log(confirmation);
    })
    .catch((error) => {
        console.error(error);
    });