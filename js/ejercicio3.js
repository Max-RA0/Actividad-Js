function aplicarAumento() {
    let sueldo = parseFloat(prompt("Introduce el sueldo:"));
    if (sueldo < 300000) {
        sueldo += sueldo * 0.15;
        console.log(`Sueldo actualizado: ${sueldo}`);
    } else {
        console.log(`El sueldo es: ${sueldo}`);
    }
}
aplicarAumento();
