function compararTresNumeros() {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let num3 = parseFloat(prompt("Introduce el tercer número:"));

    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    
    if (num1 === num2 && num2 === num3) {
        console.log("Los tres números son iguales.");
    } else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
        console.log(`El mayor es: ${mayor}, el menor es: ${menor}.`);
    } else {
        console.log("Algunos números son iguales.");
    }
}
compararTresNumeros();
