function calcularComisiones() {
    let ventasMenores = 0;
    let ventasMayores = 0;
    let comisionTotal = 0;

    for (let i = 1; i <= 50; i++) {
        let precio = parseFloat(prompt(`Introduce el precio de la venta ${i}:`));

        if (precio < 2000) {
            ventasMenores++;
            comisionTotal += precio * 0.03;
        } else {
            ventasMayores++;
            comisionTotal += precio * 0.05;
        }
    }

    console.log(`Ventas menores a 2000: ${ventasMenores}, Ventas mayores o iguales a 2000: ${ventasMayores}`);
    console.log(`Comisión total: ${comisionTotal}`);
}
calcularComisiones();
