function convertirTemperatura() {
    let input = prompt("Introduce un número o carácter:");
    let numero = parseFloat(input);  // Intenta convertir el input en número

    // Verificar si es un número
    if (!isNaN(numero)) {
        // Si es un número entero, convertimos grados Celsius a Kelvin
        if (Number.isInteger(numero)) {
            let kelvin = numero + 273.15;
            console.log(`${numero}°C equivalen a ${kelvin}K.`);
        } 
        // Si es un número flotante, comparamos con 10.5
        else {
            if (numero > 10.5) {
                console.log("El número es mayor a 10.5.");
            } else {
                console.log("El número es menor o igual a 10.5.");
            }
        }
    } 
    // Si no es un número, se asume que es un carácter
    else {
        if (input.length === 1) {
            let codigo = input.charCodeAt(0);

            // Verificamos si es una letra (mayúscula o minúscula)
            if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) {
                console.log(`El carácter ingresado es: '${input}', y es una letra.`);
            }
            // Verificamos si es un dígito numérico
            else if (codigo >= 48 && codigo <= 57) {
                console.log(`El carácter ingresado es: '${input}', y es un número.`);
            }
            // Si no es ni letra ni número, es un símbolo especial
            else {
                console.log(`El carácter ingresado es: '${input}', y es un símbolo especial.`);
            }
        } else {
            console.log("No se ha ingresado un número válido ni un solo carácter.");
        }
    }
}

convertirTemperatura();
