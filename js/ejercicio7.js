function verificarPersona() {
    let nombre = prompt("Introduce el nombre:");
    let edad = parseInt(prompt("Introduce la edad:"));
    let sexo = prompt("Introduce el sexo (M/F):");
    let estadoCivil = prompt("Introduce el estado civil (soltero/casado):");

    if ((sexo === 'M' && estadoCivil === 'casado' && edad > 40) || 
        (sexo === 'F' && estadoCivil === 'soltero' && edad < 50)) {
        console.log(`Nombre: ${nombre}`);
    } else {
        console.log("No cumple los requisitos.");
    }
}
verificarPersona();
