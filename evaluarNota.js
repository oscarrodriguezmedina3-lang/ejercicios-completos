function evaluarNota(nota) {
    if (nota < 0 || nota > 100) {
        return "Nota inválida. Debe ser entre 0 y 100.";
    } else if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 80) {
        return "Muy bueno";
    } else if (nota >= 70) {
        return "Bueno";
    } else if (nota >= 60) {
        return "Suficiente";
    } else {
        return "Insuficiente";
    }
}

console.log(evaluarNota(50))
