function ordenarNumeros() {
    let nums = [];
    nums.push(parseFloat(prompt("Introduce el primer número:")));
    nums.push(parseFloat(prompt("Introduce el segundo número:")));
    nums.push(parseFloat(prompt("Introduce el tercer número:")));
    
    nums.sort((a, b) => b - a);
    console.log(`Números ordenados: ${nums.join(", ")}`);
}
ordenarNumeros();
