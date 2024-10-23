function asignarSueldos() {
    for (let i = 1; i <= 5; i++) {
        let categoria = parseInt(prompt(`Introduce la categoría del empleado ${i} (1-5):`));
        let sueldo;
        switch (categoria) {
            case 1: sueldo = 1000; break;
            case 2: sueldo = 1500; break;
            case 3: sueldo = 2000; break;
            case 4: sueldo = 2500; break;
            case 5: sueldo = 3000; break;
            default: sueldo = 0; break;
        }
        console.log(`Empleado ${i}, Categoría: ${categoria}, Sueldo: ${sueldo}`);
    }
}
asignarSueldos();
