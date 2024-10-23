function resolverCuadratica() {
    let a = parseFloat(prompt("Introduce el valor de a:"));
    let b = parseFloat(prompt("Introduce el valor de b:"));
    let c = parseFloat(prompt("Introduce el valor de c:"));

    let discriminante = b ** 2 - 4 * a * c;

    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        console.log(`Las soluciones son: x1 = ${x1}, x2 = ${x2}`);
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        console.log(`La solución es: x = ${x}`);
    } else {
        console.log("No hay soluciones reales.");
    }
}
resolverCuadratica();
