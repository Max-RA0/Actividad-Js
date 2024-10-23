function verificarParidad() {
    let num = parseInt(prompt("Introduce un número:"));
    if (num % 2 === 0) {
        console.log(`${num} es par.`);
    } else {
        console.log(`${num} es impar.`);
    }
}
verificarParidad();
