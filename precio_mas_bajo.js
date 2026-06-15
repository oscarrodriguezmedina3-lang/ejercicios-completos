function obtenerPrecioMasBajo(listaPrecios) {
    if (listaPrecios.length === 0) return 0; // Maneja listas vacías
    return Math.min(...listaPrecios);
}

// Ejemplo de uso con tus datos:
const precios =[20,50,70,100];
console.log(obtenerPrecioMasBajo(precios)); // Imprime 55


