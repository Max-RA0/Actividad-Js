function evaluarExpresion() {
    let n = parseFloat(prompt("Introduce el valor de n:"));
    if (n !== 0) {
        console.log(`1/${n} = ${1 / n}`);
    } else {
        console.log("No se puede dividir por 0.");
    }
}
evaluarExpresion();
