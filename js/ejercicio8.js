function numeroMedio() {
    let nums = [];
    nums.push(parseFloat(prompt("Introduce el primer número:")));
    nums.push(parseFloat(prompt("Introduce el segundo número:")));
    nums.push(parseFloat(prompt("Introduce el tercer número:")));
    
    nums.sort((a, b) => a - b);
    console.log(`El número medio es: ${nums[1]}`);
}
numeroMedio();
