
function esMayorDeEdad(edad) {
    return edad >= 18;
}




function crearPerfil(nombre, edad, ciudad) {
    return {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad,
        fechaCreacion: new Date(),
        isMayorDeEdadL:esMayorDeEdad(edad) // Opcional: agrega la fecha de registro
    };
}

// Ejemplo de uso:
const usuario = crearPerfil("Ana", 15, "Madrid");
console.log(usuario);
/* 
Imprime:
{ 
  nombre: 'Ana', 
  edad: 28, 
  ciudad: 'Madrid', 
  fechaCreacion: 2026-06-15T... 
}
*/

function esMayorDeEdad(edad) {
    return edad >= 18;
}

// Ejemplos de uso:
console.log(esMayorDeEdad(20)); // Devuelve true
console.log(esMayorDeEdad(18)); // Devuelve true
console.log(esMayorDeEdad(15)); // Devuelve false
