function verificarPieza() {
    let longitud = parseFloat(prompt("Introduce la longitud de la varilla (cm):"));
    let diametro = parseFloat(prompt("Introduce el diámetro de la varilla (cm):"));
    let masa = longitud * diametro * 3.5;

    if (longitud > 7.5 && longitud <= 9 && diametro >= 0.5 && diametro <= 1.3 && masa <= 5.8) {
        console.log("La pieza es aceptable.");
    } else {
        console.log("La pieza no es aceptable.");
    }
}
verificarPieza();
