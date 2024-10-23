function verificarCalificacion() {
    let calificacion = parseFloat(prompt("Introduce la calificación:"));
    if (calificacion > 3) {
        console.log("Aprobado");
    } else {
        console.log("No aprobado");
    }
}
verificarCalificacion();
