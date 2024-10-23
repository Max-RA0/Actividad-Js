function verificarSigno() {
    let num = parseFloat(prompt("Introduce un número:"));
    if (num < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es positivo.");
    }
}
verificarSigno();
