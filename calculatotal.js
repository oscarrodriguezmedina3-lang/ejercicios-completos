function calcularTotal(listaPrecios) {
    let total = 0;
    for (let i = 0; i < listaPrecios.length; i++) {
        total += listaPrecios[i];
    }
    return total;
}

// Ejemplo de uso con tus datos:
const precios = [120, 450, 89, 300, 670, 55, 210];
console.log(calcularTotal(precios)); // Imprime 1894
