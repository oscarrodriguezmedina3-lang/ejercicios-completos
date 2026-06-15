function obtenerPrecioMasAlto(listaPrecios) {
    if (listaPrecios.length === 0) return 0; // Maneja listas vacías
    return Math.max(...listaPrecios);
}

// Ejemplo de uso con tus datos:
const precios = [120, 450, 89, 300, 670, 55, 210];
console.log(obtenerPrecioMasAlto(precios)); // Imprime 670
