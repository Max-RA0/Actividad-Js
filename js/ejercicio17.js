function verificarDivisibilidad() {
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));

    if (num1 % num2 === 0) {
        console.log(`${num1} es divisible por ${num2}.`);
    } else if (num2 % num1 === 0) {
        console.log(`${num2} es divisible por ${num1}.`);
    } else {
        console.log("Ninguno es divisible por el otro.");
    }
}
verificarDivisibilidad();
