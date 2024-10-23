function calcularNotaSENA() {
    let nota = parseFloat(prompt("Introduce la nota de la materia:"));
    if (nota >= 3.0) {
        console.log("Has aprobado la materia.");
    } else {
        console.log("Has reprobado la materia.");
    }
}
calcularNotaSENA();
