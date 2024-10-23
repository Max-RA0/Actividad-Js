function calcularNotaFinal() {
    let notas = [];
    notas.push(parseFloat(prompt("Introduce la primera nota:")));
    notas.push(parseFloat(prompt("Introduce la segunda nota:")));
    notas.push(parseFloat(prompt("Introduce la tercera nota:")));
    
    notas.sort((a, b) => b - a);
    let promedio = (notas[0] + notas[1]) / 2;
    console.log(`La nota final es: ${promedio}`);
}
calcularNotaFinal();
