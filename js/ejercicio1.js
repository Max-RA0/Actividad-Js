function leerNumero() {
    let num = parseFloat(prompt("Introduce un número:"));
    if (num < 0) {
        console.log(`Número negativo: ${num}, Número positivo: ${-num}`);
    } else {
        console.log(`El número es positivo: ${num}`);
    }
}
leerNumero();
    